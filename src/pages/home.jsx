import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const ButtonClicked = () => {
        const selectedCourse = document.getElementById("courses").value;
        if (selectedCourse === "Python") {
            navigate("/python");
        } else if (selectedCourse === "Java") {
            navigate("/java");
        }
    };

    return (
        <div className="view">
            <div className="container">
                <h1 className="header">Learn Any Programming Language</h1>
                <p className="paragraph">
                    Learn any Programming Language in your preferred language with the help of our community
                </p>

                <div className="selection">
                    <select
                        name="courses"
                        id="courses"
                        className="select"
                        defaultValue="Select"
                    >
                        <option value="Select" disabled>Select</option>
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                    </select>
                    <button
                        className="button"
                        onClick={ButtonClicked}
                    >
                        Go
                    </button>
                </div>
            </div>

            <style jsx>{`
                html, body {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                }

                .view {
                    height: 100vh;
                    width: 100vw;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #f0f0f0;
                }

                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    max-width: 600px;
                    padding: 20px;
                    text-align: center;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .header {
                    font-size: 2.5rem;
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 1.5rem;
                }

                .paragraph {
                    font-size: 1.2rem;
                    color: #666;
                    max-width: 600px;
                    margin-bottom: 2rem;
                }

                .selection {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    max-width: 400px;
                }

                .select {
                    width: 100%;
                    padding: 0.75rem;
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
                    padding: 0.75rem;
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

                @media (max-width: 768px) {
                    .header {
                        font-size: 2rem;
                    }

                    .paragraph {
                        font-size: 1rem;
                    }

                    .select, .button {
                        font-size: 0.9rem;
                        padding: 0.5rem;
                    }
                }

                @media (max-width: 480px) {
                    .header {
                        font-size: 1.5rem;
                    }

                    .paragraph {
                        font-size: 0.9rem;
                    }

                    .select, .button {
                        font-size: 0.8rem;
                        padding: 0.4rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default HomePage;