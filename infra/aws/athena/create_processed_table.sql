-- Wakwetu Standard: EarthData Discovery Schema
CREATE EXTERNAL TABLE IF NOT EXISTS earthdata_processed (
    asset_id STRING,
    collection STRING,
    observation_date TIMESTAMP,
    bbox ARRAY<DOUBLE>,
    s3_path STRING,
    cloud_cover DOUBLE
)
PARTITIONED BY (year STRING, month STRING)
ROW FORMAT SERDE 'org.openx.data.jsonserde.JsonSerDe'
LOCATION 's3://wakwetu-earthdata-lake-prod/processed/'
TBLPROPERTIES ('has_encrypted_data'='false');

-- Trench Signal: Repairing partitions to discover new COG assets
MSCK REPAIR TABLE earthdata_processed;
