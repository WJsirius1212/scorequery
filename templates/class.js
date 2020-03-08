function back() {
    window.history.go(-1);
}
window.onload = function() {
    var thumbup = document.getElementsByTagName("button");
    for (var i = 0; i < thumbup.length; i++) {
        thumbup[i].key = 0;
    }
    //点赞是0！
    var thumbupsum = document.getElementById("num").innerHTML;
    for (var i = 0; i < thumbup.length; i++) {
        thumbup[i].onclick = function() {
            if (this.id == "up") {
                var down = document.getElementById("down");
                down.setAttribute("class", "thumb");
                if (thumbupsum == document.getElementById("num").innerHTML) {
                    document.getElementById("num").innerHTML++;
                }


            } else {
                var up = document.getElementById("up");
                up.setAttribute("class", "thumb");
                if (thumbupsum == document.getElementById("num").innerHTML) {
                    document.getElementById("num").innerHTML--;
                }

            }
            if (this.key) {
                this.setAttribute("class", "thumb");
                this.key = 0;
                document.getElementById("num").innerHTML = thumbupsum;
            } else {
                this.setAttribute("class", "thumbup");
                this.key = 1;

            }

        }
    }
}