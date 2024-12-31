import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

function Home() {
    const handleLogout = async () => {
        await signOut(auth);
        alert("You have been logged out.");
    };

    return (
        <div>
            <h2>Welcome to the Pet Adoption Platform</h2>
            <p>Browse and adopt your favorite pets!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;
