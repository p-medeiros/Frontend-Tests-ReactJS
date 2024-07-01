
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss'
import { FormEvent } from 'react';

export default function SignUp() {

    const navigate = useNavigate()

    function handleSubmit(event: FormEvent){
        event.preventDefault();

        navigate('/dashboard')
    }
    return (
        <div className={styles.container}>
            <h1>Cadastre-se</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Insira o seu nome" />
                <input type="text" placeholder="Insira o seu e_mail" />
                <input type="text" placeholder="Insira a senha" />
                <button> Sign Up</button>
            </form>

        </div>
    )
}