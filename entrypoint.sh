#!/usr/bin/env sh
set -e

python littlelemon/manage.py migrate --noinput
# python littlelemon/manage.py collectstatic --noinput
exec python littlelemon/manage.py runserver 0.0.0.0:8000