import Post from '../reel-post/Post';
import './feed.css';
import { Posts, Users } from "../../dummyData";
import Following from '../followings/Following';

export default function Feed() {
  return (
    <div className='feedleft'>

      <div className="feedWrapperLeft">
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>

      <div className="feedRight">
        <div className="feedWrapperRight">
          <div className="followingSection">

            <div className="followingTitle">
              <span>Following</span>
            </div>

            <ul className="rightbarFriendList">
              {Users.map((u) => (
                <Following key={u.id} user={u} />
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>

  );
}
