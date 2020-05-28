import React, { useState } from 'react';
import { API } from './helpers/API';

export const Login = () => {
    const [loginForm, setLoginForm] = useState({ name: '', password: '' });
    const submitForm = async (e) => {
        e.preventDefault();
        const r = await API.post('auth/sign-in', loginForm);
        console.log('Cigan-log: submitForm -> r', !!r.data);
        setLoginForm({ name: '', password: '' });
    };
    return (
        <div>
            <p>Login page</p>
            <form onSubmit={(e) => submitForm(e)}>
                <input
                    type="text"
                    placeholder="Username"
                    value={loginForm.name}
                    onChange={(e) =>
                        setLoginForm({ ...loginForm, name: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="password"
                    value={loginForm.password}
                    onChange={(e) =>
                        setLoginForm({ ...loginForm, password: e.target.value })
                    }
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};
