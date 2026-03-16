// ----- DATA STRUCTURE -----

const topics = {

    "Homework 3": ".homework3/guide.js"
};


// ----- GET ELEMENTS -----

const categorySelect = document.getElementById("categorySelect");
const subCategorySelect = document.getElementById("subCategorySelect");
const versionSelect = document.getElementById("versionSelect");


// ----- INITIALIZE CATEGORY DROPDOWN -----

function loadCategories() {

    for (let category in topics) {

        let option = document.createElement("option");
        option.value = category;
        option.text = category;

        categorySelect.appendChild(option);
    }

    loadSubCategories();
}


// ----- LOAD SUBCATEGORIES -----

function loadSubCategories() {

    subCategorySelect.innerHTML = "";

    let selectedCategory = categorySelect.value;

    let subs = topics[selectedCategory];

    subs.forEach(function(sub){

        let option = document.createElement("option");
        option.value = sub;
        option.text = sub;

        subCategorySelect.appendChild(option);
    });

}


// ----- EVENT LISTENERS -----

categorySelect.addEventListener("change", loadSubCategories);


// ----- START -----
document.addEventListener("DOMContentLoaded",function(){
loadCategories();
});
