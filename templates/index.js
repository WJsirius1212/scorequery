window.onload = function() {
    //筛选老师
    //测试是否进入onload alert("nmsl");
    var teacher = document.getElementsByClassName("teacher");
    for (var i = 0; i < teacher.length; i++) {
        teacher[i].key = i;
        //alert(i);
    }
    for (var i = 0; i < teacher.length; i++) {
        teacher[i].onclick = function() {
            /*确认是否正确传值
            alert(this.key);*/
            //用老师值筛选成绩
            var subject_teacher = document.getElementsByClassName("subject-teacher");
            for (var n = 0; n < subject_teacher.length; n++) {

                subject_teacher[n].parentNode.setAttribute("class", "shown");
                /*测试是否正确传值
                alert(this.key+'+'+subject_teacher[n].getAttribute("teachernum"));*/
                if (subject_teacher[n].getAttribute("teachernum") != this.key) {
                    subject_teacher[n].parentNode.setAttribute("class", "hidden");
                }
            }


        };
    }

    //页面改变
    var button = document.getElementsByClassName("button");
    for (var i = 0; i < button.length; i++) {
        button[i].key = i;
    }
    for (var i = 0; i < button.length; i++) {
        //alert(i);
        button[i].onclick = function change_page() {
            var index = document.getElementsByClassName("index");

            for (var i = 0; i < index.length; i++) {
                index[i].firstElementChild.setAttribute("class", "hidden");
            }
            index[this.key].firstElementChild.setAttribute("class", "shown");
        }
    }

    document.getElementById("searchsubject").onclick = function() {
        var search = document.getElementById("search_subject").value;
        var subject = document.getElementsByClassName("subject");
        for (var m = 0; m < subject.length; m++) {

            subject[m].parentNode.parentNode.setAttribute("class", "shown");
            /*测试是否正确传值
            alert(search);*/
            if (subject[m].getAttribute("subjectname") != search) {
                subject[m].parentNode.parentNode.setAttribute("class", "hidden");
            }
        }
    }



}