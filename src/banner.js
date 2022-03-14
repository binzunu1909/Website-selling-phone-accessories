	var i=0;
	var img=[];
	var time=3000;
function chuyenanh() {
	img[0]='./image/chuyen1.gif';
	img[1]='./image/banner1.gif';
	img[2]='./image/banner2.gif';
	img[3]='./image/giamgia3.gif';
	document.slide.src=img[i];
	var elem = document.getElementById("spnoibat1");
	cssObj = window.getComputedStyle(elem, null);
	var tt =cssObj.getPropertyValue("display");
	if(tt=="none"){
	document.getElementById('spnoibat1').style.display = "block";
	document.getElementById('spnoibat2').style.display = "none";
	document.getElementById('spnoibat3').style.display = "block";
	document.getElementById('spnoibat4').style.display = "none";
	document.getElementById('spnoibat5').style.display = "block";
	document.getElementById('spnoibat6').style.display = "none";
	document.getElementById('spnoibat7').style.display = "block";
	document.getElementById('spnoibat8').style.display = "none";
	}
	else
	{
		phai();
	}
	var elem1 = document.getElementById("spnoibat11");
	cssObj1 = window.getComputedStyle(elem1, null);
	var tt1 =cssObj.getPropertyValue("display");
	if(tt=="none"){
	document.getElementById('spnoibat11').style.display = "block";
	document.getElementById('spnoibat12').style.display = "none";
	document.getElementById('spnoibat13').style.display = "block";
	document.getElementById('spnoibat14').style.display = "none";
	document.getElementById('spnoibat15').style.display = "block";
	document.getElementById('spnoibat16').style.display = "none";
	document.getElementById('spnoibat17').style.display = "block";
	document.getElementById('spnoibat18').style.display = "none";
	}
	else
	{phai1();}
	var elem2 = document.getElementById("spnoibat21");
	cssObj2 = window.getComputedStyle(elem2, null);
	var tt2 =cssObj.getPropertyValue("display");
	if(tt=="none"){
	document.getElementById('spnoibat21').style.display = "block";
	document.getElementById('spnoibat22').style.display = "none";
	document.getElementById('spnoibat23').style.display = "block";
	document.getElementById('spnoibat24').style.display = "none";
	document.getElementById('spnoibat25').style.display = "block";
	document.getElementById('spnoibat26').style.display = "none";
	document.getElementById('spnoibat27').style.display = "block";
	document.getElementById('spnoibat28').style.display = "none";
	}
	else
	{phai2();}
	if(i<img.length-1){
		i++;
	}
	else{
		i=0;
	}
	setTimeout("chuyenanh()",time);
}
window.onload=chuyenanh;
function tiep(){
	if(i+1>img.length-1){
			i=0;
		}
		else{
			i++;
		}
		chuyen();
}
function lui(){
	if(i==0){
		i=3;
	}
	else{
		i--;
	}
	chuyen()
}
function chuyen(){
	document.slide.src=img[i];
	setTimeout("chuyen()",time);
}
function trai(){
	var elem = document.getElementById("spnoibat1");
	cssObj = window.getComputedStyle(elem, null);
	var tt =cssObj.getPropertyValue("display");
	if(tt=="none"){
	document.getElementById('spnoibat1').style.display = "block";
	document.getElementById('spnoibat2').style.display = "none";
	document.getElementById('spnoibat3').style.display = "block";
	document.getElementById('spnoibat4').style.display = "none";
	document.getElementById('spnoibat5').style.display = "block";
	document.getElementById('spnoibat6').style.display = "none";
	document.getElementById('spnoibat7').style.display = "block";
	document.getElementById('spnoibat8').style.display = "none";
	}
	else
	{
		phai();
	}
}

function phai(){
	var elem = document.getElementById("spnoibat1");
	cssObj = window.getComputedStyle(elem, null);
	var tt =cssObj.getPropertyValue("display");
	if(tt=="block"){
	document.getElementById('spnoibat1').style.display = "none";
	document.getElementById('spnoibat2').style.display = "block";
	document.getElementById('spnoibat3').style.display = "none";
	document.getElementById('spnoibat4').style.display = "block";
	document.getElementById('spnoibat5').style.display = "none";
	document.getElementById('spnoibat6').style.display = "block";
	document.getElementById('spnoibat7').style.display = "none";
	document.getElementById('spnoibat8').style.display = "block";
	}
	else
	{trai();}
}
function trai1(){
	var elem = document.getElementById("spnoibat11");
	cssObj = window.getComputedStyle(elem, null);
	var tt =cssObj.getPropertyValue("display");
	if(tt=="none"){
	document.getElementById('spnoibat11').style.display = "block";
	document.getElementById('spnoibat12').style.display = "none";
	document.getElementById('spnoibat13').style.display = "block";
	document.getElementById('spnoibat14').style.display = "none";
	document.getElementById('spnoibat15').style.display = "block";
	document.getElementById('spnoibat16').style.display = "none";
	document.getElementById('spnoibat17').style.display = "block";
	document.getElementById('spnoibat18').style.display = "none";
	}
	else
	{phai1();}
}

function phai1(){
	var elem = document.getElementById("spnoibat11");
	cssObj = window.getComputedStyle(elem, null);
	var tt =cssObj.getPropertyValue("display");
	if(tt=="block"){
	document.getElementById('spnoibat11').style.display = "none";
	document.getElementById('spnoibat12').style.display = "block";
	document.getElementById('spnoibat13').style.display = "none";
	document.getElementById('spnoibat14').style.display = "block";
	document.getElementById('spnoibat15').style.display = "none";
	document.getElementById('spnoibat16').style.display = "block";
	document.getElementById('spnoibat17').style.display = "none";
	document.getElementById('spnoibat18').style.display = "block";
	}
	else
	{trai1();}
}
function trai2(){
	var elem = document.getElementById("spnoibat21");
	cssObj = window.getComputedStyle(elem, null);
	var tt =cssObj.getPropertyValue("display");
	if(tt=="none"){
	document.getElementById('spnoibat21').style.display = "block";
	document.getElementById('spnoibat22').style.display = "none";
	document.getElementById('spnoibat23').style.display = "block";
	document.getElementById('spnoibat24').style.display = "none";
	document.getElementById('spnoibat25').style.display = "block";
	document.getElementById('spnoibat26').style.display = "none";
	document.getElementById('spnoibat27').style.display = "block";
	document.getElementById('spnoibat28').style.display = "none";
	}
	else
	{phai2();}
}

function phai2(){
	var elem = document.getElementById("spnoibat21");
	cssObj = window.getComputedStyle(elem, null);
	var tt =cssObj.getPropertyValue("display");
	if(tt=="block"){
	document.getElementById('spnoibat21').style.display = "none";
	document.getElementById('spnoibat22').style.display = "block";
	document.getElementById('spnoibat23').style.display = "none";
	document.getElementById('spnoibat24').style.display = "block";
	document.getElementById('spnoibat25').style.display = "none";
	document.getElementById('spnoibat26').style.display = "block";
	document.getElementById('spnoibat27').style.display = "none";
	document.getElementById('spnoibat28').style.display = "block";
	}
	else
	{trai2();}
}


function keotrang(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(keotrang);
         window.scrollTo (0,currentScroll - (currentScroll/8));
    }
}