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
  results = cur.fetchmany(5)
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


def volume_list():
  volumeArr=[]
  TableName = []
  Volumes = []
  VVV = []
  conn = dbconnect()
  cur = conn.cursor()
  sql ='SELECT TABLE_NAME FROM information_schema.tables WHERE TABLE_NAME LIKE "%kospi%m";'
  cur.execute(sql)
  newTable = cur.fetchall()

  index = 0
  for table in newTable:
    sql2 = "SELECT volume FROM "+table['TABLE_NAME']+" ORDER BY volume DESC LIMIT 1"
    cur.execute(sql2)
    Volumes.append(cur.fetchone())
    TableName.append(table['TABLE_NAME'])


    #volumeArr.append(aa)
    #volumeArr[index]["name"] = table['TABLE_NAME']
    # volumeArr.append({'name':table['TABLE_NAME'],'volume':abc})
    # print(volumeArr)
    index = index+1
  conn.close()
  # print(abc)
  
  

  i = 0; 
  while i<len(Volumes):
    if Volumes[i] == None:
      print(i)
      VVV.append(0)
      print(Volumes[i])
    else:
          abc = Volumes[i].values()
          for key in abc:
           VVV.append(key)
    i+=1     

  
  for x in range(len(Volumes)):
    volumeArr.append({'name':TableName[x],'volume': VVV[x]})
      
  # print(VVV)
  # print(volumeArr)
  # print(abc)
  return volumeArr