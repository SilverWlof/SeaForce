import "../pages/index.css";

import "./marquee";

(function () {
  const textElements = document.querySelectorAll('.about_text');
  textElements.forEach(el => el.classList.remove('text_anim'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('text_anim');
      } else {
        entry.target.classList.remove('text_anim');
      }
    });
  });

  textElements.forEach(el => observer.observe(el));
}

// function(){
//   const header = document.querySelector('.header');
//   header.classList.remove('header_main');
//   const observer = new IntersectionObserver(entries =>{
//     if(entries.isIntersecting){
//       entries.classList.remove('header_main');
//     }
//     else{
//       entries.classList.add('header_main')
//     }
//   });
//   header(el => header.observe(el))
// }
)();