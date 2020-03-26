from flask import Flask, flash
from flask import render_template, request
import score as sc

# 固定数据
# 带老师编号
subjects = [0, 1, 2, 3, 5, 0, 11]
# 不带老师编号
subject = ["语文", "数学", "英语", "物理", "化学", "生物", '武术']
teacher = ['朱一龙', '周杰伦', '吴亦凡', '肖战', '白宇', '王一博', '黄子韬', '李易峰', '胡歌', '张艺兴', '郭德纲', '成龙']
thumbupnum = [999, 888, -1, 666, 555, 444, 333]
subject_length = list(range(len(subject)))
# 手动:老师名字，点赞数量，学科中文名，学科授课老师名

# 非固定数据

# name :[passwd,score]
detail = []
# testdata
# teacher=['朱一龙':['大学语文','生物化学'],'周杰伦':['说唱‘],'肖战':[],'白宇':[],'王一博':[],'黄子韬':[],'李易峰':[],'胡歌':[],'张艺兴':[],'郭德纲':[],'成龙':[]]

# 需要flask pandas
app = Flask(__name__)


@app.route("/")
def home_page():
    return render_template('homepage.html')


@app.route("/sign.html", methods=['GET', 'POST'])
def sign_in():
    Englishname = sc.Englishname()
    print(Englishname)
    subject_length = len(Englishname)
    sl = list(range(subject_length))
    if request.method == 'POST':
        username_s = request.form.get("username")
        passwd_s = request.form.get('passwd')
        users=sc.usernames()
        if username_s in users:
            return 'used username!'
        else:
            # 获取成绩
            data = [username_s, passwd_s]
            for i in Englishname:
                #test print(data)
                data.append(eval(request.form.get(f"{i}")))

            if sc.write(data):
                print(username_s)
                return index(username_s)
            else:
                flash("wrong!Please Try Agian!")

    return render_template('sign.html', subject=subject, sl=sl, Englishname=Englishname)


@app.route("/login.html", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get("username")
        passwd = request.form.get('passwd')
        if sc.checkpasswd(username, passwd):
            print(username)
            return index(username)
        else:
            flash('wrong!')
        flash("Please input username and password!")
    return render_template('login.html')


@app.route("/index.html")
def index(username):
    yaver = sc.yaveragescore(username)
    Englishname = sc.Englishname()
    yourscore = sc.searchscore(username)
    subject_length = list(range(len(Englishname)))
    return render_template('index.html', yaver=yaver, subject=subject, teacher=teacher, subjects=subjects,
                           subject_length=subject_length, Englishname=Englishname, yourscore=yourscore,
                           username=username)


@app.route("/class.html/<username>/<resub>")
def classscore(resub, username):
    Engilishname = sc.Englishname()
    yourscore = sc.searchscore(username)
    whereissubject = Engilishname.index(resub)  # 英文名定位
    teachername = teacher[subjects[whereissubject]]  # 学科位置-老师编号-老师名字
    aver = sc.averagescore(Engilishname[whereissubject])
    score = yourscore[whereissubject]
    thumbnum = thumbupnum[whereissubject]
    c_sub = subject[whereissubject]
    usernum = sc.usernumber()
    return render_template('class.html', subject=resub, c_sub=c_sub, teachername=teachername, aver=aver, yscore=score,
                           thumbnum=thumbnum, usernum=usernum)


if __name__ == '__main__':
    app.run(debug=True)
