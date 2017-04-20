   var num = ['1.bmp','2.bmp','3.bmp','4.bmp','5.bmp'];
   var topid = [3,5,6,17,26];
   var namestr = ["欧美","内地","港台","日本","热歌"];

   	 /*遍历，不用写好多遍
   	   for(let j =0;j<topid.length;j++){
	   console.log(j)
	   ajax("http://route.showapi.com/213-4",{	showapi_appid:35226,
	    										showapi_sign:'9311eb2b16ff4b33baefd9a47b1238be',
	    										topid:topid[j]
	    									},'get',data,true);
	    function data(data){
	    	var data = JSON.parse(data); 
	    	var arr = data.showapi_res_body.pagebean.songlist;
	    	var liObj = document.createElement('li');
		  	liObj.className = "mui-table-view-cell mui-media";
		 	liObj.innerHTML='<a href="javascript:;"><img class="mui-media-object mui-pull-left" src="img/'+
		 					num[j]+'"><div class="mui-media-body" id="top'+j+'"><h4>巅峰榜：'+
		 					namestr[j]+'</h4><span class="gt">&gt;</span></div></a>';
			console.log("top"+j)
			document.getElementById("list").appendChild(liObj);
	    	for(var i = 0;i<3;i++){
	    		var pObj = document.createElement('p');
				pObj.className = "mui-ellipsis";
			 	pObj.innerHTML='<i style="color:#8f8f94;">'+(i+1)+'  </i>'+arr[i].songname.split("(")[0]+'<span style="color:#8f8f94;padding-left:10px;">- '+arr[i].singername+'</span>';
			 	document.getElementById("top"+j).appendChild(pObj);
	    	}
	    }
   	}
   */
   
    //topid = 3;
   	ajax("http://route.showapi.com/213-4",{	showapi_appid:35226,
    										showapi_sign:'9311eb2b16ff4b33baefd9a47b1238be',
    										topid:3
    									},'get',fnThree,true);
    function fnThree(data){
    	var data = JSON.parse(data);
    	var arr = data.showapi_res_body.pagebean.songlist;
    	var liObj = document.createElement('li');
	  	liObj.className = "mui-table-view-cell mui-media";
	 	liObj.innerHTML='<a href="javascript:;"><img class="mui-media-object mui-pull-left" src="img/'+
	 						num[1]+'"><div class="mui-media-body" id="topthree"><h4>巅峰榜：欧美</h4><span class="gt">&gt;</span></div></a>';
		document.getElementById("list").appendChild(liObj);
    	for(var i = 0;i<3;i++){
    		var pObj = document.createElement('p');
			pObj.className = "mui-ellipsis";
		 	pObj.innerHTML='<i style="color:#8f8f94;">'+(i+1)+'  </i>'+arr[i].songname.split("(")[0]+'<span style="color:#8f8f94;padding-left:10px;">- '+arr[i].singername+'</span>';
		 	document.getElementById("topthree").appendChild(pObj);
    	}
    }
    //topid = 6;
   	ajax("http://route.showapi.com/213-4",{	showapi_appid:35226,
    										showapi_sign:'9311eb2b16ff4b33baefd9a47b1238be',
    										topid:6
    									},'get',fnSix,true);
    function fnSix(data){
    	var data = JSON.parse(data);
    	var arr = data.showapi_res_body.pagebean.songlist;
    	var liObj = document.createElement('li');
	  	liObj.className = "mui-table-view-cell mui-media";
	 	liObj.innerHTML='<a href="javascript:;"><img class="mui-media-object mui-pull-left" src="img/'+
	 						num[2]+'"><div class="mui-media-body" id="topsix"><h4>巅峰榜：港台</h4><span class="gt">&gt;</span></div></a>';
		document.getElementById("list").appendChild(liObj);
    	for(var i = 0;i<3;i++){
    		var pObj = document.createElement('p');
			pObj.className = "mui-ellipsis";
		 	pObj.innerHTML='<i style="color:#8f8f94;">'+(i+1)+'  </i>'+arr[i].songname.split("(")[0]+'<span style="color:#8f8f94;padding-left:10px;">- '+arr[i].singername+'</span>';
		 	document.getElementById("topsix").appendChild(pObj);
    	}
    }
    //topid = 5;
   	ajax("http://route.showapi.com/213-4",{	showapi_appid:35226,
    										showapi_sign:'9311eb2b16ff4b33baefd9a47b1238be',
    										topid:5
    									},'get',fnFive,true);
    function fnFive(data){
    	var data = JSON.parse(data);
    	var arr = data.showapi_res_body.pagebean.songlist;
    	var liObj = document.createElement('li');
    	liObj.className = "mui-table-view-cell mui-media";
	 	liObj.innerHTML='<a href="javascript:;"><img class="mui-media-object mui-pull-left" src="img/'+
	 					num[3]+'"><div class="mui-media-body" id="topfive"><h4>巅峰榜：内地</h4><span class="gt">&gt;</span></div></a>';
		document.getElementById("list").appendChild(liObj);
    	for(var i = 0;i<3;i++){
    		var pObj = document.createElement('p');
			pObj.className = "mui-ellipsis";
		 	pObj.innerHTML='<i style="color:#8f8f94;">'+(i+1)+'  </i>'+arr[i].songname.split("(")[0]+'<span style="color:#8f8f94;padding-left:10px;">- '+arr[i].singername+'</span>';
		 	document.getElementById("topfive").appendChild(pObj);
    	}
    }
    
   //topid = 17
   	ajax("http://route.showapi.com/213-4",{	showapi_appid:35226,
    										showapi_sign:'9311eb2b16ff4b33baefd9a47b1238be',
    										topid:17
    									},'get',oneSev,true);
    function oneSev(data){
    	var data = JSON.parse(data);
    	var arr = data.showapi_res_body.pagebean.songlist;
    	var liObj = document.createElement('li');
    	liObj.className = "mui-table-view-cell mui-media";
	 	liObj.innerHTML='<a href="javascript:;"><img class="mui-media-object mui-pull-left" src="img/'+
	 					num[4]+'"><div class="mui-media-body" id="onesev"><h4>巅峰榜：日本</h4><span class="gt">&gt;</span></div></a>';
		document.getElementById("list").appendChild(liObj);
    	for(var i = 0;i<3;i++){
    		var pObj = document.createElement('p');
			pObj.className = "mui-ellipsis";
		 	pObj.innerHTML='<i style="color:#8f8f94;">'+(i+1)+'  </i>'+arr[i].songname.split("(")[0]+'<span style="color:#8f8f94;padding-left:10px;">- '+arr[i].singername+'</span>';
		 	document.getElementById("onesev").appendChild(pObj);
    	}
    }
	//topid = 26
   	ajax("http://route.showapi.com/213-4",{	showapi_appid:35226,
    										showapi_sign:'9311eb2b16ff4b33baefd9a47b1238be',
    										topid:26
    									},'get',twoSix,true);
    function twoSix(data){
    	var data = JSON.parse(data);
    	var arr = data.showapi_res_body.pagebean.songlist;
    	var liObj = document.createElement('li');
    	liObj.className = "mui-table-view-cell mui-media";
	 	liObj.innerHTML='<a href="javascript:;"><img class="mui-media-object mui-pull-left" src="img/'+
	 					num[0]+'"><div class="mui-media-body" id="twosix"><h4>巅峰榜：热歌</h4><span class="gt">&gt;</span></div></a>';
		document.getElementById("list").appendChild(liObj);
    	for(var i = 0;i<3;i++){
    		var pObj = document.createElement('p');
			pObj.className = "mui-ellipsis";
		 	pObj.innerHTML='<i style="color:#8f8f94;">'+(i+1)+'  </i>'+arr[i].songname.split("(")[0]+'<span style="color:#8f8f94;padding-left:10px;">- '+arr[i].singername+'</span>';
		 	document.getElementById("twosix").appendChild(pObj);
    	}
    }
   
   
	 
			

	