import React, { useState } from "react";
import Col from "../Col";
import "./style.css";

function CardTwo(props) {
  const [userPhotoLoaded, setUserPhotoLoaded] = useState(false)
  const [petPhotoLoaded, setPetPhotoLoaded] = useState(true)
  function switchPictures(){
    console.log(props , "hello")
    if(props.img2 === undefined){
      setUserPhotoLoaded(false)
      return(
        <div>Loading</div>
      )
    } else{
      setUserPhotoLoaded(true)
      setPetPhotoLoaded(false)
    }
  }
  function switchPicturesTwo(){
    if(petPhotoLoaded === false){
      setPetPhotoLoaded(true)
    }
  }
  if(petPhotoLoaded === true){
    console.log(props , "hello")
    return (
      <Col size="md-6">
        <div style={{ width: "20%" , float:"left", marginLeft:"8.2%" }}><button onClick={switchPictures} style={{height:"50px" , width:"128px", backgroundColor:"rgb(232, 86, 86" , color:"white" , border: "none" , fontSize:"25px" , padding: "5%"}}>{props.message}</button></div>
        <div className="card">
          <div className="img-container">
            <img alt={props.userName} src={props.img1} />
          </div>
          <h4 className="content-card" >{props.children}
          </h4>
        </div>
      </Col>
    );
  } if(userPhotoLoaded === true){
    console.log(props)
    return (
      <Col size="md-6">
        <div style={{ width: "20%" , float:"left", marginLeft:"8.2%" }}><button onClick={switchPicturesTwo} style={{height:"50px" , width:"128px", backgroundColor:"rgb(232, 86, 86" , color:"white" , border: "none" , fontSize:"25px" , padding: "5%"}}>{props.messageTwo}</button></div>
        <div className="card">
          <div className="img-container">
            <img alt={props.userName} src={props.img2} />
          </div>
          <h4 className="content-card" >{props.children}
          </h4>
        </div>
      </Col>
    );
  }

}
export default CardTwo;



