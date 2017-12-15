/*
 	Jquery
	
	1.导包
	
	入口函数
		A.$(document).ready(function(){...})
		B.$(function(){...})
		
		只需要等待页面中的标签渲染完成就开始执行
		没有个数的限制
		
	事件
		事件源.事件类型(执行指令)
		
		事件类型不需要加on
		
	针对数组（集合）的操作
		$().eq(0)
		
	对象互转
		$(js对象).click(function(){})
		
		jq对象[0].onclick=function(){}
		jq对象.get(0).onclick=function(){}
		
	控制标签属性
		jq对象.attr("name","123");
		jq对象.attr({"name":"value","id":"123"});
		jq对象.removeAttr({"name":"value","id":"123"});
		
		针对用户动态修改的属性
		jq对象.prop("name");
		jq对象.prop({"name":"value","id":"123"});
		jq对象.removeProp({"name":"value","id":"123"});
		
	val();
	
	控制css
		jq对象.css("name");
		jq对象.css({"name":"value","id":"123"});
		
	控制标签内容
		html();
		text();
	
	选择器
		基本选择器
			$("div")
			$("#id")
			$(".class")
		
		层次选择器
			$("A B")
			$("A>B")
			$("A+B")
			$("A~B")
			
		属性选择器
			$("A[title]")
			$("A[title=123]")
			$("A[title!=123]")
			$("A[title^=123]")
			$("A[title$=123]")
			$("A[title*=123]")
			
		基本过滤选择器
			$("A:first")
			$("A:last")
			$("A:odd")
			$("A:even")
			$("A:gt()")
			$("A:lt()")
			$("A:eq()")
			$("A:not()")
			$(":header")
			$(":animated")
			
		表单属性选择器
			$(":enabled")
			$(":disabled")
			$(":checked")
			$(":selected")
			
		筛选选择器
			父 子 兄
			$().parents()
			$().parent()
			$().siblings()
			$().children()
			$().find()
			
		动画
			对角线
				show()
				hide()
				toggle()
				
				毫秒数
					slow	normal	fast
					600		 400     200
					
				stop()
			
			滑动
				slideDown()
				slideUp()
				slideToggle()
				
				默认以normal的速度做动画
				
 
 
 */