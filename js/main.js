require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
	}
})

require(['jquery'],function($){
	$(function(){
		//鼠标滑过显示异常的网站导航
		var $nav = $('#hd_nav');
		var $hd = $('#hd');
		$nav.mouseover(function () {
            $hd.show();
        }).mouseout(function () {
            $hd.hide();
        });

        $hd.mouseover(function () {
            $hd.show();
        }).mouseout(function () {
            $hd.hide();
        })
	});
	//菜单
	$(function(){
		var $m1 = $('.m1');
		var $m2 = $('.m2');
		var $m3 = $('.m3');
		var $m4 = $('.m4');
		var $m5 = $('.m5');
		var $m6 = $('.m6');
		var $m7 = $('.m7');
		var $mucy1 = $('.muyc_1');
		var $mucy2 = $('.muyc_2');
		var $mucy3 = $('.muyc_3');
		var $mucy4 = $('.muyc_4');
		var $mucy5 = $('.muyc_5');
		var $lin_1 = $('.lin-1');
		var $lin_2 = $('.lin-2');
		var $lin_3 = $('.lin-3');
		var $lin_4 = $('.lin-4');
		var $lin_5 = $('.lin-5');
		var $lin_6 = $('.lin-6');
		var $lin_7 = $('.lin-7');
		var $lin_a1 = $('.lin-a-1');
		var $lin_a2 = $('.lin-a-2');
		var $lin_a3 = $('.lin-a-3');
		var $lin_a4 = $('.lin-a-4');
		var $lin_a5 = $('.lin-a-5');
		var $lin_a6 = $('.lin-a-6');
		var $lin_a7 = $('.lin-a-7');
		var $lin_i_1= $('.lin-i-1');
		var $lin_i_2= $('.lin-i-2');
		var $lin_i_3= $('.lin-i-3');
		var $lin_i_4= $('.lin-i-4');
		var $lin_i_5= $('.lin-i-5');
		var $lin_i_6= $('.lin-i-6');
		var $lin_i_7= $('.lin-i-7');
		$m1.mouseover(function () {
            $mucy1.show();
            $m1.css("backgroundColor","#333");
            $lin_1.css("color","#fff");
            $lin_a1.css("color","#fff");
            $lin_i_1.attr("src","img/tb02.png");
        }).mouseout(function () {
            $mucy1.hide();
            $m2.css("backgroundColor","#e3e3e3");
            $lin_2.css("color","#333");
            $lin_a2.css("color","#333");
            $lin_i_2.attr("src","img/tb2.png");
        });

        $mucy1.mouseover(function () {
            $mucy1.show();
        }).mouseout(function () {
            $mucy1.hide();
        })
        
        $m2.mouseover(function () {
            $mucy2.show();
            $m2.css("backgroundColor","#333");
            $lin_2.css("color","#fff");
            $lin_a2.css("color","#fff");
            $lin_i_2.attr("src","img/tb02.png");
        }).mouseout(function () {
            $mucy2.hide();
            $m2.css("backgroundColor","#e3e3e3");
            $lin_2.css("color","#333");
            $lin_a2.css("color","#333");
            $lin_i_2.attr("src","img/tb2.png");
        });

        $mucy2.mouseover(function () {
            $mucy2.show();
        }).mouseout(function () {
            $mucy2.hide();
        })
        
        $m3.mouseover(function () {
            $mucy3.show();
            $m3.css("backgroundColor","#333");
            $lin_3.css("color","#fff");
            $lin_a3.css("color","#fff");
            $lin_i_3.attr("src","img/tb03.png");
        }).mouseout(function () {
            $mucy3.hide();
            $m3.css("backgroundColor","#e3e3e3");
            $lin_3.css("color","#333");
            $lin_a3.css("color","#333");
            $lin_i_3.attr("src","img/tb3.png");
        });

        $mucy3.mouseover(function () {
            $mucy3.show();
        }).mouseout(function () {
            $mucy3.hide();
        })
        
        $m4.mouseover(function () {
            $mucy4.show();
            $m4.css("backgroundColor","#333");
            $lin_4.css("color","#fff");
            $lin_a4.css("color","#fff");
            $lin_i_4.attr("src","img/tb05.png");
        }).mouseout(function () {
            $mucy4.hide();
            $m4.css("backgroundColor","#e3e3e3");
            $lin_4.css("color","#333");
            $lin_a4.css("color","#333");
            $lin_i_4.attr("src","img/tb5.png");
        });

        $mucy4.mouseover(function () {
            $mucy4.show();
        }).mouseout(function () {
            $mucy4.hide();
        })
        
        $m5.mouseover(function () {
            $mucy5.show();
            $m5.css("backgroundColor","#333");
            $lin_5.css("color","#fff");
            $lin_a5.css("color","#fff");
            $lin_i_5.attr("src","img/tb06.png");
        }).mouseout(function () {
            $mucy5.hide();
            $m5.css("backgroundColor","#e3e3e3");
            $lin_5.css("color","#333");
            $lin_a5.css("color","#333");
            $lin_i_5.attr("src","img/tb6.png");
        });

        $mucy5.mouseover(function () {
            $mucy5.show();
        }).mouseout(function () {
            $mucy5.hide();
        });
        $m6.mouseover(function () {
            $m6.css("backgroundColor","#333");
            $lin_6.css("color","#fff");
            $lin_a6.css("color","#fff");
        });
        $m6.mouseout(function () {
            $m6.css("backgroundColor","#e3e3e3");
            $lin_6.css("color","#333");
            $lin_a6.css("color","#333");

        });
        
        $m7.mouseover(function () {
            $m7.css("backgroundColor","#333");
            $lin_7.css("color","#fff");
            $lin_7.animate({'left':'10px'},500);
            $lin_a7.css("color","#fff");
        });
        $m7.mouseout(function () {
            $m7.css("backgroundColor","#e3e3e3");
            $lin_7.css("color","#333");
            $lin_a7.css("color","#333");
        });
        $m6.hover(function(){
        	$lin_6.animate({'left':'10px'},500)
        },function(){
        	$lin_6.animate({'left':'0px'},500)
        });
        $m7.hover(function(){
        	$lin_7.animate({'left':'10px'},500)
        },function(){
        	$lin_7.animate({'left':'0px'},500)
        });
        $m5.hover(function(){
        	$lin_5.animate({'left':'10px'},500)
        },function(){
        	$lin_5.animate({'left':'0px'},500)
        });
        $m4.hover(function(){
        	$lin_4.animate({'left':'10px'},500)
        },function(){
        	$lin_4.animate({'left':'0px'},500)
        });
        $m3.hover(function(){
        	$lin_3.animate({'left':'10px'},500)
        },function(){
        	$lin_3.animate({'left':'0px'},500)
        });
        $m2.hover(function(){
        	$lin_2.animate({'left':'10px'},500)
        },function(){
        	$lin_2.animate({'left':'0px'},500)
        });
        $m1.hover(function(){
        	$lin_1.animate({'left':'10px'},500)
        },function(){
        	$lin_1.animate({'left':'0px'},500)
        });
	});
	//banner滑过换图
	var $btn1 = $('.btn1');
	var $btn2 = $('.btn2');
	$btn1.mouseover(function(){
		$('#banner_con').css({"z-index":4,"display":"block"});
		$('#banner_con2').css({"z-index":2,"display":"none"});
		$btn1.css({"backgroundColor":"#333","color":"#fff"});
	});
	$btn1.mouseout(function(){
		$btn1.css({"backgroundColor":"#fff","color":"#333"});
	});
	$btn2.mouseover(function(){
		$('#banner_con').css({"z-index":2,"display":"none"});
		$('#banner_con2').css({"z-index":4,"display":"block"});
		$btn2.css({"backgroundColor":"#333","color":"#fff"});
	});
	$btn2.mouseout(function(){
		$btn2.css({"backgroundColor":"#fff","color":"#333"});
	});
	//明星家族
	var $rig1 = $('.rig1');
	var $rig2 = $('.rig2');
	var $rig3 = $('.rig3');
	var $pic1 = $('.pic1');
	var $pic2 = $('.pic2');
	var $pic3 = $('.pic3');
	$rig1.mouseover(function(){
		$pic1.css("display","block");
		$pic2.css("display","none");
		$pic3.css("display","none");
		$rig1.css("color","#ff0f3f");
	});
	$rig1.mouseout(function(){
		$rig1.css("color","#000");
	});
	$rig2.mouseover(function(){
		$pic2.css("display","block");
		$pic1.css("display","none");
		$pic3.css("display","none");
		$rig2.css("color","#ff0f3f");
	});
	$rig2.mouseout(function(){
		$rig2.css("color","#000");
	});
	$rig3.mouseover(function(){
		$pic3.css("display","block");
		$pic1.css("display","none");
		$pic2.css("display","none");
		$rig3.css("color","#ff0f3f");
	});
	$rig3.mouseout(function(){
		$rig3.css("color","#000");
	});
	//show1轮播
	//1滑过显示相对应的ul
	var $show_1 = $('.show_1');
	var $show_2 = $('.show_2');
	var $show_3 = $('.show_3');
	var $show_4 = $('.show_4');
	var $show_5 = $('.show_5');
	var $showli1 = $('.show1_li1');
	var $showli2 = $('.show1_li2');
	var $showli3 = $('.show1_li3');
	var $showli4 = $('.show1_li4');
	var $showli5 = $('.show1_li5');
	$showli1.mouseover(function(){
		$show_1.css("display","block");
		$show_2.css("display","none");
		$show_3.css("display","none");
		$show_4.css("display","none");
		$show_5.css("display","none");
	});
	$showli2.mouseover(function(){
		$show_2.css("display","block");
		$show_1.css("display","none");
		$show_3.css("display","none");
		$show_4.css("display","none");
		$show_5.css("display","none");
	});
	$showli3.mouseover(function(){
		$show_3.css("display","block");
		$show_2.css("display","none");
		$show_1.css("display","none");
		$show_4.css("display","none");
		$show_5.css("display","none");
	});
	$showli4.mouseover(function(){
		$show_4.css("display","block");
		$show_2.css("display","none");
		$show_3.css("display","none");
		$show_1.css("display","none");
		$show_5.css("display","none");
	});
	$showli5.mouseover(function(){
		$show_5.css("display","block");
		$show_2.css("display","none");
		$show_3.css("display","none");
		$show_4.css("display","none");
		$show_1.css("display","none");
	});
	//自动轮播	
	setInterval(function(){
		var num = $('#show1 .showw').index($('#active')); // 获取id 为 active的下标
		$('#active').attr("id",""); // 取消当前active
		if(num !== 4){
			$('#show1 .showw').eq(num+1).attr("id","active"); // 设置下一个ul 的id 为 active
		}else{
			$('#show1 .showw').eq(0).attr("id","active"); // 轮播到最后一张，回到第一张
			
		}
	},3000);

	//排行榜实验板
	var $right_r_ul1 = $('.right_r_ul1');
	var $l1 = $('.l1');
	$l1.mouseover(function(){
		$right_r_ul1.find('ul').hide();
		$right_r_ul1.find('h3').show();
		$l1.find('h3').hide();
		$l1.find('ul').show();		
	});
	var $l2 = $('.l2');
	$l2.mouseover(function(){
		$right_r_ul1.find('ul').hide();
		$right_r_ul1.find('h3').show();
		$l2.find('h3').hide();
		$l2.find('ul').show();		
	});
	var $l3 = $('.l3');
	$l3.mouseover(function(){
		$right_r_ul1.find('ul').hide();
		$right_r_ul1.find('h3').show();
		$l3.find('h3').hide();
		$l3.find('ul').show();		
	});
	var $l4 = $('.l4');
	$l4.mouseover(function(){
		$right_r_ul1.find('ul').hide();
		$right_r_ul1.find('h3').show();
		$l4.find('h3').hide();
		$l4.find('ul').show();		
	});
	var $l5 = $('.l5');
	$l5.mouseover(function(){
		$right_r_ul1.find('ul').hide();
		$right_r_ul1.find('h3').show();
		$l5.find('h3').hide();
		$l5.find('ul').show();
	});
	var $l6 = $('.l6');
	$l6.mouseover(function(){
		$right_r_ul1.find('ul').hide();
		$right_r_ul1.find('h3').show();
		$l6.find('h3').hide();
		$l6.find('ul').show();
	});
	var $l7 = $('.l7');
	$l7.mouseover(function(){
		$right_r_ul1.find('ul').hide();
		$right_r_ul1.find('h3').show();
		$l7.find('h3').hide();
		$l7.find('ul').show();
	});
	var $l8 = $('.l8');
	$l8.mouseover(function(){
		$right_r_ul1.find('ul').hide();
		$right_r_ul1.find('h3').show();
		$l8.find('h3').hide();
		$l8.find('ul').show();
	});
	//top置顶
	
	$(window).scroll(function(){
		if($(window).scrollTop() >= 630){
		$('#toper').css("display","block"); 
		} else{
		 $('#toper').css("display","none");
		}
	});
	//购物车
		$(window).scroll(function(){
			if($(window).scrollTop() >= 630){
			$('#xf').css("display","block"); 
			} else{
			 $('#xf').css("display","none");
			}
		});
	
})

