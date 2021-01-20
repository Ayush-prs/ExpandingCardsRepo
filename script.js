const panel = document.querySelectorAll('.panel');

panel.forEach((panel)=>{
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panel.forEach((panel) => {
        if(panel.classList.contains('active')){
            panel.classList.remove('active');
        } 
    });
}