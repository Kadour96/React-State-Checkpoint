import React from 'react';
import '../components/style.css';
import img1 from '../myphoto.jpg'

const Card = (props) => {
    console.log(props)
  return (
    <>
    <div className="image-area">
        <div className="img-wrapper">
          <img src={img1} alt="Nefzi Abddelkader" />
          {/* <h2>Nefzi Abdelkader</h2> */}
          <h2>{props.Profile.FullName}</h2>

          <ul>
            <li><a href="https://github.com/Kadour96"><i className="fab fa-github" /></a></li>
            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a></li>
            <li><a href="https://twitter.com/"><i className="fab fa-twitter" /></a></li>
            <li><a href="https://www.youtube.com/"><i className="fab fa-youtube" /></a></li>
          </ul>
        </div>
      </div>
    </>
  );
 };
 export default Card; 