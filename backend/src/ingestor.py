import json
import boto3
import requests
from datetime import datetime

class EarthDataIngestor:
    """Wakwetu Standard: Geospatial Ingestion Engine for DE Africa"""
    
    def __init__(self, bucket_name):
        self.s3 = boto3.client('s3')
        self.bucket = bucket_name
        self.api_url = "https://explorer.digitalearth.africa/stac/search"

    def fetch_metadata(self, bbox, collection, limit=10):
        """Elicitation: Querying SpatioTemporal Asset Catalog (STAC)"""
        params = {
            "bbox": bbox,
            "collections": [collection],
            "limit": limit
        }
        print(f"Trench Signal: Querying STAC API for {collection}...")
        response = requests.post(self.api_url, json=params)
        return response.json()

    def stage_to_raw(self, data, filename):
        """Persistence: Locking JSON metadata into the Raw partition"""
        key = f"raw/metadata/{filename}.json"
        print(f"Trench Signal: Staging metadata to s3://{self.bucket}/{key}")
        self.s3.put_object(
            Bucket=self.bucket,
            Key=key,
            Body=json.dumps(data),
            ContentType='application/json'
        )

if __name__ == "__main__":
    # Test Payload: Nairobi Bounding Box
    NAIROBI_BBOX = [36.6, -1.5, 37.1, -1.1]
    engine = EarthDataIngestor(bucket_name="wakwetu-earthdata-lake-prod")
    
    metadata = engine.fetch_metadata(bbox=NAIROBI_BBOX, collection="s2_l2a")
    engine.stage_to_raw(metadata, f"sentinel_2_{datetime.now().strftime('%Y%m%d_%H%M%S')}")
