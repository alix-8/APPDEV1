import { useState } from "react";

const userData = {
  name: "Alexandrian Bon",
  avatarUrl: "https://avatars.githubusercontent.com/u/188729846?v=4", // sample avatar
  bio: "BSIS 3 Student",
  skills: ["React", "Python", "Java", "JavaScript", "HTML", "CSS"],
  isOnline: true,
  lastUpdated: "1 minute ago",
};

//<UserProfileCard user={userData} />;

function UserProfileCard({ user }) {
  const [messageCount, setMessageCount] = useState(0);
  const [isFavorited, setIsFavorited] = useState();

  function handleSendMessage() {
    setMessageCount(messageCount + 1);
  }

  function handleReset() {
    setMessageCount(0);
  }

  function handleFavorited() {
    setIsFavorited(!isFavorited);
  }

  return (
    <>
      <div className="profile-card">
        <img src={userData.avatarUrl} />
        <h2>{userData.name}</h2>
        <label htmlFor="bio">Bio</label>
        <p id="bio">{userData.bio}</p>
        <h3>Skills</h3>
        <ul>
          {userData.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <div style={{ color: "blue", fontWeight: "bold" }}>
          Messages sent: {messageCount}
        </div>
        {userData.isOnline ? <span>🟢 Online</span> : <span>⚪ Offline</span>}
        <button onClick={handleSendMessage}>Send Message</button>
        <button onClick={handleReset}>Reset</button>
        <br />
        {userData.isOnline && (
          <button onClick={handleFavorited} style={{ marginTop: "8px" }}>
            {isFavorited ? "☆ Favorite" : "★ Favorited"}
          </button>
        )}
      </div>
      <p className="footer"> Card last updated: {userData.lastUpdated} </p>
    </>
  );
}

export default UserProfileCard;
