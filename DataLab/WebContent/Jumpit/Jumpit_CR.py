import DBManager as DB
import csv
import pandas as pd
from pandas import DataFrame, Series
import requests
from bs4 import BeautifulSoup
import re
import emoji
    
def rmEmoji_ascii(inputString) :
    return emoji.get_emoji_regexp().sub(u'', inputString)

def Jumpit() :

    url = "https://api.jumpit.co.kr/api/positions?page=1"
    agent_head = {
        "user-agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
        #"accept" : "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
        "accept" : "text/html,application/xhtml+xml,application/xml"
    }

    response = requests.get(url,headers=agent_head)

    soup = BeautifulSoup(response.text, "lxml")

    posi_navi = soup.select('positions')

    #전체 공고갯수
    totalCount = soup.select_one('totalCount').text
    #print(totalCount)

    #positions 의 개수 감싸는 포지션 1 제거
    posi_navi_conut = len(posi_navi) - 1
    #print(posi_navi_conut)

    #토탈페이지개수
    totalpage = int(totalCount) // int(posi_navi_conut) + 2
    #print(totalpage)
    #DBManager 객체 생성
    db = DB.DBManager()

    list = []   

    #companyList 안에 있는 모든 company에서
    
    for pageno in range(1,totalpage):
        url = "https://api.jumpit.co.kr/api/positions?page=" + str(pageno)

        response = requests.get(url,headers=agent_head)

        soup = BeautifulSoup(response.text, "lxml")

        #company는 하나의 positions 태그 안에 들어있다
        #print(companyList)
        #print(url)
        companyList = soup.select('SucResponse > result > positions > positions')
        for company in companyList:
            companyid = company.select_one('id').text
            #print(companyid)
            url = 'https://api.jumpit.co.kr/api/position/' + str(companyid)
            print("="*100)
            print(url)
            print("="*100)
            
            response = requests.get(url,headers=agent_head)
            response.encoding = "utf-8"
            '''
            print("+"*100)
            print(response.text)
            print("+"*100)
            '''                
            soup = BeautifulSoup(response.text, "lxml")
             
            companyRawdata = soup.select('result')
            companyRawdata = rmEmoji_ascii(str(companyRawdata))
            
            com_name = soup.select_one('companyname').text
            datas = { "rec_name" : "Jumpit", "com_name" : com_name, "contents_URL":url, "content_raw" : companyRawdata }
            #print(datas)

            list.append(datas)
            
            db.SetList("recRaw", list)
            
            list=[]


Jumpit()






