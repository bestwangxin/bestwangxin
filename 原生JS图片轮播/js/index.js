/**
 * Created by �Źֵ��ǹ� on 2016/11/4.
 */
window.onload=function(){
    var container = document.getElementById("container");
    var buttun_left = document.getElementById("buttun_left");
    var buttun_right = document.getElementById("buttun_right");
    var dot_list = document.getElementById("dot_list").getElementsByTagName("li");
    var img_list = document.getElementById('img_list');
    var container_width = container.offsetWidth;
    var index =0;
    var times;
    //��ʾ���Ұ�ť

    function show(){
        buttun_left.style.display = "block";
        buttun_right.style.display = "block";
    }
    //��������ann
    function hide(){
        buttun_left.style.display = "none";
        buttun_right.style.display = "none";
    }
    //������
    buttun_left.onclick = function(){
        var style_left = parseInt(img_list.style.left);
        if(index==0){
            img_list.style.left = -container_width*4+"px"
            index=4
        }
        else{
            index--
            img_list.style.left=-container_width*index+"px";

        }
        clear_style()
        dot_list[index].className = ("dot_select");
    }
    //���ҵ��
    buttun_right.onclick = function(){
        var style_left = parseInt(img_list.style.left);
        if(index==4){
            img_list.style.left = 0+"px"
            index=0
        }
        else{
            index++;
            img_list.style.left=-container_width*index+"px";
        }
        clear_style()
        dot_list[index].className = ("dot_select");
    }
    //���СԲ��
    for(i=0;i<dot_list.length;i++){
        dot_list[i].index = i;
        dot_list[i].onclick=function(){
            img_list.style.left=-container_width*this.index+"px";
            clear_style()
            dot_list[this.index].className="dot_select";
        }
    }
    //���СԲ����ʽ
    function clear_style(){
        for(i=0;i<dot_list.length;i++){
            if(dot_list[i].className == "dot_select"){
                dot_list[i].className = ""
            }
        }
    }
    //�ظ�ִ�ж�ʱ��
    function play() {
        times = setInterval(function () {
            buttun_right.onclick();
        }, 2000)
    }
    //�����ʱ��
    function stop() {
        clearInterval(times);
    }
    container.onmouseout = function(){
        play();
        hide();
    }
    container.onmouseover =function(){
        stop();
        show();
    };
    play();
    hide()
}