import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function About() {
    return <div>
        <h2>GeeksforGeeks is a computer science portal for geeks!</h2>
  
        Read more about us at :
        
        <br></br>
        <Link to="/contact">hep</Link>
    </div>
}
export default About;