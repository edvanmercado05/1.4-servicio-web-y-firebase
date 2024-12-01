
import { createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from './firebase_aut.js'
import { showMessage} from './showMessage.js'

const signupForm = document.querySelector('#signup-form')



signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    console.log(email, password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

        //Cerrar el modal de signup
        const signupModal = document.querySelector('#signupModal')
        const modal = bootstrap.Modal.getInstance(signupModal)
        modal.hide()

    showMessage("Bienvenido a Teocalli " + userCredentials.user.email)

    } catch (error) {
            if(error.code ==='auth/email-already-in-use'){
            showMessage("Este correo ya esta registrado", "error")
        } else if(error.code === 'auth/invalid-email'){
            showMessage("Correo invalido", "error")
        } else if (error.code === 'auth/weak-password'){
            showMessage("Contraseña muy corta", "error")
        } else if (error.code){
            showMessage(error.message, "error")
        }
    }
})

 