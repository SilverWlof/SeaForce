import "../pages/index.css";

// import "./marquee";

(()=>{
  const textElements = document.querySelectorAll('.text_animation');
  textElements.forEach(el => el.classList.remove('text_animation_start'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || "0s";
        entry.target.style.transitionDelay = delay;
        entry.target.classList.add('text_animation_start');
      } else {
        entry.target.classList.remove('text_animation_start');
        entry.target.style.transitionDelay = "0s";
      }
    });
  });
  textElements.forEach(el => observer.observe(el));
})(),

(()=>{
  const header = document.querySelector('.header');
  const break_point = document.querySelector('.hero_page_but');

  header.classList.remove('header_background');

  const observer_revers = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
      if(entry.isIntersecting){
        header.classList.remove('header_background');
      }
      else{
        header.classList.add('header_background')
      }
    })

  });
  observer_revers.observe(break_point)
}
)(),

(()=>{
  document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".break_point");
  const navLinks = document.querySelectorAll(".menu .link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          navLinks.forEach((link) => link.classList.remove("active"));

          const activeLink = document.querySelector(
            `.menu .link[href="#${entry.target.getAttribute("name")}"]`
          );
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    },
    {
      threshold: 0.9, 
    }
  );

  sections.forEach((section) => observer.observe(section));
}); 
}
)()