import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth, AuthRoute } from "./auth";

function ProfilePage() {
    const auth = useAuth();    
    
    return (
        <>
            <h1>Perfil</h1>
            <p>Welcome, {auth.user.username}</p>
        </>
    )
}

export { ProfilePage };