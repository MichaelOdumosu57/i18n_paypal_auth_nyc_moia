import sys
if sys.platform == "win32":
    sys.path.append(sys.path[0] + "\\site-packages\\windows")
elif sys.platform =="linux":
    sys.path.append(sys.path[0] + "/site-packages/linux")
from flask import Flask, request, redirect
from pyngrok import ngrok
from pprint import pprint


# dev additions
import os
import requests

# grab access token
paypal = {
    "client_id":os.environ.get("PAYPAL_CLIENT_ID"),
    "client_secret":os.environ.get("PAYPAL_CLIENT_SECRET")
}

session = requests.Session()
session.auth = (paypal["client_id"], paypal["client_secret"])
resp = session.post(
    "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    data="grant_type=client_credentials",
    headers={
        "Accept":"application/json",
        "Accept-Language":"en-US",
        "Content-Type": "application/x-www-form-urlencoded"
    }
)
pprint(resp.json())
#

app = Flask(__name__)
app.config.update(
    # SERVER_NAME="127.0.0.1:3005",
    USE_NGROK=True
)


@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response



if __name__ == "__main__":
    port = 5000
    public_url = ngrok.connect(port).public_url
    print(" * ngrok tunnel \"{}\" -> \"http://127.0.0.1:{}\"".format(public_url, port))
    app.config["BASE_URL"] = public_url
    app.run(debug=True)
