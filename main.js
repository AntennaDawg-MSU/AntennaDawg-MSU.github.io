const categorySelect = document.getElementById("categorySelect");
const subCategorySelect = document.getElementById("subCategorySelect");
const versionSelect = document.getElementById("versionSelect");

const categories = {
    "Homework 3": "./homework3/guide.js"
};

let currentData = null;


// Populate category dropdown
async function loadCategories(){
    const selected = categorySelect.value;
    const module = await import(categories[selected]);
    console.log(module);
    for (let category in categories){

        let option = document.createElement("option");
        option.value = category;
        option.text = category;

        categorySelect.appendChild(option);
    }
}


// Load category file
async function loadCategory(){

    const selected = categorySelect.value;

    const module = await import(categories[selected]);

    currentData = module[Object.keys(module)[0]];

    populateQuestions();
}


// Populate question dropdown
function populateQuestions(){

    subCategorySelect.innerHTML = "";

    for (let question in currentData){

        let option = document.createElement("option");
        option.value = question;
        option.text = question;

        subCategorySelect.appendChild(option);
    }

    populateVersions();
}


// Populate version dropdown
function populateVersions(){

    versionSelect.innerHTML = "";

    let question = subCategorySelect.value;

    let versions = currentData[question];

    versions.forEach(v => {

        let option = document.createElement("option");
        option.value = v;
        option.text = v;

        versionSelect.appendChild(option);

    });

}


// Event listeners
categorySelect.addEventListener("change", loadCategory);
subCategorySelect.addEventListener("change", populateVersions);


// Start
loadCategories();
loadCategory();
