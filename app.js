let btngroup = document.querySelectorAll('.btns')
let p = document.querySelector('p')

btngroup.forEach(
    (btn) => {
        btn.addEventListener('click', () => {
            p.innerText += btn.innerText
        })
    }
)