import React, { useState, type FormEvent } from 'react';
import { login } from './auth-services';
import { Link, useNavigate } from 'react-router-dom';
import useSignIn from 'react-auth-kit/hooks/useSignIn';

const LoginPage: React.FC = function () {

    const signIn = useSignIn();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setLoading(true);

        // Make some validations if necessary
        await login(formData)
            .then((response) => {
                if (signIn({
                    auth: {
                        token: response.token, // Assuming the response contains a token
                        type: "Bearer", // Assuming the token type is Bearer
                    },
                    userState: response.user
                })) {
                    console.log("Login successful", response);
                    // You can redirect or show a success message here
                    navigate("/contact"); // Redirect to contact page after login
                } else {
                    console.error("Login failed, signIn returned false");
                }

            }).catch((error) => {
                console.error("Login failed", error);
            }).finally(() => {
                setLoading(false);
            });
    }
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <>
            <div>
                <h2>Connexion utilisateur</h2>
                <form method='post' onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required onChange={handleChange} />
                    <label htmlFor="password">Mot de passe:</label>
                    <input type="password" name="password" id="password" required onChange={handleChange} />
                    <input type="submit" value={loading ? "Traitement en cours ..." : "Connexion"} disabled={loading} />
                </form>
                <p>
                    <Link to="/">Counter</Link>
                </p>

            </div>
        </>
    );
};

export default LoginPage;
