import React, { useState } from 'react';

export const Register = () => {
    const [registerForm, setRegisterForm] = useState({
        name: '',
        password: '',
    });
    const submitForm = (e) => {
        e.preventDefault();
        console.log('Cigan-log: submitForm -> registerForm', registerForm);
        setRegisterForm({ name: '', password: '' });
    };
    return (
        <div>
            <p>Страница регистрации</p>
            <form onSubmit={(e) => submitForm(e)}>
                <input
                    type="text"
                    placeholder="Username"
                    value={registerForm.name}
                    onChange={(e) =>
                        setRegisterForm({
                            ...registerForm,
                            name: e.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="password"
                    value={registerForm.password}
                    onChange={(e) =>
                        setRegisterForm({
                            ...registerForm,
                            password: e.target.value,
                        })
                    }
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};
