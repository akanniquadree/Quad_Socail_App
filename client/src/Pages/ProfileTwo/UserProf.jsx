import Feeds from "../../Components/Feeds/Feeds"
import RightBar from "../../Components/Rightbar/RightBar"
import Topbar from "../../Components/Topbar/Topbar"
import UserInfo from "../../Components/UserInfo/UserInfo"
import CoverDIv from "../../Components/UserProfile/CoverDIv"
import "./userProf.css"

export default function UserProf() {
  return (
    <div>
        <Topbar/>
        <CoverDIv/>
        <div className="profileGrid">
          <div className="profileGridWrapper">
            <UserInfo/>
            <div className="feeedwrap">
                <Feeds profile/>
            </div>
          </div> 
        </div>
    </div>
  )
}
