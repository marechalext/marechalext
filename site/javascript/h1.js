/*
 *
 *	19:02
 *	13/04/2021
 *
 */

/* h1 */
document.addEventListener('DOMContentLoaded',function(event){
	let txt = ["Seja bem-vindo(a) !", "Marechal Ex"];
	
	function writer(text, i, funcCallBack) {
		if(i < (text.length)) {
			document.querySelector("h1").innerHTML = text.substring(0,i+1) + '<span aria-hidden="true"></span>';
			setTimeout(function(){writer(text, i+1, funcCallBack)}, 100);
		} else if(typeof funcCallBack == 'function') {
			setTimeout(funcCallBack, 700);
		}
	}

	function animation(i) {
		if(typeof txt[i] == 'undefined') {
			setTimeout(function(){animation(0);},5000);
		}
		if(i < txt[i].length) {
			writer(txt[i], 0, function(){animation(i+1);});
		}
	}
	
	animation(0);
	
});