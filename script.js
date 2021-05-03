let list = document.querySelector(".list");
let add = document.querySelector(".btn-add");
let cross = document.querySelector("#cross");
let submit = document.querySelector(".submit");

add.addEventListener("click", () => {
    var newElement = document.createElement("LI");
    list.appendChild(newElement);
    newElement.innerHTML =
        document.querySelector("#Subject").value +
        "<button class='please'><i class='fa fa-trash' aria-hidden='true'></i></button>" +
        "<button class='please1'><i class='fa fa-check' aria-hidden='true'></i></button>";
    document.querySelector(".count").innerHTML = document.querySelector(
        ".list"
    ).childElementCount;
});

list.addEventListener("click", function(e) {
    if (e.target && e.target.nodeName == "BUTTON") {
        e.target.parentNode.remove();
        document.querySelector(".count").innerHTML = document.querySelector(
            ".list"
        ).childElementCount;
    }
});
list.addEventListener("click", function(e) {
    if (e.toElement.classList.contains("fa-trash")) {
        e.target.parentNode.parentNode.remove();
        document.querySelector(".count").innerHTML = document.querySelector(
            ".list"
        ).childElementCount;
    }
});
list.addEventListener("click", (e) => {
    if (e.toElement.className == "please1") {
        document.querySelector(".success").classList.remove("hidden");
        e.target.parentNode.remove();
    }
});

list.addEventListener("click", (e) => {
    if (e.toElement.classList.contains("fa-check")) {
        e.target.parentNode.parentNode.remove();
    }
});

const removeTask = function() {};

document.querySelector(".clr").addEventListener("click", () => {
    list.innerHTML = "";
    document.querySelector(".count").innerHTML = document.querySelector(
        ".list"
    ).childElementCount;
});

document.querySelector(".success_cross").addEventListener("click", () => {
    document.querySelector(".success").classList.add("hidden");
});