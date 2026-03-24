import PropTypes from 'prop-types'

const Student = props => {
    return (
        <div className='student-container' >
            <div className='student-card'>
                <h4>{props.name || "Unknown"}</h4>
                <p>Age : {props.age || 0}</p>
                <p>Flag: {props.flag ? "Yes" : "No"}</p>
            </div>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    flag: PropTypes.bool,
}

export default Student
