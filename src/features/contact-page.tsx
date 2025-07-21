import type React from "react";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useNavigate } from "react-router-dom";
import type { User } from "./auth/auth-models";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

const ContactPage: React.FC = () => {
    const isAuthenticated = useIsAuthenticated();
    const authUser = useAuthUser<User>();
    const authHeader = useAuthHeader();
    const signOut = useSignOut();
    const navigate = useNavigate();

    const handleLogout = () => {
        // Call the signOut function to log out the user
        signOut();
        // Optionally, you can redirect or show a message after logout
        console.log("User logged out");
        navigate("/login"); // Redirect to the login page after logout
    };
    // If user is not authenticated, you might want to redirect or show a message
    if (!isAuthenticated || !authUser) {
        return <div>Please log in to view this page.</div>;
    }
    return (
        <>
            <div>
                <h1>Contact Page</h1>
                <p>Welcome {authUser.name}</p>
                <p>The headers {authHeader}</p>
                <button onClick={handleLogout}>Déconnexion</button>
            </div></>
    );
};

export default ContactPage;