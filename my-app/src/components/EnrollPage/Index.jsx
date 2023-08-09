import { Link } from 'react-router-dom'
import './Index.css'

const EnrollPage=()=>(
    <div className='enroll-bg-container' >
        <h1>Enter into Student Info System</h1>
        <button type='button'><Link to='/details' > Enroll Now!</Link></button>
    </div>
);

export default EnrollPage;