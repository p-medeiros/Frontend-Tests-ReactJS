import { FormEvent } from 'react'
import styles from './styles.module.scss'
import { useNavigate} from 'react-router-dom';



export default function Login() {

    const navigate = useNavigate()

    function handleSubmit(event: FormEvent){
        event.preventDefault();

        navigate('/dashboard')
    }

    return (
        <div className={styles.container}>
            <h2>Sing in</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Insira seu e-mail" />
                <input type="text" placeholder="Insira sua senha" />
                <button>Login</button>
            </form>
        </div>
    )
}