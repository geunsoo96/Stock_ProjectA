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

def volume_list(market):
  volumeArr=[] #최종배열
  TableName = [] #조회할 전체 테이블명 담는 배열
  lastClose = [] #제일 최근날짜 close값을 조회하여 객체로 저장
  closeArr = [] #close 값만 배열에 따로 저장
  conn = dbconnect()
  cur = conn.cursor()
  sql ='SELECT TABLE_NAME FROM information_schema.tables WHERE TABLE_NAME LIKE "%'+market+'%m"';
  cur.execute(sql)
  newTable = cur.fetchall()

  index = 0
  for table in newTable:
    sql2 = "SELECT close FROM "+table['TABLE_NAME']+" ORDER BY day DESC LIMIT 1"
    cur.execute(sql2)
    lastClose.append(cur.fetchone())
    TableName.append(table['TABLE_NAME'])
    index = index+1
  
  
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

    new = sorted(volumeArr, key=lambda x: x['close'],reverse=True)
    newArray= new[0:10]

  for item in newArray:
    name = item['name']
    find = name.split('_')
    sql = f'SELECT name FROM `stock586`.`companyList` WHERE code = {find[1]}'
    cur.execute(sql)
    data = cur.fetchone()
    item["company_name"] = data["name"]
    item["code"] = find[1]
    

  conn.close()
  return newArray

def all_company_rank(market,day,column):
  conn = dbconnect()
  cur = conn.cursor()
  sql = f'SELECT TABLE_NAME FROM information_schema.tables WHERE TABLE_NAME LIKE "{market}%" and TABLE_NAME LIKE "%_{day}"'
  cur.execute(sql)
  company = cur.fetchall()
  arr = []
  for name in company:
    sql = f'SELECT {column} FROM {name["TABLE_NAME"]} ORDER BY day DESC limit 1'
    cur.execute(sql)
    data = cur.fetchone()
    if data != None:
      arr.append(data[column])
    else:
      arr.append(0)
  sort = sorted(arr)
  sort.sort(reverse=True)
  rank = sort[0:10]
  answer = []
  name = []
  close = []
  for i in range(len(rank)):
    index = arr.index(rank[i])
    obj = {
      "DB":company[index]["TABLE_NAME"],
      "value":arr[index],
    }
    answer.append(obj)
  
  for item in answer:
    name = item['DB']
    find = name.split('_')
    sql = f'SELECT name FROM `stock586`.`companyList` WHERE code = {find[1]}'
    cur.execute(sql)
    data = cur.fetchone()
    item["name"] = data["name"]
    item["code"] = find[1]
    sql = f'SELECT close FROM {name} ORDER BY day DESC limit 1'
    cur.execute(sql)
    data2 = cur.fetchone()
    item["close"] = data2["close"]
  
  conn.close()
  return answer

all_company_rank('kospi','m','volume')
