function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;

    if (username == "himasi" && password == "himasi"){
        if(confirm("Apakah anda ingin login?")){
            window.location.href = "https://github.com/awaludin1505/mabim-fasilkomK.git";
        } else {
            alert("Membatalkan login !");
        }
    } else{
        if(done==0){
            alert("Username/password Salah!");
        }
    }
}