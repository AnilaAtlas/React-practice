import propTypes from "prop-types"
function Student(props) {
  return (
    <div className="main">
    <div className="student">
      <p>Name:{props.name} </p>
      <p>Age:{props.age} </p>
      <p>Student: {props.isStudent ? "yes" : "no"}</p>
    </div> 
    </div>
  );
}
Student.proptypes = {
name: propTypes.string,
age: propTypes.number,
isStudent: propTypes.bool,
}
export default Student
