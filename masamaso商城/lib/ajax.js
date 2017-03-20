function ajax(url,fnWin,fnFaild){
	var xhr = null;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xnr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.open("GET",url,true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				if(fnWin){
					fnWin(xhr.responseText);
				}
			}else{
				if(fnFaild){
					fnFaild();
				}
			}
		}
	}
}
