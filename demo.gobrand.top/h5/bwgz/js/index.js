 $(function(){
$('body')[0].addEventListener('touchmove',function(e){
            e.preventDefault(); 
        })
    var _ispace = false;
Pace.on("hide",function(){
    if (_ispace) return false;
    _ispace = true;
    if($("body").hasClass("index1")){
    	var lis = $(".index_logo li").length;
    	var checkli;
    	var lii = 0;
    	checkli = setInterval(function(){
    		 $(".index_logo li").eq(lii).fadeIn();
             if (lii == lis-20 ) {
                if (!$(".panel8").hasClass("on"))  p1();
                else $(".over_lay").fadeIn(1000);
                   
                
             };
    		 if (lii == lis) {
    		 	clearInterval(checkli);
    		 };
    		 lii++;
    	},200); 
    }else{
        $(".over_lay").addClass("on");
        setTimeout(function(){
                $(".panel1").addClass("on");
        },1000)
    }
})
var checkP1;
 function p1(){
        $("#tg").fadeIn();
    $(".over_lay").fadeIn(1000);
    var ii = 0;
    var oo = 0;
        checkP1 = setInterval(function(){
        if (ii == 1) $(".panel1").addClass("on");
        if (ii == 2 || ii == 4 || ii == 6 || ii == 8) $(".panel1 img").eq(oo++).addClass("ac");
        if (ii == 11) $(".panel1").addClass("ac");
        if (ii == 12) $(".panel1").removeClass("on").find("img").removeClass("ac");
        if (ii == 12) $(".panel2").addClass("on");
        
        if (ii == 14) $(".hd_icon").addClass("on").fadeIn();
        if (ii == 17) clearInterval(checkP1);
        ii++;
    },500)
 }
 var checkP2;
 function p2(){
        $("#tg").fadeIn();
        $(".hd_icon").removeClass("on").hide();
        $(".panel2").addClass("off");
        var ii = 0
            checkP2 = setInterval(function(){
            if (ii == 0) $(".panel2").removeClass("on");
            if (ii == 1) $(".panel3").addClass("on");
            if (ii == 5) $(".panel3").addClass("off");
            if (ii == 7) $(".panel3").removeClass("on");
            if (ii == 7) $(".panel4").addClass("on");
            if (ii == 11) $(".panel4").addClass("off");
            if (ii == 13) $(".panel4").removeClass("on");
            if (ii == 13) $(".panel5").addClass("on");
            if (ii == 17) $(".panel5").addClass("off");
            if (ii == 19) $(".panel5").removeClass("on");
            if (ii == 19) $(".panel6").addClass("on");
            
            if (ii == 20) $(".hd_icon").addClass("on").fadeIn();
            if (ii == 20) clearInterval(checkP2);
            ii++;
        },500)
 }
var checkP3;
 function p3(){
        $("#tg").fadeIn();
        $(".hd_icon").removeClass("on").hide();
        $(".panel6").addClass("off");
        var ii = 0;
        var io = 0;
            checkP3 = setInterval(function(){
            if (ii == 0) $(".panel6").removeClass("on");
            if (ii == 1) $(".panel7").addClass("on");
            if (ii == 2 || ii ==4 || ii == 6 || ii == 8) $(".panel7 .icon_a_i li").eq(io++).addClass("on");
            if (ii == 12) $(".hd_icon").addClass("on").fadeIn();
            if (ii == 12) clearInterval(checkP3);
            ii++;
        },500)
 }
 var checkP4;
 function p4(){
        $("#tg").fadeOut();
        $(".hd_icon").removeClass("on").hide();
        $(".panel7").addClass("off");
        var ii = 0;
            checkP4 = setInterval(function(){
            if (ii == 0) $(".panel7").removeClass("on").find("li").removeClass("on");
            if (ii == 1) $(".panel8").addClass("on");
            if (ii == 8) $(".hd_icon").addClass("on").fadeIn();
            if (ii == 12) clearInterval(checkP4);
            ii++;
        },500)
 }
 function p5(){

 }
// 第二版
$(".index1 .panel2").on("swipeUp",function(){

    if($(".hd_icon").hasClass("on")){
        p2()
    }
})
$(".index1 .panel2").on("swipeDown",function(){
    if($(".hd_icon").hasClass("on")){
        $(".panel1").removeClass("ac")
        $(".panel2").removeClass("on")
        $(".panel1 img").removeClass("ac");
        p1();
    }
})

$(".index1 .panel6").on("swipeUp",function(){
    if($(".hd_icon").hasClass("on")){
        p3();
    }
})
$(".index1 .panel6").on("swipeDown",function(){
    if($(".hd_icon").hasClass("on")){
        $(".panel1").removeClass("ac");
        $(".panel6").removeClass("on");
        $(".panel1 img").removeClass("ac");
        $(".all").removeClass("off");
        p1();
    }
})
$(".index1 .panel7").on("swipeUp",function(){
    if($(".hd_icon").hasClass("on")){
        p4();
    }
})

$(".index1 .panel7").on("swipeDown",function(){
    if($(".hd_icon").hasClass("on")){
        $(".panel7").removeClass("on").find("li").removeClass("on");
        $(".all").removeClass("off");
        p2();
    }
})

$("#tg").on("click",function(){
    clearInterval(checkP1)
    clearInterval(checkP2)
    clearInterval(checkP3)
    clearInterval(checkP4)
    $(".all").removeClass("off");
    $(".all").removeClass("on");
    $(".index1 .panel8").addClass("on");
    $("#tg").fadeOut();
    setTimeout(function(){
        $(".hd_icon").fadeIn().addClass("on");
    },8000)
})

$(".index1 .panel8").on("swipeUp",function(){
    if (!$(".hd_icon").hasClass("on")) return false;
    $(".hd_icon").removeClass("on").hide();
    $(".panel8").addClass("off");
    var ii = 0;
    var checkP1 = setInterval(function(){
        if (ii == 0) $(".panel8").removeClass("on");
        if (ii == 1) $(".panel9").fadeIn(1000);
        if (ii == 5) clearInterval(checkP1);
        ii++;
    },500)
})

$(".index1 .panel8").on("swipeDown",function(){
    if($(".hd_icon").hasClass("on")){
        $(".panel8").removeClass("on");
        $(".all").removeClass("off");
        $(".panel7").removeClass("on").find("li").removeClass("on");
        p3();
    }
})

$(".index1 .panel8").on("swipeLeft",function(){
    // console.log("左滑动")
    var _in = $("#foot li.active").index();
    if (_in <4) {
        _in++
        panel8anim(_in);
    };
    if (_in == 4) {
        $(".lr_btns .r_btn").fadeOut();
    }else{
        $(".lr_btns .r_btn").fadeIn();
    };
        $(".lr_btns .l_btn").fadeIn();
})
$(".index1 .panel8").on("swipeRight",function(){
    var _in = $("#foot li.active").index();
    // console.log(_in)
    if (_in != 0) {
        _in--
        panel8anim(_in);
    };
    if (_in == 0) {
        $(".lr_btns .l_btn").fadeOut();
    }else{
        $(".lr_btns .l_btn").fadeIn();
    };
        $(".lr_btns .r_btn").fadeIn();
})

$(".index1 .panel9 ").on("swipeUp",function(){
    $(".all").removeClass("off");
    $(".panel1").removeClass("ac");
    $(".panel9").hide();
        p1();
})

$(".index1 .panel9 ").on("swipeDown",function(){
    $(".all").removeClass("off");
    $(".panel9").hide();
        p4();
})

$(".index1 .panel9 .icon8").on("click",function(){
    $(".all").removeClass("off");
    $(".panel9").hide();
        p4();
})

$("#foot li").on("click",function(){
    var _in = $(this).index();
    // console.log(_in*100)
    panel8anim(_in);
    // $(".item_qiye").animation({
    //     "margin-left":_in*-100%
    // },1000)
})
$(".item_qiye .box1").on("click",function(){
    var _src = $(this).next(".isewm").attr("src");
    // console.log(_src)
    $(".erweima_panel .zhenewm").attr("src",_src);
    $(".erweima_panel ").fadeIn();
})

$(".erweima_panel .mack").on("click",function(){
    $(this).parent(".erweima_panel").css("display","none");
})

function panel8anim(_in){
    $("#foot li").eq(_in).addClass("active").siblings().removeClass("active");
    $(".nav_ics li").eq(_in).addClass("active").siblings().removeClass("active");
    // $(".item_qiye").attr("style","transform:translate3d("+ _in*-20 +"%,0,0)")
    $(".item_qiye").css("left",_in*-100+"%");
}

 // 公司名称
 var companyName = getRequest(window.location.search).company;
 // 电话号码
 var phoneNo;

 // 企业信息
var companyData = "";
 for (var i = 0; i < qyData.length; i++) {
 	if(qyData[i].jc == companyName){
 		companyData = qyData[i];
 	}
 };
 if (!companyData && $(".index2").length) {
 	alert("获取企业信息失败")
 };
 // console.log(companyData)


 $("#start2").click(function(){
 	var phone = $("#panel2Phone").val();
 	// console.log(phone)
 	if (phone.length !=11) {
 		alert("请输入正确手机号码")
 		return false;
 	};
	 $.ajax({  
        url:"http://120.76.188.231/api/resume/view",  
        dataType:'jsonp',  
        data:{phone:phone},  
        jsonp:'callback',  
        success:function(result) {  
        	// console.log(result)
        	$(".panel2").removeClass("on");
        	$(".panel3").addClass("on");
        	if (result.errCode == 0) {
        		$("input[name='phone']").val(result.resultData.phone);
        		$("input[name='userName']").val(result.resultData.userName);
                $("input[name='achievement']").val(result.resultData.achievement);
        		$("#achievement").text(result.resultData.achievement);
        		$("input[name='address']").val(result.resultData.address);
        		$("input[name='email']").val(result.resultData.email);
                $("input[name='graduateTime']").val(result.resultData.graduateTime);
        		$("#graduateTime").text(result.resultData.graduateTime);
        		$("input[name='major']").val(result.resultData.major);
        		$("input[name='school']").val(result.resultData.school);
        		$("input[name='userName']").val(result.resultData.userName);
        		$("select[name='gender']").find("option").each(function(){
        			if ($(this).attr("value") == result.resultData.gender) {
        				$(this).attr("selected","selected")
        			};
        		})
        		$("select[name='education']").find("option").each(function(){
        			if ($(this).attr("value") == result.resultData.education) {
        				$(this).attr("selected","selected")
        			};
        		})
        	}else{
        		$("input[name='phone']").val(phone);
        	};
        },  
        timeout:3000  
    });  
 })	
 $("#submit").click(function(){
 	// console.log("填写")
 	var pdata = {
 		company:companyData.name,
 		phone:parseInt($("input[name='phone']").val()),
 		userName:$("input[name='userName']").val(),
 		gender:$("select[name='gender']").val(),
 		school:$("input[name='school']").val(),
 		major:$("input[name='major']").val(),
 		education:$("select[name='education']").val(),
 		graduateTime:$("input[name='graduateTime']").val(),
 		email:$("input[name='email']").val(),
 		address:$("input[name='address']").val(),
 		achievement:$("input[name='achievement']").val()
 	}
 	if (!pdata.phone || $("input[name='phone']").val().length != 11)
 	{
 		alert("请输入正确手机号码，完整填写资料方可提交。");
 		return false;
 	} 
 	if (!pdata.userName)
 	{
 		alert("请输入您的姓名，完整填写资料方可提交。");
 		return false;
 	} 
 	if (!pdata.school)
 	{
 		alert("请输入你的学校全称，完整填写资料方可提交。");
 		return false;
 	} 
 	if (!pdata.major)
 	{
 		alert("请输入你所学专业，完整填写资料方可提交。");
 		return false;
 	} 
 	if (!pdata.graduateTime)
 	{
 		alert("请选择你的毕业时间，完整填写资料方可提交。");
 		return false;
 	} 
 	if (!pdata.email)
 	{
 		alert("请输入邮箱地址，完整填写资料方可提交。");
 		return false;
 	} 
 	if (!pdata.address)
 	{
 		alert("请输入你的住址，完整填写资料方可提交。");
 		return false;
 	} 
 	if (!pdata.achievement)
 	{
 		alert("请输入你所获得的奖项，完整填写资料方可提交。");
 		return false;
 	} 
 	// console.log(pdata)
	 $.ajax({  
        url:"http://120.76.188.231/api/resume/save",  
        type:"POST",
        dataType:'jsonp',  
        data:pdata,  
        jsonp:'callback',  
        success:function(result) {
        if (result.errCode == 0) {
        	$(".panel3").removeClass("on");
        	$(".panel4").show();
        	phoneNo = pdata.phone;

        	var _html = "";
        	for (var i = 0; i < 6; i++) {
        		_html += '<li>'+companyData.lipin[i]+'</li>'
        	};
        	$(".lipin_list").html(_html);

        	setTimeout(function(){
        		$(".panel4").addClass("on")
        	},100)
        }else{
        	alert(result.errMsg);
        };  
        },  
        timeout:3000  
    });  
 })

 $("#start1").click(function(){
 	$(".panel1").removeClass("on");
 	$(".panel2").show()
 	setTimeout(function(){
 		$(".panel2").addClass("on");
 	},500);
 	return false;
 });

 // 毕业时间选择
 $("#graduateTime").click(function(){
 	$(".select_time_panel").fadeIn();
 })
 $(".select_time_panel .ok_button").click(function(){
 	var nian = $(".select_time_panel select[name='nian']").val();
 	var yue = $(".select_time_panel select[name='yue']").val();
    $("input[name='graduateTime']").val(nian+"-"+yue);
 	$("#graduateTime").text(nian+"-"+yue);
 	$(".select_time_panel").fadeOut();
 })


 // 输入奖项
 $("#achievement").click(function(){
 	$(".enter_achievement").fadeIn();
 })
 $(".enter_achievement .ok_button").click(function(){
 	var _val = $(".enter_achievement textarea").val();
 	if (!_val) {_val = "无"};
    $("input[name='achievement']").val(_val);
 	$("#achievement").text(_val);
 	$(".enter_achievement").fadeOut();
 });

 $("#choujiang").click(function(){
 	// console.log("抽奖吧")
 	$(".zhuanpan").addClass("zhuandong");
 	setTimeout(function(){
 			 $.ajax({  
        url:"http://120.76.188.231/api/resume/getPrize",  
        type:"POST",
        dataType:'jsonp',  
        data:{company:companyData.name,phone:parseInt($("input[name='phone']").val())},  
        jsonp:'callback',  
        success:function(result) {
        	// console.log(result)
        	if (result.errCode != 0) {
        		$(".panel4").hide().removeClass("on");
        		$(".panel5").fadeIn(2000).find(".jieguo").addClass("err");
        	}else{
        		$(".panel4").hide().removeClass("on");
        		$(".panel5").fadeIn(2000).find(".txt").text(result.resultData.prizeName);
        	};
            setTimeout(function(){
                $(".panel5").addClass("on");
            },1000)
        },  
        timeout:3000  
    });  
 	},3000)

 })

var media = document.getElementById("media");
    media.src="./images/music.aac";
    media.load();
    // media.play();
$("#audio_btn").click(function(e){
    e.preventDefault();
    e.stopPropagation();
    if($(this).hasClass("rotate")){
        $(this).removeClass("rotate");
        media.pause();
        media.src="";
    }else{
        $(this).addClass("rotate");
        media.src="./images/music.aac";
        media.load();
        media.play();
    }
})

 })


