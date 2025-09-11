import "../pages/index.css";

// import "./marquee";

(()=>{
  const textElements = document.querySelectorAll('.text_animation');
  textElements.forEach(el => el.classList.remove('text_animation_start'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('text_animation_start');
      } else {
        entry.target.classList.remove('text_animation_start');
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
)()