function is_weixn(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		return true;
	} else {
		return false;
	}
}

function is_android(){
	var ua = navigator.userAgent.toLowerCase();	
	if (/android/.test(ua)) {
		return true;
	} else {
		return false;
	}
}  

//alert(is_weixn());
$(function(){
	var winW = $(window).width(),
		winH = $(window).height();
	$("#page").height(winH);
	$("#page").width(winW);

	$("#page-all").height(winH);
	$("#p1").height(winH);
	$(".swiper-slide").height(winH);


	// $("#page-all").height(winH);
	// $("#p5").height(winH);
	
	flag = true;
	function bgMusic(){
		$(".play").fadeIn(2000);
		var audio = $("#bg-music");
			
		$(".play").on("click",function(){
			if(flag){
				audio.get(0).play();
				$(this).removeClass("pause").addClass("play");
			}else{
				audio.get(0).pause();
				$(this).removeClass("play").addClass("pause");
			}
			flag = !flag;
		})
		setTimeout(function(){
			$(".play").trigger("click");
		},1000);
	};



	var animateend="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
	var cdn="http://7xozxc.com1.z0.glb.clouddn.com/miui-0816/";
	var loadwidth = $("#loading .val");
	var iLength = 0;
	var aUrl = [
		cdn+"images/bg-loading-done.jpg",
		cdn+"images/bg-loading.jpg",
		cdn+"images/bt-enter.png",
		cdn+"images/bt-award.png",
		cdn+"images/bt-share.png",
		cdn+"images/share.jpg",
		cdn+"images/shareLayer.png",
		cdn+"images/bg-end.jpg",
		cdn+"images/award-txt.png"

		];
	var imageLoaded=false;
	for(var i=0;i<aUrl.length;i++) {
		var oImg = new Image();
		oImg.onload = function(){
			iLength++;
			loadwidth.text( parseInt(iLength/aUrl.length*100)+"%" );
			if(iLength == aUrl.length){
				imageLoaded=true;
				//bgMusic();

				setTimeout(function(){
					$("#loading .val").animate({fontSize:"0"},100);
					$("#loading .val").animate({
						opacity:"0"}, 500, function(){
						$("#loading").fadeOut(500);
						

						p1step1();
						//doPlayNowVideo();
					});
					
				},1000);
			}
		};
		oImg.onerror = function(){
			iLength++;
			loadwidth.text( parseInt(iLength/aUrl.length*100)+"%" );
		};
		oImg.src=aUrl[i];
	}

	//读取视频
	//var videoLoaded = false;	
	






	function p1step1(){

		// var videoLoading = setInterval(function(){
		// 	loadedPercentage = $("#kangxi")[0].buffered.end(0) / $("#kangxi")[0].duration;
		// // suggestion: don't use this, use what's below
		// 	console.log( loadedPercentage );
		// },500);

		//$("#bt-enter").addClass("stay");
		//$("#bt-enter").addClass("animated bounceInUp");

		$("#kangxi").width(winW);
		$("#kangxi").height(winW/187*304);
		$("#kangxi").controls=false;

		$("#kangxi").one("click",function(){
			//$("#bt-enter").addClass("gone");
			$("#bt-voice").addClass("stay");
			$("#kangxi")[0].play();
			//$("#kangxi")[0].muted=true; 

			
			window._hmt && window._hmt.push(['_trackEvent', 'button', 'click', 'play']);
		});
		
		$("#kangxi").on("ended",function(){
			console.log("video end!!");
			if( is_android() ){
				$("#kangxi").css("display","none");
				//$("#bg-end").css("display","block");
			}

			//$("#bt-award").addClass("stay");
			//$("#bt-share").addClass("stay");
			//$("#award-txt").addClass("stay");
			window.location.href = "http://hr.vivo.com.cn/campus";


		});

		$("#bt-voice").on("click",function(){
			$("#kangxi")[0].muted=true;

			$("#bt-voice").css("display","none");
			$("#bt-voice-none").css("display","block");

			$("#bt-voice").removeClass("stay");
			$("#bt-voice-none").addClass("stay");

		});

		$("#bt-voice-none").on("click",function(){
			$("#kangxi")[0].muted=false;

	        $("#bt-voice-none").css("display","none");
			$("#bt-voice").css("display","block");
			$("#bt-voice-none").removeClass("stay");
			$("#bt-voice").addClass("stay");

		});

		$("#bt-share").on("click",function(){
			$("#shareLayer").fadeIn();
		});
		$("#shareLayer").on("click",function(){
			window._hmt && window._hmt.push(['_trackEvent', 'button', 'click', 'share']);

			
			$("#shareLayer").fadeOut();
		});
		$("#bt-award").on("click",function(){
			$("#bt-award").css("display","none");
			$("#kangxi").css("display","none");
			$("#award-txt").css("display","none");
			$("#bg-erwei").css("display","block");
			$("#bg-erwei").addClass("stay");
			
			
		});

		
	}//p1step1



	// if( is_android() ){
	//     var context;
	//     var video = $("#kangxi")[0];
	// 	var canvas = document.getElementsByTagName("canvas")[0];
	//     function initCanvas(){
	        
	//         context = canvas.getContext("2d");
	//         canvas.style.display="block";
	//         video.addEventListener("timeupdate", paintFrame, false);
	//     }
	//     function paintFrame(){

	//         context.drawImage(video, 0, 0, winW, winH);
	//     }
	//     initCanvas();
	// }
});
