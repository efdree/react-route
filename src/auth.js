import React, { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const adminList = ['Erik','Admin'];

const AuthConext = React.createContext();

function AuthProvider({children}){
    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);

    const login = ({username}) => {
        const isAdmin = adminList.find(admin => admin === username);
        setUser({ username, isAdmin });
        navigate('/profile');
    }

    const logout = () => {
        setUser(null)
        navigate('/');
    }

    const auth = { user, login, logout };
    return (
        <AuthConext.Provider value={auth}>
            {children}
        </AuthConext.Provider>
    );  
}

function useAuth(){
    const auth = useContext(AuthConext);
    return auth;
}

function AuthRoute(props){
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to="/login"/>
    }

    return props.children;
}   

export {
    AuthProvider,
    AuthRoute,
    useAuth,
};