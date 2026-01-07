# Use official Python image as base
FROM python:3.12-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory inside the container
WORKDIR /app

# Copy requirements file and Install dependencies
COPY littlelemon/requirements.txt /app/
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the rest of the project
COPY . /app/

# Collect static files (optional, for production)
# RUN python littlelemon/manage.py collectstatic --noinput

# Expose port (Django default is 8000)
EXPOSE 8001

# Run the application
CMD ["python", "littlelemon/manage.py", "runserver", "0.0.0.0:8001"]
