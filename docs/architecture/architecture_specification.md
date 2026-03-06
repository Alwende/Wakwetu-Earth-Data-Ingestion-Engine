# Architecture Specification: Project 11 - Earth-Data Ingestion Engine

## 1. Physical Architecture Overview
The system follows a **Serverless Event-Driven Data Mesh** pattern. It is designed to ingest multi-temporal SpatioTemporal Asset Catalog (STAC) metadata and normalize large-scale geospatial files (NetCDF/GeoTIFF) for web-scale visualization.

## 2. Component Stack (Wakwetu Standard)
| Layer | Technology | Physical Role |
| :--- | :--- | :--- |
| **Ingestion** | AWS Lambda + Python 3.9 | Trigger-based ingestion of Digital Earth Africa STAC APIs. |
| **Orchestration** | AWS Step Functions | Manages the retry logic and workflow for multi-GB file processing. |
| **Transformation** | AWS Glue (Python Shell) | Normalizes raw satellite data into Cloud Optimized GeoTIFF (COG). |
| **Data Lake** | Amazon S3 | Partitioned storage: /raw, /processed, /catalog. |
| **Discovery** | Amazon Athena | SQL-based discovery layer for the React/Terria frontend. |
| **Security** | IAM Workload Identity | Fine-grained cross-account access to geospatial sources. |

## 3. The "Trench" Data Flow
1. **Event:** A scheduled CloudWatch Event triggers the **Ingestion Lambda**.
2. **Elicitation:** The Lambda queries the DE Africa STAC API for new multi-temporal assets.
3. **Processing:** Assets are streamed to the **S3 Raw Bucket**.
4. **Transformation:** S3 PutEvent triggers a **Step Function** that invokes the **COG-Transformer** (using GDAL/Rasterio).
5. **Cataloging:** Final COGs are indexed in **AWS Glue Data Catalog** and made queryable via **Athena**.

## 4. Analytical Design Constraints
* **Latency:** Athena queries must resolve under 2 seconds for Terria visualization.
* **FinOps Guardrail:** S3 Lifecycle policy moves data > 30 days to Glacier Instant Retrieval.
* **Integrity:** Schema enforcement via JSON Schema validation in the pre-ingestion layer.

## 5. Architectural Diagram (Logic)
[Data Source: DE Africa] --> [Lambda: Ingest] --> [S3: Raw] --> [Step Functions: Normalization] --> [S3: COG] --> [Athena/Glue] --> [React Frontend]

---
**Design Verified:** Digital Directorate Master: Dan Alwende  
**Date:** 2026-03-05
