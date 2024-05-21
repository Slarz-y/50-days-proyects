const container = document.querySelector(".expanding-cards");

let panels = container.children;

Array.from(panels).forEach(element => {
    element.addEventListener('click', () => {
        if(!element.classList.contains('active')) {
            removeActiveClasses();
            element.classList.add('active');
        }
    })
});

function removeActiveClasses () {
    Array.from(panels).forEach(element => {
        element.classList.remove('active');
    })
}