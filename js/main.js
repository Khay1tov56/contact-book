let elForm = document.querySelector(".form");
let elInputName = document.querySelector(".name");
let elInputRelation = document.querySelector(".relation");
let elInputNumber = document.querySelector(".number");
let elContact = document.querySelector(".Contact");
let newUllist = document.createElement("ul");
let newDelete = document.createElement("button")
let newArr = [];


function deleteItem(evt) {
    evt.parentElement.remove()
}

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let elInputNameValue = elInputName.value;
    let elInputRelationValue = elInputRelation.value;
    let elInputNumberValue = elInputNumber.value;

    let newObj = {
        id: newArr.length,
        name: elInputNameValue,
        relation: elInputRelationValue,
        number: elInputNumberValue,
    }

    newArr.push(newObj);

    elInputName.value = "";
    elInputRelation.value = "";
    elInputNumber.value = "";
    newUllist.innerHTML = "";

    for (let arr of newArr) {
        let newItem = document.createElement("li");
        let newTitle = document.createElement("h2");
        let newParag = document.createElement("p");
        let newNum = document.createElement("a");
        let newBtn = document.createElement("button");
        newBtn.textContent = "Delete"
        newBtn.setAttribute("onclick", "deleteItem(this)")

        newNum.href = "tel:[number]";

        newTitle.textContent = arr.name;
        newParag.textContent = arr.relation;
        newNum.textContent = arr.number;

        newUllist.classList.add("list-unstyled", "text-start")

        newItem.appendChild(newTitle);
        newItem.appendChild(newParag);
        newItem.appendChild(newNum);
        newItem.appendChild(newBtn);
        newUllist.appendChild(newItem);
        elContact.appendChild(newUllist);
    }
    

});

