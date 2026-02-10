#!/usr/bin/env sh
set -e

# Adding migrations so that Render deployment runs successfully
python littlelemon/manage.py makemigrations --noinput
python littlelemon/manage.py migrate --noinput
# python littlelemon/manage.py collectstatic --noinput
exec python littlelemon/manage.py runserver 0.0.0.0:8000