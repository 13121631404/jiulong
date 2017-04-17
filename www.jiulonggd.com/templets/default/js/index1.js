/*案例滚动 begin*/
	var _index=0;
	var _qindex=0;
	var clearTime=null;
	var oul=document.getElementById("bigul");
	var oli=oul.getElementsByTagName("li");
	var mun=(oli.length)-1;


		$(".spanUl li,.conUl li").mouseover(function(){
			//清除定时器
			clearInterval(clearTime);
			_index=$(this).index();
			if(_index>mun){
				_index=0;
				_qindex=mun;
			}
			scrollplay();
			_qindex=_index;
		}).mouseout(function(){
			autoplay();
		});


	autoplay();
	//自动轮播
	function autoplay(){
		//定时器
		clearTime=setInterval(function(){
			_index++;
			if(_index>mun){
				_index=0;
				_qindex=mun;
			}
			scrollplay();
			_qindex=_index;
		},3000);
		
	}

	//移动函数
	function scrollplay(){
		$(".spanUl span").eq(_index).addClass("hover").siblings("span").removeClass("hover");
			if(_index==0&&_qindex==5){
				next();
			}else if(_index==5&&_qindex==0){
				prev();
			}else if(_index>_qindex){//右移
				next();
			}else if(_index<_qindex){//左移
				prev();
			}
	}

	//左移
	function next(){
		$(".conUl li").eq(_qindex).animate({"left":"-1172px"},300);
		$(".conUl li").eq(_index).css("left","1172px").stop().animate({"left":"0px"},300);
	}
	//右移
	function prev(){
		$(".conUl li").eq(_qindex).animate({"left":"1172px"},300);
		$(".conUl li").eq(_index).css("left","-1172px").stop().animate({"left":"0px"},300);
	}


 /*案例滚动 end*/ 


