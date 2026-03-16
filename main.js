// ----- DATA STRUCTURE -----

const topics = {

    "Physics": [
        "Electromagnetics",
        "Mechanics",
        "Thermodynamics"
    ],

    "Mathematics": [
        "Calculus",
        "Linear Algebra",
        "Differential Equations"
    ],

    "Programming": [
        "Python",
        "JavaScript",
        "MATLAB"
    ]

};


// ----- GET ELEMENTS -----

const categorySelect = document.getElementById("categorySelect");
const subCategorySelect = document.getElementById("subCategorySelect");


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
