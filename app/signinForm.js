import { signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from './firebase_aut.js';
import { showMessage } from './showMessage.js'


const signInForm = document.querySelector('#login-form');

signInForm.addEventListener('submit', async e =>{
    e.preventDefault()

    const email = signInForm['login-email'].value
    const password = signInForm['login-password'].value

    

    try {
    const credentials = await signInWithEmailAndPassword (auth, email, password)
    console.log(credentials)

    const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
    modal.hide()


    showMessage("Bienvenido a Teocalli " + credentials.user.email)
        
    } catch (error) {  
        if (error.code === "auth/wrong-password"){
            showMessage('contraseña incorrecta', 'error')

        } else if (error.code === "auth/invalid-login-credentials"){
            showMessage('Usuario no encontrado', 'error')
        } else {
            showMessage(error.message, 'error')
        }
    }
})