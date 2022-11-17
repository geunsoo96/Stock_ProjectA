from flask import Flask
from dbconn import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['JSON_AS_ASCII'] = False

@app.route('/')
def home():
  return 'hello world'

@app.route('/code/<code>')
def code(code):
  data = data_by_code(code)
  return data

@app.route('/nameByCode/<code>')
def nameByCode(code):
  data = company_name_byCode(code)
  return data
  
@app.route('/name/<name>')
def name(name):
  data = search_company_name(name)
  return data

@app.route('/allName/')
def allName():
  data = all_company_name()
  return data

@app.route('/randomName')
def randomName():
  data = company_name()
  return data

@app.route('/samsungData')
def samsungData():
  data = samsung_data()
  return data

@app.route('/samsungPrice_m')
def samsungPrice_m():
  data = samsung_price_m()
  return data

@app.route('/samsungPrice_d')
def samsungPrice_d():
  data = samsung_price_d()
  return data

@app.route('/samsungPrice_dayAll')
def samsungPrice_dayAll():
  data = samsung_price_dayAll()
  return data

@app.route("/volume")
def volume():
  data = volume_list()
  return data 

@app.route('/kospi_priceList/<market>')
def kospi_priceList(market):
  data = kospi_company_price(market)
  
@app.route('/rank/<market>/<day>/<column>')
def rank(market,day,column):
  data = all_company_rank(market,day,column)
  return data

if __name__ == '__main__':
  app.run(debug=True)

