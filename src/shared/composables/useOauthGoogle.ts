import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import Cookies from 'js-cookie';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import clearAllCookies from '@helpers/clearAllCookies';
export default function useOauthGoogle() {

    const signOutWithGoogle = async () => {
        try {
            await signOut(auth);
            Cookies.remove('token');
            clearAllCookies();
            return true;
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            return false;
        }
    };

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            if (user) {
                const token = await user.getIdToken();
                const photoURL = user.photoURL;
                const phoneNumber = user.phoneNumber;
                Cookies.set('token', token, { expires: 1 / 24 });
                return [token, photoURL, phoneNumber];
            }
        } catch (error) {
            console.error('Error en el inicio de sesión con Google:', error);
            throw error;
        }
        throw new Error('No se pudo iniciar sesión');
    };

    return { signOutWithGoogle, signInWithGoogle };
};
