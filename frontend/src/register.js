import React, { useState } from 'react';
import { API } from './helpers/API';

export const Register = () => {
    const [registerForm, setRegisterForm] = useState({
        name: '',
        password: '',
    });
    const submitForm = async (e) => {
        e.preventDefault();
        const r = await API.post('auth/sign-up', registerForm);
        console.log('Cigan-log: submitForm -> r', r);
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
