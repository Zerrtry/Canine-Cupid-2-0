import React, { useState, useEffect, useContext } from "react";
import {Row } from "../Grid";
import Col from "../Col";
import Modal from 'react-bootstrap/Modal';
import Map from "../map";
import UserContext from "../../utils/UserContext";
import "./style.css";



export default function MatchCards(props) {

    const [isLoading, setIsLoading] = useState(true)
    const [isOpen, setIsOpen] = React.useState(false);
    const [thisUser, setThisUser] = useState("")
    const { userForMatchesPage } = useContext(UserContext)
    // const showModal = (errorMsg) => {
    //     setIsErrorMessage(errorMsg);
    //   };

    const hideModal = () => {
        setIsOpen(false);
    };
    console.log(props.arrayData)
    console.log(props)
    useEffect(() => {
        if (props.length === null) {
            setIsLoading(true)
        } if (props.length !== null) {
            setIsLoading(false)
        }
    }, [setIsLoading, props.length]
    )
    if (isLoading) {
        return (
            <div>
                <h1>No Current Matches</h1>
            </div>
        )
    } if (!isLoading) {
        async function showuserDetails(id) {
            setIsOpen(true);
            console.log(id)
            const index = userForMatchesPage.findIndex(p => p.userData.userName === id)
            setThisUser(userForMatchesPage[index].userData)

            // console.log(props.arrayData.map((item, userName , key) => (
            // key={...item.userName},
            // {item} = {userName}
            // console.log()
            // )) , "hello this is my console log")
        }
        return (
            <div className="container fluid">
                <Modal id={thisUser.userName} className="userModalContent" show={isOpen} onHide={hideModal}>
                    <Modal.Header>
                        <Modal.Title> <h2 style={{ alignContent: "center" }}>{thisUser.userName}'s Profile</h2></Modal.Title>
                        <button style={{ backgroundColor: "inherit", textAlign: "center", cursor: "pointer", whiteSpace: "nowrap", border: "none", display: "inline-block", padding: "8px 16px", verticalAlign: "middle", overflow: "hidden", textDecoration: "none", color: "inherit" }} onClick={hideModal}>X</button>
                    </Modal.Header>
                    <div className="contentModal">
                        <Modal.Body>
                            <Row>
                            <Col size="md-8">
                                <div><h5 style={{float:"left" , color:"white"}}>Location:</h5><p style={{color:"white" , fontSize:"19px"}}>&nbsp;&nbsp; {thisUser.city}, {thisUser.zipCode}</p></div>
                                <div><h5 style={{float:"left" , margin:"auto" , color:"white"}}>Email:</h5> <p style={{color:"white" , fontSize:"19px"}}>&nbsp;&nbsp;{thisUser.email}</p></div>
                                <div><h5 style={{ float:"left" , margin:"auto" , color:"white"}}>Pet Name:</h5> <p style={{color:"white" , fontSize:"19px"}}>&nbsp;&nbsp; {thisUser.petName}</p></div>
                                <div><h5 style={{ float:"left" , margin:"auto" , color:"white"}}>Pet Age:</h5> <p style={{color:"white" , fontSize:"19px"}}>&nbsp;&nbsp; {thisUser.age} </p> </div>
                                <div className="mapboxDiv" style={{marginTop:"10%"}}>
                                    <h4 style={{color:"white" , paddingTop:"6%" , textAlign:"center"}}>{thisUser.userName}'s Location</h4>
                                    <div style={{border:"solid white 1px" , marginTop:"5%" , marginBottom:".5%"}}></div>
                                    <Map>
                                    </Map>
                                </div>
                            </Col>
                        </Row>
                        </Modal.Body>
                    </div>
                </Modal>
                {props.arrayData.map((item, myKey) => (
                    <div key={myKey}>
                        {console.log(myKey)}
                        {/* {console.log(item.userData.userName)} */}
                        <Row-fixed>
                        <div style={{display:"flex", width:"100%"}}>
                            <div className="mainCont ">
                                    <Col size="md-2" className="image-col">
                                    <div className="image">
                                        <div>
                                            <img className="img" src={item.userData.petPhotoUrl} alt={item.userData.userName}></img>
                                            <div>
                                                <h6><button id={item.userData.userName} className="userNameBtn" onClick={(e) => (showuserDetails(e.target.id))}>{item.userData.userName}</button></h6>
                                            </div>
                                        </div>
                                        </div>
                                    </Col>
                                    <Col size="md-7">
                                    <div className="messages">
                                        <p className="text">{item.userData.userName}{props.message}</p>
                                        </div>
                                    </Col>
                                    <Col size="md-3 ">
                                    <div className="messageBtn">
                                            <a style={{ borderTopRightRadius: "15px", borderBottomRightRadius: "15px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }} type="submit" className="btn" href={item.userData.email}><p className="btnText" style={{ fontFamily: "Arial", fontWeight: "bolder" }}>Message Now</p></a>
                                        </div>
                                    </Col>
                            </div>
                            </div>
                        </Row-fixed>
                    </div>
                ))}
            </div>
        )
    }
}