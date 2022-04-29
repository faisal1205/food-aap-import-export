import navbar from "../componenets/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

//console.log("in")

let id;
document.getElementById("search").addEventListener("input", function () {
        debounce(main, 200)
})


async function searchFunction() {
        let query = document.getElementById("search").value

        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`

        // fetch(url)
        //         .then(function (res) {
        //                 return res.json()
        //         })
        //         .then(function (res) {
        //                 console.log(res.meals)
        //                 // appendData(res)
        //                 let data = res.meals
        //                 return data
        //         })
        //         .catch(function (err) {
        //                 console.log(err)
        //         })
        try {
                let res = await fetch(url);
                res = await res.json();
                console.log(res.meals)
                return res.meals;

        } catch (err) {
                console.log(err)
        }

}

let display = document.getElementById("display")

function appendData(data) {
        display.innerHTML = null;
        console.log(data)
        data.forEach(function (ele) {
                var div = document.createElement("div")
                var title = document.createElement("p")

                title.innerText = ele.strMeal

                var image= document.createElement("img")
                image.src = ele.strMealThumb

                var cat = document.createElement("p")
                cat.innerText = ele.strCategory

                div.append(image,title,cat)
                display.append(div)

        })

}

async function main() {
        let data = await searchFunction()
       // console.log(data)
        if (data === undefined) {
                return false
        }

        appendData(data)
}


function debounce(func, delay) {
        if (id)             //for clearing previous id .. like for avengers .. itype a then ave then ave so previous ids should be clear
        {
                clearTimeout(id)
        }

        id = setTimeout(function () {
                func()
        }, delay)
}