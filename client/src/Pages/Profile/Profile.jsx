import Feeds from "../../Components/Feeds/Feeds"
import RightBar from "../../Components/Rightbar/RightBar"
import SideBar from "../../Components/Sidebar/SideBar"
import Topbar from "../../Components/Topbar/Topbar"
import "./profile.css"

export default function Profile() {
  return (
    <>
      <Topbar/>
      <div className="profile">
        <SideBar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="/images/cover.jpg" alt="" className="profileCoverImage" />
                    <img src="/images/john-boe.jpg" alt="" className="profileUserImage" />   
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Akanni Quadree</h4>
                    <span className="profileInfoDesc">hello baby</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feeds/>
                <RightBar profile/> 
            </div>
        </div>
         
      </div>
      
    </>
  )
}
