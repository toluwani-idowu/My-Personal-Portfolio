/*============toggel switcher=======*/ 
const styleSwitcherToggel = document.querySelector(".style-switcher-toggler");
styleSwitcherToggel.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
    console.log(styleSwitcherToggel)
})

// hide style- switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*============theme colors=======*/ 

const alternateStyles = document.querySelectorAll(".alternate-style");
console.log (alternateStyles);
function setActiveStyle(color)
{
   alternateStyles.forEach ((style) => {
    if(color === style.getAttribute("title"))
    {
        style.removeAttribute("disabled");
    }
    else {
         style.setAttribute("disabled", "true");
    }
   })
   
}

/*============theme colors=======*/ 
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
     dayNight.querySelector("i").classList.toggle("fa-sun");
     dayNight.querySelector("i").classList.toggle("fa-moon");
     document.body.classList.toggle("dark");
     console.log(dayNight)
     
})


window.addEventListener("load", () => {
    if (document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
         dayNight.querySelector("i").classList.add("fa-moon");
    }
})