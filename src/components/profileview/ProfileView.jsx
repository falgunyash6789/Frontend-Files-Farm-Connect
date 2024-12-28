import './profileview.css';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function ProfileView() {
  const [profileData, setProfileData] = useState({});
  const navigate = useNavigate(); // For programmatic navigation

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("farmerData"));
    
    if (!savedData) {
      // If no profile data is found, navigate to profile-input
      navigate("/application/profile-input");
    } else {
      setProfileData(savedData);
    }
  }, [navigate]); // Ensure navigate is included in the dependency array

  const handleLogout = () => {
    localStorage.removeItem("farmerData"); // Clear profile data
    navigate("/auth"); // Redirect to login page
  };

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
        className="btn edit-btn"
        onClick={() => navigate("/application/profile-input")} // Redirect to profile-input on button click
      >
        Edit Profile
      </button>
      <button
        className="btn logout-btn"
        onClick={handleLogout} 
      >
        Logout
      </button>
    </div>
  );
}
