 // toastify ---------------------------------------------------------------------------------
    
    export function showMessage(message, type = "succes"){

        Toastify({
            text: message,
            duration: 4000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: type === "succes" ? "green" : "red"
            },
            onClick: function(){} // Callback after click
          }).showToast();

    }
 
       
