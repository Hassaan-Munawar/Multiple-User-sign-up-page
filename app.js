var arr =[]
function signup(){
    var getemail =document.getElementById("semail")
    var getpass =document.getElementById("spass")
    var obj ={
        email:getemail.value,
        pass:getpass.value
    }
    arr.push(obj)
    if(getemail.value == '' || getpass.value == ''){
        alert("Please fill the required fields")
    }
    else{
        localStorage.setItem("Data",JSON.stringify(arr))
        getemail.value =""
        getpass.value =""
    
        location.href = "login.html"
    }
  
}

function login(){
    var getemail = document.getElementById("lemail")
    var getname = document.getElementById('lname')
    var getpass = document.getElementById("lpass")
    var filters = arr.filter(function (data){
        return data.email == getemail.value && data.pass == getpass.value
    })
     if(getemail.value == '' || getpass.value == '' || getname.value == ''){
        alert("please fill the required fields")
    }
    else if(filters.length){
        alert("User login succcessful ..\n Now lets move on to the quiz.. ")
        getemail.value =""
        getpass.value = ""
    }
    else{
        alert("Email/Password incorrect")
    }

}

var getuser = localStorage.getItem("Data")
if(getuser !== null){
    arr = JSON.parse(getuser)
}