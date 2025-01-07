'use strict';

// add event on element :
//This function is a utility function designed to add an event listener 
//to one or more DOM elements, improving reusability and reducing repetitive code
const addEventOnElem = function (elem, type, callback) {
    if(elem.length > 1) {
        for (let i = 0 ; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        } 
    } else {
        elem.addEventListener(type, callback);
    }  
}

//navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavBar = () => navbar.classList.toggle("active");

addEventOnElem(navToggler, "click", toggleNavBar);

const closeNavBar = () => navbar.classList.remove("active");

addEventOnElem(navLinks, "click", closeNavBar);


//header active when scroll down to 100px

const header = document.querySelector("[data-header]");

const headerActive = function () {
    if(window.scrollY > 100){
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", headerActive);