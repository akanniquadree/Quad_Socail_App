import "./friend.css"

export default function Friends({user}) {
  return (
    <li className="sidebarFriend">
        <img src={user.image} alt="" className="sidebarFriendImage" />
        <span className="sidebarFre">{user.username}</span>
    </li>
  )
}
