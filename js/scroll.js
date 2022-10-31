const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('showScroll')
        }else {
            entry.target.classList.remove('showScroll')
        }
    })
})

const hiddenElememts = document.querySelectorAll(".hidden");
hiddenElememts.forEach((el) => observer.observe(el)) 