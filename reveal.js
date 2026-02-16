
    const reveals =
document.querySelectorAll(".reveal");

    function revealOnScroll() {
        const windowHeight =
window.innerHeight;
        const revealPoint = 100;

        reveals.forEach(section => {
            const sectionTop = 
section.getBoundingClientRect().top;

            if (sectionTop <
windowHeight - revealPoint) {

section.classList.add("active");
 }
            
     });
   }

   window.addEventListener("scroll",revealOnScroll);
   revealOnScroll(); //run on page load

