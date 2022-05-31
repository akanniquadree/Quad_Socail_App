import { Favorite, House, LocationOn, NetworkCheck, School, Work } from "@material-ui/icons"
import "./userInfo.css"

export default function UserInfo() {
  return (
    <div className="userInfo">
      <div className="userWrapper">
        <h3 className="userWrapperH3">Intro</h3>
        <button className="userWrapperBio">Add Bio</button>
        <div className="userInfoIcon">
          <Work htmlColor="grey"/>
          <span style={{color:"grey", marginLeft:"7px"}}>Geologist at Archebode Nigeria limited</span>
        </div>
        <div className="userInfoIcon">
          <Work htmlColor="grey"/>
          <span style={{color:"grey", marginLeft:"7px"}}>Geologist at Archebode Nigeria limited</span>
        </div>
        <div className="userInfoIcon">
          <Work htmlColor="grey"/>
          <span style={{color:"grey", marginLeft:"7px"}}>Geologist at Archebode Nigeria limited</span>
        </div>
        <div className="userInfoIcon">
          <School htmlColor="grey"/>
          <span style={{color:"grey", marginLeft:"7px"}}>Geologist at Archebode Nigeria limited</span>
        </div>
        <div className="userInfoIcon">
          <School htmlColor="grey"/>
          <span style={{color:"grey", marginLeft:"7px"}}>Geologist at Archebode Nigeria limited</span>
        </div>
        <div className="userInfoIcon">
          <House htmlColor="grey"/>
          <span style={{color:"grey", marginLeft:"7px"}}>Geologist at Archebode Nigeria limited</span>
        </div>
        <div className="userInfoIcon">
          <LocationOn htmlColor="grey"/>
          <span style={{color:"grey", marginLeft:"7px"}}>Geologist at Archebode Nigeria limited</span>
        </div>
        <div className="userInfoIcon">
          <Favorite htmlColor="grey"/>
          <span style={{color:"grey", marginLeft:"7px"}}>Geologist at Archebode Nigeria limited</span>
        </div>
        <div className="userInfoIcon">
          <NetworkCheck htmlColor="grey"/>
          <span style={{color:"grey", marginLeft:"7px"}}>Geologist at Archebode Nigeria limited</span>
        </div>
        <button className="userWrapperBio" style={{marginBottom:"20px"}}>Edit Details</button>
        <button className="userWrapperBio" style={{marginBottom:"20px"}}>Add Hobbies</button>
        <button className="userWrapperBio">Add Feautures</button>
      </div>
      <div className="userPhotoWrapper">
        <div className="userPhotoDesc">
          <h3 className="userWrapperH3">Photos</h3>
          <a href="!#">See all Photos</a>
        </div>
        <div className="userPhotoLists">
          <div className="userphotoList">
            <img src="/images/oduntan.png" alt="" />
          </div>
          <div className="userphotoList">
            <img src="/images/oduntan.png" alt="" />
          </div>
          <div className="userphotoList">
            <img src="/images/oduntan.png" alt="" />
          </div>
          <div className="userphotoList">
            <img src="/images/oduntan.png" alt="" />
          </div>
          <div className="userphotoList">
            <img src="/images/oduntan.png" alt="" />
          </div>
          <div className="userphotoList">
            <img src="/images/oduntan.png" alt="" />
          </div>
          <div className="userphotoList">
            <img src="/images/oduntan.png" alt="" />
          </div>
          <div className="userphotoList">
            <img src="/images/oduntan.png" alt="" />
          </div>
          <div className="userphotoList">
            <img src="/images/oduntan.png" alt="" />
          </div>
        </div>
      </div>
      <div className="userPhotoWrapper">
        <div className="userPhotoDesc">
          <h3 className="userWrapperH3">Friends</h3>
          <a href="!#">See all Friends</a>
        </div>
        <p style={{color:"grey",padding:"0", marginBottom:"20px" }}>11,233k Friends</p>
        <div className="userFriendLists">
          <div className="userFriendList">
            <img src="/images/oduntan.png" alt="" />
            <h6> Rebbeca Folunsho yetunde</h6>
          </div>
          <div className="userFriendList">
            <img src="/images/oduntan.png" alt="" />
            <h6> Rebbeca Folunsho yetunde</h6>
          </div>
          <div className="userFriendList">
            <img src="/images/oduntan.png" alt="" />
            <h6> Rebbeca Folunsho yetunde</h6>
          </div>
          <div className="userFriendList">
            <img src="/images/oduntan.png" alt="" />
            <h6> Rebbeca Folunsho yetunde</h6>
          </div>
          <div className="userFriendList">
            <img src="/images/oduntan.png" alt="" />
            <h6> Rebbeca Folunsho yetunde</h6>
          </div>
          <div className="userFriendList">
            <img src="/images/Olubukola.png" alt="" />
            <h6> Rebbeca Folunsho yetunde</h6>
          </div>
          <div className="userFriendList">
            <img src="/images/Olubukola.png" alt="" />
            <h6> Rebbeca Folunsho yetunde</h6>
          </div>
          <div className="userFriendList">
            <img src="/images/Olubukola.png" alt="" />
            <h6> Rebbeca Folunsho yetunde</h6>
          </div>
          <div className="userFriendList">
            <img src="/images/Olubukola.png" alt="" />
            <h6> Rebbeca Folunsho yetunde</h6>
          </div>
        </div>
      </div>
    
    </div>
  )
}
