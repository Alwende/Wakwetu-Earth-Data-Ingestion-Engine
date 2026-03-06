resource "aws_iam_policy" "ingestion_least_privilege" {
  name        = "Wakwetu-EarthData-Ingestion-Policy"
  description = "Provides restricted write access to the Raw partition of the EarthData Lake"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action   = ["s3:PutObject"]
        Effect   = "Allow"
        Resource = "${aws_s3_bucket.earth_data_lake.arn}/raw/*"
      },
      {
        Action   = ["s3:GetObject", "s3:ListBucket"]
        Effect   = "Allow"
        Resource = [
          "${aws_s3_bucket.earth_data_lake.arn}",
          "${aws_s3_bucket.earth_data_lake.arn}/*"
        ]
      }
    ]
  })
}
