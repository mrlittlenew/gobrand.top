/**
 * Created by Administrator on 2016/10/13.
 */


var audio = $('#audio');
var img = new Image();
img.src='images/bg.png';
img.onload=function(){
    audio.get(0).play();
	$('#infoOther').hide();
}
var bol;

var slide = $('.swiper-slide');
slide.eq(0).find('img[animation]').on('webkitAnimationEnd',function(){
    if($(this).index()%2!=0){
        $(this).addClass('slideDown');
    }else{
        $(this).addClass('slideUp');
    }
});
var swiper = new Swiper('.swiper-container',{
    direction : 'vertical',
    onTransitionEnd: function(swiper) {
        slide.eq(swiper.activeIndex).find('img[animation]').on('webkitAnimationEnd',function(){
            if($(this).index()%2!=0){
                $(this).addClass('slideDown');
            }else{
                $(this).addClass('slideUp');
            }
        });
        if (swiper.activeIndex == 1) {
            $('.plane').css('transform','translate3d(0,0,0)')
            bol = true;
            map();
        }
    },
    onSlideChangeStart:function(){
        slide.eq(swiper.previousIndex).find('img[animation]').removeClass('slideDown');
        slide.eq(swiper.previousIndex).find('img[animation]').removeClass('slideUp');
        if(swiper.activeIndex!=1){
            $('.place2').removeClass('zoomIn');
            $('.place3').removeClass('zoomIn');
            $('.place4').removeClass('zoomIn');
            $('.add2').removeClass('addIn');
            $('.add3').removeClass('addIn');
            $('.add4').removeClass('addIn');

            clearInterval(window._interval1);
            window._interval1 = null;
            bol = false;
        }
    }
});

$('#q2_a').click(function(){
	$('#partake').val("Y");
	updatedCheckIcon(true,'q2_a');
	updatedCheckIcon(false,'q2_b')
});
$('#q2_b').click(function(){
	$('#partake').val("N");
	updatedCheckIcon(false,'q2_a');
	updatedCheckIcon(true,'q2_b')
});


$('#q3_a').click(function(){
	$('#car').val("A");
	resetQ3icon();
	updatedCheckIcon(true,'q3_a')
});
$('#q3_b').click(function(){
	$('#car').val("B");
	resetQ3icon();
	updatedCheckIcon(true,'q3_b')
});
$('#q3_c').click(function(){
	$('#car').val("C");
	resetQ3icon();
	updatedCheckIcon(true,'q3_c')
});
$('#q3_d').click(function(){
	$('#car').val("D");
	resetQ3icon();
	updatedCheckIcon(true,'q3_d')
});
$('#q3_e').click(function(){
	$('#car').val("E");
	resetQ3icon();
	updatedCheckIcon(true,'q3_e')
});

$('#q4_a').click(function(){
	var valueEle=$('#infoA');
	var id=$(this).attr('id');
	setQ4icon(valueEle,id)
});
$('#q4_b').click(function(){
	var valueEle=$('#infoB');
	var id=$(this).attr('id');
	setQ4icon(valueEle,id)
});
$('#q4_c').click(function(){
	var valueEle=$('#infoC');
	var id=$(this).attr('id');
	setQ4icon(valueEle,id)
});
$('#q4_d').click(function(){
	var valueEle=$('#infoD');
	var id=$(this).attr('id');
	setQ4icon(valueEle,id)
});
$('#q4_e').click(function(){
	var valueEle=$('#infoE');
	var id=$(this).attr('id');
	setQ4icon(valueEle,id)
});
$('#q4_f').click(function(){
	var valueEle=$('#infoF');
	var id=$(this).attr('id');
	setQ4icon(valueEle,id)
	var checkVal =valueEle.val();
	if(checkVal=='Y'){
		$('#infoOther').click();
		$('#infoOther').show();
	}else{
		$('#infoOther').val('');
		$('#infoOther').hide();
	}
});



function updatedCheckIcon(checkStatus,id){
	var iconId=id+"_icon";
	if(checkStatus){
		$('#'+iconId).attr('src','images/checked.png');
	}else{
		$('#'+iconId).attr('src','images/unchecked.png');
	}
}

