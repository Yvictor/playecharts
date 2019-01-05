import os
from flask import Flask, send_from_directory, jsonify, request, session, Response
from tradeplot import PlotGrammer, PlotKind, trading_plot
import json
import pandas as pd

STATIC_FOLDER_PATH = os.environ.get("STATIC_FOLDER_PATH", "static")
DEBUG = os.environ.get("DEBUG", "TRUE").lower() == "true"
HOST = os.environ.get("HOST", "0.0.0.0")
PORT = int(os.environ.get("PORT", 5000))

app = Flask(__name__, static_url_path='', static_folder=STATIC_FOLDER_PATH)
app.app_context().push()

@app.route('/')
def index():
    return send_from_directory(STATIC_FOLDER_PATH, "test.html")

@app.route('/<path:path>')
def static_folder(path):
    pass

@app.route('/<guid>')
def index_redirect(guid):
    return send_from_directory(STATIC_FOLDER_PATH, 'test.html')

@app.route('/option')
def get_option():
    plot_grammer = PlotGrammer(txf=PlotKind())
    df_txf_mink = pd.read_msgpack('txf_mink.msgpack')
    p = trading_plot(df_txf_mink['2000':'2018'], plot_grammer)
    option = json.loads(json.dumps(p._option, default=lambda x: x.config))
    return jsonify(option)


if __name__ == '__main__':
    app.run(debug=DEBUG, host=HOST, port=PORT)