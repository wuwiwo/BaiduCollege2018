window.onload=function(){
	var left=document.getElementById("left");
	var right=document.getElementById("right");
	var button=document.getElementById("button");
	var nav=document.getElementsByTagName("nav");
	 num=0;
		button.onmousedown=function(){
			left.style.width=60+"px";
			right.style.width=60+"px";
			button.style.width=150+"px";
			num=1; 
		};
		button.onmouseup=function(){
			left.style.width=0+"px";
			right.style.width=0+"px";
			button.style.width=100+"px";
		}
}
