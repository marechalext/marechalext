/*
 *
 *	19:02
 *	13/04/2021
 *
 */

/* h6 */
document.addEventListener('DOMContentLoaded',function(event){
	let txt = ["&copy; Copyright 2021 | Todos os direitos reservados ao Marechal Ex."];
	
	function writer(text, i, funcCallBack) {
		if(i < (text.length)) {
			document.querySelector("h6").innerHTML = text.substring(0,i+1) + '<span aria-hidden="true"></span>';
			setTimeout(function(){writer(text, i+1, funcCallBack)}, 100);
		} else if(typeof funcCallBack == 'function') {
			setTimeout(funcCallBack, 700);
		}
	}
	
	function animation(i) {
		if(typeof txt[i] == 'undefined') {
			setTimeout(function(){animation(0);},8000);
		}
		if(i < txt[i].length) {
			writer(txt[i], 0, function(){animation(i+1);});
		}
	}
	
	animation(0);
});