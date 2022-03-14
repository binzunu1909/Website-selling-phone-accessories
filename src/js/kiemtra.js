
function KiemTraDN(){
	var inputtaikhoan=document.getElementById('taikhoan').value;
	var inputmatkhau=document.getElementById('matkhau').value;
	var tk=JSON.parse(localStorage.getItem('tong'));
	console.log(tk);
	var tk1=tk[0].taikhoan;
	var mk1=tk[0].matkhau;
	alert(tk);
	var chuyen=0;
	if(inputtaikhoan==""){
		alert('Vui lòng điền tài khoản !');
		return false;
	}
	if(inputmatkhau==""){
		alert('Vui lòng điền mật khẩu !');
		return false;
	}
	if(inputtaikhoan==tk && inputmatkhau==mk){
		alert('Đăng nhập thành công !');
		return true;
	}else{
		 alert('Đăng nhập thất bại !');
		 return false;
	}
}
function KiemTraTK(){
	var tk=document.getElementById('taikhoan').value;
	if(tk==""){
		alert('Vui lòng điền tài khoản !');
		return false;
	}
	if(tk!="lynhathao"){
		alert("Tài khoản không tồn tại !");
		return false;
	}
	return true;
}
function KTTrong(a,b){
	var loi="Vui lòng không để trống !";
	if(a==""){
		document.getElementById(b).innerHTML=loi;
		return false;
	}
	else{
		document.getElementById(b).innerHTML="";
		return true;
	}	
}
function KTTrongNS(a,b,c,d){
	var loi="Vui lòng không để trống !";
	if(a==""||b==""||c==""){
		document.getElementById(d).innerHTML=loi;
		return false;
	}
	else{
		document.getElementById(d).innerHTML="";
		return true;
	}	
}
 function KTGiong(a,b,c){
 	var loi="Mật khẩu nhập lại không đúng !";
	if(a!=b){
		document.getElementById(c).innerHTML=loi;
		return false;
	}
	else{
		document.getElementById(c).innerHTML="";
		return true;
	}	
 }
