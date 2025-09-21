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
      threshold: 0.99, 
    }
  );

  sections.forEach((section) => observer.observe(section));
  }); 
  }
)(),

(()=>{

  document.querySelectorAll('.scroll-wrapper').forEach(wrapper => {
  const scrollContent = wrapper.querySelector('.scroll-content');
  const scrollbar = wrapper.querySelector('.custom-scrollbar');
  const thumb = wrapper.querySelector('.custom-thumb');

  function updateThumb() {
    const containerWidth = scrollContent.clientWidth;
    const contentWidth = scrollContent.scrollWidth;
    const scrollLeft = scrollContent.scrollLeft;

    const thumbWidth = (containerWidth / contentWidth) * scrollbar.offsetWidth;
    thumb.style.width = `${thumbWidth}px`;

    const thumbLeft = (scrollLeft / (contentWidth - containerWidth)) * (scrollbar.offsetWidth - thumbWidth);
    thumb.style.left = `${thumbLeft}px`;
  }

  scrollContent.addEventListener('scroll', updateThumb);
  window.addEventListener('resize', updateThumb);

  updateThumb();
});

})(),

(()=>{

  const menu_but = document.querySelector("#sid_menu_but");
  const menu = document.querySelector('#sid_menu');
  const header = document.querySelector('.m_header')
  const link = header.querySelectorAll('.link');

  function openPopUp() {
    menu.classList.forEach(e=>
      {
        if(e!='popup_open'){
          menu.classList.add('popup_open');
          menu_but.classList.remove('burger_but');
          menu_but.classList.add('but_close');
        }
        else{
          menu.classList.remove('popup_open');
          menu_but.classList.add('burger_but');
          menu_but.classList.remove('but_close');  
        }  
      })
  }

  function closePopup(){
    menu.classList.remove('popup_open');
    menu_but.classList.add('burger_but');
    menu_but.classList.remove('but_close'); 
  }

  menu_but.addEventListener('click', openPopUp);  
  link.forEach(e=>e.addEventListener('click', closePopup))
})()