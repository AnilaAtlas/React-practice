import profilepic from '../assets/profilepic.avif'

function Card(){
return(
    <div className="card">
        <img className='profilepic' src={profilepic} alt="Profile picture" />
        <h2>Naina Khan</h2>
        <p>I am a web developer</p>
    </div>
);
}
export default Card