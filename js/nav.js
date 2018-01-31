var nav = document.getElementById("nav");
ajax("GET", "data/nav.php", "", "json").then(
	function (data) {
		var html = "";
		html += "	<div class='row' ><div class='col-xs-offset-1 col-xs-10 box' id='isIndex'><div class='navImg'> ";

		html += "<div class='c-860 c-demoslider'><div id='cuteslider_3_wrapper' class='cs-circleslight'>";

		html += "<div id='cuteslider_3' class='cute-slider' data-width='960' data-height='420' data-overpause='true'> ";

		html += "<ul data-type='slides'><li data-delay='5' data-src='5' data-trans3d='tr6,tr17,tr22,tr23,tr29,tr27,tr32, ";

		html += "tr34,tr35,tr53,tr54,tr62,tr63,tr4,tr13,tr45' data-trans2d='tr3,tr8,tr12,tr19,tr22,tr25,tr27,tr29,tr31, ";

		html += "tr34,tr35,tr38,tr39,tr41'><img  src='img/2.jpg' data-thumb='images/001/001a.png'><a data-type='link' ";

		html += "href='#' ></a> </li><li data-delay='5' data-src='5' data-trans3d='tr6,tr17,tr22,tr23,tr26,tr27,tr29,tr32, ";

		html += "tr34,tr35,tr53,tr54,tr62,tr63,tr4,tr13' data-trans2d='tr3,tr8,tr12,tr19,tr22,tr25,tr27,tr29,tr31,tr34,";

		html += "tr35,tr38,tr39,tr41'><img  src='img/blank.png' data-src='img/2.jpg' data-thumb='images/001/002a.png'>";

		html += "<a data-type='link' href='#' ></a> </li><li data-delay='5' data-src='5' data-trans3d='tr6,tr17,tr22,tr23,";

		html += "tr26,tr27,tr29,tr32,tr34,tr35,tr53,tr54,tr62,tr63,tr4,tr13' data-trans2d='tr3,tr8,tr12,tr19,tr22,tr25,";

		html += "tr27,tr29,tr31,tr34,tr35,tr38,tr41'><img  src='img/blank.png' data-src='img/3.jpg' data-thumb='";

		html += "images/001/003a.png'><a data-type='link' href='#' ></a> </li>";

		html += "<li data-delay='5' data-src='5' data-trans3d='tr6,tr17,tr22,tr23,tr26,tr27,tr29,tr32,tr34,";

		html += "tr35,tr53,tr54,tr62,tr63,tr4,tr13' data-trans2d='tr3,tr8,tr12,tr19,tr22,tr25,tr27,tr29,tr31,";

		html += "tr34,tr35,tr38,tr39,tr41'><img  src='img/blank.png' data-src='img/4.jpg' data-thumb=";

		html += "'images/001/004a.png'><a data-type='link' href='#' ></a></li><li data-delay='5' data-src='5' ";

		html += "data-trans3d='tr6,tr17,tr22,tr23,tr26,tr27,tr29,tr32,tr34,tr35,tr53,tr54,tr62,tr63,tr4,tr13'";

		html += "data-trans2d='tr3,tr8,tr12,tr19,tr22,tr25,tr27,tr29,tr31,tr34,tr35,tr38,tr39,tr41'><img  ";

		html += "src='bg/blank.png' data-src='img/5.jpg' data-thumb='images/001/005a.png'><a data-type='link' ";

		html += "href='#' ></a></li><li data-delay='5' data-src='5' data-trans3d='tr6,tr17,tr22,tr23,tr26,tr27,";

		html += "tr29,tr32,tr34,tr35,tr53,tr54,tr62,tr63,tr4,tr13' data-trans2d='tr3,tr8,tr12,tr19,tr22,tr25,tr27,";

		html += "tr29,tr31,tr34,tr35,tr38,tr39,tr41'><img  src='img/blank.png' data-src='img/2.jpg'";

		html += "data-thumb='images/001/006a.png'><a data-type='link' href='#' ></a> </li></ul>";

		html += "<ul data-type='controls'>";
		html += "<li data-type='captions'></li>";
		html += "<li data-type='link'></li>";
		html += "<li data-type='video'></li>";
		html += "<li data-type='slideinfo'></li>";
		html += "<li data-type='circletimer'></li>";
		html += "<li data-type='previous'></li>";
		html += "<li data-type='next'> </li>";
		html += "<li data-type='bartimer'></li>";
		html += "<li data-type='slidecontrol' data-thumb='true' data-thumbalign='up'></li>";
		html += "</ul>";
		html += "</div><div class='cute-shadow'><img src='img/shadow.png' alt='shadow'></div></div>";
		html += "</div></div>	<div class='navContent'></div></div></div><div class='row'>";
		html += "<div class='col-xs-offset-1 col-xs-10 hidden-xs hide'  id='notIndex' >";
		html += "<img src='img/u38.jpg' alt=''></div></div>";
		nav.innerHTML = html;
	}
)