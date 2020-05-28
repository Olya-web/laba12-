import React, { useContext } from 'react';
import { AuthContext } from './helpers/auth.context';
import { Link } from 'react-router-dom';

export const MainComponent = () => {
    const [, , logout] = useContext(AuthContext);
    return (
        <div>
            <p>Если вы видите этот текст, значит вы авторизованы</p>
            <Link to="/register">Регистрация</Link>
            <button onClick={() => logout()}>logout</button>
        </div>
    );
};
