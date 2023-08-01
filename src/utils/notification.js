import Toastify from "toastify-js";
import "toastify-js/src/toastify.css"


export function showNotification(message, isDark) {
    Toastify({
        text: message,
        duration: 4000,
        gravity: 'top',
        position: 'right',
        style: {
            background: isDark ? 'black' : 'white',
            color: isDark ? 'white' : 'black',
            width: '150px'
        }
    }).showToast();
}
