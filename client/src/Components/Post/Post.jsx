import { CameraAltOutlined, Chat,  EmojiEmotionsOutlined, MoreVert, Public, Redo, ThumbUpAltRounded, GifOutlined, NoteOutlined } from "@material-ui/icons"
import { User } from "../../DummyData"
import "./post.css"

function Post({post}) {
    
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="topLeft">
                    <img src={User.filter(u=>u.id === post.userId)[0].image} alt="" className="postProfileImage" />
                    <div style={{display:"flex", flexDirection:"column"}}>
                       <span className="postUsername">{User.filter(u=>u.id === post.userId)[0].username}</span>
                       <div style={{display:"flex",marginLeft:"8px", marginTop:"5px"}}>
                           <span className="postDate">{post.date}</span>
                           <Public style={{fontSize:"15px", marginLeft:"2px"}} />




                       </div>
                    </div>
                </div>
                <div className="topRight">
                    <MoreVert style={{cursor:"pointer"}}/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img src={post.photo} alt="" className="postImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/images/like.png" alt="" className="postBottomImage" />
                    <img src="/images/heart.png" alt="" className="postBottomImage" />
                    <span className="postLikeCounter">{post.like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postComment">{post.comment} Comments</span>
                    <span className="postComment">24k Shares</span>
                </div>
            </div>
            <ul className="postEnd">
                <li>
                    <ThumbUpAltRounded className="postEndLists"/>
                    <span className="postEndList">Like</span>
                </li>
                <li>
                    <Chat className="postEndLists"/>
                    <span className="postEndList">Chat</span>
                </li>
                <li>
                    <Redo className="postEndLists"/>
                    <span className="postEndList">Share</span>
                </li>
            </ul>
            <div className="commentSection">
                <span className="commentSectionMore">Top comments</span>
                <div className="commentSectionCenter">
                    <span className="commetSpan">View 5 previous comments</span>
                    <div className="commentSectionBottom">
                        <img src="/images/Quadree.png" alt="" className="commentImage" />
                        <div className="comTextWr">
                            <span className="comTexts">Akanni</span>
                            <p className="comText">jkdjjskjdkjddhjkujjooojkj lkd kkdlkldkldkklddkk 
                            dlkdkddlklsjik dkjdkjds kdskkjkji ijijdjis</p>
                        </div>
                        
                    </div>
                </div>
                <div className="commentOption">
                    <span className="comDate">Like</span>
                    <span className="comDate">Report</span>
                    <span className="comDate">5 minutes ago.</span>
                </div>

                <div className="commentSectionBottom">
                    <img src="/images/Quadree.png" alt="" className="commentImage" />
                    <div className="commentInput">
                        <input className="commentInputs" placeholder="write a public comment..." />
                        <EmojiEmotionsOutlined className="commentIcon"/>
                        <CameraAltOutlined className="commentIcon"/>
                        <GifOutlined className="commentIcon"/>
                        <NoteOutlined className="commentIcon"/>
                    </div>
                </div>
                
                
                <div className="commentSectionBottom"></div>
            </div>
        </div>
    </div>
  )
}

export default Post