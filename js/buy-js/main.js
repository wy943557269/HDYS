require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
	}
})

require(['jquery','cookie'],function($,cookie){
	$(function(){
		//购物车
		//获取cookie中json字符串
		var json_str = decodeURIComponent($.cookie('the_cookie'));
//		alert(json_str);
		//把json字符串转化为json对象
		var json_p = JSON.parse(json_str);
//		console.log(json_p);
		//读取json对象，动态布局
		//1.删除布局
		$('.shopping_car_arrow').remove();
		//2.动态创建布局，内部插入新的元素
			$('.shopping_nr_title').after('<div id="cartGoodsList" class="shopping_nr_top"></div>');
			//在其内部插入ul
			$('#cartGoodsList').append('<ul id="brand_cart_15"></ul>');
			//在ul里面插入商品列表li
			$('#brand_cart_15').append('<li id="rec-6920199"></li>');
			//在li里面插入列表详情子div
			$('#rec-6920199').append('<div class="cbg shop_product"></div>');
			$('#rec-6920199').append('<div class="cbg shop_product_money"></div>');
			$('#rec-6920199').append('<div class="cbg shop_product_number"></div>');
			$('#rec-6920199').append('<div class="cbg shop_product_money00">'+"￥"+json_p.total+'</div>');
			$('#rec-6920199').append('<div class="cbg shop_product_close"></div>');
			$('#rec-6920199').append('<div class="cbg shop_product_tip"></div>');
			//对shop_product进行布局和传值		
			$('.shop_product').append('<div class="shop_product_pic"></div>');
			$('.shop_product_pic').append('<img src='+json_p.img+'>');
			$('.shop_product').append("<span class='shop_product_name'>"+json_p.name+"</span>");
			$('.shop_product').append("<span class='shop_product_size'>"+'&emsp;颜色：'+json_p.color+'&emsp;尺码：'+json_p.size+"</span>");
			//对shop_product_money进行布局和传值
			$('.shop_product_money').append('<div class="cprice" style="line-height:20px;"></div>');
			$('.cprice').append("<del>"+"￥"+json_p.priceO+"</del>");
			$('.cprice').append("<br>");
			$('.cprice').append('<span>'+"￥"+json_p.priceN+'</span>');
			//对shop_product_number进行布局和传值
			$('.shop_product_number').append('<span id="J_AmountWidget"></span>');
			$('#J_AmountWidget').append('<span class="increase">+</span>');
			$('#J_AmountWidget').append('<span class="decrease">-</span>');
			$('#J_AmountWidget').append('<input class="text" value='+json_p.num+' type="text">');
			//对shop_product_close进行布局
			$('.shop_product_close').append('<div class="middle"></div>');
			$('.middle').append('<a>移入收藏夹</a>');
			$('.middle').append('<br>');
			$('.middle').append('<a>删除</a>');
			//对shop_product_tip进行布局
			//添加点击事件更改数量，手动输入限制输入的数
	});
})
