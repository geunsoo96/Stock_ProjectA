from flask import Flask
from dbconn import data_by_code , search_company_name , company_name, samsung_data, samsung_price_m, samsung_price_d, samsung_price_dayAll
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
  
@app.route('/name/<name>')
def name(name):
  data = search_company_name(name)
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


if __name__ == '__main__':
  app.run(debug=True)