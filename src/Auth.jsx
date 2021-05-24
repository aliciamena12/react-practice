import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';


const Auth = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

    const signup = async ()=>{
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        
    }

	const login = async ()=>{
		await firebase.auth().signInWithEmailAndPassword(email, password);
	}

	const logout = async ()=>{
		await firebase.auth().signOut();
	}

    return (
        <div>
            {
				!user &&
                <div>
                    <label htmlFor="email">Correo electronico</label>
                    <input type="email" id="email" onChange={ (ev)=> setEmail(ev.target.value) } />
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" onChange={ (ev)=> setPassword(ev.target.value) } />
                    <button onClick={login}>Iniciar sesión</button>
					<button onClick={signup}>Crear cuenta</button>
                </div>
        	}
			{
				user && 
				<div>
					<button onClick={logout}>Cerrar sesión</button>
					<p>{user.email}</p>
				</div>
				
			}
        </div>
    )
}

export default Auth;
