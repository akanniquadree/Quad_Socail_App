import { CameraAlt, Add, Edit, MoreHoriz } from "@material-ui/icons"
import { Link } from "react-router-dom"
import "./userProfile.css"

export default function CoverDIv() {
  return (
    <div className="coverContainer">
        <div className="coverWrapper">
            <div className="coverTop">
                <img src="/images/cover.jpg" alt=""  />
                <div className="coverCoverIcon">
                    <CameraAlt/>
                    <span>Edit Cover Photo</span>
                </div>
            </div>
            <div className="coverMiddle">
                <div className="coverMiddleLeft">
                    <img src="/images/Quadree.png" alt="" />
                    <span className="coverMiddleLeftSpan">
                        <CameraAlt/>
                    </span>
                </div>
                <div className="coverMiddleCenter">
                    <div className="coverMiddleCenterWrapper">
                        <h3>Akanni Quadree</h3>
                        <p><a href="!#">1.1k Friends</a></p>
                        <div className="coverMiddleCenterImage">
                            <img src="/images/omotunde.jpg" alt=""  style={{left:"210px"}}/>
                            <img src="/images/omotunde.jpg" alt="" style={{left:"180px"}} />
                            <img src="/images/omotunde.jpg" alt="" style={{left:"150px"}} />
                            <img src="/images/omotunde.jpg" alt="" style={{left:"120px"}} />
                            <img src="/images/omotunde.jpg" alt="" style={{left:"90px"}} />
                            <img src="/images/omotunde.jpg" alt="" style={{left:"60px"}} />
                            <img src="/images/omotunde.jpg" alt="" style={{left:"30px"}}/>
                            <img src="/images/omotunde.jpg" alt="" style={{left:"0px"}} />
                        </div>
                    </div>
                </div>
                <div className="coverMiddleRight">
                    <div className="coverMiddleRightWrapper">
                        <div className="addStory"><Add htmlColor="white"/> Add to story</div>
                        <div className="addStory2"><Edit/> Edit Profile</div>
                    </div>
                </div>
            </div>
           
        </div>
        <hr className="coverHr"/>
        <div className="coverLists">
            <ul className="coverList">
                <li className="coverListFirst">
                    <ul className="coverListLeft">
                        <li className="coverActive">Post</li>
                        <li>About</li>
                        <li>Friends</li>
                        <li>Photos</li>
                        <li>Videos</li>
                        <li>More</li>
                    </ul>
                </li>
                <li className="coverListSecond">
                    <MoreHoriz className="coverListSecondIcon" />
                </li>
            </ul>
            
        </div>
        
    </div>
  )
}
