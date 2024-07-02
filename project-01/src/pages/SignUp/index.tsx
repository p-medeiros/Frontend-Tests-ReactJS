
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss'
import { FormEvent } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {

    const navigate = useNavigate()

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        navigate('/dashboard')
    }
    return (
        <div className={styles.container}>

            <form action="" onSubmit={handleSubmit}>
                <h1>Cadastre-se</h1>
                <input type="text" placeholder="Insira o seu nome" />
                <input type="text" placeholder="Insira o seu e_mail" />
                <input type="text" placeholder="Insira a senha" />
                <button> Sign Up</button>

                <Link to='/'>ja tem cadastro? Clique aqui</Link>
            </form>

        </div>
    )
}