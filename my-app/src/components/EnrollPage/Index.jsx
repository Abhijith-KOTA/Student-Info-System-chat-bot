import { Link } from 'react-router-dom'
import './Index.css'

const EnrollPage=()=>{
    return(
        <div className='enroll-bg-container' >
            <h1>Enter into Student Info System</h1>
            <Link to="/details" >
                <button className="enroll-btn" type='button'>Enroll !</button>
            </Link>
        </div>
    )
}


export default EnrollPage;