gsap.registerPlugin(ScrollTrigger);

const animateElements = document.querySelectorAll('[data-gsap]');

animateElements.forEach(animateElement  => {

    if (animateElement.getAttribute('data-gsap') == 'top') {
        gsap.fromTo(animateElement, 
            {
                y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 0.7, ease: 'easeInOut', 
                scrollTrigger: 
                    {
                    trigger: animateElement,
                    start: 'top 70%',
                    end: 'top 20%'
                    }
            }   
        )
    }

    else if (animateElement.getAttribute('data-gsap') == 'right'){
        gsap.from(animateElement, 
            {x: '-=100', opacity: 0,
                scrollTrigger: 
                    {
                        trigger: animateElement,
                        start: 'top 60%',
                        end: 'top 20%'
                    }
            }
        )
    }

    else if (animateElement.getAttribute('data-gsap') == 'left'){
        gsap.from(animateElement, 
            {x: '+=100', opacity: 0,
                scrollTrigger: 
                    {
                        trigger: animateElement,
                        start: 'top 60%',
                        end: 'top 20%'
                    }
            }
        )
    }
});