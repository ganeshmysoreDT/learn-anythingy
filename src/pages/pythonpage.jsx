import React, { useState } from 'react';
import pythonEnglish from '../data/python/pythonEnglish.json';
import pythonTelugu from '../data/python/pythonTelugu.json';
import pythonHindi from '../data/python/pythonHindi.json';
import pythonKannada from '../data/python/pythonKannada.json';
import pythonTamil from '../data/python/pythonTamil.json';

const PythonPage = () => {
    const [languageData, setLanguageData] = useState(pythonEnglish);

    const changeLanguage = () => {
        const selectedLanguage = document.getElementById("Select-Languages").value;

        if (selectedLanguage === "default select") {
            setLanguageData(pythonEnglish);
        } else if (selectedLanguage === "english") {
            setLanguageData(pythonEnglish);
        } else if (selectedLanguage === "telugu") {
            setLanguageData(pythonTelugu);
        } else if (selectedLanguage === "hindi") {
            setLanguageData(pythonHindi);
        } else if (selectedLanguage === "kannada") {
            setLanguageData(pythonKannada);
        } else if (selectedLanguage === "tamil") {
            setLanguageData(pythonTamil);
        }
    };

    return (
        <div className="view">
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#introduction">Introduction</a></li>
                    <li className="nav-item"><a href="#popular">Why Python is Popular?</a></li>
                    <li className="nav-item"><a href="#frameworks">Popular Python Frameworks</a></li>
                    <li className="nav-item"><a href="#installation">Installation</a></li>
                </ul>
            </nav>
            <h1 className="header">Python</h1>
            <div className="container">
                <p className="paragraph">
                    The course is in English by default. To learn in your preferred language, please select your language:
                </p>
                <div className="selection">
                    <label htmlFor="Select-Languages" className="select-label">Select Your Language:</label>
                    <select
                        name="Select-Languages"
                        id="Select-Languages"
                        className="select"
                        defaultValue="default select"
                        aria-label="Select Your Language"
                    >
                        <option value="default select" disabled>Select Your Language</option>
                        <option value="english">English</option>
                        <option value="telugu">Telugu</option>
                        <option value="hindi">Hindi</option>
                        <option value="tamil">Tamil</option>
                        <option value="kannada">Kannada</option>
                    </select>
                    <button
                        className="button"
                        onClick={changeLanguage}
                    >
                        Go
                    </button>
                </div>
                <div className="python-content">
                    {languageData.Introduction && (
                        <>
                            <h2 id="introduction">{languageData.Introduction.Title}</h2>
                            <p className="intro-content" dangerouslySetInnerHTML={{ __html: Array.isArray(languageData.Introduction.Content) ? languageData.Introduction.Content.join('\n\n') : languageData.Introduction.Content }}></p>
                        </>
                    )}

                    {languageData.Popular && (
                        <>
                            <h2 id="popular">{languageData.Popular.Title}</h2>
                            <p className="popular-content" dangerouslySetInnerHTML={{ __html: Array.isArray(languageData.Popular.Content) ? languageData.Popular.Content.join('\n\n') : languageData.Popular.Content }}></p>
                        </>
                    )}

                    {languageData.PythonFrameworks && (
                        <>
                            <h2 id="frameworks">{languageData.PythonFrameworks.Title}</h2>
                            <p className="frameworks-content" dangerouslySetInnerHTML={{ __html: Array.isArray(languageData.PythonFrameworks.Content) ? languageData.PythonFrameworks.Content.join('\n\n') : languageData.PythonFrameworks.Content }}></p>
                        </>
                    )}

                    {languageData.Installation && (
                        <>
                            <h2 id="installation">{languageData.Installation.Title}</h2>
                            <p className="installation-content" dangerouslySetInnerHTML={{ __html: Array.isArray(languageData.Installation.Content) ? languageData.Installation.Content.join('\n\n') : languageData.Installation.Content }}></p>
                        </>
                    )}
                </div>
            </div>

            <style jsx>{`
                html, body {
                    height: auto; /* Allow full content height */
                    min-height: 100vh; /* Ensures page fills viewport */
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                    overflow-y: auto; /* Enables scrolling */
                    background-color: #ffffff; /* Set background to white */
                }

                .view {
                    width: 100vw;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background-color: #ffffff; /* Make sure it's white */
                    padding: 20px;
                    box-sizing: border-box;
                    background-color: #f0f0f0;
                }

                .navbar {
                    width: 100%;
                    // position: fixed;
                    padding: 20px;
                    height: 20%; /* Set height to 20% */
                    background-color: #007bff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .nav-list {
                    list-style: none;
                    display: flex;
                    padding: 0;
                    margin: 0;
                }

                .nav-item {
                    margin: 0 15px;
                }

                .nav-item a {
                    color: white;
                    text-decoration: none;
                    font-size: 1.2rem;
                    transition: color 0.3s ease;
                }

                .nav-item a:hover {
                    color: #0056b3;
                }

                .container {
                    width: 60%;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    box-sizing: border-box;
                }

                .header {
                    font-size: 2rem;
                    color: black;
                    margin-bottom: 1.5rem;
                }

                .paragraph {
                    color: black;
                    text-align: center;
                    justify-content: center;
                    align-items: center;
                }

                .selection {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    max-width: 300px;
                    margin: 0 auto 2rem auto;
                }

                .select-label {
                    margin-bottom: 0.5rem;
                    font-size: 1rem;
                    color: #333;
                }

                .select {
                    width: 100%;
                    padding: 0.5rem;
                    font-size: 1rem;
                    margin-bottom: 1rem;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    outline: none;
                    transition: border-color 0.3s ease;
                }

                .select:focus {
                    border-color: #007bff;
                }

                .button {
                    width: 100%;
                    padding: 0.5rem;
                    font-size: 1rem;
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .button:hover {
                    background-color: #0056b3;
                }

                .python-content {
                    text-align: left;
                    width: 100%;
                }

                .python-content h2 {
                    font-size: 2rem;
                    color: #333;
                    margin-bottom: 1rem;
                }

                .python-content p {
                    font-size: 1rem;
                    color: #666;
                    line-height: 1.6;
                    white-space: pre-line; /* Preserve newlines */
                    font-family: 'Arial Black', sans-serif; /* Set font to Arial Black */
                }            

                /* Mobile & Tablet Responsive */
                @media (max-width: 1024px) {
                    .container {
                        width: 80%;
                    }

                    .python-content h2 {
                        font-size: 1.8rem;
                    }
                }

                @media (max-width: 768px) {
                    .container {
                        width: 90%;
                    }

                    .python-content h2 {
                        font-size: 1.5rem;
                    }

                    .python-content p {
                        font-size: 0.95rem;
                    }
                }

                @media (max-width: 480px) {
                    .container {
                        width: 95%;
                        padding: 15px;
                    }

                    .python-content h2 {
                        font-size: 1.2rem;
                    }

                    .python-content p {
                        font-size: 0.85rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default PythonPage;