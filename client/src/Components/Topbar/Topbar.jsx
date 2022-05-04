import "./topbar.css"
import {Search, Home, Timeline, SportsEsports, OndemandVideo, Person, Chat, Notifications} from "@material-ui/icons"

function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <img src="/images/glossy.png" className="logo" alt=""/>
            <div className="searchbar">
                <Search className="searchIcon"/>
                <input placeholder="Search for friends" className="searchInput" />
            </div>
        </div>
        <div className="topbarCenter">
            <div className="topbarLink">
                <Home className="topbarLinks"/>
                <Timeline className="topbarLinks"/>
                <OndemandVideo className="topbarLinks"/>
                <SportsEsports className="topbarLinks"/>
            </div>  
        </div>
        <div className="topbarRight">
            <div className="topbarIcons">
                <div className="topbarImageItem">
                    <img src = "/images/john-boe.jpg" alt="" className="topbarImage"/>
                    <span >Akanni</span>
                </div>
                <div className="topbarIconItem">
                    <Person className="searchIcon"/>
                    <span className="topIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat className="searchIcon"/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications className="searchIcon"/>
                    <span className="topIconBadge">3</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar