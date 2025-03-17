const JavaPage = () => {
    return (
        <div className = "Java-Page"> 
            <h1>Java</h1>
            <p>The course is in English by default. To learn in your preferred language, please select your language:</p>
            <select name= "courses" id = "courses" defaultValue = "Select">
                <option value = "Select" disabled>Select</option>
                <option value = "Telugu" >Telugu</option>
                <option value = "Hindi" >Hindi</option>
                <option value = "tamil" >Tamil</option>
            </select>
        </div>


    )
};

export default JavaPage;