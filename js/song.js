  
    
    
   	ajax("http://route.showapi.com/213-1",{	showapi_appid:35226,
    										showapi_sign:'9311eb2b16ff4b33baefd9a47b1238be',
    										keyword:'漂洋过海来看你'
    									},'get',fn,true);
    function fn(data){
    	var data = JSON.parse(data);
    	var arr = data.showapi_res_body.pagebean.contentlist;
    	console.log(data);
    	var header = document.getElementById("header");
    	header.innerHTML = "<img src='"+arr[0].albumpic_small
    										+"' class='mui-bar-img'><div class='mui-bar-div'><h2>"+
    										arr[0].songname+"</h2><span>"+
    										arr[0].singername+"</span></div><img src='img/start.bmp' class='mui-bar-btn'/>";
    	document.getElementById("video").src=arr[0].m4a;
    	console.log();
	    document.querySelector('.mui-bar-btn').onclick =function(){
				if(document.getElementById("video").paused){
					
					document.getElementById("video").play();
					document.querySelector('.mui-bar-btn').src='img/start.bmp';
				}else{
					document.getElementById("video").pause();
						document.querySelector('.mui-bar-btn').src='img/stop.bmp';
						
					
				}
			};
    }
   
    //显示歌词
    ajax("http://route.showapi.com/213-2",{	showapi_appid:35226,
    										showapi_sign:'9311eb2b16ff4b33baefd9a47b1238be',
    										musicid:'201308159'
    									},'get',music,true);
    function music(data){
    	var data = JSON.parse(data);
    	var lyric = data.showapi_res_body.lyric_txt;
    	var arr = lyric.trim().split('  ');
    	for(var i = 0;i<arr.length;i++){
    		var liObj = document.createElement('li');
    		liObj.innerHTML = arr[i];
    		document.getElementById("content").appendChild(liObj);
    	}
    	
    	
    }
    
			

	