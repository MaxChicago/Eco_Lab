function toggleVideo() {
  const trailer = document.querySelector('.trailer');
  const video = document.querySelector('video')
  trailer.classList.toggle('active')
  video.currentTime = 0;

}

document.addEventListener('DOMContentLoaded', function(){
  let burgerBtn = document.querySelector('.burger-btn')
  let burgerClose = document.querySelector('.burger-close')
  let burger = document.querySelector('.burger-wrapper')
  burgerBtn.addEventListener('click', ()=>{
    burger.classList.remove('ds-none')
  })
  burgerClose.addEventListener('click', ()=>{
    burger.classList.add('ds-none')
  })
})