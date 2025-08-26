#!/bin/bash
cd /home/kavia/workspace/code-generation/marketing-mix-model-builder-128684-128693/marketing_model_builder_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

