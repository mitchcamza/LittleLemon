#!/bin/bash

# Step 1: Clone the Repository
echo "Cloning the repository..."
git clone https://github.com/Meta-Backend-Developer/08-LittleLemon.git
cd 08-LittleLemon || exit

# Step 2: Activate the Existing Virtual Environment
echo "Setting up virtual environment..."
if [ ! -d "lemon" ]; then
    python3 -m venv lemon
fi
source lemon/bin/activate

# Step 3: Install Dependencies
echo "Installing dependencies..."
pip install -r requirements.txt

# Step 4: Apply Database Migrations
echo "Applying database migrations..."
python3 manage.py migrate

# Step 5: Run the Development Server
echo "Starting the development server..."
python3 manage.py runserver
