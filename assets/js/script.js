const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    navMenu.classlist.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link=> {
    link.addEventListener("click", () => {
        navMenu.classlist.remove("active");
    });
});

const navLink = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let scrollpos = window.pageYOffset;

    sections.forEach(section => {
        let top = section.offsetTop - 120;
        let bottom = top + section.offsetHeight;

        if (scrollpos >= top && scrollpos < bottom) {
            let id = section.getAttribute("id");

        navLink.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") == '#$(id)') {
              link.classList.add("active");

            }
        });
        }
    });
});


const themeToggle = document.getElementById("theme-toggle");


if (localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () =>{
    document.body.classList.toggle("dark-mode");

if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "light");
} else {
    localStorage.setItem("theme", "light");
}
});


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name == "" || email == "" || message == "") {
        alert("harap isi semua field!");
        return;
    } 
    
    alert("pesan berhasil dikirim!\nTerimakasih telah menghubungi abang :*");

contactForm.reset();
});