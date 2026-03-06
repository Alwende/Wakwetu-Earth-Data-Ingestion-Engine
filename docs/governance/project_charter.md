# Project Charter: Wakwetu Earth-Data Ingestion Engine

## 1. Executive Summary
**Project Manager & Lead Architect:** Dan Alwende  
**Objective:** Establish a sovereign geospatial data lakehouse to ingest, secure, and discover high-resolution satellite imagery (Sentinel-2) for strategic regional analysis in Nairobi, Kenya.

## 2. Business Case
To eliminate dependency on external public APIs for real-time analysis by creating a private, high-performance mirrored archive of Earth Observation (EO) data within a governed AWS perimeter.

## 3. Technical Constraints & Success Criteria
* **Ingestion:** Managed 207.9 MiB multipart stream from Oregon (us-west-2) to Virginia (us-east-1).
* **Infrastructure:** 100% Infrastructure-as-Code (Terraform) deployment.
* **Discovery:** SQL-based metadata elicitation via Amazon Athena.
* **DevOps:** Fully automated CI/CD pipeline with GitHub Actions.
