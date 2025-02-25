import PropTypes from "prop-types";
function UserGreeting(props) {
  //  ----if else method------

  // if(props.isLoggedIn){
  // return <h2>React is a JavaScript library developed by Facebook that, among other things, was used to build Instagram.com. It aims to allow developers to easily create user interfaces for websites, desktop apps and mobile applications.</h2>
  // }else{
  //     return <h2>Please Log in First!</h2>
  // }

  // ------Ternary Operators------
//   return props.isLoggedIn ? (
//     <h2 className="reactIntro">
//       React is a free and open-source front-end JavaScript library that aims to
//       make building user interfaces based on components more "seamless". It is
//       maintained by Meta and a community of individual developers and companies.
//     </h2>
//   ) : (
//     <h2 className="login-message">Please Log In first!</h2>
//   );

// -----Another Ternary Operator method------
const reactIntro = <h2 className ="reactIntro"> React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript </h2>

const loginPrompt = <h2 className="login-message"> Please log In to continue {props.userName}</h2>

return (props.isLoggedIn ? reactIntro : loginPrompt);
}
UserGreeting.Proptypes={
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Guest",
}

export default UserGreeting;
