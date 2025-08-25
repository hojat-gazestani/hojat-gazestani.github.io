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



Create a test file

```bash
dd if=/dev/zero of=300mb.file bs=10M count=30
```





## Configuration

The script requires the following environment variables and loads S3 configuration from environment variables for security and flexibility.

```bash
export AWS_ENDPOINT="your_s3_endpoint_url"
export AWS_ACCESS_KEY_ID="your_access_key"
export AWS_SECRET_ACCESS_KEY="your_secret_key"
```



## Code Structure

the `requirements.txt` file:

```tex
boto3==1.38.37
botocore==1.38.37
jmespath==1.0.1
python-dateutil==2.9.0.post0
s3transfer==0.13.0
six==1.17.0
urllib3==2.4.0
```



the bandwith test file:

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





## Usage

1. Ensure the test file (300mb.file5) exists in the working directory
2. Set the required environment variables
3. Run the script: `python test.py`



```sh
python3 test.py
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



## Customization

- Change `test_file` to use a different test file
- Modify `bucket_name` to target a different S3 bucket
- Adjust the test file size based on your bandwidth requirements

## Use Cases

- Benchmarking cloud storage performance
- Network troubleshooting
- Comparing different S3-compatible storage providers
- Monitoring storage performance over time



