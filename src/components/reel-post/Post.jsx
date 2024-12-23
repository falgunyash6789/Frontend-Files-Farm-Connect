import './post.css';
import { MdMoreVert } from "react-icons/md";
import { Users } from "../../dummyData";
import { useState, useRef, useEffect } from 'react';

export default function Post({ post }) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const videoRef = useRef(null);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (videoRef.current) {
                    if (entry.isIntersecting) {
                        videoRef.current.muted = false; // Unmute when in view
                        videoRef.current.play(); // Play when in view
                    } else {
                        videoRef.current.muted = true; // Mute when out of view
                        videoRef.current.pause(); // Pause when out of view
                    }
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the video is visible
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
                            alt=""
                        />
                        <span className="postUserName">
                            {Users.filter((u) => u.id === post.userId)[0].username}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MdMoreVert className="postIcon" />
                    </div>
                </div>
                <div className="Center">
                    <span className="postText">{post?.desc}</span>
                    <video
                        autoPlay
                        ref={videoRef}
                        src={post.photo}
                        className="postImg"
                        onClick={handleVideoClick} // Handle tap/click to play/pause
                    ></video>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img
                            className="likeIcon"
                            src="/assets/like.png"
                            alt=""
                            onClick={likeHandler}
                        />
                        <img
                            className="likeIcon"
                            src="/assets/heart.png"
                            alt=""
                            onClick={likeHandler}
                        />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
