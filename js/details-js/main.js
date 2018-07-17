require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
	}
})

require(['jquery','cookie'],function($,cookie){
	
    //菜单    
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
        });
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
		var $linker_h2 = $('.linker_h2');
		var $menu = $('.menu');
		var $muyc =$('#muyc');
		$linker_h2.mouseover(function(){
			$menu.css("display","block");
			
		}).mouseout(function(){
			$menu.css("display","none");
			$muyc.css("z-index","-1");
		});
		$menu.mouseover(function(){
			$menu.css("display","block");
			$muyc.css("z-index","100");
		}).mouseout(function(){
			$menu.css("display","none");
			$muyc.css("z-index","-1");
		});
		$muyc.mouseover(function(){
			$menu.css("display","block");
			$muyc.css("z-index","100");
		}).mouseout(function(){
			$menu.css("display","none");
			$muyc.css("z-index","-1");
		});
		
		$m1.mouseover(function () {
            $mucy1.show();
            $m1.css("backgroundColor","#333");
            $lin_1.css("color","#fff");
            $lin_a1.css("color","#fff");
            $lin_i_1.attr("src","img/tb01.png");
        }).mouseout(function () {
            $mucy1.hide();
            $m1.css("backgroundColor","#e3e3e3");
            $lin_1.css("color","#333");
            $lin_a1.css("color","#333");
            $lin_i_1.attr("src","img/tb1.png");			
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
		//购物车
		$(window).scroll(function(){
			if($(window).scrollTop() >= 630){
			$('#xf').css("display","block"); 
			} else{
			 $('#xf').css("display","none");
			}
		});
		//jq购物车cookie
		//查看购物车按钮
		var $obtn = $('.detail_btn_add');
		//购买添加按钮
		var $obuy = $('.detail_btn_buy');
		//点击页面跳转，获取购物车的信，
		$obtn.click(function(){
			window.location = "buy.html";
			//商品名
			var $proName = $('.product_name').text();
			//商品图片
			var $proImg = $('#masterImage').attr('src');
			//颜色 尺码
			var $proColor = $('.proColor').text();
			var $proSize = $('.proSize').text();
			//促销售价  价格 数量
			var $proPriceN = $('.promote_price span:eq(1)').text();
			var $proPriceO = $('.market_price').text();
			var $proNum = $('#goodNumber').attr('value');
			//小计
			var $total = $proPriceN * $proNum;
			//创建cookie
//			console.log($proName,1,$proImg,2,$proColor,3,$proSize,4,$proPriceN,5,$proPriceO,6,$proNum,7,$total,8)
			var json_oj ={
				"name":encodeURIComponent($proName),
				"img":$proImg,
				"color":$proColor,
				"size":$proSize,
				"priceN":$proPriceN,
				"priceO":$proPriceO,
				"num":$proNum,
				"total":$total
			}
			var json_obj = JSON.stringify(json_oj);
			$.cookie('the_cookie',`${json_obj}`,{expires:7});
//			console.log(decodeURIComponent($.cookie('the_cookie')));
		});					
	});
	
})
window.onload = function(){
	//放大镜
		//获取小商品图的盒子!
		var smallBox = document.querySelector('.jqzoom');
		//获取小图!
		var smallPic = document.querySelector('.masterImage');
		//获取遮罩!
		var oMark = document.querySelector('.zoompad');
		//获取滑块!
		var oFloat = document.querySelector('.zoompup');
		//获取大图盒子!
		var bigBox = document.querySelector('.zoomwindow');
		//获取大图！
		var bigPic = document.querySelector('.zoombigpic');
		var gallery = document.querySelector('.gallery');
		
		//遮罩移入事件，滑块和大图所在盒子显示
		oMark.onmouseenter = function(){
			oFloat.style.display = 'block';
			bigBox.style.display = 'block';
		};
		//遮罩移出事件，滑块和大图所在盒子隐藏
		oMark.onmouseleave = function(){
			oFloat.style.display = 'none';
			bigBox.style.display = 'none';
		};
		//遮罩移动事件，实现滑块跟随并设置边界
		oMark.onmousemove = function(evt){
			var e = evt || window.event;
			let left = e.pageX - smallBox.offsetLeft - gallery.offsetLeft - oFloat.offsetWidth / 2;
			let top = e.pageY - smallBox.offsetTop - gallery.offsetTop - oFloat.offsetHeight / 2;
			//设置边界
			if(left <= 0){
				left = 0;
			}else if(left >= oMark.offsetWidth - oFloat.offsetWidth){
				left = oMark.offsetWidth - oFloat.offsetWidth;
			}
			if(top <= 0){
				top = 0;
			}else if(top >= oMark.offsetHeight - oFloat.offsetHeight){
				top = oMark.offsetHeight - oFloat.offsetHeight;
			}
			oFloat.style.left = left + 'px';
			oFloat.style.top = top + 'px';
			//滑块在小图的移动比例
			let pX = left / (oMark.offsetWidth - oFloat.offsetWidth);
			let pY = top / (oMark.offsetHeight - oFloat.offsetHeight);
			//设置大图的坐标值
			bigPic.style.left = - pX * (bigPic.offsetWidth - bigBox.offsetWidth) + 'px';
			bigPic.style.top = - pY * (bigPic.offsetHeight - bigBox.offsetHeight) + 'px';
		}
}
