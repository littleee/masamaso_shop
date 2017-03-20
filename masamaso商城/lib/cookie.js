//创建cookie
function createCookie(name,value,expires,path,domain,secure){
	var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	//检测expires是否为Date的一个实例对象
	if (expires instanceof Date){
		//给cookie加一个参数（过期时间）
		cookieText += ';expires=' + expires;
		
	}
	if(path){
		cookieText+= ";path="+path;	
	}
	if(domain){
		cookieText+=";domain="+domain;
	}
	if(secure){
		cookieText+=";secure";
	}
	document.cookie = cookieText;
	
}


//设置失效时间
function setCookieTime(day){
	var date = null;
	if (typeof day =='number'&&day > 0){
		date = new Date();
		date.setDate(date.getDate() + day);
	}
	return date;
}
//获取cookie
function getCookie (name){
	//获取用户查找的字符串
	var cookieName = encodeURIComponent(name)+"=";
	//获取查找字符串的下标
	var cookieStart = document.cookie.indexOf(cookieName);
	//在可以找到用户查找的字符串的情况下，继续查找要截取字符的结束位置
	var cookieValue ="";
	if (cookieStart>-1){
		//从用户查找的字符串开始查找“;"的位置
		var cookieEnd = document.cookie.indexOf(";",cookieStart);
		if (cookieEnd ==-1){
		//如果返回-1，说明没查到，已经找到了字符串的末尾	
			cookieEnd =document.cookie.length;
			//将整个字符串的长度作为结束位置
		}	
		//截取指定字符串并解码
		cookieValue = decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
	}else {
		return false;
	}
	return cookieValue;
	}
	//删除cookie
	function removeCookie(name){
		name = encodeURIComponent(name);
		document.cookie = name +'=;expires'+new Date(0);//1970年
	}
