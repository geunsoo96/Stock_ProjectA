import pymysql
import pymysql.cursors
from flask import Flask, jsonify

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
  results = cur.fetchmany(30)
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

def samsung_data():
  conn = dbconnect()
  cur = conn.cursor()
  sql = 'SELECT * FROM companylist WHERE `name` = "삼성전자"'
  cur.execute(sql)
  results = cur.fetchall()
  conn.close()
  return results

def samsung_price_m():
  conn = dbconnect()
  cur = conn.cursor()
  sql = 'SELECT * FROM `stock586`.`kospi_005930_m` WHERE `day`="2022-02-03"'
  cur.execute(sql)
  results = cur.fetchall()
  conn.close()
  return results

def samsung_price_d():
  conn = dbconnect()
  cur = conn.cursor()
  sql = 'SELECT * FROM `stock586`.`kospi_005930_d` WHERE `day`="1988-06-03"'
  cur.execute(sql)
  results = cur.fetchall()
  conn.close()
  return results

def samsung_price_dayAll():
  conn = dbconnect()
  cur = conn.cursor()
  sql = 'SELECT * FROM `stock586`.`kospi_005930_d` ORDER BY day DESC'
  cur.execute(sql)
  results = cur.fetchmany(7)
  conn.close()
  return results

def search_company_name(name):
  conn = dbconnect()
  cur = conn.cursor()
  sql = 'SELECT name,code FROM `stock586`.`companyList` WHERE name LIKE "%'+name+'%"'
  cur.execute(sql)
  results = cur.fetchall()
  conn.close()
  return results


def all_company_name():
  conn = dbconnect()
  cur = conn.cursor()
  sql = 'SELECT name,code FROM `stock586`.`companyList`'
  cur.execute(sql)
  results = cur.fetchall()
  conn.close()
  return results


def company_name_byCode(code):
  conn = dbconnect()
  cur = conn.cursor()
  sql = 'SELECT name,code FROM `stock586`.`companyList` WHERE code LIKE "%'+code+'%"'
  cur.execute(sql)
  results = cur.fetchone()
  conn.close()
  return results


def kospi_company_price(market):
  conn = dbconnect()
  cur = conn.cursor()
  sql = f'SELECT TABLE_NAME FROM information_schema.tables WHERE table_NAME LIKE "%{market}%m"'
  cur.execute(sql)
  results = cur.fetchall()
  for i in results:
    sql = 'SELECT `close` FROM ' +i['TABLE_NAME']+ ' ORDER BY `close` DESC'
    cur.execute(sql)
    results2 = cur.fetchmany(10)
  conn.close()
  return results2


  # sql = 'select code FROM `stock586`.`companyList`'


  'SELECT TABLE_NAME FROM information_schema.tables'

def volume_list():
  volumeArr=[]
  TableName = []
  lastClose = []
  closeArr = []
  conn = dbconnect()
  cur = conn.cursor()
  sql ='SELECT TABLE_NAME FROM information_schema.tables WHERE TABLE_NAME LIKE "%kospi%m";'
  cur.execute(sql)
  newTable = cur.fetchall()

  index = 0
  for table in newTable:
    sql2 = "SELECT close FROM "+table['TABLE_NAME']+" ORDER BY day DESC LIMIT 1"
    cur.execute(sql2)
    lastClose.append(cur.fetchone())
    TableName.append(table['TABLE_NAME'])
    index = index+1
  conn.close()
  
  i = 0; 
  while i<len(lastClose):
    if lastClose[i] == None:
      print(i)
      closeArr.append(0)
      print(lastClose[i])
    else:
          newClose = lastClose[i].values()
          for key in newClose:
            closeArr.append(key)
    i+=1     

  for x in range(len(lastClose)):
    volumeArr.append({'name':TableName[x],'close': closeArr[x]})

  return volumeArr

