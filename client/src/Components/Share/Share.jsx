import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons"
import "./share.css"


function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/images/Quadree.png" alt="" className="shareProfileImg" />
                <input placeholder="What's on your mind" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="sharOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Videos</span>
                    </div>
                </div>
                <div className="shareOptions">
                    <div className="sharOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                </div>
                <div className="shareOptions">
                    <div className="sharOption">
                        <Room htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                </div>
                <div className="shareOptions">
                    <div className="sharOption">
                        <EmojiEmotions htmlColor="gold" className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share