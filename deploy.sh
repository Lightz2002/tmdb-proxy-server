#!/bin/bash

# Navigate to the directory where you want to deploy your application
source /home/n1577109/nodevenv/node-api/14/bin/activate && cd /home/n1577109/node-api

# Pull the latest changes from your GitHub repository
git pull origin main  # or the branch you want to deploy

# Additional deployment steps (e.g., building, restarting services) if necessary
npm install


# Optionally, log the deployment for debugging
echo "Deployment completed: $(date)" >> deployment.log
