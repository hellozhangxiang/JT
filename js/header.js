var header = document.getElementById("header");
var nav = document.getElementById("nav");
var footer = document.getElementById("footer");
var article = document.getElementById("article");

$.ajax({
	        type:  "GET",
	        url:  "html/footer.html",
	        dataType:  "text",
	        success:  function (html) {
		footer.innerHTML = html;
	}
})
$.ajax({
	        type:  "GET",
	        url:  "html/article.html",
	        dataType:  "text",
	        success:  function (html) {
		article.innerHTML = html;
	}
})

//导航栏

var liders = document.querySelectorAll(".lider");
var liderUls = document.querySelectorAll(".myHeaderUl>li>ul>li");
for (let i = 0; i < liderUls.length; i++) {
	liderUls[i].onmouseover = function () { this.parentElement.style.height = "100%"; };//inherit
	liderUls[i].onmouseout = function () { this.parentElement.style.height = 0; }
}
for (let j = 0; j < liders.length; j++) {
	if (liders[j].nextElementSibling)
		liders[j].onmouseover = function () { this.nextElementSibling.style.height = "100%"; };//inherit
	liders[j].parentElement.onmouseout = function () {
		this.lastElementChild.style.height = 0;
	}
}
var aArray = document.querySelectorAll("header a");
var isIndex = document.getElementById("isIndex");
var notIndex = document.getElementById("notIndex");
//console.log(aArray);
var len = aArray.length;
for (let i = 0; i < len; i++) {
	if (aArray[i].href != "") {
		//点击实现单页面SPA跳转效果
		aArray[i].onclick = function (e) {
			var elem = document.getElementById(aArray[i].getAttribute("href"));
			e.preventDefault();
			$(elem).removeClass("hide");
			//判断是否隐藏首页轮播广告和是否显示其他页面广告图
			if (aArray[i].getAttribute("href") == "index") {
				$(isIndex).removeClass("hide");
				$(notIndex).addClass("hide");
			} else {
				$(isIndex).addClass("hide");
				$(notIndex).removeClass("hide");
			}
			var els = $(elem).siblings();
			for (var j = 0; j < els.length; j++) {
				$(els[j]).addClass("hide");
			}
		};
	}

}