import pandas as pd
import numpy as np
import csv

def checkpasswd(username,passwd):
    check=0
    user=dict(np.array(pd.read_csv("score.csv")[['username','passwd']]))
    if username in user:
        if passwd==user[username]:
            check=1

    return check

def searchscore(username):
    usernames = list(np.array(pd.read_csv("score.csv")['username']))
    row=usernames.index(username)
    score=list(np.array(pd.read_csv("score.csv").iloc[row][2:]))
    return score

def averagescore(subject):
    average=round(np.mean(np.array(pd.read_csv("score.csv")[subject])),2)
    return average

def Englishname():
    subjectname=list(np.array(pd.read_csv("score.csv").columns[2:]))
    return subjectname

def write(data):
    csv_file=open('score.csv','a',newline='')
    write=csv.writer(csv_file,dialect='excel')
    write.writerow(data)
    return 1

def usernumber():
    usernumber=len(list(np.array(pd.read_csv("score.csv")['username'])))
    return usernumber

def yaveragescore(username):
    usernames = list(np.array(pd.read_csv("score.csv")['username']))
    row = usernames.index(username)
    average=round(np.mean(np.array(pd.read_csv("score.csv").iloc[row][2:])),2)

    return average