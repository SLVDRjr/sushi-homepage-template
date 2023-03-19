// Mobile Menu Navigation
const bars = document.querySelector('.nav-bars')
const mobileNav = document.querySelector('.mobile-nav')

bars.addEventListener('click', () => {
  const visibility = mobileNav.getAttribute('data-visible')

  if(visibility === 'false'){
    mobileNav.setAttribute('data-visible', true)
    bars.setAttribute('aria-expanded', true)
  }else{
    mobileNav.setAttribute('data-visible', false)
    bars.setAttribute('aria-expanded', false)
  }
})

window.addEventListener('resize', () => {
  if(window.innerWidth > 992){
    mobileNav.setAttribute('data-visible', false)
    bars.setAttribute('aria-expanded', false)
  }
})

// Stats count
const counts = document.querySelectorAll('#stats-count')

counts.forEach(count => {
  let i = 0
  const value = count.getAttribute('value')
  const counter = () => {
    if(i <= value){
      count.innerHTML = i
      i++
    }
  }

  setInterval(() => {
    counter()
  }, 10)
})








    




    


