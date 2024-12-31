import React, { useState, useEffect } from "react";
import "./MainContent.css";
import persian from "../images/persian.jpg";
import beagle from "../images/beagle.jpg";
import golden from "../images/golden.jpg";
import sia from "../images/sia.jpg";
import heroImage1 from "../images/carousel1.jpg";
import heroImage2 from "../images/carousel2.jpg";
import heroImage3 from "../images/carousel3.jpg";

function MainContent() {
    const [pets, setPets] = useState([]); // All pets
    const [filteredPets, setFilteredPets] = useState([]); // Pets after filtering
    const [filters, setFilters] = useState({
        type: "All",
        gender: "All",
        breed: "All",
        age: "All",
        search: "",
    });

    const [currentHeroImage, setCurrentHeroImage] = useState(0); // Active carousel image index
    const heroImages = [heroImage1, heroImage2, heroImage3]; // Carousel images

    // Load pet data (this could also be fetched from an API or database)
    useEffect(() => {
        const petData = [
            { id: 1, name: "Buddy", type: "Dog", breed: "Golden Retriever", gender: "Male", age: 2, image: golden },
            { id: 2, name: "Mittens", type: "Cat", breed: "Persian", gender: "Female", age: 3, image: persian },
            { id: 3, name: "Charlie", type: "Dog", breed: "Beagle", gender: "Male", age: 1, image: beagle },
            { id: 4, name: "Bella", type: "Cat", breed: "Siamese", gender: "Female", age: 4, image: sia },
        ];
        setPets(petData);
        setFilteredPets(petData);
    }, []);

    // Automatically change the hero image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroImage((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 3000); // 3 seconds interval
        return () => clearInterval(interval); // Cleanup on component unmount
    }, [heroImages.length]);

    // Update filtered pets whenever filters change
    useEffect(() => {
        let filtered = pets;

        if (filters.type !== "All") {
            filtered = filtered.filter((pet) => pet.type === filters.type);
        }

        if (filters.gender !== "All") {
            filtered = filtered.filter((pet) => pet.gender === filters.gender);
        }

        if (filters.breed !== "All") {
            filtered = filtered.filter((pet) => pet.breed === filters.breed);
        }

        if (filters.age !== "All") {
            filtered = filtered.filter((pet) => pet.age.toString() === filters.age);
        }

        if (filters.search.trim() !== "") {
            filtered = filtered.filter((pet) =>
                pet.name.toLowerCase().includes(filters.search.toLowerCase())
            );
        }

        setFilteredPets(filtered);
    }, [filters, pets]);

    // Handle filter and search changes
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    return (
        <div className="main-content">
            <div className="main-layout">
                {/* Carousel Section */}
                <div className="hero-section">
                    <div className="hero-text">
                        <h1>Embrace Endless Love with Your New Furry Best Friend.</h1>
                        <p>Adopt now and start creating unforgettable memories together.</p>
                    </div>
                    <div className="hero-carousel">
                        <img
                            src={heroImages[currentHeroImage]}
                            alt="Hero"
                            className="carousel-image"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="content-section">
                    <h2>Available Pets for Adoption</h2>

                    {/* Filters and Search Bar */}
                    <div className="filters">
                        <input
                            type="text"
                            name="search"
                            placeholder="Search by name"
                            value={filters.search}
                            onChange={handleFilterChange}
                        />
                        <select name="type" onChange={handleFilterChange}>
                            <option value="All">All Types</option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                        </select>
                        <select name="gender" onChange={handleFilterChange}>
                            <option value="All">All Genders</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <select name="breed" onChange={handleFilterChange}>
                            <option value="All">All Breeds</option>
                            <option value="Golden Retriever">Golden Retriever</option>
                            <option value="Persian">Persian</option>
                            <option value="Beagle">Beagle</option>
                            <option value="Siamese">Siamese</option>
                        </select>
                        <select name="age" onChange={handleFilterChange}>
                            <option value="All">All Ages</option>
                            <option value="1">1 Year</option>
                            <option value="2">2 Years</option>
                            <option value="3">3 Years</option>
                            <option value="4">4 Years</option>
                        </select>
                    </div>

                    {/* Pet Cards */}
                    <div className="pet-list">
                        {filteredPets.length > 0 ? (
                            filteredPets.map((pet) => (
                                <div key={pet.id} className="pet-card">
                                    <img src={pet.image} alt={pet.name} className="pet-image" />
                                    <h3>{pet.name}</h3>
                                    <p>Type: {pet.type}</p>
                                    <p>Breed: {pet.breed}</p>
                                    <p>Gender: {pet.gender}</p>
                                    <p>Age: {pet.age} years</p>
                                </div>
                            ))
                        ) : (
                            <p>No pets found matching the criteria.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
