let modalLinks = document.querySelectorAll('.modal-link')
let body = document.querySelector('body')


let unlock = true

let timeout = 800

if(modalLinks.length > 0){
    for (let index = 0; index < modalLinks.length; index++){
        let modalLinK = modalLinks[index]
        modalLinK.addEventListener("click", function(e){
            let modalName = modalLinK.getAttribute('href').replace('#', '')
        })
    }
}