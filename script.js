
function replacePropertyElement(){
	/*При подключенной jQuery библиотеке*/
	if(window.jQuery){
		$(document).ready(main);
		function main(){
				replaceTag()
			}		
		}
		/*В случае, когда jQuery библиотека не подкючена*/
		else {
			document.addEventListener("DOMContentLoaded", ready);
			function ready(){
				var jqScript = document.createElement('script');
	            jqScript.type = 'text/javascript';
	            jqScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
	            var firstScript = document.getElementsByTagName('script')[0];
	            firstScript.parentNode.insertBefore(jqScript, firstScript);
			}
			 window.addEventListener("load", replaceTag)
		}

		/*Замена свойств, текста элемента*/
		function replaceTag(){
			
				$('p').css({
					color: 'green',
				});

				$('p').html("это параграф");

				$('li').css({
					color: 'green',
				});

				$('li').html("это элемент списка");
			}	
	/*--------------------------------------*/		
}



	replacePropertyElement();