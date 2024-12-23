import './cummunity.css';
import CummunityPost from '../cummunity-post/CummunityPost'
import {CuPosts} from "../../dummyData";


export default function Cummunity() {
  return (
        <div className='feed'>
          <div className="feedWrapper">
            {CuPosts.map((p)=>(
              <CummunityPost key={p.id} post = {p}/>
            ))}
          </div>
        </div>
  )
}
