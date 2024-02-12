import "./products.css";
import Appnavtest from './appnavtest'
import Threedcarousel from "./threedcarousel";

function VideoList({ videos }) {
  
  return (
    <div className="main-c">
    
    <div>
    <Appnavtest/>
    </div>
     <div className="smdd">
        <p className="smd">Videos</p>
        
     </div>
     <div>
     <Threedcarousel/>
     </div>
    
    
     
     
    </div>

  );
} 

export default VideoList;