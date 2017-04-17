// function changeAuthCode(){
//   var num = new Date().getTime();
//   var rand = Math.round(Math.random() * 10000);
//   num = num + rand;
//   if (ADS.$("vdimgck")) { ADS.$("vdimgck").src = "/include/vdimgck.php?tag=" + num; }
//   return false;	
// }

function checkMessage(){

if(document.form1.uname.value.length==0){
alert("您的姓名未填写");
document.form1.uname.focus();
return false;}

if(document.form1.phone.value.length==0){
alert("您联系电话未填写");
document.form1.phone.focus();
return false;
}else{
}

// if(document.form1.address.value.length==0){
// alert("您的地址未填写");
// document.form1.address.focus();
// return false;
// }else{
// }

// if(document.form1.validate.value.length==0){
// alert("验证码不能为空");
// document.form1.validate.focus();
// return false;}
// }
ADS.addEvent("phone","keyup",function(){this.value=this.value.replace(/[^0-9-]/g,'');});
//ADS.addEvent("mobile","keyup",function(){this.value=this.value.replace(/[^0-9-]/g,'');});