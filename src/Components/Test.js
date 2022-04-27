import { BrowserRouter , Link } from "react-router-dom";
import React  from 'react';
import './Test.css'
function Test (){
    return(
        <div className="test">
            <div>Please Select subject:-</div>
            <div><span><Link to={'/TestQuiz/Maths'}className='test-button'>Maths</Link></span><span><Link to={'/TestQuiz/Physics'}className='test-button'>Physics</Link></span><span><Link to={'/TestQuiz/Chemistry'}className='test-button'>Chemistry</Link></span></div>
        </div>

    );
}
export default Test;