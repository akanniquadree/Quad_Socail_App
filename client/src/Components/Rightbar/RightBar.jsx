import { AddCircle } from "@material-ui/icons"
import { User } from "../../DummyData"
import Online from "../Online/Online"
import "./rightbar.css"
function RightBar({profile}) {
  const HomeRightbar = () =>{
    return(
      <>
          <div className="birthdayContainer">
          <img src="/images/package.gif" alt="" className="birthdayImage" />
          <span className="birthdayText"><b>Akanni Quadree</b> and <b>two others</b> have their birthday today.</span>
        </div>
        <img src="/images/New-Horizons.gif" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {User.map((itm, index)=>(
            <Online user={itm} key={index}/>
          ))}
        </ul>
        <hr className="rightbarHr"/>

        <h4 className="rightbarTitle">Group Conversation</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img src="/images/omotunde.jpg" alt="" className="rightbarProfileImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername" >Kolapor Habeeb, Facebook User and 12 others</span>
          </li>
        </ul>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img src="/images/omotunde.jpg" alt="" className="rightbarProfileImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername" >Kolapor Habeeb, Facebook User and 12 others</span>
          </li>
        </ul>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img src="/images/omotunde.jpg" alt="" className="rightbarProfileImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername" >Kolapor Habeeb, Facebook User and 12 others</span>
          </li>
        </ul>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img src="/images/omotunde.jpg" alt="" className="rightbarProfileImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername" >Kolapor Habeeb, Facebook User and 12 others</span>
          </li>
        </ul>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img src="/images/omotunde.jpg" alt="" className="rightbarProfileImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername" >Kolapor Habeeb, Facebook User and 12 others</span>
          </li>
        </ul>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img src="/images/omotunde.jpg" alt="" className="rightbarProfileImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername" >Kolapor Habeeb, Facebook User and 12 others</span>
          </li>
        </ul>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <AddCircle/>
            </div>
            <span className="rightbarUsername" style={{fontSize:"13px"}}>Create Group</span>
          </li>
        </ul>
      </>
    )
  }
  const ProfileRightBar = () =>{
    return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoCity">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoCity">Nigeria</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship</span>
            <span className="rightbarInfoCity">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/images/Quadree.png" alt="" className="rightbarFollowingImage" />
            <span className="rightbarFollowingName">John gossip</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/images/Quadree.png" alt="" className="rightbarFollowingImage" />
            <span className="rightbarFollowingName">John gossip</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/images/Quadree.png" alt="" className="rightbarFollowingImage" />
            <span className="rightbarFollowingName">John gossip</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/images/Quadree.png" alt="" className="rightbarFollowingImage" />
            <span className="rightbarFollowingName">John gossip</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/images/Quadree.png" alt="" className="rightbarFollowingImage" />
            <span className="rightbarFollowingName">John gossip</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {profile ? <ProfileRightBar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}

export default RightBar