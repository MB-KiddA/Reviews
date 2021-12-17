//Local Review Data
const reviews = [{
    id: 1,
    name: "Alexis Clark",
    job: "Car Salesmen",
    img: "Person1.jpg",
    text: "My family liked cars so much they named me -A lexus-"
},
{
    id: 2,
    name: "Roy Rogers",
    job: "Janitor",
    img: "person2.jpg",
    text: "If you saw my name you'd assume Im 82; I'm 28 so it's pretty close"
},
{
    id: 3,
    name: "Austin Ally",
    job: "Chef",
    img: "person3.jpg",
    text: "This weird girl just started trying to chew on my jacket"
},
{
    id: 4,
    name: "Denim Dixxie",
    job: "Denim Enthusiast",
    img: "person4.jpg",
    text: "MM... I love denim, I have it in everything. I would eat it if I could..."
}
];

//Select Items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//Set starting Item
let currentItem = 0;

//load inital item
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

//show person based on comment

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

//show prev person

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

//show random person

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
