let slideIndex = 0;
function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Move to the next slide
    slideIndex++;

    // If at the end of the slides, start from the first slide
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 5 seconds
    setTimeout(showSlides, 3000);
}

// Portfolio Page

document.addEventListener("DOMContentLoaded", function () {
    showSlides();
});


const gallery = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('loadMoreBtn');

const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg'
];

let currentIndex = 0;

function loadImages(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
        const img = document.createElement('img');
        img.src = images[i];
        img.alt = `Image ${i + 1}`;
        img.classList.add('image');
        img.addEventListener('click', () => showImage(i));
        gallery.appendChild(img);
    }
}

function showImage(index) {
    alert(`You clicked on Image ${index + 1}`);
}

function loadMoreImages() {
    const nextIndex = currentIndex + 2;
    if (nextIndex <= images.length) {
        loadImages(currentIndex, nextIndex);
        currentIndex = nextIndex;

        if (currentIndex >= images.length) {
            loadMoreBtn.style.display = 'none';
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.getElementById("project-list");
    const loadMoreButton = document.getElementById("load-more");
    let projectsData = [
        {
            title: "Kids Coding Camp",
            description: "Harmony Hub's Kids Coding Camp introduces young minds to the fun of coding through games and creative projects, making technology an exciting learning experience for our little ones.",
            imageSrc: "./images/mb.jpg"
        },

        {
            title: "Weather Fullstack Development application",
            description: "Put our students to the test by developing a full stack weather application with the introduction to apis",
            imageSrc: "./images/73775e02-6a6e-4429-a515-0b57ef08538a-cover.png"
        },

        {
            title: "Networking social media app",
            description: "Created a social media application that developers use to network with each other",
            imageSrc: "./images/Torque_Network-1024x517.jpg"
        },

        {
            title: "Ebook organization app",
            description: "Members can organize their books in one place",
            imageSrc: "./images/Torque_Network-1024x517.jpg"
        },

        {
            title: "Created a yooutube channel to teach students abroad",
            description: "Experience the vibrant talent of our community in Harmony Hub's Local Art Showcase. From paintings to sculptures, join us in celebrating the creativity that makes our neighborhood unique.",
            imageSrc: "./images/mb.jpg"
        }
    ];
    const projectsPerPage = 4;
    let projectsToShow = projectsData.slice(0, projectsPerPage);

    /**
     * this takes the project data and spits out cards
     * @param project the actual project data
     * @returns {HTMLDivElement}
     */
    function createProjectCard(project) {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
            <img src="${project.imageSrc}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        return card;
    }

    /**
     * It takes the project data and it renders it
     * @param projects the actual project data
     */
    function renderProjects(projects) {
        projects.forEach((project) => {
            const card = createProjectCard(project);
            projectList.appendChild(card);
        });
    }

    /**
     * It takes the project data and displays it when we hit load more
     */
    function loadMoreProjects() {
        const remainingProjects = projectsData.slice(projectsToShow.length, projectsToShow.length + projectsPerPage);
        projectsToShow = projectsToShow.concat(remainingProjects);

        renderProjects(remainingProjects);

        if (projectsToShow.length === projectsData.length) {
            loadMoreButton.style.display = "none";
        }
    }

    loadMoreButton.addEventListener("click", loadMoreProjects);

    // Initial rendering of projects
    renderProjects(projectsToShow);
});


// Initial load
loadMoreImages();


// Helper function to check if a value is empty
function isEmpty(value) {
    return value.trim() === '';
}


// Function to create the footer element
/**
 * Function to create the footer element
 */
function createFooter() {
    // Create footer element
    const footer = document.createElement("footer");
    footer.className = "bg-dark text-white mt-5 fixed-bottom";

    // Create navbar inside the footer
    const navbar = document.createElement("nav");
    navbar.className = "navbar navbar-expand-lg bg-body-tertiary";

    // Create container inside the navbar
    const container = document.createElement("div");
    container.className = "container-fluid";

    // Create button for toggling navigation
    const button = document.createElement("button");
    button.className = "navbar-toggler";
    button.type = "button";
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", "#navbarSupportedContent");
    button.setAttribute("aria-controls", "navbarSupportedContent");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Toggle navigation");

    // Create span for the toggler icon
    const span = document.createElement("span");
    span.className = "navbar-toggler-icon";

    // Appending the span to the button
    button.appendChild(span);

    // Appending the button to the container
    container.appendChild(button);

    // Create navbar content inside the container
    const navbarContent = document.createElement("div");
    navbarContent.className = "collapse navbar-collapse";
    navbarContent.id = "navbarSupportContent";

    // Create unordered list inside the navbar content
    const ul = document.createElement("ul");
    ul.className = "navbar-nav me-auto mb-2 mb-lg-0";

    // Create list items for the navbar links
    const navItems = [
        { text: "Privacy Policy", icon: "fa-shield-halved", href: "./privacypolicy.html" },
        { text: "Terms of Service", icon: "fa-envelope-open-text", href: "./termsofservice.html" },
        { text: "Contact", icon: "fa-inbox", href: "./contact.html" },
    ];

    // Loop through the navItems and create list items
    navItems.forEach((item) => {
        const li = document.createElement("li");
        li.className = "nav-item";

        const a = document.createElement("a");
        a.className = "nav-link";
        a.href = item.href;

        const icon = document.createElement("i");
        icon.className = `fa-solid ${item.icon}`;

        const text = document.createTextNode(` ${item.text}`);

        // Appending the icon and text to the link
        a.appendChild(icon);
        a.appendChild(text);

        // Appending the link to the list item
        li.appendChild(a);

        // Appending the list item to the unordered list
        ul.appendChild(li);
    });

    // Appending the unordered list to the navbar content
    navbarContent.appendChild(ul);

    // Appending the navbar content to the container
    container.appendChild(navbarContent);

    // Appending the container to the navbar
    navbar.appendChild(container);

    // Appending the navbar to the footer
    footer.appendChild(navbar);

    // Appending the footer to the body
    document.body.appendChild(footer);
}

// Call the createFooter function to generate and append the footer
createFooter();



function validateForm() {
    // Get form inputs
    let fullName = document.getElementById('fullName').value;
    let subject = document.getElementById('subject').value;
    let emailAddress = document.getElementById('emailAddress').value;
    let message = document.getElementById('message').value;

    // Check if required fields are empty
    if (fullName === '' || subject === '' || emailAddress === '' || message === '') {
        alert('Please fill in all required fields.');
        return false;
    }

    // Check email format
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
        alert('Please enter a valid email address.');
        return false;
    } else {


        if (confirm('Thank you for your submission! You will be redirected to the Home page in 5 seconds.')) {
            setTimeout(function () {
                window.location.href = './index.html';
            }, 5000);
        }
    }
    return false
}

(function() {
    document.addEventListener("DOMContentLoaded", function () {
        // Dynamically add 'Careers' link
        const careersLink = document.createElement("li");
        careersLink.classList.add("nav-item");
        careersLink.innerHTML = '<a class="nav-link" href="careers.html"><i class="fa-solid fa-briefcase"></i> Careers</a>';

        const navbarLinks = document.querySelector(".navbar-nav");
        navbarLinks.appendChild(careersLink);

        // Programmatically change 'Blog' link to 'News'
        const blogLink = document.querySelector(".nav-link[href='blog.html']");
        blogLink.innerHTML = '<i class="fa-solid fa-newspaper"></i> News';

    });
})();

function showModal(name, role, image, description) {
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("modal-content");

    // Display the modal
    modal.style.display = "block";

    // Populate modal content with team member details
    modalContent.innerHTML = `
        <img src="${image}" alt="${name}" style="width: 100%; border-radius: 50%;">
        <h2>${name}</h2>
        <p>${role}</p>
        <p>${description}</p>
    `;
}


function closeModal() {
    const modal = document.getElementById("myModal");

    // Hide the modal
    modal.style.display = "none";
}