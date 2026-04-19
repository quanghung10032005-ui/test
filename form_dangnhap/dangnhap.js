const loginBtn=document.getElementById("loginbtn");
const tklogin=document.getElementById("tendangnhap");
const mklogin=document.getElementById("password");
loginBtn.addEventListener("click", dangnhap);
function dangnhap()

{
    event.preventDefault();
    const tkValue = tklogin.value;
    const mkValue = mklogin.value;
    if(tkValue=="hung" && mkValue=="123"){
        alert("đăng nhập thành công")
        window.location.href = "trangchu.html";
    }
    else alert("sai tai khoan hoac mat khau");
}

