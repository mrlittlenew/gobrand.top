$(function(){
	setTimeout(function(){
		$(".main").eq(0).addClass("in");
		$(".main_panel").eq(0).addClass("active");
		$('.eyeBg b').addClass('on');
		setTimeout(function(){
			$('.loading').hide();
		},400);
	},300);
	$('body')[0].addEventListener('touchmove',function(e){
		e.preventDefault();
	})
	$(".panel").eq(0).addClass("active");
	var move = {
		starX:0,
		starY:0,
		endX:0,
		endY:0,
		ind:0
	}
	$(".child_panel").on("touchstart",function(){
			var ev =event || e;
			var _this = $(this);
			if(ev.targetTouches){
				var touch = ev.targetTouches[0]; 
				move.starY = touch.pageY;
				move.starX = touch.pageX;
			}else{
				move.starY = ev.clientY;
				move.starX = ev.clientX;
			}
	})
	$(".child_panel").on("touchmove",function(){
			var ev =event || e;
			var _this = $(this);
			if(ev.targetTouches){
				var touch = ev.targetTouches[0]; 
				move.endY = touch.pageY;
				move.endX = touch.pageX;
			}else{
				move.endY = ev.clientY;
				move.endX = ev.clientX;
			}
	})
	$(".child_panel").on("touchend",function(){
		var active = $(this);
		var parentBox = active.parents(".main_panel");
		if(move.starY-move.endY>40){
			if(active.next().hasClass("child_panel")){
				move.ind++;
				active.addClass("over").removeClass("active").next().addClass("active");
				parentBox.find(".nav li.active").next().addClass("active").siblings("li").removeClass("active");
			}else if(parentBox.next().hasClass("main_panel")){
				$(".main").removeClass("in");
				setTimeout(function(){
					$(".main").addClass("in");
					parentBox.removeClass("active").next().addClass("active");
					setTimeout(function(){parentBox.next().find('.child_panel').eq(0).addClass('active');},5)
				},600);
			}
		}else if(move.endY-move.starY>40){
			if(active.prev().hasClass("over")){
				move.ind--;
				active.removeClass("active").prev().addClass("active").removeClass("over");
				parentBox.find(".nav li.active").prev().addClass("active").siblings("li").removeClass("active");
			}else if(parentBox.prev().hasClass("main_panel") && !parentBox.prev().hasClass('index_panel')){
				$(".main").removeClass("in");
				setTimeout(function(){
					$(".main").addClass("in");
					parentBox.removeClass("active").prev().addClass("active");
				},600);
			}
		}
			
	})
	
	$('.menu').on('touchstart',function(){
		$('.menu_wrapper').animate({'left' : '-160px'},250);
		setTimeout(function(){
			$('.mask').animate({'opacity' : '0'},200,function(){
				$('.menu').hide();
			})
		},250)
	});

	$('.menu_btn').on('touchstart',function(e){
		$('.menu').show();
		$('.mask').animate({'opacity' : '.6'},200,function(){
			setTimeout(function(){$('.menu_wrapper').animate({'left' : '0'},150);},100)
		})
	});

	$('.menu_wrapper').on('touchstart',function(e){
		e.preventDefault();
		e.stopPropagation();
	});
	
	$('.m_top li').on('touchstart',function(){
		var $main = $('.main');
		var index = $(this).index() + 1;
		
		move.ind = $main.find('.main_panel').eq(index).find('.child_panel').eq(0).find('.main_bg').data('index') * 1;
		$main.removeClass("in");
		

		setTimeout(function(){
			$main.addClass("in");
			$main.find('.main_panel').eq(index).addClass('active').siblings().removeClass('active');
			$main.find('.main_panel').eq(index).find('.nav li').eq(0).addClass('active').siblings().removeClass('active');
			setTimeout(function(){
				$main.find('.main_panel').eq(index).find('.child_panel').eq(0).removeClass('over').addClass('active').siblings().removeClass('active');
			},5);
			setOver(move.ind);
		},600);

		$('.menu').hide();
	})

	$('.m_bottom li').on('touchstart',function(){
		var $main  =  $('.main');
		var bIndex =  $(this).index();
		var lastIndex = $('.m_bottom li').length - 1;

		var index  =  bIndex == 0 || bIndex == lastIndex ? 0 : bIndex * 2;
		var len    =  bIndex == lastIndex ? 5 : $main.find('.main_panel').length - 2;

		move.ind = $main.find('.main_panel').eq(len).find('.child_panel').eq(index).find('.main_bg').data('index') * 1;
		$main.removeClass("in");
		

		var $this = $(this);
		setTimeout(function(){
			$main.addClass("in");
			$main.find('.main_panel').eq(len).addClass('active').siblings().removeClass('active');
			$main.find('.main_panel').eq(len).find('.child_panel').eq(index).removeClass('over').addClass('active').siblings().removeClass('active');
			$main.find('.main_panel').eq(len).find('.nav li').eq(index).addClass('active').siblings().removeClass('active');

			if ($this.index() == lastIndex){
				$main.find('.main_panel').eq(5).removeClass('over').addClass('active').siblings().removeClass('active');
			}

			setOver(move.ind);
		},600);

		$('.menu').hide();
	})

	setInterval(function(){
		if($(".picScl").find("li").eq(0).hasClass("cur"))$(".picScl").find("li").eq(0).removeClass("cur").next().addClass("cur");
		else $(".picScl").find("li").eq(0).addClass("cur").next().removeClass("cur");
	},3050)

	var setOver = function(i){
		$('.child_panel').removeClass('over');
		$('.child_panel').each(function(index,el){
			if(!$(this).parent().hasClass('.index_panel') && ($(this).find('.main_bg').data('index') * 1) < i){
				var $this = $(this);
				setTimeout(function(){
					$this.removeClass('active').addClass('over');
					if($this.next().hasClass('blue_panel')){
						$this.removeClass('over').addClass('active');
					}
				},1000);

				console.log(!$(this).parent().hasClass('active'))
				if(!$(this).parent().hasClass('active')){
					$(this).siblings('.nav').find('li:last-child').addClass('active').siblings().removeClass('active');
				}
			}
		})
	};
});