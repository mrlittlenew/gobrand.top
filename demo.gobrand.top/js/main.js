/**
 * Created by Administrator on 2016/10/13.
 */

$(function(){
	init(itemInfoData);
	$('#searchInfo').attr('placeholder',searchInfo);
});

function init(itemInfo){
	copyItem(itemInfo);
	setInfo(itemInfo);
	autoHeight();
}

function copyItem(itemInfo){
	var itemNum=itemInfo.length;
	var item=$('.item:first');
	$("#main").html('');
	$(itemInfo).each(function(index){
		$("#main").append(item.clone(true));
	});
}

function setInfo(itemInfo){
	$('#main .item').each(function(index,element){
		var logoImg=itemInfo[index].logoImg;
		var url=itemInfo[index].url;
		var name=itemInfo[index].name;
		
		$(this).css("backgroundImage","url(./images/"+logoImg+")"); 

		$(this).click(function() {
			window.location.href=url; 
		});
		$(this).find('p').html(name);
	});
}

function autoHeight(){
	var itemWidth=$('#main .item:first').width();
	$('.item').height(itemWidth);
}

$(window).resize(function() {
    autoHeight();
});

$('#searchBtn').click(function() {
	var info=$('#searchInfo').val();
	if(info==''){
		info=searchInfo;
		$('#searchInfo').val(searchInfo);
	}
	if(info==undefined){
		info='';
	}
	
	
	$('#searchInfo').removeAttr('placeholder');
	searchInfo='';
	var searchResult=[];
	$(itemInfoData).each(function(index,element){
		var name=element.name;
		if(name.indexOf(info)>=0){
			searchResult.push(element);
		}
		
	});
	init(searchResult);
});



function log(info){
	console.info(info);
}
