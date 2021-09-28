// --------toggler--------
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click",()=>{
 hidesection();
 toggleNavbar();
 document.body.classList.toggle("hide-scroling")
});

function hidesection()
{
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar()
{
    document.querySelector(".header").classList.toggle("active");
}
// -------button-----
const extra = document.querySelector(".add_btn");
extra.addEventListener("click",()=>{
    alert("Thank you for your valuable response😊💖");
});

// -------------active-----------------
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash!=" "){
        // document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hidesection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            // document.querySelector(".overlay").classList.remove("active");
         },500);
    }
});
// --------------first-part----------------
const tabsContainer = document.querySelector(".about-tabs");
aboutSection = document.querySelector(".about-section ");

tabsContainer.addEventListener("click",(e)=>{

if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
tabsContainer.querySelector(".active").classList.remove("active");
e.target.classList.add("active");
const target = e.target.getAttribute("data-target");
aboutSection.querySelector(".tab-content.active").classList.remove("active");
aboutSection.querySelector(target).classList.add("active");
}
});

// -----------portfolio-popup0---------

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("view-project-btn")){
    togglePortfolioPopup();
    document.querySelector("portfolio-popup").scrollTo(0,0);
    portfolioItemDetails(e.target.parentElement);
    }
})
    function togglePortfolioPopup(){
        document.querySelector(".portfolio-popup").classList.toggle("open");
        document.body.classList.toggle("hide-scroling");
        document.querySelector(".main").classList.toggle("fade-out");
    }
document.querySelector(".pp-close").addEventListener("click",togglePortfolioPopup)

/////hide the element when click on screen

document.addEventListener("click",(e)=>{
   if(e.target.classList.contains("pp-inner")){
       togglePortfolioPopup();
   }
});