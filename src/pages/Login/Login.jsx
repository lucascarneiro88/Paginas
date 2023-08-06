import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import './login.css'

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errorForm, setErrorForm] = useState(false) //
    const navigate = useNavigate()

    const { setUserContext } = useContext(AuthContext);//Obtém a função setUserContext do contexto
 


    useEffect(() => {
        setErrorForm(false)     
    }, [password])

    /**
     const [pacientes, setPacientes] = useState([])
     useEffect(() => {
        const resposta = await fetch('/pacientes')
        setPacientes(resposta.json())
     }, [])
     */

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()       
        console.log('Dados digitados:')   
        console.log('Email: ', email)
        console.log('Password: ', password)  
        if (email === 'lucas_santos@gmail.com' && password === '987654321') {
            const username = email.split('@')[0];
            setUserContext({ username } );
            navigate('/');
          } else {
            setErrorForm(true);
          }
        }

    return (                
        <form className='login-box ' onSubmit={handleSubmit}>

            <h4>E-mail: </h4>

            <input className='input-email'  required type="email" value={email} 
                placeholder="Digite seu e-mail"
                onChange={handleEmailChange} />

            <h4>Senha: </h4>

            <input className='input-password'  required type="password" minLength="6" 
                value={password} 
                placeholder="Digite sua senha" 
                onChange={handlePasswordChange}/>
            
            {errorForm && <span>E-mail e/ou senha inválidos</span>}

            <button className='btn' type="submit">Entrar</button>
        </form>
    )
}

export default Login