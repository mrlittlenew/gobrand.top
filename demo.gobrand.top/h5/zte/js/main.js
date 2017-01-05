/**
 * Created by Administrator on 2016/10/13.
 */
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?8a7e0d092182800abb2cb8f2f3375f01";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

var audio = $('#audio');
var img = new Image();
img.src='images/p3_pic1.png';
img.onload=function(){
    audio.get(0).play();
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

function map(){
    var index = 0;
    var points = [
        {place:'.place1',add:'.add1',start_x:0,start_y:0,end_x:-33,end_y:-47,crt1_x:-15,crt1_y:-14,crt2_x:-28,crt2_y:-28,speed:0.04},
        {place:'.place2',add:'.add2',start_x:-33,start_y:-47,end_x:-48,end_y:-110,crt1_x:-38,crt1_y:-54,crt2_x:-42,crt2_y:-109,speed:0.04},
        {place:null,add:'null',start_x:-48,start_y:-110,end_x:390,end_y:-70,crt1_x:4,crt1_y:-300,crt2_x:136,crt2_y:-92,speed:0.0107},
        {place:'.place3',add:'.add3',start_x:390,start_y:-63,end_x:560,end_y:-135,crt1_x:442,crt1_y:-50,crt2_x:570,crt2_y:-180,speed:0.014},
        {place:'.place4',add:'.add4',start_x:560,start_y:-135,end_x:525,end_y:-80,crt1_x:604,crt1_y:-79,crt2_x:500,crt2_y:-80,speed:0.02},
    ]
    setTimeout(cubeBezier,3500,points[index].start_x,points[index].start_y,points[index].end_x,points[index].end_y,points[index].crt1_x,points[index].crt1_y,points[index].crt2_x,points[index].crt2_y,planeFly,moveAgain,points[index].speed);
    function moveAgain(){
        if(index != 2 && index!=0){
            setTimeout(function(){
                if(++index<points.length&&bol){
                    cubeBezier(points[index].start_x,points[index].start_y,points[index].end_x,points[index].end_y,points[index].crt1_x,points[index].crt1_y,points[index].crt2_x,points[index].crt2_y,planeFly,moveAgain,points[index].speed)
                    if(points[index].place){
                        $(points[index].place).addClass('zoomIn')
                        $(points[index].add).addClass('addIn')
                    }
                }
            },1000)
        }else{
            if(++index<points.length&&bol){
                cubeBezier(points[index].start_x,points[index].start_y,points[index].end_x,points[index].end_y,points[index].crt1_x,points[index].crt1_y,points[index].crt2_x,points[index].crt2_y,planeFly,moveAgain,points[index].speed)
                if(points[index].place){
                    $(points[index].add).addClass('addIn')
                    $(points[index].place).addClass('zoomIn')
                }
            }
        }
    }
}


function planeFly(obj){
    var ele = $('.plane');
    var obj = obj;
    ele.css('transform','translate3d('+obj.x+'px,'+obj.y+'px,'+'0)')
}



function CubeBezier(point_start,point1,point2,point_end){
    var p_start={x:0,y:0};
    var p_end={x:0,y:0};
    p_start=point_start;
    p_end=point_end;
    var p_crt1=point1;
    var p_crt2=point2;
    /**
     * 计算公式：
     *                  | 1  0  0   0|  |P0|
     * [1 t t*t  t*t*t] |-3  3  0   0|  |P1|
     *                  |3  -6  3   0|  |P2|
     *                  |-1  3  -3  1|  |p3|
     *
     * **/
    this.getPoint=function(t){
        var _matrix1=[1,t,t*t,t*t*t];
        var _matrix2=[
            [1,0,0,0]
            ,[-3,3,0,0]
            ,[3,-6,3,0]
            ,[-1,3,-3,1]
        ];

        var _matrix3=[
            [p_start.x,p_start.y]
            ,[p_crt1.x,p_crt1.y]
            ,[p_crt2.x,p_crt2.y]
            ,[p_end.x,p_end.y]
        ];
        var _matrix_tmp=[
            _matrix1[0]*_matrix2[0][0]+_matrix1[1]*_matrix2[1][0]+_matrix1[2]*_matrix2[2][0]+_matrix1[3]*_matrix2[3][0]
            ,_matrix1[0]*_matrix2[0][1]+_matrix1[1]*_matrix2[1][1]+_matrix1[2]*_matrix2[2][1]+_matrix1[3]*_matrix2[3][1]
            ,_matrix1[0]*_matrix2[0][2]+_matrix1[1]*_matrix2[1][2]+_matrix1[2]*_matrix2[2][2]+_matrix1[3]*_matrix2[3][2]
            ,_matrix1[0]*_matrix2[0][3]+_matrix1[1]*_matrix2[1][3]+_matrix1[2]*_matrix2[2][3]+_matrix1[3]*_matrix2[3][3]
        ];

        var _matrix_final=[
            _matrix_tmp[0]*_matrix3[0][0]+_matrix_tmp[1]*_matrix3[1][0]+_matrix_tmp[2]*_matrix3[2][0]+_matrix_tmp[3]*_matrix3[3][0]
            ,_matrix_tmp[0]*_matrix3[0][1]+_matrix_tmp[1]*_matrix3[1][1]+_matrix_tmp[2]*_matrix3[2][1]+_matrix_tmp[3]*_matrix3[3][1]
        ];

        var _res_point={
            x:_matrix_final[0]
            ,y:_matrix_final[1]
        };
        return _res_point;
    };


};


function cubeBezier(start_x,start_y,end_x,end_y,crt1_x,crt1_y,crt2_x,crt2_y,fn,fn2,speed){
    var cube_start_x=start_x;
    var cube_start_y=start_y;
    var cube_end_x=end_x;
    var cube_end_y=end_y;
    var cube_crt1_x=crt1_x;
    var cube_crt1_y=crt1_y;
    var cube_crt2_x=crt2_x;
    var cube_crt2_y=crt2_y;
    //--绘制两个点。
    var _start_point={
        x:parseInt(cube_start_x)
        ,y:parseInt(cube_start_y)
    };
    var _end_point={
        x:parseInt(cube_end_x)
        ,y:parseInt(cube_end_y)

    };
    var _crt_point1={
        x:parseInt(cube_crt1_x)
        ,y:parseInt(cube_crt1_y)
    };
    var _crt_point2={
        x:parseInt(cube_crt2_x)
        ,y:parseInt(cube_crt2_y)
    };
    var _bezier=new CubeBezier(_start_point,_crt_point1,_crt_point2,_end_point);
    function cubeDraw(t){
        var _t_point=_bezier.getPoint(t);
        return _t_point;
        //console.log(_t_point);
    }

    var _now_t=speed || 0.01;

    window._interval1=setInterval(function(){
        if(_now_t>=1){
            clearInterval(_interval1);
            fn2 && fn2();
            return;
        }
        fn && fn(cubeDraw(_now_t));

        _now_t=_now_t + speed || 0.01;
    },10);
}