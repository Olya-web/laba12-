import React, { useState } from 'react';

export const Login = () => {
    const [loginForm, setLoginForm] = useState({ name: '', password: '' });
    const submitForm = (e) => {
        e.preventDefault();
        console.log('Cigan-log: submitForm -> loginForm', loginForm);
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
