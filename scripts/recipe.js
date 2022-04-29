
import navbar from "../componenets/navbar.js";

document.getElementById("navbar").innerHTML = navbar()



let url ="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
function fetchData()
{
    fetch(url)
    .then(function(res)
    {
            return res.json()
    })
    .then(function(res)
    {
           // console.log(res.meals)
             appendData(res.meals)
            
          
    })
    .catch(function(err)
    {
            console.log(err)
    })
}

fetchData()
function appendData(data)
{
    console.log(data[0])
  
    let div = document.createElement("div")
       
        let image = document.createElement("img")
        image.src =data[0].strMealThumb
        let p = document.createElement("p")
        p.innerText = data[0].strMeal
        var strCat = document.createElement("p")
         strCat.innerText=  data[0].strCategory

         div.append(image,p,strCat)

         document.getElementById("display").append(div)

       
    
}