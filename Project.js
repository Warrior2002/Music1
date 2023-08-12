
ThreeL = document.querySelector('.Three-Lines')
Navigation = document.querySelector('.Navigation')
NavigationR = document.querySelector('.Navigation-Right')
NavigationL = document.querySelector('.Navigation-List')



ThreeL.addEventListener('click', () => {
    NavigationR.classList.toggle('Visiblity');
    NavigationL.classList.toggle('Visiblity');
    Navigation.classList.toggle('Navigation-Height')
})