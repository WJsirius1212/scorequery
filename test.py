from flask import Flask
from flask import render_template

#带老师编号
subjects=[1,0,2,3,5,0,11]
#不带老师编号
subject=["语文","数学","英语","物理","化学","生物",'武术']
teacher=['朱一龙','周杰伦','吴亦凡','肖战','白宇','王一博','黄子韬','李易峰','胡歌','张艺兴','郭德纲','成龙']
subject_lenth=list(range(len(subject)))


app=Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html',subject=subject,teacher=teacher,subjects=subjects,subject_lenth=subject_lenth)

@app.route("/class.html")
def classscore():
    return render_template('class.html')

if __name__ == '__main__':
    app.run(debug=True)


#teacher=['朱一龙':['大学语文','生物化学'],'周杰伦':['说唱‘],'肖战':[],'白宇':[],'王一博':[],'黄子韬':[],'李易峰':[],'胡歌':[],'张艺兴':[],'郭德纲':[],'成龙':[]]
