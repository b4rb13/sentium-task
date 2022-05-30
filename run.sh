#!/bin/sh
echo "Building Docker image"
docker build . -t test-task

echo "Running Application"
docker run --rm -p 3020:3020 test-task
