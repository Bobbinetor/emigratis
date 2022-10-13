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

            if (pw === '1' /* 'da domani mi alzo tardi' */) {
                openBox()

                setTimeout(() => {
                    wrapper.insertAdjacentHTML('beforebegin', `
                    
                        <div class="message slide-up">
                            <h2>Sei bona</h2>

                            <a>Riscuoti il regalo!</a>
                        </div>
        
                    `)
                }, 700)
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

    function openBox () {
        hideForm()
        box.src = "assets/images/box.gif"
    }
}