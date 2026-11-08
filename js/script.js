// =====================================
// LEARNOVA - BASIC INTERACTIONS
// =====================================

// Login button
const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", function () {
    alert("Login page will be added in the next step.");
});


// Sign up button
const signupButton = document.querySelector(".signup-btn");

signupButton.addEventListener("click", function () {
    alert("Sign Up page will be added in the next step.");
});


// Start Learning button
const startLearningButton =
    document.querySelector(".primary-btn");

startLearningButton.addEventListener("click", function () {
    alert("Learn section will be connected here.");
});


// Explore Opportunities button
const opportunitiesButton =
    document.querySelector(".secondary-btn");

opportunitiesButton.addEventListener("click", function () {
    alert("Opportunities section will be connected here.");
});



function openSellForm() {

    document.getElementById("sellForm").style.display = "flex";

}


function closeSellForm() {

    document.getElementById("sellForm").style.display = "none";

}
function addItem() {

    let name =
        document.getElementById("itemName").value.trim();

    let category =
        document.getElementById("itemCategory").value;

    let price =
        document.getElementById("itemPrice").value;

    let description =
        document.getElementById("itemDescription").value.trim();


    if (
        name === "" ||
        category === "" ||
        price === "" ||
        description === ""
    ) {

        alert("Please fill all the fields.");

        return;

    }


    let items =
        JSON.parse(localStorage.getItem("learnovaItems")) || [];


    let newItem = {

        name: name,

        category: category,

        price: price,

        description: description

    };


    items.push(newItem);


    localStorage.setItem(
        "learnovaItems",
        JSON.stringify(items)
    );


    alert("Item added successfully!");


    closeSellForm();


    document.getElementById("itemName").value = "";

    document.getElementById("itemCategory").value = "";

    document.getElementById("itemPrice").value = "";

    document.getElementById("itemDescription").value = "";


    displayUserItems();

}
function displayUserItems() {

    let items =
        JSON.parse(localStorage.getItem("learnovaItems")) || [];

    let products =
        document.getElementById("products");


    items.forEach(function(item) {

        let card =
            document.createElement("div");

        card.className = "product-card";

        card.setAttribute(
            "data-category",
            item.category
        );


        let icon = "📦";


        if (item.category === "books") {
            icon = "📚";
        }

        else if (item.category === "electronics") {
            icon = "💻";
        }

        else if (item.category === "equipment") {
            icon = "🔬";
        }

        else if (item.category === "notes") {
            icon = "📝";
        }


        card.innerHTML = `

            <div class="product-icon">
                ${icon}
            </div>

            <span class="tag">
                ${item.category}
            </span>

            <h3>
                ${item.name}
            </h3>

            <p>
                ${item.description}
            </p>

            <div class="price">
                ₹${item.price}
            </div>

            <button
                class="product-btn"
                onclick="contactSeller('${item.name}')"
            >
                Contact Seller
            </button>

        `;


        products.appendChild(card);

    });

}
displayUserItems();

function openSellForm() {

    document.getElementById("sellForm").style.display = "flex";

}


function closeSellForm() {

    document.getElementById("sellForm").style.display = "none";

}