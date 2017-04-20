  
    
    var keyword = document.getElementById("cancel").value;
   	ajax("http://route.showapi.com/213-1",{	showapi_appid:35226,
    										showapi_sign:'9311eb2b16ff4b33baefd9a47b1238be',
    										keyword:keyword
    									},'get',fn,true);
    function fn(data){
    	var data = JSON.parse(data);
    	
    	var arr = data.showapi_res_body.pagebean.contentlist;
    	console.log(arr)
    	for(var i =0; i<arr.length;i++){
    		var liObj = document.createElement('li');
    		liObj.className = "mui-table-view-cell mui-media";
    		liObj.innerHTML = ' <a href=""; class="a'+i+'"><img class="mui-media-object mui-pull-left" src="img/music.bmp"><div class="mui-media-body">'
    							+arr[i].songname+'<p class="mui-ellipsis">'+arr[i].singername+'</p></div></a>';
	        document.getElementById("list").appendChild(liObj);
    	}
    	
		 	
    document.querySelector('.a0').href = 'song.html';
    }
    
			

	