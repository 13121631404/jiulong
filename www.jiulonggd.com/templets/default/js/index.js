	$(".flowBox li").hover(function(){
		for(var i=0;i<36;i++){
			var max=120*i;

		$(this).animate({"background-position":-max},1).siblings("li").stop();
	}
	},function(){
		for(var i=36;i>0;i--){
			var max=120*i;
		$(this).animate({"background-position":-max},1).siblings("li").stop();
	}
		$(this).stop().animate({"background-position":0},0);
	});


/*手风琴*/
teamshow();
	function teamshow(){
		$(".teamBox .teamCon li").removeClass("hover");
		$(".teamBox .teamCon li:first-child").addClass("hover");
	}
	$(".teamBox .teamCon li").mouseover(function(){
		$(this).stop().animate({"width":"552px"},400).siblings("li").stop().animate({"width":"160px"},400);
		$(this).addClass("hover").siblings("li").removeClass("hover");
	
	});
/*手风琴*/

/* vip*/
	var vipU=document.getElementById("vipU");
	var vipli=vipU.getElementsByTagName("li");
	zx();
	function zx(){
		for(var i=0;i<vipli.length;i++){
			vipli[i].style.left=i*300+"px";
		}
	}
/* vip*/ 

/*FQA滚动图-begin*/
	var box=document.getElementById("news_r_ul"),can=true;

	box.innerHTML+=box.innerHTML;
	box.onmouseover=function(){can=false};
	box.onmouseout=function(){can=true};
	new function (){
	 var stop=box.scrollTop%10==0&&!can;/*鼠标停止时间*/
	 if(!stop)box.scrollTop==parseInt(box.scrollHeight/2)?box.scrollTop=0:box.scrollTop++;
	 setTimeout(arguments.callee,box.scrollTop%105?40:2);
	};
/*FQA滚动图-end*/

$(".prospan span").click(function(){
	var spanindex=$(this).index();
	$(this).addClass("focus").siblings("span").removeClass("focus");
	$(".proUl li").eq(spanindex).show().siblings("li").hide();
});

$(".newsBox .newsLtop span").click(function(){
	var newsindex=$(this).index();
	$(this).addClass("hover").siblings("span").removeClass("hover");
	$(".newsLbox li.li").eq(newsindex).show().siblings("li").hide();
});

