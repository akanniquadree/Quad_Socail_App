import { Posts } from "../../DummyData"
import Post from "../Post/Post"
import Share from "../Share/Share"
import Stories from "../Stories/Stories"
import "./feed.css"


function Feeds() {
  return (
    <div className="feeds">
      <div className="feedWrapper">
        <Stories/>
        <Share/>
        {
          Posts.map((itm, index)=>(
            <Post post={itm} key={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Feeds