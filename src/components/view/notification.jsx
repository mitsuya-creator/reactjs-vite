import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ShowNotification({ msg, isDark, roomId }) {
    let theme = isDark ? "dark" : "light";
    useEffect(() => {
        const notify = () => toast.success(msg, { autoClose: 5000, theme: theme });
        notify();
    }, [roomId])
    return <ToastContainer />
}
