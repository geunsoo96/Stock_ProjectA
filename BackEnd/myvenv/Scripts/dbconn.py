import pymysql
import pymysql.cursors

def dbconnect():
  conn = pymysql.connect(host='127.0.0.1',port=3316,user='root',password='stock5861!',db='stock586',charset='utf8', init_command='SET NAMES UTF8',cursorclass=pymysql.cursors.DictCursor)
  return conn

def data_by_code(code):
  conn = dbconnect()
  cur = conn.cursor()
  sql = 'SELECT TABLE_NAME FROM information_schema.tables WHERE TABLE_NAME LIKE "%'+code+'_d"'
  cur.execute(sql)
  company = cur.fetchone()
  sql = 'SELECT * FROM '+company["TABLE_NAME"]+' ORDER BY day DESC'
  cur.execute(sql)
  results = cur.fetchmany(10)
  conn.close()
  return results

def company_name():
  conn = dbconnect()
  cur = conn.cursor()
  sql = 'SELECT name FROM `stock586`.`companyList` WHERE market = "KOSPI" ORDER BY RAND()'
  cur.execute(sql)
  results = cur.fetchone()
  conn.close()
  print(results['name'])
  return results['name']

  

def search_company_name(name):
  conn = dbconnect()
  cur = conn.cursor()
  sql = 'SELECT name,code FROM `stock586`.`companyList` WHERE name LIKE "%'+name+'%"'
  cur.execute(sql)
  results = cur.fetchall()
  conn.close()
  return results