function resetQ3icon(){
	updatedCheckIcon(false,'q3_a');
	updatedCheckIcon(false,'q3_b');
	updatedCheckIcon(false,'q3_c');
	updatedCheckIcon(false,'q3_d');
	updatedCheckIcon(false,'q3_e');
}

function setQ4icon(valueEle,id){
	var checkVal =valueEle.val();
	if(checkVal=='Y'){
		valueEle.val('N');
		updatedCheckIcon(false,id)
	}else{
		valueEle.val('Y');
		updatedCheckIcon(true,id)
	}
}

var flag=false;
var pending=false;
$('#submitBtn').click(function(){
	if(pending){
		//alert(' 正在提交中,不需要重复点击！');
		return;
	}
	var name=$('#name').val();
	var school=$('#school').val();
	var major=$('#major').val();
	var qualifications=$('#qualifications').val();
	var phone=$('#phone').val();
	var partake=$('#partake').val();
	var car=$('#car').val();
	var infoA=$('#infoA').val();
	var infoB=$('#infoB').val();
	var infoC=$('#infoC').val();
	var infoD=$('#infoD').val();
	var infoE=$('#infoE').val();
	var infoF=$('#infoF').val();
	var infoOther=$('#infoOther').val();
	if(isEmpty(name)){
		alert('请填写名字！');
		return;
	}
	if(isEmpty(school)){
		alert('请填写学校！');
		return;
	}
	if(isEmpty(major)){
		alert('请填写专业！');
		return;
	}
	
	if(isEmpty(qualifications)){
		alert('请填写学历！');
		return;
	}
	
	if(isEmpty(phone)){
		alert('请填写联系电话！');
		return;
	}
	
	if(!checkPhone(phone)){
		 
		return;
	}

	if(partake!='Y'&&partake!='N'){
		alert('请选择是否参与活动！');
		return;
	}
	if(car!='A'&&car!='B'&&car!='C'&&car!='D'&&car!='E'){
		alert('请选择上车地点！');
		return;
	}
	if(infoA!='Y'&&infoB!='Y'&&infoC!='Y'&&infoD!='Y'&&infoE!='Y'&&infoF!='Y'){
		alert('请选择希望了解的信息！');
		return;
	}
	if(infoF=='Y'&&isEmpty(infoOther)){
		alert('请填写希望了解的其他信息！');
		return;
	}
	
	var data={
		'name':name,
		'school':school,
		'major':major,
		'qualifications':qualifications,
		'phone':phone,
		'partake':partake,
		'car':car,
		'infoA':infoA,
		'infoB':infoB,
		'infoC':infoC,
		'infoD':infoD,
		'infoE':infoE,
		'infoF':infoF,
		'infoOther':infoOther};
	if(flag){
		alert('请不要重复提交！');
		return;
	}
	pending=true;
	$.ajax({ 
		url: "insert.php", 
		data: data, 
		type:'POST',
		cache:false,
		success: function(){
			flag=true;
			pending=false;
			alert('提交成功！');
		}
	});
});

function checkPhone(phone){ 
    if(!(/^1[34578]\d{9}$/.test(phone))){ 
		alert("手机号码有误，请重填!"); 
        return false; 
    }else{
		return true; 
	}
}

function isEmpty(value){
	value=$.trim(value);
	return (value === null) || (value === undefined)
                    || ( value === '')
                    || ($.isArray(value) && value.length === 0);
}

$(".p7 input").focus(function(){
  $('.p7 .pic5').hide();
  $('.p7 .pic6').hide();
  $('.p7 .pic7').hide();
  $('.p7 .bg_bottom').hide();
  $('.p7 .row').hide();
});

$(".p7 input").blur(function(){
  $('.p7 .pic5').show();
  $('.p7 .pic6').show();
  $('.p7 .pic7').show();
  $('.p7 .bg_bottom').show();
  $('.p7 .row').show();
});


$(".p8 input").click(function(){
	inputOther();
});
function inputOther(){
	var infoOther=$('#infoOther').val();
   var str=prompt("请填写你希望了解的其他信息",infoOther);
	if(str){
		$('#infoOther').val(str);
	}
};

$("#phone").click(function(){
	inputPhone();
});
function inputPhone(){
   var phone=$('#phone').val();
   var str=prompt("请填写手机号码",phone);
	if(str){
		$('#phone').val(str);
		checkPhone(str);
	}
};




