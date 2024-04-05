const menu = document.getElementById('menu')
const buttonMenu = document.getElementById('button-menu')
const hideMenu =document.getElementById("hideMenu")

buttonMenu.addEventListener("click", () => {
    menu.style.display = "flex"})



hideMenu.addEventListener("click", () => {
        menu.style.display = "none"
    })
            

const swiper = new Swiper('.swiper', {
  
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 16,
    direction: 'horizontal',
    loop: true,
    
   

    dynamicBullets:true,
    dynamicMainBullets:2,
    // If we need pagination
    pagination: {
      
      el: '.swiper-pagination',
    },


    breakpoints:{
      760:{
        slidesPerView:3,
        hiddenClass:'swiper-pagination-hidden',
        
      }
     },
      
  });



  const swiper = new Swiper('.swiper', {
  
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 16,
    direction: 'horizontal',
    loop: true,
    
   

    dynamicBullets:true,
    dynamicMainBullets:2,
    // If we need pagination
    pagination: {
      
      el: '.swiper-pagination',
    },


    breakpoints:{
      760:{
        slidesPerView:3,
        hiddenClass:'swiper-pagination-hidden',
        
      }
     },
      
  });


 