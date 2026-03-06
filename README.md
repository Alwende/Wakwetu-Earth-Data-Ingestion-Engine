# Wakwetu Earth-Data Ingestion Engine 🌍

An enterprise-grade, sovereign geospatial data lakehouse designed for the resilient ingestion and discovery of high-resolution satellite imagery. This engine bridges public research archives (Digital Earth Africa) with private, governed AWS infrastructure.

---

## 🏗️ System Architecture & Workflow

```mermaid
graph TD
    subgraph "External Data Source (Public Cloud)"
        A[Digital Earth Africa STAC API] -->|Metadata Query| B(Sentinel-2 S2_L2A Collection)
        B -->|S3 URI| C[Public S3 Bucket: deafrica-sentinel-2]
    end

    subgraph "Wakwetu Ingestion Engine (Desktop/VENV)"
        D[cloud_ingest.py] -->|Unsigned GetObject| C
        D -->|Managed Multipart Stream| E{Boto3 Transfer Manager}
    end

    subgraph "Sovereign Data Lake (Private AWS Account)"
        E -->|Authenticated PutObject| F[S3: wakwetu-earthdata-lake-prod]
        F -->|Partition| G[/raw/samples/*.tif/]
        F -->|Partition| H[/raw/metadata/*.json/]
    end

    subgraph "Discovery & Intelligence Layer"
        H -->|Schema Mapping| I[AWS Glue Data Catalog]
        I -->|SQL Interface| J[Amazon Athena]
        J -->|Query Results| K[Project Portfolio Screenshot]
    end

    style F fill:#f96,stroke:#333,stroke-width:4px
    style D fill:#69f,stroke:#333,stroke-width:2px
    style K fill:#9f9,stroke:#333,stroke-width:2px
```

---

## 🛠️ Technical Implementation
* **Infrastructure as Code:** Fully provisioned via Terraform, including S3 Datalake partitions and IAM Security Policies.
* **Resilient Ingestion:** Custom Python engine utilizing `boto3` managed multipart transfers to overcome regional latency (Oregon to Virginia).
* **Discovery Layer:** Serverless SQL analytics via Amazon Athena and AWS Glue, enabling rapid metadata elicitation.
* **Geospatial Assets:** Successfully secured **207.9 MiB** of Sentinel-2 L2A COG data for the Nairobi strategic region.

## 📁 Project Structure
* `infra/aws/`: Terraform configurations for the Sovereign Perimeter.
* `backend/src/`: Python ingestion logic and transfer handlers.
* `docs/evidence/`: Physical verification logs and system screenshots.
* `cloud_ingest.py`: The core bridge execution script.

## 📊 Physical Evidence (Verification)
1. **00_terraform_provisioning_success.png**: Proof of automated infrastructure deployment.
2. **01_ingestion_success_physical.png**: S3 verification of the 207.9 MiB binary asset.
3. **02_athena_discovery_success.png**: SQL proof of metadata searchability and discovery.

---

## ⚖️ Governance & Sovereignty
This project implements **Zero-Inference Rule** protocols for data handling and ensures that all environmental assets are held in sovereign, encrypted storage, independent of external provider availability.

---
**Lead Architect / Project Manager:** Dan Alwende
**Organization:** Wakwetu Earth-Data Systems
