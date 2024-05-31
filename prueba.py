import pymysql
import sys
import boto3
import os

ENDPOINT="nota.clcw0amuu9zc.us-west-2.rds.amazonaws.com"
PORT="3306"
USER="admin"
REGION="us-west-2a"
DBNAME="notas"
os.environ['LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN'] = '1'

token = "Maxnireyojhonan123*"

try:
    conn =  pymysql.connect(host=ENDPOINT, user=USER, passwd=token, port=PORT, database=DBNAME, ssl_ca='rds-ca-rsa2048-g1')
    cur = conn.cursor()
    cur.execute("""SELECT now()""")
    query_results = cur.fetchall()
    print(query_results)
except Exception as e:
    print("Database connection failed due to {}".format(e))          