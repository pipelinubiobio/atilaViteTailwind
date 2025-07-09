import { useNavigate } from 'react-router-dom';
import { login } from '@services/auth.service.js';
import Form from '@components/Form';
import useLogin from '@hooks/auth/useLogin.jsx';
import '@styles/form.css';

const Login = () => {
    const navigate = useNavigate();
    const {
        errorEmail,
        errorPassword,
        errorData,
        handleInputChange
    } = useLogin();

    const loginSubmit = async (data) => {
        try {
            const response = await login(data);
            if (response.status === 'Success') {
                navigate('/home');
            } else if (response.status === 'Client error') {
                errorData(response.details);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="login-wrapper">
            <div className="login-container">
                <div className="login-left">
                    {/* Aquí puedes poner una imagen de bienvenida o branding */}
                    <img src="/public/LogoAtila.svg" alt="Atila Centro Médico" className="login-logo" />
                    <h2>Somos salud<br />con propósito social</h2>
                    <p>Atención especializada al mejor precio.</p>
                </div>
                <div className="login-right">
                    <Form
                        title="Bienvenido a Atila"
                        fields={[
                            {
                                label: "Correo electrónico",
                                name: "email",
                                placeholder: "example@gmail.cl",
                                fieldType: 'input',
                                type: "email",
                                required: true,
                                minLength: 15,
                                maxLength: 30,
                                errorMessageData: errorEmail,
                                validate: {
                                    emailDomain: (value) =>
                                        value.endsWith('@gmail.cl') || 'El correo debe terminar en @gmail.cl'
                                },
                                onChange: (e) => handleInputChange('email', e.target.value),
                            },
                            {
                                label: "Contraseña",
                                name: "password",
                                placeholder: "**********",
                                fieldType: 'input',
                                type: "password",
                                required: true,
                                minLength: 8,
                                maxLength: 26,
                                pattern: /^[a-zA-Z0-9]+$/,
                                patternMessage: "Debe contener solo letras y números",
                                errorMessageData: errorPassword,
                                onChange: (e) => handleInputChange('password', e.target.value),
                            },
                        ]}
                        buttonText="Iniciar sesión"
                        onSubmit={loginSubmit}
                        footerContent={
                            <p>
                                ¿No tienes cuenta? <a href="/register">¡Regístrate aquí!</a>
                            </p>
                        }
                    />
                </div>
            </div>
        </main>
    );
};

export default Login;
