import { AddCircle, ChevronLeftRounded, ChevronRightRounded } from "@material-ui/icons"
import { useEffect,useRef} from "react"
import "./Stories.css"
import M from "materialize-css"
// import "materialize-css/dist/css/materialize.min.css"
function Stories() {
    const slider =useRef()
    useEffect(()=>{
       M.Carousel.init(slider.current,{numVisible:1,noWrap:true, fullWidth:true})
    })

    
    const goPrev = (caro) =>{
       
    }
    const goNext = (caro) =>{
        
    } 
    
  return (
    <div className="story">
        <div className="carouselCont" style={{postion:"relative"}}>
            <div className="carousel"ref={slider}>
                <div className="storyContainer carousel-item">
                    <div className="storyWrapper">
                        <div className="storyImageWrapper">
                            <img src="/images/Quadree.png" alt="" className="storyImage" />
                            <AddCircle htmlColor="blue" className="storyIcon"/>
                        </div>
                        
                        <span className="storyTitle">Create Story</span>
                    </div>
                    <div className="storyWrapper">
                        <div className="storyImageWrappers">
                            <img src="/images/Quadree.png" alt="" className="storyProfileImage" />
                            <span className="storyOnline"></span>
                            <img src="/images/Quadree.png" alt="" className="storyImages" />
                            <span className="storyProfileName">Akanni Quadree Oluwatosin</span>
                            
                        </div>
                    </div>
                    <div className="storyWrapper">
                        <div className="storyImageWrappers">
                            <img src="/images/Quadree.png" alt="" className="storyProfileImage" />
                            <span className="storyOnline"></span>
                            <img src="/images/Quadree.png" alt="" className="storyImages" />
                            <span className="storyProfileName">Akanni Quadree Oluwatosin</span>
                            
                        </div>
                    </div>
                    <div className="storyWrapper">
                        <div className="storyImageWrappers">
                            <img src="/images/Quadree.png" alt="" className="storyProfileImage" />
                            <span className="storyOnline"></span>
                            <img src="/images/Quadree.png" alt="" className="storyImages" />
                            <span className="storyProfileName">Akanni Quadree Oluwatosin</span>
                            
                        </div>
                    </div>
                </div>
                <div className="storyContainer carousel-item">
                   
                    <div className="storyWrapper">
                        <div className="storyImageWrappers">
                            <img src="/images/Quadree.png" alt="" className="storyProfileImage" />
                            <span className="storyOnline"></span>
                            <img src="/images/Quadree.png" alt="" className="storyImages" />
                            <span className="storyProfileName">Akanni Quadree Oluwatosin</span>
                            
                        </div>
                    </div>
                    <div className="storyWrapper">
                        <div className="storyImageWrappers">
                            <img src="/images/Quadree.png" alt="" className="storyProfileImage" />
                            <span className="storyOnline"></span>
                            <img src="/images/Quadree.png" alt="" className="storyImages" />
                            <span className="storyProfileName">Akanni Quadree Oluwatosin</span>
                            
                        </div>
                    </div>
                    <div className="storyWrapper">
                        <div className="storyImageWrappers">
                            <img src="/images/Quadree.png" alt="" className="storyProfileImage" />
                            <span className="storyOnline"></span>
                            <img src="/images/Quadree.png" alt="" className="storyImages" />
                            <span className="storyProfileName">Akanni Quadree Oluwatosin</span>
                            
                        </div>
                    </div>
                </div>
            </div>
            <ChevronLeftRounded className="caroIcon" onClick={goPrev()}/>
            <ChevronRightRounded className="caroIcon2" onClick={goNext()}/>
        </div>
    </div>
  )
}

export default Stories