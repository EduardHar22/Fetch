"use strict"


function onSearchClick(){

    let searchInput = document.querySelector(".search_input");
    let containerSearch = document.querySelector(".container_search");
    let countryName = document.querySelector(".country_name")
    let population = document.querySelector(".population");
    let region = document.querySelector(".region");
    let language = document.querySelector(".language");
    let capital = document.querySelector(".capital");
    let image = document.querySelector(".dinamic_image");
    let container_info = document.querySelector(".container_info");
    
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        for(let i = 0; i < data.length; i++){
            if(searchInput.value.toLowerCase() === data[i].name.common.toLowerCase()) {
                image.src = data[i].flags.png;
                countryName.innerHTML = `Country Name : ${data[i].name.common}`;
                population.innerHTML = `Population : ${data[i].population}`;
                region.innerHTML = `Region : ${data[i].region}`;
                language.innerHTML = `Language : ${Object.values(data[i].languages)}`;
                capital.innerHTML = `Capital : ${data[i].capital}`
                containerSearch.style.display = "none";
                container_info.style.display = "flex"
            }
        }
    }) 
}

function reLoad() {
    window.location.reload()
}

let searchButton = document.querySelector(".search_button");
let reloadBtn = document.querySelector(".reload_btn")
searchButton.addEventListener("click", onSearchClick);
reloadBtn.addEventListener('click', reLoad);