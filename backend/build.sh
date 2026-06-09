set -o errexit

pip install -r requirements.txt

python mainproject/manage.py collectstatic --no-input
python mainproject/manage.py migrate