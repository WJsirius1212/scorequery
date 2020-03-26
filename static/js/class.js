//返回页面
function back() {
  window.history.go(-1);
}

window.onload = function() {
  let thumbup = document.getElementsByTagName("button");
  for (let i = 0; i < thumbup.length; i++) {
    thumbup[i].key = 0;
  }
  //点赞是0！class=thumbup时是选中状态，class=thumb时是为选中状态
  let thumbupNum = document.getElementById("num").innerHTML;
  //获取点赞总数
  for (let i = 0; i < thumbup.length; i++) {
    thumbup[i].onclick = function() {
      if (this.id == "up") {
        //点赞后格式化踩为为选中状态
        let down = document.getElementById("down");
        down.setAttribute("class", "thumb");
        //增加点赞总人数
        if (thumbupNum == document.getElementById("num").innerHTML) {
          document.getElementById("num").innerHTML++;
        }
      } else {
        //格式化
        let up = document.getElementById("up");
        up.setAttribute("class", "thumb");
        //减少总数
        if (thumbupNum == document.getElementById("num").innerHTML) {
          document.getElementById("num").innerHTML--;
        }
      }
      //更改key值记录是否选中
      if (this.key) {
        this.setAttribute("class", "thumb");
        this.key = 0;
        document.getElementById("num").innerHTML = thumbupNum;
      } else {
        this.setAttribute("class", "thumbup");
        this.key = 1;
      }
    };
  }
};
