// // import image from '../assets/tengri-default.png'

// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // const NewsItem = ({ title, description, src, date, author, content }) => {
// //   const [isHovered, setIsHovered] = useState(false);

// //   return (
// //     <div className="d-inline-flex align-items-stretch">
// //       <Link
// //         to={{
// //           pathname: `/news/${encodeURIComponent(title)}`, // Using title in URL
// //           state: { title, description, src, date, author, content } // Passing state
// //         }}
// //         className="card-link"
// //       >
// //         <div
// //           className="card mb-3 d-inline-block my-3 mx-3 px-2 py-2"
// //           style={{ width: "340px", height: "390px", color: isHovered ? 'green' : 'black' }}
// //           onMouseEnter={() => setIsHovered(true)}
// //           onMouseLeave={() => setIsHovered(false)}
// //         >
// //           <img src={src ? src : image} style={{ height: "200px", width: "325px" }} className="card-img-top" alt="..." />
// //           <div className="card-body">
// //             <h5 className="card-title">{title.slice(0, 200)}</h5>
// //             <p className="card-text">
// //               {new Date(date).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}
// //             </p>
// //           </div>
// //         </div>
// //       </Link>
// //     </div>
// //   );
// // };

// // // export default NewsItem;

// // import image from '../assets/tengri-default.png'

// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // const NewsItem = ({ title, description, src, date, author, content }) => {
// //   const [isHovered, setIsHovered] = useState(false);
// //   const navigate = useNavigate();

// //   const handleCardClick = () => {
// //     console.log(title)
// //     navigate({
// //       pathname: `/news/${encodeURIComponent(title)}`,
// //       state: { title, description, src, date, author, content }
      
// //     });
// //   };

// //   return (
// //     <div className="d-inline-flex align-items-stretch">
// //       <div
// //         className="card mb-3 d-inline-block my-3 mx-3 px-2 py-2"
// //         style={{ width: "340px", height: "390px", color: isHovered ? 'green' : 'black' }}
// //         onMouseEnter={() => setIsHovered(true)}
// //         onMouseLeave={() => setIsHovered(false)}
// //         onClick={handleCardClick}
// //       >
// //         <img src={src ? src : image} style={{ height: "200px", width: "325px" }} className="card-img-top" alt="..." />
// //         <div className="card-body">
// //           <h5 className="card-title">{title.slice(0, 200)}</h5>
// //           <p className="card-text">
// //             {new Date(date).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default NewsItem;
// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import image from '../assets/tengri-default.png';

// // const NewsItem = ({ title, description, src, date, author, content }) => {
// //   const [isHovered, setIsHovered] = useState(false);
// //   const navigate = useNavigate();

// //   const handleCardClick = () => {
// //     navigate({
// //       pathname: `/news/${encodeURIComponent(title)}`,
// //       state: { title, description, src, date, author, content }
// //     });
// //   };

// //   return (
// //     <div className="d-inline-flex align-items-stretch">
// //       <div
// //         className="card mb-3 d-inline-block my-3 mx-3 px-2 py-2"
// //         style={{ width: "340px", height: "390px", color: isHovered ? 'green' : 'black' }}
// //         onMouseEnter={() => setIsHovered(true)}
// //         onMouseLeave={() => setIsHovered(false)}
// //         onClick={handleCardClick}
// //       >
// //         <img src={src ? src : image} style={{ height: "200px", width: "325px" }} className="card-img-top" alt="..." />
// //         <div className="card-body">
// //           <h5 className="card-title">{title.slice(0, 200)}</h5>
// //           <p className="card-text">
// //             {new Date(date).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default NewsItem;
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import image from '../assets/tengri-default.png';

// const NewsItem = ({ title, description, src, date, author, content }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     console.log("passing data : ",title, description, src, date, author, content  )
//     navigate({
//       pathname: `/news/${encodeURIComponent(title)}`,
//       state: { title, description, src, date, author, content }
//     });
//   };

//   return (
//     <div className="d-inline-flex align-items-stretch">
//       <div
//         className="card mb-3 d-inline-block my-3 mx-3 px-2 py-2"
//         style={{ width: "340px", height: "390px", color: isHovered ? 'green' : 'black' }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={handleCardClick}
//       >
//         <img src={src ? src : image} style={{ height: "200px", width: "325px" }} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">{title.slice(0, 200)}</h5>
//           <p className="card-text">
//             {new Date(date).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsItem;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../assets/tengri-default.png';

const NewsItem = ({ title, description, src, date, author, content ,url}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/news/${encodeURIComponent(title)}`, {
      state: {
        title,
        description,
        src,
        date,
        author,
        content,
        url,
      },
    });
  };
  return (
    <div onClick={handleCardClick} style={{ textDecoration: 'none', cursor: 'pointer' }}>
      <div className="d-inline-flex flex-wrap" style={{ marginBottom: '20px' }}>
        { /* Wrap each row in a container */ }
        <div className="row-container" style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div className="card mb-3 mx-3" style={{ width: '265px', color: isHovered ? 'green' : 'black', display: 'flex', flexDirection: 'column' }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src={src ? src : image} className="card-img-top" alt="..." style={{ height: '150px', objectFit: 'cover' }} />
            <div className="card-body" style={{ minHeight: '100px', flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
              <h6 className="card-title">{title.slice(0, 200)}</h6>
              <div style={{ marginTop: 'auto' }}>
                <small className="text-muted">{new Date(date).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</small>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
  
  
  
  
  
  
  };  

export default NewsItem;
