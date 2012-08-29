

//Placeholder auswählen
var el= document.getElementById("myDiv");
		//Inhalt laden:
		if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
    	xmlhttp=new XMLHttpRequest();
		}
		else
		{// code for IE6, IE5
    		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("GET","ausbildungstand.md",false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseText;

		el.innerHTML =xmlDoc;

		//Konvertieren aus Markdown in das normale HTML:
		var converter = new Showdown.converter();
		el.innerHTML =converter.makeHtml(xmlDoc);

//Click-Ereigniss anbinden:
var el = document.getElementById("logo").addEventListener('click', nextContent);
var contentCounter=0;
var maxContents;
var listsToPopup=  document.querySelectorAll("ul");
maxContents= listsToPopup.length;
var tempUrl= window.location.href;

//var elLogo = $('#logoFH');
//var elLogo=document.getElementById("logoFH");
//elLogo.addEventListener('click', logoMove);
//function logoMove()
//{
	//alert("ku");
	//document.getElementById("logoFH").offset().top=10px;

//}


function nextContent(){
 	
var tempInhalt = listsToPopup[contentCounter].outerHTML;
listsToPopup[contentCounter].outerHTML= "<div class='list '" + " id='aListedContent" + contentCounter+"'" + tempInhalt + "</div>";
$("#aListedContent"+contentCounter).addClass("hero-unit");
if (contentCounter>0) {
	var cc2=contentCounter-1;
	$("#aListedContent"+cc2).removeClass("hero-unit");
};

//Scroll zum markierten Element:
$('html, body').animate({
                    scrollTop: $("#aListedContent"+contentCounter).offset().top - 230
                     }, 1000);

contentCounter++;

}


//Reparsen und Style anwenden:
var elements = document.querySelectorAll("h1");
	for (var i = elements.length - 1; i >= 0; i--) {
		var tempInhalt = elements[i].outerHTML;
		elements[i].outerHTML= "<div class='navbar-fixed-top hero-unit'>" + tempInhalt + "</div>";
	};

elements = document.querySelectorAll("h2");
	for (var i = elements.length - 1; i >= 0; i--) {
		var tempInhalt = elements[i].outerHTML;
		elements[i].outerHTML= "<div class='navbar-left'>" + tempInhalt + "</div>";
	};
elements = document.querySelectorAll("h3");
	for (var i = elements.length - 1; i >= 0; i--) {
		var tempInhalt = elements[i].outerHTML;
		elements[i].outerHTML= "<div class='nav-collapse'>" + tempInhalt + "</div>";
	};
/*elements = document.querySelectorAll("li");

	for (var i = elements.length - 1; i >= 0; i--) {
		var tempInhalt = elements[i].outerHTML;
		elements[i].outerHTML= "<small>" + tempInhalt + "</small>";
	};*/


	//zurückgehen
	document.getElementById('myDiv').addEventListener('click', prevContent);

	function prevContent(){
        contentCounter--;
	if (contentCounter>0) {
	var cc2=contentCounter-1;

		$("#aListedContent"+cc2).addClass("hero-unit");
		$("#aListedContent"+contentCounter).removeClass("hero-unit");
		$('html, body').animate({
                    scrollTop: $("#aListedContent"+cc2).offset().top - 230
                     }, 1000);
							};
	}

	//Ende:
	$("body").delegate("h1", "click", function(){
      $(this).after('<p> </p><p><img id="porky" class="offset3 imgPorky" src="img/porky.jpg"></p>');
    });