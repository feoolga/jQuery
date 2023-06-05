let modalLinks = document.querySelectorAll('.modal-link')
let body = document.querySelector('body')


let unlock = true

let timeout = 800

if (modalLinks.length > 0) {
    for (let index = 0; index < modalLinks.length; index++) {
        let modalLinK = modalLinks[index]
        modalLinK.addEventListener("click", function (e) {
            let modalName = modalLinK.getAttribute('href').replace('#', '')
            let currentModal = document.getElementById(modalName)
            modalOpen(currentModal)
            e.preventDefault()
        })
    }
}

let modalCloseIcon = document.querySelectorAll(".close-modal")

if (modalCloseIcon.length > 0) {
    for (let index = 0; index < modalCloseIcon.length; index++) {
        let elem = modalCloseIcon[index]
        elem.addEventListener('click', function (e) {
            modalClose(elem.closest(".modal"))
            e.preventDefault()
        })
    }
}

function modalOpen(currentModal) {
    if (currentModal && unlock) {
        let modalActive = document.querySelector(".modal.open")
        if (modalActive) {
            modalClose(modalActive, false)
        } else {
            bodyLock()
        }
        currentModal.classList.add(".open")
        currentModal.addEventListener("click", function (e) {
            if (!e.target.closest('.modal__content')){
                modalClose(e.target.closest('.modal'))
            }
        })
    }

}