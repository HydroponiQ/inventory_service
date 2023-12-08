'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { database } from '@/utils/database';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export const AuthProvider = ({ children }) => {
    const [id_farmer, setIdFarmer] = useState(null);

    useEffect(() => {
        const checkLoginState = async () => {
            try {
                const { data: { user } } = await database.auth.getUser();
        
                if (user) {
                    const { data: logged_user } = await database.from('farmer').select('*').eq('uid', user.id);
        
                    if (logged_user) {
                        setIdFarmer(logged_user[0].id);
                    }
                }
            } catch (error) {
                return console.error(error);
            }
        };

        checkLoginState();
    });

    return (
        <AuthContext.Provider value={{ id_farmer, setIdFarmer }}>
            {children}
        </AuthContext.Provider>
    );
};