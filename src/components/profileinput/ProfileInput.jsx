import './profileinput.css'
import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function ProfileInput() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contact: "",
    location: "",
    landSize: "",
    landType: "irrigated",
    crops: "",
    livestock: "",
    fertilizers: "",
    pesticides: "",
    irrigation: "sprinkler",
    seedBrand: "",
    annualCrops: "",
    profilePicture: "",
  });

  const [profilePreview, setProfilePreview] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Prefill form if data exists in localStorage
    const savedData = JSON.parse(localStorage.getItem("farmerData"));
    if (savedData) {
      setFormData(savedData);
      setProfilePreview(savedData.profilePicture || "");
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size should not exceed 5MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePicture: reader.result });
        setProfilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("farmerData", JSON.stringify(formData));
    navigate("/application/profile-view");
  };
  

  return (
  
      <div className="container-profile">
        <h2>Farmer Profile</h2>
        <form onSubmit={handleSubmit}>
          {/* Profile Picture Section */}
          <div className="profile-picture-section">
            <div className="profile-pic-wrapper">
              <label htmlFor="profilePicture" className="profile-pic-label">
                <div
                  className="profile-pic-preview"
                  style={{
                    backgroundImage: `url(${profilePreview})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <span>Upload Profile Picture</span>
              </label>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                accept="image/*"
                onChange={handleFileChange}
                hidden
              />
            </div>
          </div>

          {/* Personal Information */}
          <section>
            <h3>Personal Information</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Enter age"
              required
            />
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              pattern="[0-9]{10}"
              required
            />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter village/city and state"
              required
            />
          </section>

          {/* Farm Details */}
          <section>
            <h3>Farm Details</h3>
            <input
              type="number"
              name="landSize"
              value={formData.landSize}
              onChange={handleInputChange}
              placeholder="Land Size (in acres)"
              required
            />
            <select
              name="landType"
              value={formData.landType}
              onChange={handleInputChange}
            >
              <option value="irrigated">Irrigated</option>
              <option value="rainfed">Rainfed</option>
              <option value="dry">Dry</option>
            </select>
            <textarea
              name="crops"
              value={formData.crops}
              onChange={handleInputChange}
              placeholder="Crops Grown"
            ></textarea>
            <textarea
              name="livestock"
              value={formData.livestock}
              onChange={handleInputChange}
              placeholder="Livestock"
            ></textarea>
          </section>

          {/* Farming Practices */}
          <section>
            <h3>Farming Practices</h3>
            <textarea
              name="fertilizers"
              value={formData.fertilizers}
              onChange={handleInputChange}
              placeholder="Fertilizers Used"
            ></textarea>
            <textarea
              name="pesticides"
              value={formData.pesticides}
              onChange={handleInputChange}
              placeholder="Pesticides Used"
            ></textarea>
            <select
              name="irrigation"
              value={formData.irrigation}
              onChange={handleInputChange}
            >
              <option value="sprinkler">Sprinkler</option>
              <option value="drip">Drip</option>
              <option value="manual">Manual</option>
              <option value="flood">Flood</option>
            </select>
            <input
              type="text"
              name="seedBrand"
              value={formData.seedBrand}
              onChange={handleInputChange}
              placeholder="Seed Brand"
              required
            />
            <input
              type="number"
              name="annualCrops"
              value={formData.annualCrops}
              onChange={handleInputChange}
              placeholder="Annual Crops per Year"
              required
            />
          </section>

          <button type="submit" className="btn btn-save">
            Save Profile
          </button>
        </form>
      </div>
    
  );
}
