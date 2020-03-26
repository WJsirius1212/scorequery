window.onload = function() {
  //按照老师筛选课程
  //测试是否进入onload alert("233");
  let teacher = document.getElementsByClassName("teacher");
  for (let i = 0; i < teacher.length; i++) {
    teacher[i].onclick = function() {
      //用老师值筛选成绩
      let subjectWithTeacher = document.getElementsByClassName("subject-teacher");
      //获得记录了老师信息的科目节点
      for (let n = 0; n < subjectWithTeacher.length; n++) {
        subjectWithTeacher[n].parentNode.setAttribute("class", "shown");
        /*测试是否正确传值 alert(this.key+'+' subjectWithTeacher[n].getAttribute("teachernum"));*/
        //编号不匹配的隐藏
        if (subjectWithTeacher[n].getAttribute("teachernum") != i) {
          subjectWithTeacher[n].parentNode.setAttribute("class", "hidden");
        }
      }
    };
  }
  //页面改变
  let button = document.getElementsByClassName("button");
  // alert(button.length);
  // for (let i = 0; i < button.length; i++) {
  //     button[i].key = i;
  // }
  for (let i = 0; i < button.length; i++) {
    // alert(i);
    button[i].onclick = function change_page() {
      let index = document.getElementsByClassName("index");
      //全部隐藏
      for (let n = 0; n < index.length; n++) {
        index[n].firstElementChild.setAttribute("class", "hidden");
      }
      //只显示选中的
      index[i].firstElementChild.setAttribute("class", "shown");
    };
  }

  //搜索
  document.getElementById("searchsubject").onclick = function() {
    //获取输入科目
    let search = document.getElementById("search_subject").value;
    //获取全部科目名
    let subject = document.getElementsByClassName("subject");
    for (let m = 0; m < subject.length; m++) {
      //全部隐藏
      subject[m].parentNode.parentNode.setAttribute("class", "shown");
      /*测试是否正确传值 alert(search);*/
      //只显示匹配项
      if (subject[m].getAttribute("subjectname") != search) {
        subject[m].parentNode.parentNode.setAttribute("class", "hidden");
      }
    }
  };
  // alert('welcome4!');
};