// 格式化url参数
 function getRequest(url){
   var theRequest = new Object();
   var str = "";
   if (url.substr(0,1) != "?") {
   	str = decodeURI(url.split("?")[1]);
   }else if (url.indexOf("?") != -1) {
      str = decodeURI(url.substr(1));
   }
  strs = str.split("&");
  for(var i = 0; i < strs.length; i ++) {
     theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
  }
   return theRequest;
}

 var qyData = [
   
 	{
 		jc:"afyl",
 		name:"奥飞娱乐",
 		logo:"logo-afyl.jpg",
 		ewm:"ewm-afyl.jpg",
 		lipin:['奥飞纪念品','喜洋洋/贝肯熊','再接再厉','复试直通卡','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"dfwl",
 		name:"东方网力",
 		logo:"logo-dfwl.jpg",
 		ewm:"ewm-dfwl.jpg",
 		lipin:['笔记本套装','再接再厉','面试直通卡','再接再厉','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"dzyl",
 		name:"东芝医疗",
 		logo:"logo-dzyl.jpg",
 		ewm:"ewm-dzyl.jpg",
 		lipin:['核磁扫描体验卡','USB小夜灯','精美手电','笔试直通卡','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"jindie",
 		name:"金蝶集团",
 		logo:"logo-jindie.jpg",
 		ewm:"ewm-jindie.jpg",
 		lipin:['文化印象笔记本','再接再厉','面试直通卡','再接再厉','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"jindong",
 		name:"京东集团",
 		logo:"logo-jindong.jpg",
 		ewm:"ewm-jindong.jpg",
 		lipin:['Joy公仔周边','再接再厉','笔试直通卡','再接再厉','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"libai",
 		name:"立白集团",
 		logo:"logo-libai.jpg",
 		ewm:"ewm-libai.jpg",
 		lipin:['洗衣露+驱蚊液','再接再厉','笔试直通卡','面试直通卡','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"lzlj",
 		name:"泸州老窖",
 		logo:"logo-lzlj.jpg",
 		ewm:"ewm-lzlj.jpg",
 		lipin:['国窖1573','百年窖龄酒','精美U盘','测评直通卡','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"suningkonggu",
 		name:"苏宁控股集团",
 		logo:"logo-suningkonggu.jpg",
 		ewm:"ewm-suningkonggu.jpg",
 		lipin:['绝版小狮子玩偶','《苏宁为什么赢》','PPTV会员卡','面试直通卡/简历诊断卡','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"tjgf",
 		name:"太极股份",
 		logo:"logo-tjgf.jpg",
 		ewm:"ewm-tjgf.jpg",
 		lipin:['精美U盘/卡片包','移动电源/文化衫','运动手环/水杯','《从0到1》','面试直通卡','再接再厉']
 	},
 	{
 		jc:"xinao",
 		name:"新奥集团",
 		logo:"logo-xinao.jpg",
 		ewm:"ewm-xinao.jpg",
 		lipin:['移动电源','精美U盘','DIY心情灯','笔试直通卡','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"ywzg",
 		name:"永旺中国",
 		logo:"logo-ywzg.jpg",
 		ewm:"ewm-ywzg.jpg",
 		lipin:['精美礼品','再接再厉','面试直通卡','再接再厉','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"tcl",
 		name:"TCL",
 		logo:"logo-tcl.jpg",
 		ewm:"ewm-tcl.jpg",
 		lipin:['手印笔记本','手印笔袋收纳袋','面试直通卡','创意U盘/保温杯','LED台灯/小T公仔','再接再厉']
 	},
 	{
 		jc:"vivo",
 		name:"vivo",
 		logo:"logo-vivo.jpg",
 		ewm:"ewm-vivo.jpg",
 		lipin:['移动电源','vivo耳机','收纳包','小V摆件','笔试直通卡','再接再厉']
 	},
 	{
 		jc:"hnd",
 		name:"海能达",
 		logo:"logo-hnd.jpg",
 		ewm:"ewm-hnd.jpg",
 		lipin:['对讲机U盘','保温杯','马克杯','终面直通卡','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"hdjy",
 		name:"华大基因",
 		logo:"logo-hdjy.jpg",
 		ewm:"ewm-hdjy.jpg",
 		lipin:['双肩电脑包','基因钥匙扣','熊猫U盘','面试直通卡','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"kp",
 		name:"酷派",
 		logo:"logo-kp.jpg",
 		ewm:"ewm-kp.jpg",
 		lipin:['精美雨伞','自拍杆/高档耳机','移动电源/精美水杯','初面直通卡','终面直通卡','再接再厉']
 	},
 	{
 		jc:"lbyq",
 		name:"理邦仪器",
 		logo:"logo-lbyq.jpg",
 		ewm:"ewm-lbyq.jpg",
 		lipin:['限量版记事本','笔试直通卡','再接再厉','面试直通卡','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"pingan",
 		name:"平安集团",
 		logo:"logo-pingan.jpg",
 		ewm:"ewm-pingan.jpg",
 		lipin:['创意U盘','定制造型宝珠笔','豪华商务礼品套装','简历诊断','直通笔试卡','再接再厉']
 	},
 	{
 		jc:"pakj",
 		name:"平安科技",
 		logo:"logo-pakj.jpg",
 		ewm:"ewm-pakj.jpg",
 		lipin:['小Y公仔','再接再厉','面试直通卡','再接再厉','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"tcbj",
 		name:"汤臣倍健",
 		logo:"logo-tcbj.jpg",
 		ewm:"ewm-tcbj.jpg",
 		lipin:['维生素c片','再接再厉','初面直通卡','再接再厉','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"zxtx",
 		name:"中兴通讯",
 		logo:"logo-zxtx.jpg",
 		ewm:"ewm-zxtx.jpg",
 		lipin:['顶尖职业规划卡','笔试直通卡','限量版勇士T恤','运动水壶/护眼灯','晴雨伞/桌摆风扇','再接再厉']
 	},
 	{
 		jc:"jes",
 		name:"基恩士",
 		logo:"logo-jes.jpg",
 		ewm:"ewm-jes.jpg",
 		lipin:['精美笔','精美笔记本','面试直通卡','再接再厉','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"dongruan",
 		name:"东软集团",
 		logo:"logo-dongruan.jpg",
 		ewm:"ewm-dongruan.jpg",
 		lipin:['精美U盘','纪念水杯','电脑刷','笔试直通卡','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"tnly",
 		name:"途牛旅游",
 		logo:"logo-tnly.jpg",
 		ewm:"ewm-tnly.jpg",
 		lipin:['牛牛公仔','牛牛抱枕','迷你旅行套件','笔试直通卡','面试直通卡','再接再厉']
 	},
 	{
 		jc:"sddc",
 		name:"时代地产",
 		logo:"logo-sddc.jpg",
 		ewm:"ewm-sddc.jpg",
 		lipin:['笔试直通卡','再接再厉','精美笔记本','再接再厉','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"zldcjd",
 		name:"中粮地产酒店",
 		logo:"logo-zldcjd.jpg",
 		ewm:"ewm-zldcjd.jpg",
 		lipin:['大悦城礼品','大悦城会员卡','简历诊断卡','面试辅导卡','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"yuanyang",
 		name:"远洋集团",
 		logo:"logo-yuanyang.jpg",
 		ewm:"ewm-yuanyang.jpg",
 		lipin:['面试直通卡','再接再厉','简历诊断卡','再接再厉','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"hhjc",
 		name:"海航基础",
 		logo:"logo-hhjc.jpg",
 		ewm:"ewm-hhjc.jpg",
 		lipin:['精美书签','再接再厉','笔/面试直通卡','再接再厉','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"glj",
 		name:"高露洁",
 		logo:"logo-glj.jpg",
 		ewm:"ewm-glj.jpg",
 		lipin:['口腔护理礼包','再接再厉','实习面试直通卡','再接再厉','Uber30元乘车券','再接再厉']
 	},
 	{
 		jc:"hj",
 		name:"沪江",
 		logo:"logo-hj.jpg",
 		ewm:"ewm-hj.jpg",
 		lipin:['学习卡','再接再厉','简历诊断卡','笔试直通卡','Uber30元乘车券','再接再厉']
 	}
 ]