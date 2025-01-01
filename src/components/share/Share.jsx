import './share.css'
import { MdPermMedia, MdEmojiEmotions } from "react-icons/md";
import { PiTagSimpleFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";


export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="/assets/person/profile.png" alt="" />
                <input placeholder="'What's in your mind Yash ?" className="shareInput" />
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <MdPermMedia className='shareIcon' color='tomato'/>
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <PiTagSimpleFill className='shareIcon' color='blue'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <FaLocationDot className='shareIcon' color='green'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <MdEmojiEmotions className='shareIcon' color='goldenrod'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
