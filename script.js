/* ========================= */
/* NAVBAR SCROLL EFFECT */
/* ========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/* ========================= */
/* MOBILE MENU */
/* ========================= */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");

});

/* CLOSE MOBILE MENU WHEN CLICKING LINKS */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        hamburger.classList.remove("active");

    });

});

/* ========================= */
/* ACTIVE NAV LINK */
/* ========================= */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){

            link.classList.add("active");

        }

    });

});

/* ========================= */
/* SCROLL REVEAL ANIMATION */
/* ========================= */

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    reveals.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ========================= */
/* SCROLL PROGRESS BAR */
/* ========================= */

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = `${progress}%`;

});

/* ========================= */
/* CUSTOM CURSOR */
/* ========================= */

const cursor = document.querySelector(".custom-cursor");

/* DISABLE CURSOR ON MOBILE */

if(window.innerWidth > 768){

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

}

/* CURSOR HOVER EFFECT */

const hoverItems = document.querySelectorAll(
    "button, a, .product-card, .info-card"
);

hoverItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.style.transform =
            "translate(-50%, -50%) scale(1.8)";

    });

    item.addEventListener("mouseleave", () => {

        cursor.style.transform =
            "translate(-50%, -50%) scale(1)";

    });

});

/* ========================= */
/* PRODUCT CARD 3D TILT */
/* ========================= */

const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 20);
        const rotateY = ((centerX - x) / 20);

        card.style.transform =
            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.04)
            `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
            `;

    });

});

/* ========================= */
/* HERO IMAGE PARALLAX */
/* ========================= */

const heroImage = document.querySelector(".image-wrapper");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});

/* ========================= */
/* BUTTON RIPPLE EFFECT */
/* ========================= */

const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .add-cart-btn, .checkout-btn"
);

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripple = document.createElement("span");

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/* ========================= */
/* FAKE ADD TO CART */
/* ========================= */

const addCartButtons =
    document.querySelectorAll(".add-cart-btn");

const cartCount =
    document.querySelector(".cart-btn span");

let count = 2;

addCartButtons.forEach(button => {

    button.addEventListener("click", () => {

        count++;

        cartCount.innerText = count;

        button.innerText = "Added";

        button.style.background = "green";

        setTimeout(() => {

            button.innerText = "Add to Cart";

            button.style.background = "";

        }, 1500);

    });

});

/* ========================= */
/* QUANTITY CONTROLS */
/* ========================= */

const quantityControls =
    document.querySelectorAll(".quantity-controls");

quantityControls.forEach(control => {

    const minusBtn = control.children[0];
    const quantityText = control.children[1];
    const plusBtn = control.children[2];

    let quantity = 1;

    plusBtn.addEventListener("click", () => {

        quantity++;

        quantityText.innerText = quantity;

    });

    minusBtn.addEventListener("click", () => {

        if(quantity > 1){

            quantity--;

            quantityText.innerText = quantity;

        }

    });

});

/* ========================= */
/* FILTER BUTTON ACTIVE */
/* ========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});

/* ========================= */
/* FLOATING PARTICLES */
/* ========================= */

function createParticles(){

    const hero = document.querySelector(".hero");

    for(let i = 0; i < 20; i++){

        const particle =
            document.createElement("span");

        particle.classList.add("particle");

        particle.style.width =
            Math.random() * 10 + 5 + "px";

        particle.style.height =
            particle.style.width;

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            Math.random() * 10 + 5 + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        hero.appendChild(particle);

    }

}

createParticles();

/* ========================= */
/* PARTICLE ANIMATION STYLE */
/* ========================= */

const particleStyle =
`
.particle{

    position: absolute;
    bottom: -20px;
    background: rgba(255,255,255,0.4);
    border-radius: 50%;
    animation: particleMove linear infinite;
    pointer-events: none;

}

@keyframes particleMove{

    0%{

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 0;

    }

    10%{

        opacity: 1;

    }

    100%{

        transform:
            translateY(-100vh)
            rotate(720deg);

        opacity: 0;

    }

}

.ripple{

    position: absolute;
    width: 20px;
    height: 20px;
    background: rgba(255,255,255,0.5);
    border-radius: 50%;
    transform: scale(0);
    animation: rippleEffect 0.6s linear;
    pointer-events: none;

}

@keyframes rippleEffect{

    to{

        transform: scale(15);
        opacity: 0;

    }

}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = particleStyle;
document.head.appendChild(styleSheet);

/* ========================= */
/* SMOOTH PAGE LOADING */
/* ========================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

/* ========================= */
/* PRELOADER EFFECT */
/* ========================= */

document.body.style.opacity = "0";
document.body.style.transition =
    "opacity 0.8s ease";

/* ========================= */
/* INPUT FOCUS ANIMATION */
/* ========================= */

const inputs =
    document.querySelectorAll("input, textarea");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.style.transform = "scale(1.02)";
        input.style.boxShadow =
            "0 0 20px rgba(212,160,23,0.3)";

    });

    input.addEventListener("blur", () => {

        input.style.transform = "scale(1)";
        input.style.boxShadow = "none";

    });

});

/* ========================= */
/* NEWSLETTER FORM */
/* ========================= */

const newsletterForm =
    document.querySelector(".newsletter");

newsletterForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thank you for subscribing!");

});

/* ========================= */
/* CONTACT FORM */
/* ========================= */

const contactForm =
    document.querySelector(".support-form form");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Message Sent Successfully!");

    contactForm.reset();

});

/* ========================= */
/* IMAGE LAZY ANIMATION */
/* ========================= */

const images = document.querySelectorAll("img");

images.forEach(img => {

    img.addEventListener("load", () => {

        img.style.opacity = "1";

    });

});

/* ========================= */
/* WINDOW RESIZE */
/* ========================= */

window.addEventListener("resize", () => {

    if(window.innerWidth < 768){

        cursor.style.display = "none";

    }else{

        cursor.style.display = "block";

    }

});

/* ========================= */
/* CONSOLE MESSAGE */
/* ========================= */

console.log(
    "%cShakti Sudha Makhana Website Loaded Successfully!",
    "color: gold; font-size:16px; font-weight:bold;"
);