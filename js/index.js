//广告轮播
var cuteslider3 = new Cute.Slider();
cuteslider3.setup("cuteslider_3", "cuteslider_3_wrapper", "images/css/slider-style.css");
cuteslider3.api.addEventListener(Cute.SliderEvent.CHANGE_START,
	function (event) { });
cuteslider3.api.addEventListener(Cute.SliderEvent.CHANGE_END,
	function (event) { });
cuteslider3.api.addEventListener(Cute.SliderEvent.WATING,
	function (event) { });
cuteslider3.api.addEventListener(Cute.SliderEvent.CHANGE_NEXT_SLIDE,
	function (event) { });
cuteslider3.api.addEventListener(Cute.SliderEvent.WATING_FOR_NEXT,
	function (event) { });




var proj = document.getElementById("f4");
var projn = document.getElementById("projn");

$.ajax({
	             type:  "GET",
	             url:  "data/index.php",
	             dataType:  "json",
	             success:  function (data) {
		var html = "", htmln = "";
		for (var i = 0; i < 2; i++) {

			for (var j = 0; j < data.length; j++) {
				if (i < 1) {
					htmln += "<div class='col-xs-12 hidden-sm hidden-lg hidden-md text-center'><img src='";
					htmln += data[j].pro_img;
					htmln += "' class='img-responsive center-block'><h4>";
					htmln += data[j].pro_intr;
					htmln += "</h4></div>";
				}
				html += "<div class='text-center'  style='background:#F7F7F7;'><img src='";
				html += data[j].pro_img;
				html += "' class='img-responsive center-block'><h4>";
				html += data[j].pro_intr;
				html += "</h4></div>";
			}
		}

		proj.innerHTML = html;
		projn.innerHTML = htmln;
		//footer底部项目展示轮播
		function topBnanner(id, trTime, arTime) {
			var topJsBox = document.getElementById(id);
			var my_style = null;
			if (window.getComputedStyle) {
				my_style = window.getComputedStyle(topJsBox.firstElementChild, null)
			} else {
				my_style = topJsBox.firstElementChild.currentStyle;
			}
			var WIDTH = parseInt(my_style.width);
			topJsBox.style.overflow = "hidden";
			topJsBox.style.width = WIDTH + "px";

			var topLider = topJsBox;
			var topLiderImgs = document.querySelectorAll("#" + id + ">div");

			var len = topLiderImgs.length;
			topLider.style.width = WIDTH * len + "px";
			topLider.style.position = "relative";
			var i = 0;
			topLider.style.left = 0;
			topLider.style.transition = "all " + trTime + "ms linear";
			/*function run(){
				timer=setInterval(function(){  
					i++;
				topLider.style.left=-i*WIDTH+"px"; // 定时器线程
				if(i==len/2+1){//主线程，如果不+1就不行，保证==后面的值大于中间值才不会有问题，个人认为是定时器本身缺陷
					  i=0;
					  setTimeout(function(){
						topLider.style.transition="all 0s";
						topLider.style.left=0;
					  },trTime);//刚好等过度动画完成立马执行
					}
				topLider.style.transition="all "+trTime+"ms linear";	
				},arTime);
			}
			run();*/

			var timer = setInterval(function () {
				i++;
				topLider.style.transition = "all " + trTime + "ms linear";
				topLider.style.left = -i * WIDTH + "px";
				if (i == len / 2 + 1) {
					i = 0;
					setTimeout(function () {
						topLider.style.transition = "all 0s";
						topLider.style.left = 0;
					}, trTime);

				}
			}, arTime);
		};
		topBnanner("f4", 500, 2000);
	}

})



