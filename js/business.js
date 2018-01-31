//var vd=document.getElementById("vd");
var mybusiness=document.getElementById("mybusiness");
$.ajax({  
    type: "GET",  
    url: "data/business.php",   
    dataType: "json",  
    success: function(datas){ 
		console.log(datas);
		var vhtml="";
		var myhtml="";
		for(var i=0;i<datas.length;i++){
				myhtml+="<div class='col-md-6 my-content-box '>";
				myhtml+="<h4>"+datas[i].title+"</h4>";
				myhtml+="<img src='"+datas[i].basi_img+"' alt='' class='img-thumbnail'>";
				myhtml+="<div class='my-content'><h4>"+datas[i].title+"</h4>";
				myhtml+="<p>"+datas[i].intr+"</p>";
				myhtml+="</div></div>";
				if(i<1){
					vhtml+="<source src='";
					vhtml+=datas[i].busi_video;
					vhtml+="'>";
				}
		}
		vhtml+="您的浏览器不支持VIDEO播放！";
		vd.innerHTML=vhtml;
		mybusiness.innerHTML=myhtml;
	}
})
