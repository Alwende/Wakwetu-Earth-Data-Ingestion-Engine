# Wakwetu EarthData Technical Flow

1. **Source:** Digital Earth Africa (STAC API)
2. **Ingestor:** Python/Requests Lambda (backend/src/ingestor.py) 
   - *Evidence:* Successful 200 OK from STAC Search.
3. **Storage (Raw):** S3 bucket /raw/metadata/ (JSON pointers).
4. **Trigger:** S3 PutEvent -> AWS Step Functions.
5. **Transformer:** Python/Rasterio Lambda (backend/src/transformer.py)
   - *Evidence:* Generation of .tif with internal overviews.
6. **Storage (Processed):** S3 bucket /processed/ (Cloud Optimized GeoTIFFs).
7. **Discovery:** Glue Crawler -> Amazon Athena (SQL Schema).
8. **Visualization:** TerriaJS React Component (frontend/src/EarthDataMap.js).

## Intelligence Layer (Project 11 Expansion)
- **Engine:** Amazon Bedrock / SageMaker Inference
- **Metadata Output:** JSON (Stored in /raw/intelligence/)
- **SQL Discovery:** Athena JOIN between raw metadata and AI-extracted features.
