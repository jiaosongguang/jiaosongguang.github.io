
$(function () {
    var now = new Date()
    function time() {
        //获得显示时间的div
        t_div = document.getElementById('showtime');
        var now = new Date()
        //替换div内容 
        t_div.innerHTML = "填表时间" + now.getFullYear()
         + "年" + (now.getMonth() + 1) + "月" + now.getDate()
         + "日" + now.getHours() + "时" + now.getMinutes()
         + "分" + now.getSeconds() + "秒";
        //等待一秒钟后调用time方法，由于settimeout在time方法内，所以可以无限调用
        setTimeout(time, 1000);
    }
    time();
    t_span = document.getElementById('spantime');
    t_span.innerHTML = now.getFullYear()
     + "年" + (now.getMonth() + 1) + "月" + now.getDate()
     + "日";
});

// JavaScript Document