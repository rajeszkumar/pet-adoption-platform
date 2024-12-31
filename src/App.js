import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import ContactUsPopup from "./components/ContactUsPopup";
import Login from "./components/Login";
import Register from "./components/Register";
import { auth } from "./firebaseConfig";
import "./App.css";

function App() {
    const [showPopup, setShowPopup] = useState(false);
    const [user, setUser] = useState(null);

    // Handle Contact Us Popup
    const handlePopupOpen = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    // Track user authentication state
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });

        // Sign out user when the tab is closed
        const handleUnload = () => {
            auth.signOut();
        };
        window.addEventListener("beforeunload", handleUnload);

        return () => {
            unsubscribe();
            window.removeEventListener("beforeunload", handleUnload);
        };
    }, []);

    // Protect private routes
    const PrivateRoute = ({ children }) => {
        return user ? children : <Navigate to="/login" />;
    };

    return (
        <Router>
            <div className="App">
                {user && <Navbar onContactClick={handlePopupOpen} />} {/* Navbar visible only for logged-in users */}
                {showPopup && <ContactUsPopup onClose={handlePopupClose} />}
                <Routes>
                    {/* Home Route: Protected */}
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <MainContent />
                            </PrivateRoute>
                        }
                    />
                    {/* Login Route */}
                    <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                    {/* Register Route */}
                    <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
                    {/* Fallback Route */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
