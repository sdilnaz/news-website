import image from '../assets/tengri-default.png'
import {useState} from 'react'
const NewsItem = ({title, description, src, url, date}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="d-inline-flex align-items-stretch">
      <div 
          className="card mb-3 d-inline-block  my-3 mx-3 px-2 py-2" 
          style={{ width: "340px", height: "390px", color: isHovered ? 'green' : 'black' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
      > 
        <img src={src?src:image} style= {{height:"200px", width:"325px"}}className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,200)}</h5>
            {/* <p className="card-text">{description?description.slice(0,130):"News description is not available" }</p> */}
            <p className="card-text">
              {new Date(date).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}
            </p>

        </div>
    </div>
    </div>
  )
}

export default NewsItem