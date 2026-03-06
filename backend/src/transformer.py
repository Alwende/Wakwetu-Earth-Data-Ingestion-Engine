import boto3
import rasterio
from rasterio.io import MemoryFile
from rasterio.enums import Resampling

class GeospatialTransformer:
    """Wakwetu Standard: COG Normalization Engine"""
    
    def __init__(self, bucket_name):
        self.s3 = boto3.client('s3')
        self.bucket = bucket_name

    def convert_to_cog(self, input_path, output_key):
        """Transformation: Optimizing raw pixels for web-scale streaming"""
        print(f"Trench Signal: Opening raw asset {input_path}...")
        
        with rasterio.open(input_path) as src:
            profile = src.profile.copy()
            # COG Requirements: Tiled, Overviews, Predictor=2
            profile.update({
                'driver': 'GTiff',
                'interleave': 'pixel',
                'tiled': True,
                'blockxsize': 256,
                'blockysize': 256,
                'compress': 'lzw',
                'predictor': 2
            })

            print(f"Trench Signal: Generating internal overviews for {output_key}...")
            with MemoryFile() as memfile:
                with memfile.open(**profile) as dst:
                    for i in range(1, src.count + 1):
                        dst.write(src.read(i), i)
                    
                    # Create internal overviews (Pyramids) for sub-second rendering
                    overviews = [2, 4, 8, 16]
                    dst.build_overviews(overviews, Resampling.nearest)
                    dst.update_tags(ns='rio_overview', resampling='nearest')
                
                # Persistence: Uploading optimized COG to the /processed partition
                print(f"Trench Signal: Persisting COG to s3://{self.bucket}/processed/{output_key}")
                self.s3.put_object(
                    Bucket=self.bucket,
                    Key=f"processed/{output_key}",
                    Body=memfile.getbuffer()
                )

if __name__ == "__main__":
    transformer = GeospatialTransformer(bucket_name="wakwetu-earthdata-lake-prod")
    print("Geospatial Transformer Engine: Operational.")
