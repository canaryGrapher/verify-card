import React from 'react';
import './styles/cardStyling.css';
import chip from "./resources/chip.png";

function CardComponent(props) {
    let locationr = props.image
    return (
            <div className="container col-12 d-flex flex-row justify-content-center">
                <div className="col"></div>
                <div className="col-11 col-md-9 col-lg-5 mx-auto d-flex flex-column justify-content-center">
                    <div className="card my-auto border-0 p-3" style={{borderRadius: "15px"}}>
                        <div className="row pt-2">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <h2>International Card</h2>
                            </div>
                            <div className="col-2">
                            </div>
                        </div>
                        <div className="row pt-4 pb-2">
                            <div className="col-4">
                                <img src={chip} alt="Card Chip" width="60" height="50" className="img" />
                            </div>
                            <div className="col-8"></div>
                        </div>
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-12 col-md-8">
                                <form className="mx-auto">
                                    <input type="text" className="border-0 bg-transparent text-light text-center" placeholder="XXXX XXXX XXXX XXXX" onChange={props.addSpaceForCardMumber}></input>
                                    <p id="cardNumberInfo" className={props.changeColor}>{props.validStatus}</p>
                                </form>
                            </div>
                            <div className="col"></div>
                        </div>
                        <div className="row pt-1 pb-1">
                            <div className="col-md-1 d-none d-md-inline"></div>
                            <div className="col-6 col-md-3 d-flex flex-column justify-content-end">
                                <p className="card-name font-weight-bold">X Æ A-12</p>
                            </div>
                            <div className=" d-none d-md-inline col-md-4"></div>
                            <div className="col-6 col-md-4">
                                <img className="img" width="80" height="50" alt="Provider Logo" src={locationr} />
                            </div>
                        </div>
                        <div className="row pb-2">
                            <div className="col-1"></div>
                            <div className="col-3">
                                
                            </div>
                            <div className="col-8"></div>

                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
    )
}

export default CardComponent;