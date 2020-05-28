import { useState, useCallback } from 'react';

export const useAuth = () => {
    const [isAuth, setAuth] = useState(false);
    const login = useCallback(() => {
        setAuth(true);
    }, []);
    const logout = useCallback(() => {
        setAuth(false);
    }, []);
    return [isAuth, login, logout];
};
