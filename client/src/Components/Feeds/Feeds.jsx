import Post from "../Post/Post"
import Share from "../Share/Share"
import "./feed.css"

function Feeds() {
  return (
    <div className="feeds">
      <div className="feedWrapper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default Feeds