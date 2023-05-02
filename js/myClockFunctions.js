/**
 * Rev: 1.2
 Author: lxsamazing
 Date: 2023.05.02
 */


    //你的支持，就是我最大的动力

    console.log("<<<-------喜欢的话,不妨给个星★星哦------->>>");
    console.log("https://github.com/lxsamazing/flipclock-beautify");


    document.getElementById('fullScreen').style.opacity = 1;

    console.log("欢迎来到flipclock,菜单如下：" + "\n",
    "按键0 :背景图片显示与隐藏" + "\n",
    "按键1 :中外日期显示及格式切换" + "\n",
    "按键2 :时制切换" + "\n",
    "按键3 :秒数显示与隐藏"+ "\n",
    "按键4 :背景图片及其分辨率切换"+ "\n",
    "按键5 :底部工具栏显示与隐藏"+ "\n",
    "按键. :背景图片透明度设置"+ "\n",
    "按键+ :时间显示区域放大"+ "\n",
    "按键- :日期显示区域缩小"+ "\n",
    "按键6 :自定义背景图片"+ "\n",
    "按键7 :增大背景模糊"+ "\n",
    "按键8 :减小背景模糊"+ "\n",
    "按键9 :字体选择"+ "\n",
    "按键/ :时钟样式切换"+ "\n",
    "按键F5 :网页刷新"+ "\n",
    "按键F11 :网页全屏/网页退出全屏");


    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        document.getElementById('flipclock').setAttribute("style","zoom:1.0;");
        document.getElementById('ShowDate').setAttribute("style","zoom:1.0;");
    }


    var clock;
    $(document).ready(function() {
        clock = $('.clock').FlipClock({
            clockFace: 'TwentyFourHourClock',
            showSeconds: false
        });
    });
    var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var week = ['Sun', 'Mon', 'Tues', 'wed', 'Thur', 'Fri', 'Sat'];
    var d = new Date();


    var qrcode = new QRCode("qrcode", {

        text: "http://lxsamazing.github.io/flipclock-beautify",
        width: 110,
        height: 110,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });


    var flagA = 0;
    var flagB = 0;
    var flagC = 0;
    var flagD = 0;
    var flagE = 0;
    var flagF = 0;
    var blurRatio = 2;

    document.addEventListener('keydown', function(e) {
        //按键1
        if (e.key == '1') {
        if (flagA == 0) {
        // $("#ShowDate").html("");
        document.getElementById('ShowDate').style.display = "block";
        document.getElementById('ShowDate').innerHTML =  month[d.getMonth()] + "   " + d.getDate() +', ' + d.getFullYear() +'  ' + week[d.getDay()]
        // document.getElementById('ShowDate').innerHTML = d.getFullYear() + "-" + month[d.getMonth()] + "-" + d.getDate() + ', ' + week[d.getDay()];
        flagA = 1;
    } else if (flagA == 1) {
        document.getElementById('ShowDate').innerHTML = d.getFullYear() + "年" +(d.getMonth() + 1) + "月" + d.getDate() + "日" + ' 星期'+'日一二三四五六'.charAt(new Date().getDay());
        flagA = 2;
    } else {
        document.getElementById('ShowDate').style.display = "none";
        flagA = 0;
    }
    }
        //按键2
        if (e.key == '2') {
        if (flagB == 0) {
        clock = $('.clock').FlipClock({
        clockFace: 'TwelveHourClock',
        showSeconds: false
    })
        flagB = 1;
    } else {
        clock = $('.clock').FlipClock({
        clockFace: 'TwentyFourHourClock',
        showSeconds: false
    })
        flagB = 0;
    }
    }
        //按键3
        if (e.key == '3') {
        if (flagC == 0) {
        clock = $('.clock').FlipClock({
        clockFace: 'TwentyFourHourClock',
        showSeconds: true
    })
        flagC = 1;
    } else {
        clock = $('.clock').FlipClock({
        clockFace: 'TwentyFourHourClock',
        showSeconds: false
    })
        flagC = 0;
    }
    }
        //按键0
        if (e.key == '0') {
        if (flagD == 0) {
        document.getElementById('fullScreen').style.display = 'none';
        flagD = 1;
    } else {
        document.getElementById('fullScreen').style.display = 'block';
        flagD = 0;
    }
    }
        //按键.
        if (e.key == '.') {

        document.addEventListener('mousemove',function() {

        if (document.getElementById("swal2-input")) {
        // console.log(document.getElementById("swal2-input").value);
        document.getElementById('fullScreen').style.opacity = document.getElementById("swal2-input").value;
    }
    })

        Swal.fire({
        title: '设置背景透明度',
        icon: 'question',
        input: 'range',
        inputLabel: '默认值为1',
        inputAttributes: {
        min: 0,
        max: 1,
        step: 0.01,
        // autofocus: true,
        value: 1
    },
        inputValue: document.getElementById('fullScreen').style.opacity
    }).then((result) => {

        if (result.isConfirmed) {
        Swal.fire(
        '设置成功!',
        '',
        'success'
        )
    }
    });
    }
        //按键6
        if (e.key == '6') {

        (async () => {

        const { value: file } = await Swal.fire({
        title: '自定义背景图片',
        input: 'file',
        showCancelButton: true,
        confirmButtonText: '下一步',
        cancelButtonText: '取消',
        inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Upload your profile picture'
    }
    })

        if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
        Swal.fire({
        title: '预览',
        imageUrl: e.target.result,
        imageAlt: '这图片,真不错',
        showCancelButton: true,
        confirmButtonText: '确认',
        cancelButtonText: '返回上一步'
    }).then((result) => {
        /!* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        document.getElementById('fullScreen').style.backgroundImage = 'url("http://127.0.0.1:8887/'+ file.name + '")'  ;
        console.log(file.name);
    }
    })
    }
        reader.readAsDataURL(file)
    }
    })()

    }
        //按键7
        if (e.key == '7') {
        blurRatio ++;
        document.getElementById('fullScreen').style.filter = "blur(" + blurRatio + "px)";
    }
        //按键8
        if (e.key == '8') {
        blurRatio --;
        document.getElementById('fullScreen').style.filter = "blur(" + blurRatio + "px)";
        if(blurRatio <= 0) {
        const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
    })

        Toast.fire({
        icon: 'success',
        title: '朋友别按了,已经够清晰了！！！'
    })

        blurRatio = 0;
    }
    }
        //按键9
        if (e.key == '9') {
        (async () => {

        const {value: fruit} = await Swal.fire({
        title: '字体',
        input: 'select',
        inputOptions: {
        '中文字体': {
        楷体: '楷体(默认)',
        黑体: '黑体',
        宋体: '宋体',
        等线: '等线',
        华文宋体: '华文宋体',
        华文行楷: '华文行楷',
        微软雅黑: '微软雅黑',
        华文细黑: '华文细黑',
        华文彩云: '华文彩云',
        华文新魏: '华文新魏',
        华文琥珀: '华文琥珀',
        华文隶书: '华文隶书',
        华文仿宋: '华文仿宋',
        仿宋: '仿宋',
        幼圆: '幼圆'
    },
        '英文字体': {
        Arial: 'Arial',
        "Bradley Hand ITC": 'Bradley Hand ITC',
        Broadway: 'Broadway',
        Calibri: 'Calibri',
        Cambria: 'Cambria',
        Candara: 'Candara',
        Consolas: 'Consolas',
        Forte: 'Forte',
        Georgia: 'Georgia',
        "Ink Free": 'Ink Free',
        "Lucida Calligraphy": 'Lucida Calligraphy',
        "Lucida Handwriting": 'Lucida Handwriting',
        "MV Boli": 'MV Boli',
        "Segoe Print": 'Segoe Print',
        "Segoe Script": 'Segoe Script',
        "Tekton Pro": 'Tekton Pro',
        Verdana: 'Verdana'
    },
    },
        inputPlaceholder: '选择字体',
        showCancelButton: true,
        confirmButtonText: "就选它了",
        cancelButtonText: "我再想想",
        inputValidator: (value) => {
        return new Promise((resolve) => {

        document.getElementById("ShowDate").style.fontFamily = value;
        resolve()
    })
    }
    })
    })()
    }

        function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
    }
        //按键4
        if (e.key == '4') {
        if (flagE == 0) {
        var i = getRandomInt(0, 3);
        switch (i) {
        case 0:
            document.getElementById('fullScreen').style.backgroundImage = 'url("https://picsum.photos/4096/2160")';
            break;
        case 1:
            document.getElementById('fullScreen').style.backgroundImage = 'url("https://api.suyanw.cn/api/scenery")';
            break;
        case 2:
            document.getElementById('fullScreen').style.backgroundImage = 'url("https://unsplash.it/4196/2160")';
            break;
    }

        const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
    })

        Toast.fire({
        icon: 'success',
        title: '当前背景图片分辨率已成功切换至4096x2160 ！'
    })

        flagE = 1;

    } else {
        var j = getRandomInt(0, 3);
        switch (j) {
        case 0:
        // Can be replaced by new awesome sites.
            document.getElementById('fullScreen').style.backgroundImage = 'url("https://picsum.photos/1920/1080")';
            break;
        case 1:
            document.getElementById('fullScreen').style.backgroundImage = 'url("https://api.suyanw.cn/api/scenery")';
            break;
        case 2:
            document.getElementById('fullScreen').style.backgroundImage = 'url("https://unsplash.it/1920/1080")';
            break;
    }

        const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
    })

        Toast.fire({
        icon: 'success',
        title: '当前背景图片分辨率已成功切换至1920x1080 ！'
    })
        flagE = 0;
    }
    }
        //按键5
        if (e.key == '5') {
        if (flagF == 0 && flagBtn3 != 1) {
        document.getElementById('toolBar').style.display = 'none';
        flagF = 1;
        flagBtn3 = 0;
    } else {
        document.getElementById('toolBar').style.display = 'block';
        flagF = 0;
        flagBtn3 = 0;
    }
    }
        //按键+
        if (e.key == '+') {
        if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $("#flipclock").css({zoom: zoomRate + 1});
        $("#ShowDate").css({zoom: zoomRate + 1});
        zoomRate += 0.1;
        // console.log(zoomRate);
    } else {
        $("#flipclock").css({zoom: zoomRate + 3});
        $("#ShowDate").css({zoom: zoomRate + 3});
        zoomRate += 0.1;
        // console.log(zoomRate);
    }
    }

        //按键-
        if (e.key == '-') {
        if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $("#flipclock").css({zoom: zoomRate + 0.8});
        $("#ShowDate").css({zoom: zoomRate + 0.8});
        zoomRate -= 0.1;
        // console.log(zoomRate);
        } else {
            $("#flipclock").css({zoom: zoomRate + 2.8});
            $("#ShowDate").css({zoom: zoomRate + 2.8});
            zoomRate -= 0.1;
            // console.log(zoomRate);
        }
    }

        //按键"/"
        if (e.key == '/') {
            window.location.href = 'https://lxsamazing.github.io/flipclock-beautify/CircleClockBlack.html';
        }

    })

    // 工具栏
    var btn2 = document.getElementById('button2');
    btn2.onclick = function() {
        Swal.fire({
            title: '葵花宝典',

            html: '<table><tr><td width="200px" class="alignRight">按键0 :&nbsp &nbsp &nbsp &nbsp</td><td width="300px">背景图片显示与隐藏;</td></tr>' +
                '<tr><td class="alignRight">按键1 :&nbsp &nbsp &nbsp &nbsp</td><td>中外日期格式切换;</td></tr>' +
                '<tr><td class="alignRight">按键2 :&nbsp &nbsp &nbsp &nbsp</td><td>时制切换;</td></tr>' +
                '<tr><td class="alignRight">按键3 :&nbsp &nbsp &nbsp &nbsp</td><td>秒数显示与隐藏;</td></tr>' +
                '<tr><td class="alignRight">按键4 :&nbsp &nbsp &nbsp &nbsp</td><td>背景图片及其分辨率切换;</td></tr>' +
                '<tr><td class="alignRight">按键5 :&nbsp &nbsp &nbsp &nbsp</td><td>工具栏显示与隐藏;</td></tr>' +
                '<tr><td class="alignRight">双击屏幕 :&nbsp &nbsp &nbsp &nbsp</td><td>工具栏显示与隐藏;</td></tr>' +
                '<tr><td class="alignRight">按键. :&nbsp &nbsp &nbsp &nbsp</td><td>背景图片透明度设置;</td></tr>' +
                '<tr><td class="alignRight">按键+ :&nbsp &nbsp &nbsp &nbsp</td><td>时间显示区域放大;</td></tr>' +
                '<tr><td class="alignRight">按键- :&nbsp &nbsp &nbsp &nbsp</td><td>日期显示区域缩小;</td></tr>' +
                '<tr><td class="alignRight">按键6 :&nbsp &nbsp &nbsp &nbsp</td><td>自定义背景图片;</td></tr>' +
                '<tr><td class="alignRight">按键7 :&nbsp &nbsp &nbsp &nbsp</td><td>增大背景模糊;</td></tr>' +
                '<tr><td class="alignRight">按键8 :&nbsp &nbsp &nbsp &nbsp</td><td>减小背景模糊;</td></tr>' +
                '<tr><td class="alignRight">按键9 :&nbsp &nbsp &nbsp &nbsp</td><td>字体选择;</td></tr>' +
                '<tr><td class="alignRight">按键/ :&nbsp &nbsp &nbsp &nbsp</td><td>时钟样式切换;</td></tr>' +
                '<tr><td class="alignRight">按键F5 :&nbsp &nbsp &nbsp &nbsp</td><td>网页刷新;</td></tr>' +
                '<tr><td class="alignRight">按键F11 :&nbsp &nbsp &nbsp &nbsp</td><td>网页全屏/网页退出全屏;</td></tr>' +
                '</table>',

            confirmButtonText: '我悟了',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    //进入全屏
    function enterFullScreen() {
        var de = document.documentElement;
        if (de.requestFullscreen) {
            de.requestFullscreen();
        } else if (de.mozRequestFullScreen) {
            de.mozRequestFullScreen();
        } else if (de.webkitRequestFullScreen) {
            de.webkitRequestFullScreen();
        }
    }
    //退出全屏
    function exitFullScreen() {
        var de = document;
        if (de.exitFullscreen) {
            de.exitFullscreen();
        } else if (de.mozCancelFullScreen) {
            de.mozCancelFullScreen();
        } else if (de.webkitCancelFullScreen) {
            de.webkitCancelFullScreen();
        }
    }

    var btn5 = document.getElementById('button5');
    var flagBtn5 = 0;
    btn5.onclick = function() {
        if (flagBtn5 == 0) {
            // console.log("1");
            enterFullScreen();
            flagBtn5 = 1;
        } else {
            // console.log("2");
            exitFullScreen();
            flagBtn5 = 0;
        }
    }

    //隐藏工具栏
    var btn3 = document.getElementById('button3');
    var flagBtn3 = 0;
    btn3.onclick = function() {

        flagBody = 1;
        if (flagBtn3 == 0) {
        document.getElementById('toolBar').style.display = 'none';

        const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
    })

        Toast.fire({
        icon: 'success',
        // title: '隐藏成功！您可以通过按键5显示和隐藏工具栏。'
        title: '∑(っ°Д°;)っ卧槽，不见了，快试试>>>双击屏幕或按5'
    })
        // 没必要啊，逻辑有误
        // flagBtn3 = 1;
    }
    }

    //双击屏幕显示或隐藏toolbar
    var flagBody = 0;
    var body = document.getElementsByTagName("body")[0];
    console.log(body);
    body.ondblclick = function() {
        if (flagBody == 0) {
            document.getElementById('toolBar').style.display = 'none';

            //双击屏幕,提示toolbar成功隐藏
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                // title: '隐藏成功！您可以通过双击屏幕或者按键5显示和隐藏工具栏。'
                title: '∑(っ°Д°;)っ卧槽，不见了，快试试>>>双击屏幕或按5'
            })
            flagBody = 1;

        } else if (flagBody == 1) {
            document.getElementById('toolBar').style.display = 'block';
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                // title: '显示成功！'
                title: '(๑*◡*๑)没想到吧, 我又回来啦'
            })
            flagBody = 0;
        }
    }


    //toolbar控制时间显示放大
    var zoomRate = 0.1;
    var btn1 = document.getElementById('inc-button');
    btn1.onclick = function() {
        flagBody = 2;
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $("#flipclock").css({zoom: zoomRate + 1});
        $("#ShowDate").css({zoom: zoomRate + 1});
        zoomRate += 0.1;
    } else {
        $("#flipclock").css({zoom: zoomRate + 3});
        $("#ShowDate").css({zoom: zoomRate + 3});
        zoomRate += 0.1;
    }
    }

    //toolbar控制时间显示缩小
    var btn4 = document.getElementById('dec-button');
    btn4.onclick = function() {
        flagBody = 2;
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $("#flipclock").css({zoom: zoomRate + 0.8});
        $("#ShowDate").css({zoom: zoomRate + 0.8});
        zoomRate -= 0.1;
    } else {
        $("#flipclock").css({zoom: zoomRate + 2.8});
        $("#ShowDate").css({zoom: zoomRate + 2.8});
        zoomRate -= 0.1;
    }
    }

    var arr = ["animate__backInDown","animate__backInLeft","animate__backInDown","animate__backInRight",
    "animate__backInUp", "animate__fadeIn","animate__flipInX","animate__flipInY","animate__lightSpeedInRight",
    "animate__lightSpeedInLeft", "animate__jackInTheBox","animate__rollIn","animate__bounceIn",
    "animate__bounceInDown", "animate__bounceInLeft", "animate__bounceInRight", "animate__bounceInUp",
    "animate__rotateIn","animate__slideInDown","animate__slideInLeft","animate__slideInRight","animate__slideInUp",
    "animate__rotateInDownLeft", "animate__rotateInDownRight", "animate__rotateInUpLeft", "animate__rotateInUpRight",
    "animate__fadeInDown", "animate__fadeInDownBig", "animate__fadeInLeft", "animate__fadeInLeftBig",
    "animate__fadeInRight", "animate__fadeInRightBig", "animate__fadeInUp", "animate__fadeInUpBig",
    "animate__zoomIn", "animate__zoomInLeft", "animate__zoomInDown", "animate__zoomInRight", "animate__zoomInUp"];
    var anntant = arr[Math.floor((Math.random() * arr.length))];
    $("#content").addClass(anntant);
    // console.log(arr.length);

    $('.wechat').popup({
        popup: $('.wechat-qr'),
        on: 'hover',
        position: 'left center'
    });

    var dateString = d.getFullYear() + "年" +(d.getMonth() + 1) + "月" + d.getDate() + "日" + ' 星期'+'日一二三四五六'.charAt(new Date().getDay());
    
    // 获取 API 数据
    fetch('https://api.suyanw.cn/api/yiyan?type=json')
    .then(response => response.json())
    .then(data => {
    // 解析数据
    const quote = data.text;

    var typed = new Typed('#ShowDate', {
        // strings: ["欢迎来到flipclock", "今天也要元气满满哦！", dateString],
        // strings: ["欢迎来到flipclock", "请按下1来设置日期样式"],
          
        strings: ["quote", dateString],
        typeSpeed: 80
    });

    //你的支持，就是我最大的动力
    console.log("<<<-------喜欢的话,不妨给个星★星哦------->>>");
    console.log("https://github.com/lxsamazing/flipclock-beautify");
