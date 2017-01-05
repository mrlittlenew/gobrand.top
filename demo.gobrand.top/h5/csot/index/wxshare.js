		
		
		
		var imgUrl = "./images/share.png";
        var lineLink = location.href;
        var desc = '快接旨，朕招你来华星！';
        var shareTitle = '快来接驾，朕要进校了！';
        var appid = 'wxa8840b96983bc5c2';
        
       
		wx.ready(function () {
			wx.onMenuShareTimeline({
				title: shareTitle, // 分享标题
				link: lineLink, // 分享链接
				imgUrl: imgUrl, // 分享图标
				success: function () { 
					// 用户确认分享后执行的回调函数
				},
				cancel: function () { 
					// 用户取消分享后执行的回调函数
				}
			});
			wx.onMenuShareAppMessage({
				title: shareTitle, // 分享标题
				desc: descContent, // 分享描述
				link: lineLink, // 分享链接
				imgUrl: imgUrl, // 分享图标
				type: 'link', // 分享类型,music、video或link，不填默认为link
				dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				success: function () { 
					// 用户确认分享后执行的回调函数
				},
				cancel: function () { 
					// 用户取消分享后执行的回调函数
				}
			});
		});
		//执行播放当前的视频
		function doPlayNowVideo(){
			
			//$('#kangxi').get(0).play();
//			$("#kangxi")[0].play();
//			//一般情况下，这样就可以自动播放了，但是一些奇葩iPhone机不可以 
//			 document.getElementById('kangxi').play(); 
//			//必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效 
//			document.addEventListener("WeixinJSBridgeReady", function () { 
//				document.getElementById('kangxi').play(); 
//			}, false); 
//			$("#kangxi").trigger('click');
//			$("#kangxi").click();
		}
		$(function(){
			
			$("#z1").click(function(){
				$("#z1").css("display","none")
				var a=$("#kangxi")
				a[0].play();
				$("#p1 #kangxi").css("display","block");
				$("#z1").css("height",$(window).height)
			})
		})
		//doPlayNowVideo();