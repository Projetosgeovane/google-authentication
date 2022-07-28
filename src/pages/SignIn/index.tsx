import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { GoogleLogo } from 'phosphor-react';
import { useState } from 'react';
import { auth } from '../../Services/firebase';
import './styles.scss';

export function SignIn() {


    const [user, setUser] = useState<User>({} as User);

    async function signInWithGoogle() {
        try {

            const provider = new GoogleAuthProvider();

            const result = await signInWithPopup(auth, provider)
            setUser(result.user);

        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container">

            <div className="user">
                {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}

                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>

            <h1>Acesse sua conta</h1>

            <span>
                Utilizando autenticação social, por exemplo, autenticação com a Google você <br />
                facilita a vida do usuário permitindo utilizar a aplicação sem fazer cadastrado.
            </span>

            <button type="button" onClick={signInWithGoogle} className="button">
                <GoogleLogo />
                SignIn with Google
            </button>
        </div>
    )
}