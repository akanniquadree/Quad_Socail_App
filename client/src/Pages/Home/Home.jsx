import Feeds from "../../Components/Feeds/Feeds"
import RightBar from "../../Components/Rightbar/RightBar"
import SideBar from "../../Components/Sidebar/SideBar"
import Topbar from "../../Components/Topbar/Topbar"
import "./home.css"

function Home() {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <SideBar/>
        <Feeds/>
        <RightBar/> 
      </div>
      
    </>
  )
}

export default Home