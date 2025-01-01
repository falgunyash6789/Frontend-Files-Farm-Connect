import './following.css'

export default function Following({ user }) {
  return (
    <div className="followingContainer">
      
        <li className="rightbarFriend">
          <img src={user.profilePicture} alt="" className="rightbarFriendImg" />
          <span className="sidebarFriendName">{user.username}</span>
        </li>
      
    </div>
  );
}
