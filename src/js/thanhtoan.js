function hienthe()
{
	var box1=document.getElementById('tienmat');
	var box2=document.getElementById('the');
	var box3=document.getElementById('sothe');
	
	if(box1.checked==true)
	{
		box3.disabled=true;
		document.getElementById('loi4').innerHTML="";
	}
	else {
		box3.disabled=false;
		box3.focus();
	}
}
function KTTrong(a,b){
	var loi="Không để trống!";
	if(a==""){
		document.getElementById(b).innerHTML=loi;
		return false;
	}
	else{
		document.getElementById(b).innerHTML="";
		return true;
	}	
}
function KTThe()
{
	var box1=document.getElementById('tienmat');
	var box2=document.getElementById('the');
	var box3=document.getElementById('sothe');
	var sothe=box3.value;
	
	if(box1.checked==true)
	{
		return true;
	}
	else 
	{
		var ktthe=KTTrong(sothe,'loi4');
		if(ktthe==true) return true;
		else
			return false;
	}
}
function kiemtratt()
{
	var ten=document.getElementById('tennguoinhan').value;
	var diachi=document.getElementById('diachi').value;
	var sdt=document.getElementById('sdt').value;
	var ktten=KTTrong(ten,'loi1');
	var ktdiachi=KTTrong(diachi,'loi2');
	var ktsdt=KTTrong(sdt,'loi3');
	var ktthe=KTThe();
	if(ktten==true&&ktdiachi==true&&ktsdt==true&&ktthe==true)
	{
		alert('Bạn đã thanh toán thành công ');
		return true;
	}
	else
		return false;
}