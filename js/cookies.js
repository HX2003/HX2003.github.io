
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
function deleteCookie(delcookie) {
	
	document.cookie = delcookie + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

	}
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}

function setCookieJson(name, value) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + 30);
	 
	var cookie = [name, '=',  LZString.compressToBase64(JSON.stringify(value)),';'].join('');
	document.cookie = cookie;
}
 
function cookietoviarble(cname){
	 newcookie = getCookie(cname);
	 eval(cname + "=" + newcookie + ";");
}

function doCookie(cname,initial) {
    thecookie = getCookie(cname);
    if (thecookie != "") {
  cookietoviarble(cname);
    } else {
     setCookie(cname, initial);
	 cookietoviarble(cname);
        }
    }
function setVar(variable,value){
	if(variable !== "undefined"){
		eval(""+variable+" = "+value+";");
	}
	
}
 function deleteallcookies(){
    var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++){   
            var spcook =  cookies[i].split("=");
            document.cookie = spcook[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC";                                
        }
    }