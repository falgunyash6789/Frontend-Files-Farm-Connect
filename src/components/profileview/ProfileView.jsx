import './profileview.css'
import  { useEffect, useState } from "react";
export default function ProfileView() {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("farmerData"));
    if (savedData) {
      setProfileData(savedData);
    }
  }, []);

  return (
   
      <div className="container-profile">
        <h2>Farmer Profile</h2>
        <div className="profile-picture-section">
          <div className="profile-pic-wrapper">
            <div
              className="profile-pic-preview"
              style={{
                backgroundImage: `url(${profileData.profilePicture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
        <div id="profileDetails" className="profile-details">
          {Object.entries(profileData).map(([key, value]) => {
            if (key !== "profilePicture") {
              return (
                <div className="profile-detail" key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </div>
              );
            }
            return null;
          })}
        </div>
        <button
          className="btn"
          onClick={() => (window.location.href = "profile-input")}
        >
          Edit Profile
        </button>
      </div>
  
  )
}
