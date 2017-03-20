$(function() {
	nav(); //头部导航栏
	//changePic() //轮播图
	//notice() //无限滚动广告
	//accor() //手风琴效果
	//recommend(); //热销推荐滚动
	//activeHot() //活动推荐
});
//头部导航列表
function nav() {
	$('.nav_bottom').hover(function(){
			$('.menu2_bc').css('background', '#000');
			$('.menu2 a').css('color', '#fff');
			$('.sanjiao').css("background-position", "center -9px");
			$('.menu_jump').stop().slideToggle();}
		, function () {
			$('.menu2_bc').css('background', '#fff');
			$('.menu2 a').css('color', '#666');
			$('.sanjiao').css("background-position", "center 0");
			//$('.menu_jump').css('display','none');
			$('.menu_jump').stop().slideToggle();
		});
	$(".menu_jump dl").mouseenter(function(){
		var	index =$(this).index()-1;
		//alert(index);
		$(this).css('background','#e4e4e7');
		$('.menu2 li').eq(index).css('background','#333')
	});
	$(".menu_jump dl").mouseleave(function(){
		var	index =$(this).index()-1;
		//alert(index);
		$(this).css('background','#fff');
		$('.menu2 li').eq(index).css('background','transparent')
	});
	$.ajax({
		url:"json/jump_list.json",
		success:function(date){
			for(var i = 0; i<10;i++){
				var _str = "goodslist"+i;
				var str = ".goodslist"+i;
				var len = date[_str].length;
				for(var j = 0;j<len; j++) {
					j==0&&(i==1||i==3)?$(str).append("<dd><a href='#'style='color: red;'>"+date[_str][j]+"</a></dd> "):
						$(str).append("<dd><a href='#'>"+date[_str][j]+"</a></dd> ")
				}
			}
		}
	});
}
//3.16  23：50头部导航over