import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from './firebase_aut.js'
import {loginCheck} from './login.check.js'

import './signupForm.js'
import './signinForm.js'
import './googleLogin.js'
import './facebookLogin.js'
import './logout.js'



onAuthStateChanged(auth, async (user)=>{
    loginCheck(user)
    
    if (user){  
        window.location.href="../menu.html";
    
     } else{
        loginCheck(user)
        
    
    }

})


