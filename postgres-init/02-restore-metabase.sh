#!/bin/bash
set -e

echo "Attempting to restore Metabase backup from /docker-entrypoint-initdb.d/metabase_backup.sql into database 'metabase'..."

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "metabase" -f /docker-entrypoint-initdb.d/metabase_backup.sql

echo "Metabase backup restoration completed."