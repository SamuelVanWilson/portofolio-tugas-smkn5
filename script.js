document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header')
    const experience = document.querySelectorAll('.card')
    const observer = new IntersectionObserver((elements) => {
        elements.forEach(entry=>{
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up')
            }
        })
    })


    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('active-scroll')
        } else {
            header.classList.remove('active-scroll')
        }
    })

    experience.forEach(card => {
        observer.observe(card)
    })
})
