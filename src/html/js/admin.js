function KiemTraDN(){
	var inputtaikhoan=document.getElementById('taikhoan').value;
	var inputmatkhau=document.getElementById('matkhau').value;
	var tk='lynhathao';
	var mk='lynhathao';
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

function thongbao1(){
	var tb=confirm('Bạn có chắc là muốn xóa !');
	if(tb==true){
		document.getElementById('sanpham1').style.display = "none";
	}
}
function thongbao2(){
	var tb = confirm('Bạn có chắc là muốn xóa !');
	if(tb==true){
		document.getElementById('sanpham2').style.display = "none";	
	}
}
function thongbao3(){
	var tb=confirm('Bạn có chắc là muốn xóa !');
	if (tb==true) {
		document.getElementById('sanpham3').style.display = "none";
	}
}
function thongbao4(){
	var tb = confirm('Bạn có chắc là muốn xóa !');
	if(tb==true){
		document.getElementById('sanpham4').style.display = "none";	
	}
}
function thongbao5(){
	var tb=confirm('Bạn có chắc là muốn xóa !');
	if(tb==true){
		document.getElementById('sanpham5').style.display = "none";
	}
}
function thongbao6(){
	var tb=confirm('Bạn có chắc là muốn xóa !');
	if(tb==true){
		document.getElementById('sanpham6').style.display = "none";
	}
}
function thongbao7(){
	var tb=confirm('Bạn có chắc là muốn xóa !');
	if(tb==true){
		document.getElementById('sanpham7').style.display = "none";
	}
}
function thongbao8(){
	var tb=confirm('Bạn có chắc là muốn xóa !');
	if(tb==true){
		document.getElementById('sanpham8').style.display = "none";
	}
}
function khoa(a,b){
	var elem = document.getElementById(a);
	cssObj = window.getComputedStyle(elem, null);
	var tt =cssObj.getPropertyValue("text-decoration");
	if(tt=="none solid rgb(0, 0, 0)"){
		var tb=confirm('Bạn có chắc là muốn khóa tài khoản !');
		if(tb==true){
			document.getElementById(a).style.textDecoration ="line-through";
		}
		else{
			var check =document.getElementById(b);
			check.checked=false;
		}
	}
	else{
		var tb=confirm('Bạn có chắc là muốn hủy khóa tài khoản !');
		if(tb==true){
			document.getElementById(a).style.textDecoration ="none";
		}
		else{
			var check =document.getElementById(b);
			check.checked=true;
		}
	}
}
function khoatk1(){
	khoa('tk1','khoa1');
}
function khoatk2(){
	khoa('tk2','khoa2');
}	
function khoatk3(){
	khoa('tk3','khoa3');
}
function suasp(){
	document.getElementById('suasp').style.zIndex="1000000";
	document.getElementById('mo').style.display="block";
	document.getElementById('body').style.overflow="hidden";
	document.getElementById('suasp').style.position="fixed";	
}
function thoat(){
	document.getElementById('mo').style.display="none";
	document.getElementById('body').style.overflow="scroll";
}
function tbsuasp(){
	var tb=confirm('Bạn có chắc là muốn thay đổi !');
	if(tb==true){
		alert('Bạn đã thay đổi thành công !')
	}
	else return false;
}
function themsp(){
	document.getElementById('suasp1').style.zIndex="1000000";
	document.getElementById('mo1').style.display="block";
	document.getElementById('body').style.overflow="hidden";
	document.getElementById('suasp1').style.position="fixed";	
}
function thoat1(){
	document.getElementById('mo1').style.display="none";
	document.getElementById('body').style.overflow="scroll";
}
function tbthemsp(){
	var ten=document.getElementById('tenspthem').value;
	var gia=document.getElementById('giaspthem').value;
	if(ten==""){
		alert('Bạn chưa điền tên sản phẩm');
		return false;
	}
	if(gia==""){
		alert('Bạn chưa điền giá sản phẩm');
		return false;
	}
	if(ten!=""&&gia!=""){
		var tb=confirm('Bạn có chắc là muốn thêm sản phẩm mới !');
		if(tb==true){
			alert('Bạn đã thêm sản phẩm thành công !')
		}
		else return false;
	}
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
	var loi="!";
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
 	var loi="Nhập lại không đúng !";
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
		alert("Bạn đã thêm tài khoản thành công !!!");
	}
}