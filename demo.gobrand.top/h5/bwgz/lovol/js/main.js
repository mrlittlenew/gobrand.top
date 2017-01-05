var layout = {
	nav : function(_h){
		var _this = this;
		/*关闭菜单*/
		$('.menu').on('touchstart',function(){
			$('.menu_wrapper').removeClass('animated')
			setTimeout(function(){
				$('.mask').css({'opacity' : '0'});
				setTimeout(function(){
					$('.menu').hide();
				},200);
			},250)
		});

		/*打开菜单*/
		$('.menu_btn').on('tap',function(e){
			$('.menu').show();
			$('.mask').css({'opacity' : '.6'});
			setTimeout(function(){$('.menu_wrapper').addClass('animated')},200)
		});

		/*链接*/
		$('.menu_wrapper a').on('tap',function(e){
			e.preventDefault();
			e.stopPropagation();
			var i = $(this).data('index');
			_this.page(i, _h);
		})
	},
	rotate : function(obj,time){
		setInterval(function(){
			if(obj.hasClass("cur"))obj.removeClass("cur").next().addClass("cur");
			else obj.addClass("cur").next().removeClass("cur");
		},time)
	},
	shifts:function(obj,time){
		var num = 0
		setInterval(function(){
			if(obj.eq(num).next().length>0){
				num++;
			}else{
				num = 0;

			}
			obj.eq(num).addClass("cur").siblings().removeClass("cur");
		},time)
	},
	music:function(){
		var media = document.getElementById("media");
			media.play();
		$("#audio_btn").click(function(e){
			e.preventDefault();
			e.stopPropagation();
			if($(this).hasClass("rotate")){
				$(this).removeClass("rotate");
				media.pause();
				media.src="";
			}else{
				$(this).addClass("rotate");
				media.src="./music.mp3";
				media.load();
				media.play();
			}
		})
	},
	page : function(i, _h){
		$(".global").css({ "-webkit-transform": "translate3d(0px, -" + _h * i +"px, 0px)" });
		$(".layout").removeClass("in");
        $(".layout .inner").removeClass("animate");
        $(".layout_" + i).addClass("in");
        if(($(".layout").length-i)<5){
        	$(".nav").find("li").eq($(".nav").find("li").length-$(".layout").length+i).addClass("active").siblings().removeClass("active");
        }else if(i<5){
        	$(".nav").find("li").eq(i).addClass("active").siblings().removeClass("active");
        }
		
	},
	swipe : function(_h, _len){
		var _this = this;
		$('.layout').each(function(index,el){
			$(el).on('swipeUp',function(){
				if (index < (_len - 1)){
					_this.page(index + 1, _h);
				}
			});

			$(el).on('swipeDown',function(){
				_this.page(index - 1, _h);
			});
		});
	},
	init : function(){
		var _this =  this,
			_w	  =  $(window).width(),
			_h    =  $(window).height(),
			len	  =  $('.layout').length;

		$('.global').width(_w).height(_h * len).addClass('ease');
		$('.screen').width(_w).height(_h * len);

		$('.layout').width(_w).height(_h);

		setTimeout(function(){$('.loading').hide();},600000)
		
		_this.nav(_h);
		_this.rotate($(".picScl").find("li").eq(0),3050);
		_this.rotate($(".layout_16").find(".main_bg").eq(0),4050);
		_this.shifts($(".layout_8").find(".active_bg"),150);
		_this.swipe(_h,len);
		_this.music();
	}
}
layout.init();

 
window.onorientationchange = function(){
    switch(window.orientation){
        case -90:
        case 90:
        $(".tip_box").show();//横屏
        break;
        case 0:
        case 180:
        $(".tip_box").hide();//竖屏
        break;
    }
}  
