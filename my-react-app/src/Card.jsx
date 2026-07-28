import profilePic from './assets/profile.png'

function Card() {
    return (
        <div className="card">
            <img src={profilePic} alt="Profile Picture" />
            <h2> Angela Marie De Juan </h2>
            <p> I am incoming 3rd year Computer Engineering student at Polytechnic University of the Philippines - Main Campus. Currently an intern at 7th Pillar Integrated System Corp.</p>

        </div>
    );

}

export default Card;