import { useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { goToLogin } from '../routes/coordinator';

export const useProtectPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (!token) {
            goToLogin(history)
        }
    }, [history])
}