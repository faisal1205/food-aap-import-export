
import navbar from "../componenets/navbar.js";

document.getElementById("navbar").innerHTML = navbar()



function fetchData()
{
    
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php"  //using templete literal we can use variable inside and string sath mai

    
    fetch(url)
    .then(function(res)
   {
       // console.log(res)
    return res.json()
   })
   .then(function(res){
   console.log(res)
 
    appendFunction(res.categories)

    })
    .catch(function(err)
    {
    console.log(err)

    })
}
fetchData()


function appendFunction(data)
{
    let display = document.getElementById("display")
    

    data.forEach(function(ele)
    {
        let div = document.createElement("div")
        let image = document.createElement("img")
        image.src = ele.strCategoryThumb
        let p = document.createElement("p")
        p.innerText = ele.strCategory

        div.append(image,p)

        display.append(div)
    })
    
}