function KiemTraDK(){
	var taikhoan=document.getElementById('taikhoan').value;
	var matkhau=document.getElementById('matkhau').value;
	var matkhau2=document.getElementById('matkhau2').value;
	var hoten=document.getElementById('hoten').value;
	var email=document.getElementById('email').value;
	var diachi=document.getElementById('diachi').value;
	var dienthoai=document.getElementById('dienthoai').value;
	var ngay=document.getElementById('ngay').value;
	var thang=document.getElementById('thang').value;
	var nam=document.getElementById('nam').value;
	var loi1=1,loi2=1,loi3=1,loi4=1,loi5=1,loi6=1,loi7=1;loi8=1,loi9=1,loi10=1,loi11=1;
	var kttk =KTTrong(taikhoan,'loitk');
	var ktmk =KTTrong(matkhau,'loimk');
	var ktmk2=KTTrong(matkhau2,'loimk2');
	var kthoten=KTTrong(hoten,'loihoten');
	var ktemail=KTTrong(email,'loiemail');
	var ktdiachi=KTTrong(diachi,'loidiachi');
	var ktdienthoai=KTTrong(dienthoai,'loidienthoai');
	var ktngay=KTTrongNS(ngay,thang,nam,'loingaysinh');
	if(ktmk2==true){
		 var ktmk3=KTGiong(matkhau,matkhau2,'loimk2');
	}
	if(kttk==true &&ktmk==true &&ktmk2==true &&ktmk3==true &&kthoten==true
		&&ktemail==true&&ktngay==true&&ktdiachi==true&&ktdienthoai==true){
		alert("Chúc mừng bạn đã đăng ký thành công !!!");
	}
}
function thongbao1(){
	var tb=confirm('Bạn có chắc là muốn xóa !');
	if(tb==true){
		document.getElementById('sanpham1').style.display = "none";
		tongtien();
	}
}
function thongbao2(){
	var tb = confirm('Bạn có chắc là muốn xóa !');
	if(tb==true){
		document.getElementById('sanpham2').style.display = "none";	
		tongtien();
	}
}
function thongbao3(){
	var tb=confirm('Bạn có chắc là muốn xóa !');{
		document.getElementById('sanpham3').style.display = "none";
		tongtien();
	}
}
function tang1(){
	var sl = document.getElementById('soluong1').innerHTML;
	var gia= document.getElementById('gia1').innerHTML;
	sl++; 
	gia=gia*sl;
	document.getElementById('soluong1').innerHTML=sl;
	if(gia<1000){
		document.getElementById('thanhtien1').innerHTML=gia+".000";
	}
	else{
		gia/=1000;
		document.getElementById('thanhtien1').innerHTML=gia+"0"+".000";
	}
	tongtien();
}
function giam1(){
	var sl = document.getElementById('soluong1').innerHTML;
	var gia= document.getElementById('gia1').innerHTML;
	
	if(sl>1){
		sl--;
		gia*=sl;
		document.getElementById('soluong1').innerHTML=sl;
	}
	else return false;
	if(gia<1000){
		document.getElementById('thanhtien1').innerHTML=gia+".000";
	}
	else{
		gia/=1000;
		document.getElementById('thanhtien1').innerHTML=gia+"0"+".000";
	}
	tongtien();
}
function tang2(){
	var sl = document.getElementById('soluong2').innerHTML;
	var gia= document.getElementById('gia2').innerHTML;
	sl++;
	gia++;gia--;
	gia=gia*sl;
	document.getElementById('soluong2').innerHTML=sl;
	if(gia<1000){
		document.getElementById('thanhtien2').innerHTML=gia+".000";
	}
	else{
		gia/=1000;
		document.getElementById('thanhtien2').innerHTML=gia+"0"+".000";
	}
	tongtien();
}
function giam2(){
	var sl = document.getElementById('soluong2').innerHTML;
	var gia= document.getElementById('gia2').innerHTML;
	
	if(sl>1){
		sl--;
		gia*=sl;
		document.getElementById('soluong2').innerHTML=sl;
	}
	else return false;
	if(gia<1000){
		document.getElementById('thanhtien2').innerHTML=gia+".000";
	}
	else{
		gia/=1000;
		document.getElementById('thanhtien2').innerHTML=gia+"0"+".000";
	}
	tongtien();
}
function tang3(){
	var sl = document.getElementById('soluong3').innerHTML;
	var gia= document.getElementById('gia3').innerHTML;
	sl++;
	gia++;gia--;
	gia=gia*sl;
	document.getElementById('soluong3').innerHTML=sl;
	if(gia<1000){
		document.getElementById('thanhtien3').innerHTML=gia+".000";
	}
	else{
		gia/=1000;
		document.getElementById('thanhtien3').innerHTML=gia+"0"+".000";
	}
	tongtien();
}
function giam3(){
	var sl = document.getElementById('soluong3').innerHTML;
	var gia= document.getElementById('gia3').innerHTML;
	
	if(sl>1){
		sl--;
		gia*=sl;
		document.getElementById('soluong3').innerHTML=sl;
	}
	else return false;
	if(gia<1000){
		document.getElementById('thanhtien3').innerHTML=gia+".000";
	}
	else{
		gia/=1000;
		document.getElementById('thanhtien3').innerHTML=gia+"0"+".000";
	}
	tongtien();
}
function tongtien(){
	var elem1 = document.getElementById("sanpham1");
	cssObj1 = window.getComputedStyle(elem1, null);
	var tt1 =cssObj1.getPropertyValue("display");
	
	var elem2 = document.getElementById("sanpham2");
	cssObj2 = window.getComputedStyle(elem2, null);
	var tt2 =cssObj2.getPropertyValue("display");
	
	var elem3 = document.getElementById("sanpham3");
	cssObj3 = window.getComputedStyle(elem3, null);
	var tt3 =cssObj3.getPropertyValue("display");
	var tien1= document.getElementById('thanhtien1').innerHTML;
	var tien2= document.getElementById('thanhtien2').innerHTML;
	var tien3= document.getElementById('thanhtien3').innerHTML;
	tien1=parseInt(tien1);
	tien2=parseInt(tien2);
	tien3=parseInt(tien3);
	if(tt1=="none"){
		tien1=0;
	}
	if(tt2=="none"){
		tien2=0;
	}
	if(tt3=="none"){
		tien3=0;
	}
	var tongtien=(tien1+tien2+tien3);
	if(tongtien<1000&&tongtien>0){
		document.getElementById('tongtien').innerHTML=tongtien+".000";
	}
	if(tongtien>1000){
		tongtien/=1000;
		document.getElementById('tongtien').innerHTML=tongtien+"0"+".000";
	}
	if(tongtien==0){
		document.getElementById('cuoi').style.display = "none";
		document.getElementById('trong').style.display = "block";
	}
}