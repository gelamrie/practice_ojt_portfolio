import profilePic from './assets/profile.png'

function Card() {
    return (
        <div className="card">
            <img src={profilePic} alt="Profile Picture" />
            <h2> Angela Marie De Juan </h2>
            <p> 2nd year Computer Engineering student at PUP - Manila </p>
        </div>
    );

}
export default Card;