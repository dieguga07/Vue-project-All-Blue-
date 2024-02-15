import { UserContext } from '../stores/UserContext'

const AuthenticationState = () => {
   
    const userStore = UserContext()
    const user = userStore.user

    if (user === false) {
        return false
    } 
        return true
    
}

export default AuthenticationState