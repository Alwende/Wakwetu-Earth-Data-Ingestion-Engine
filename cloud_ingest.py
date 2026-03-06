import boto3
from botocore import UNSIGNED
from botocore.config import Config

def trigger_ingest():
    # Senior Architect Signal: Set long timeouts for heavy geospatial assets
    config = Config(signature_version=UNSIGNED, read_timeout=600, connect_timeout=600)
    s3_public = boto3.client('s3', config=config, region_name='us-west-2')
    s3_private = boto3.client('s3')
    
    source_bucket = 'deafrica-sentinel-2'
    source_key = 'sentinel-s2-l2a-cogs/37/M/BU/2017/1/S2A_37MBU_20170119_0_L2A/B04.tif'
    dest_bucket = 'wakwetu-earthdata-lake-prod'
    dest_key = 'raw/samples/nairobi_sentinel_b4.tif'
    
    print(f"Wakwetu Signal: Pulling {source_key} from Oregon...")
    try:
        response = s3_public.get_object(Bucket=source_bucket, Key=source_key)
        s3_private.upload_fileobj(response['Body'], dest_bucket, dest_key)
        print("Mission Accomplished: Data Secured in Sovereign Lake.")
    except Exception as e:
        print(f"Trench Error: {e}")

if __name__ == "__main__":
    trigger_ingest()
