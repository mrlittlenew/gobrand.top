  
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
$(function(){
	function startPaly(){
		$("#my-video")[0].play();
		window._hmt && window._hmt.push(['_trackEvent', 'button', 'click', 'play']);
	
		$("#my-video").on("ended",function(){
		if( is_android() ){
			$("#my-video").css("display","none");
		}
		window.location.href = "end.html";
});
	}
	
	$('#bg-begin').click(function(){
		startPaly();
		$(this).fadeOut(1000);
	});
})
