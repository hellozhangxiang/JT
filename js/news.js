var news = document.getElementById("myslider");
$.ajax({
	       type:  "GET",
	       url:  "data/news.php",
	       dataType:  "json",
	       success:  function (data) {
		var html = "";
		for (var i = 0; i < data.length; i++) {
			if (i == 0) {
				html += "<img src='";
				html += data[i].main_img;
				html += "' class='show' alt=''>";
			} else {
				html += "<img src='";
				html += data[i].main_img;
				html += "' alt=''>";
			}
		}
		news.innerHTML = html;
		//淡入淡出轮播
		function newsImg() {
			var key = document.querySelector("#myslider .show");
			if (key) {
				key.className = "";
			}
			if (key.nextElementSibling) {
				key.nextElementSibling.className = "show";
			}
			else {
				document.querySelector("#myslider").firstElementChild.className = "show";
			}
		}
		newsImg();
		setInterval(newsImg, 3500);
	}
})