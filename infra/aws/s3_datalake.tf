resource "aws_s3_bucket" "earth_data_lake" {
  bucket = "wakwetu-earthdata-lake-${var.environment}"
  
  tags = {
    Name        = "Wakwetu EarthData Lake"
    Environment = var.environment
    Project     = "Project-11"
    Architect   = "Dan-Alwende"
  }
}

resource "aws_s3_bucket_public_access_block" "datalake_lockdown" {
  bucket = aws_s3_bucket.earth_data_lake.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Wakwetu Standard: Partitioning the Lake
resource "aws_s3_object" "raw_folder" {
  bucket = aws_s3_bucket.earth_data_lake.id
  key    = "raw/"
}

resource "aws_s3_object" "processed_folder" {
  bucket = aws_s3_bucket.earth_data_lake.id
  key    = "processed/"
}

resource "aws_s3_object" "catalog_folder" {
  bucket = aws_s3_bucket.earth_data_lake.id
  key    = "catalog/"
}
