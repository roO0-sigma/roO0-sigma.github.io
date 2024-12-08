const the_animation_r = document.querySelectorAll('.animation_r')

const observer_r = new IntersectionObserver((entries_r) => {
    entries_r.forEach((entry_r) => {
        if (entry_r.isIntersecting) {
            entry_r.target.classList.add('scroll-animation_r')
        }
            // else {
            //     entry.target.classList.remove('scroll-animation')
            // }

    })
},
   { threshold: 0.1
   });
//
  for (let i = 0; i < the_animation_r.length; i++) {
   const elements_r = the_animation_r[i];

    observer_r.observe(elements_r);
  }