import { CameraAltOutlined, Chat,  EmojiEmotionsOutlined, MoreVert, Public, Redo, ThumbUpAltRounded, GifOutlined, NoteOutlined } from "@material-ui/icons"
import "./post.css"

function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="topLeft">
                    <img src="/images/Quadree.png" alt="" className="postProfileImage" />
                    <div style={{display:"flex", flexDirection:"column"}}>
                       <span className="postUsername">Akanni Quadree</span>
                       <div style={{display:"flex",marginLeft:"8px", marginTop:"5px"}}>
                           <span className="postDate">5 minutes ago.</span>
                           <Public style={{fontSize:"15px", marginLeft:"2px"}} />
                       </div>
                    </div>
                </div>
                <div className="topRight">
                    <MoreVert style={{cursor:"pointer"}}/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Its my first Post</span>
                <img src="/images/Quadree.png" alt="" className="postImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/images/like.png" alt="" className="postBottomImage" />
                    <img src="/images/heart.png" alt="" className="postBottomImage" />
                    <span className="postLikeCounter">32</span>
                </div>
                <div className="postBottomRight">
                    <span className="postComment">24k Comments</span>
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