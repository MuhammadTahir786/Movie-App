import React, { createContext, useEffect, useState } from 'react';
import { storage } from '../components/storage';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('');

    useEffect(() => {
        const user = storage.getString('user')
        setUser(user)
    }, [])

    const LoginFunction = (email) => {
        setUser(email);
        storage.set('user', email)
    };
    const LogoutFunction = () => {
        storage.delete('user')
        setUser("")
    }

    const defaultValue = {
        LoginFunction,
        LogoutFunction,
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={defaultValue}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
