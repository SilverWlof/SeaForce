import "../pages/index.css";

//*****************************************************************
//Проявления текста когда блок поподает в зону видимости
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


//*****************************************************************
//Смена цвета подложки Header
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


//*****************************************************************
//Гиперссылки
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


//*****************************************************************
//Горизонтальный скролл
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


//*****************************************************************
//Бургер кнопка
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
          menu_but.classList.add('clicked');
        }
        else{
          menu.classList.remove('popup_open');
          menu_but.classList.remove('clicked');
        }  
      })
  }

  function closePopup(){
    menu.classList.remove('popup_open');
    menu_but.classList.remove('clicked');
  }

  menu_but.addEventListener('click', openPopUp);  
  link.forEach(e=>e.addEventListener('click', closePopup))
})(),


//*************************************************************
//Цвет текста при скроле
(()=>{

document.querySelectorAll('.scroll-content').forEach(el => {  
  const colorChange = el.querySelectorAll('.color-change');

  function ColorChange(){

    el.addEventListener('scroll', () => {
      const scrollLeft = el.scrollLeft; 
      const maxScroll = el.scrollWidth - el.clientWidth; 
      const scrollPercent = scrollLeft / maxScroll; 

      colorChange.forEach(el => {
        const start = parseFloat(el.dataset.start);
        const end = parseFloat(el.dataset.end);

        if (scrollPercent >= start && scrollPercent <= end) {        
          const rangeProgress = (scrollPercent - start) / (end - start);

          const endColor = [255, 237, 76];  // #ffed4c
          const startColor = [92, 110, 125];    // #5C6E7D

          const r = startColor[0] + (endColor[0] - startColor[0]) * rangeProgress;
          const g = startColor[1] + (endColor[1] - startColor[1]) * rangeProgress;
          const b = startColor[2] + (endColor[2] - startColor[2]) * rangeProgress;

          el.style.color = `rgb(${r}, ${g}, ${b})`;
        } else if (scrollPercent < start) {
          el.style.color = `rgb(92, 110, 125)`;
        } else {
          el.style.color = `rgb(255, 237, 76)`;
        }
      });
    });
  }

ColorChange();


});

})()