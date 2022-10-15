window.onload = () => {

    const wrapper = document.getElementById('wrapper')
    const box = document.getElementById('box')
    const password = document.getElementById('password') 
    const pwContainer = document.getElementById('password-container')

    box.addEventListener('click', (el, ev) => {
        pwContainer.classList.remove('hidden')
    })

    password.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const pw = password.value

            if (pw === 'DA DOMANI MI ALZO TARDI') {
                openBox()

                setTimeout(() => {
                    wrapper.insertAdjacentHTML('beforebegin', `
                    
                        <div class="message slide-up">
                            <h2>Finalmente ce l'hai fatta\n Stasera non prendere impegni</h2>

                            <a href="https://bobbinetor.github.io/emigratis/gift.pdf" type="download">Riscuoti il regalo!</a>
                        </div>
        
                    `)
                }, 700)
            } else {
                password.classList.add('shake')
                setTimeout(() => {
                   password.classList.remove('shake') 
                }, 500);
            }
        }
    })

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape')
            hideForm()
    })

    function hideForm () {
        pwContainer.classList.add('hidden')
    }
    //ssks
    function openBox () {
        hideForm()
        box.src = "assets/images/box.gif"
    }
}
