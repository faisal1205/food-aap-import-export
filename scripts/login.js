import navbar from "../componenets/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

let login = async () =>
{
    let user_data = 
    {
        username : document.getElementById("username").value,
        password : document.getElementById("password").value,
    }

    user_data = JSON.stringify(user_data)

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
        method : "POST",
        body : user_data,
         // mode : "no-cors",
        headers : {
            "Content-Type": "application/json"
        },
    }
    );

    let data = await res.json()

    let username = document.getElementById("username").value

    getUserDetails(username,data.token)

    console.log(data)
};
document.getElementById("submit").addEventListener("click",login)

let getUserDetails = async(username,token) =>
{
  let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{

    headers : {
        "Authorization": `Bearer ${token}`,
              },
  })

  let userData = await res.json()

  //console.log("user data",userData)
  appendUserData(userData)

}

function appendUserData(data)
{
    console.log(data)

    document.getElementById("userDetails").innerHTML = null

    let div = document.createElement("div")

    let name = document.createElement("p")
    name.innerText = ` User Name : ${data.name}`
  
    let userName = document.createElement("p")
    username.innerText =  `User Name : ${data.username}`
  
    let email = document.createElement("p")
    email.innerText = `Email :  ${data.email}`
  
    let mobile = document.createElement("p")
    mobile.innerText =  `Mobile Number : ${data.mobile}`
  
   
    let description = document.createElement("p")
    description.innerText = ` Description : ${data.description}`
  
    div.append(name,userName,email,mobile,description)
  
    document.getElementById("userDetails").append(div)
}