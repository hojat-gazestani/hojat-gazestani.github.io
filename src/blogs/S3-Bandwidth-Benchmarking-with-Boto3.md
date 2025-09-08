---
title: "Measuring S3 Storage Bandwidth with Python and Boto3"
date: "2025-08-25"
summary: "A comprehensive guide to testing upload and download bandwidth to S3-compatible storage using Python and Boto3."
tags: ["aws", "s3", "bandwidth-testing", "python", "boto3"]
category: "cloud-computing"
---

# S3 Bandwidth Testing Script

This script measures upload and download bandwidth to S3-compatible storage using Python's Boto3 library.

## Overview

The script performs two main operations:
1. Uploads a test file to S3 storage while measuring transfer speed
2. Downloads the same file while measuring transfer speed
3. Cleans up by removing the test file from S3



## Prerequisites

Before you begin, ensure you have the following:

1. **Python 3.6+**: Installed on your system
2. **Boto3 Library**: AWS SDK for Python
3. **S3-Compatible Storage**: AWS S3 or other compatible service
4. **Test File**: A file of appropriate size for testing (we'll create this)
5. **Environment Variables**: For secure credential management



## Setting Up Your Environment

### Install Required Packages

Create a `requirements.txt` file with the following dependencies:

```bash
boto3==1.38.37
botocore==1.38.37
jmespath==1.0.1
python-dateutil==2.9.0.post0
s3transfer==0.13.0
six==1.17.0
urllib3==2.4.0
```



Install these packages using pip:

```bash
pip install -r requirements.txt
```



### Configure Environment Variables

For security, we'll use environment variables to store S3 credentials:

```bash
export AWS_ENDPOINT="your_s3_endpoint_url"
export AWS_ACCESS_KEY_ID="your_access_key"
export AWS_SECRET_ACCESS_KEY="your_secret_key"
```

Replace the placeholder values with your actual S3 endpoint URL and credentials.



## Creating a Test File

For accurate bandwidth measurement, we need a test file of significant size. We'll create a 300MB file using the `dd` command:

```bash
dd if=/dev/zero of=300mb.file bs=10M count=30
```

This command creates a 300MB file filled with zeros, which is ideal for testing pure transfer speeds without compression effects.

> **Pro Tip**: For more comprehensive testing, create multiple files of different sizes (10MB, 100MB, 1GB) to test performance across various transfer scenarios.



## The S3 Bandwidth Testing Script

Below is the complete Python script for measuring S3 bandwidth. Save this as `s3_bandwidth_test.py`:

```python
import boto3
import os
import time
import math

# Load config from environment variables
config = {
    'endpoint_url': os.environ['AWS_ENDPOINT'],
    'aws_access_key_id': os.environ['AWS_ACCESS_KEY_ID'],
    'aws_secret_access_key': os.environ['AWS_SECRET_ACCESS_KEY']
}

# Initialize S3 client
s3 = boto3.client('s3', **config)

bucket_name = 'testdata'
test_file = '300mb.file'
test_key = 'bandwidth_test.file'

def format_speed(speed_bps):
    """Converts bits per second to human-readable format (Gbps, Mbps, Kbps, or bps)."""
    if speed_bps >= 1e9:
        return f"{speed_bps/1e9:.2f} Gbps"
    elif speed_bps >= 1e6:
        return f"{speed_bps/1e6:.2f} Mbps"
    elif speed_bps >= 1e3:
        return f"{speed_bps/1e3:.2f} Kbps"
    else:
        return f"{speed_bps:.2f} bps"

def test_upload_speed():
    """
    Measures file size
    Times the upload process
    Calculates and displays upload bandwidth
    """
    file_size = os.path.getsize(test_file)  # in bytes
    start_time = time.time()

    s3.upload_file(test_file, bucket_name, test_key)

    duration = time.time() - start_time
    speed_bps = (file_size * 8) / duration  # bits per second

    print(f"\nUpload Test:")
    print(f"File size: {file_size/1e6:.2f} MB")
    print(f"Time taken: {duration:.2f} seconds")
    print(f"Upload speed: {format_speed(speed_bps)}")
    print(f"            = {speed_bps/1e6:.2f} Mbps")

    return speed_bps

def test_download_speed():
    """
    Retrieves file size from S3 metadata
    Times the download process
    Calculates and displays download bandwidth
    Cleans up downloaded file
    """
    local_path = '/tmp/download_test.file'
    file_size = s3.head_object(Bucket=bucket_name, Key=test_key)['ContentLength']
    start_time = time.time()

    s3.download_file(bucket_name, test_key, local_path)

    duration = time.time() - start_time
    speed_bps = (file_size * 8) / duration  # bits per second

    print(f"\nDownload Test:")
    print(f"File size: {file_size/1e6:.2f} MB")
    print(f"Time taken: {duration:.2f} seconds")
    print(f"Download speed: {format_speed(speed_bps)}")
    print(f"              = {speed_bps/1e6:.2f} Mbps")

    # Clean up
    os.remove(local_path)
    return speed_bps

def clean_up():
    """Removes the test file from S3 storage after testing."""
    try:
        s3.delete_object(Bucket=bucket_name, Key=test_key)
    except:
        pass

if __name__ == "__main__":
    try:
        print("Starting bandwidth test...")

        # Run tests
        upload_speed = test_upload_speed()
        download_speed = test_download_speed()

        print("\nSummary:")
        print(f"Upload bandwidth: {upload_speed/1e6:.2f} Mbps")
        print(f"Download bandwidth: {download_speed/1e6:.2f} Mbps")

    finally:
        clean_up()
```





## Understanding the Code

Let's break down the key components of this script:

### Configuration Loading

The script loads S3 configuration from environment variables, which is a security best practice that prevents credentials from being stored in code.

### Speed Calculation

The `format_speed()` function converts raw bits per second into human-readable units (Gbps, Mbps, Kbps), making the output easier to understand.

### Upload Test

The `test_upload_speed()` function:

1. Measures the test file size
2. Records the start time
3. Uploads the file to S3
4. Calculates the duration and transfer speed
5. Displays the results in a user-friendly format

### Download Test

The `test_download_speed()` function:

1. Retrieves file size from S3 metadata
2. Records the start time
3. Downloads the file from S3
4. Calculates the duration and transfer speed
5. Displays the results
6. Cleans up by removing the downloaded file

### Cleanup

The `clean_up()` function removes the test file from S3 storage after testing is complete, ensuring no artifacts remain.

## Running the Test

To execute the bandwidth test:

1. Ensure the test file (300mb.file) exists in your working directory
2. Set the required environment variables
3. Run the script:

```bash
python3 s3_bandwidth_test.py
```



### Sample Output

```bash
Starting bandwidth test...

Upload Test:
File size: 314.57 MB
Time taken: 8.96 seconds
Upload speed: 281.01 Mbps
            = 281.01 Mbps

Download Test:
File size: 314.57 MB
Time taken: 26.38 seconds
Download speed: 95.39 Mbps
              = 95.39 Mbps

Summary:
Upload bandwidth: 281.01 Mbps
Download bandwidth: 95.39 Mbps
```



## Interpreting Results

Understanding your test results is crucial for making informed decisions:

### Upload vs. Download Speeds

It's normal for upload speeds to be significantly faster than download speeds with S3. This is because AWS optimizes its network architecture for uploads, which are typically less frequent than downloads.

### Expected Performance

- **Excellent**: 500+ Mbps
- **Good**: 100-500 Mbps
- **Acceptable**: 50-100 Mbps
- **Poor**: <50 Mbps

> **Note**: These benchmarks are for general guidance. Your actual performance will depend on many factors including your location, network infrastructure, and S3 region.
