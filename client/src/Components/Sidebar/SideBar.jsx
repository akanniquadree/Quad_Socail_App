import "./sidebar.css"
import {RssFeed, Chat, VideoCall, Bookmark, Group, Help,  Work, School, Event} from "@material-ui/icons"
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon"/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <VideoCall className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <Help className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon"/>
            <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/images/john-boe.jpg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFre">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/images/john-boe.jpg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFre">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/images/john-boe.jpg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFre">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/images/john-boe.jpg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFre">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/images/john-boe.jpg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFre">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/images/john-boe.jpg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFre">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/images/john-boe.jpg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFre">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar