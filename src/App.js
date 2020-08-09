import React, { Component } from 'react';
import './styles/App.css';
import CardComponent from './CardComponent';

class App extends Component {
  constructor() {
    super()
    this.state = {
      valid: "Enter Card Number",
      color: "text-light",
      image: "./resources/default.png"
    }
    this.addSpaces = this.addSpaces.bind(this);
  }
  addSpaces(event) {
    let valueOfInput = event.target.value.split(" ").join('');
    let iconForCard = checkIIN(valueOfInput);
    function checkIIN(digits) {
      //For VISA Cards
      if(digits[0] === "4") {
        //For VISA electron Cards
        if(digits.substring(0,4) === "4026" || digits.substring(0,6) === "417500" || digits.substring(0,4) === "4405" || digits.substring(0,4) === "4508" || digits.substring(0,4) === "4844" || digits.substring(0,4) === "4913" || digits.substring(0,4) === "4917") {
          return "12";
        }
        //For normal VISA Cards
        else {
          return "1";
        }
      }
      //For UATP Cards
      else if(digits[0] === "1") {
        return "2";
      }
      //For American Express Cards
      else if(digits.substring(0,2) === "34" || digits.substring(0,2) === "37") {
        return "3";
      }
      //For China UnionPay Cards
      else if(digits.substring(0,2) === "62") {
        return "4";
      }
      //For MasterCard Cards
      else if(Number(digits.substring(0,2)) >= 51 && Number(digits.substring(0,2)) <= 55) {
        return "5";
      }
      //For MasterCard type-II Cards
      else if(Number(digits.substring(0,6)) >= 222100 && Number(digits.substring(0,6)) <= 272099) {
        return "5";
      }
      //For Maestro Cards
      else if((Number(digits.substring(0,6)) >= 500000 && Number(digits.substring(0,2)) <= 509999) || (Number(digits.substring(0,6)) >= 560000 && Number(digits.substring(0,2)) <= 589999) || (Number(digits.substring(0,6)) >= 600000 && Number(digits.substring(0,2)) <= 699999)) {
        return "6";
      }
      //For Diner's Club International Cards
      else if(digits.substring(0,2) === "36" || digits.substring(0,2) === "38" || digits.substring(0,2) === "39" || digits.substring(0,2) === "54" || digits.substring(0,2) === "55") {
        return "7";
      }
      //For Diner's Club International typr-II Cards
      else if((Number(digits.substring(0,3)) >= 300 && Number(digits.substring(0,3)) <= 305)) {
        return "7";
      }
      //For Discover Cards
      else if(digits.substring(0,4) === "6011" || digits.substring(0,2) === "65") {
        return "8";
      }
      //For Discover typr-II Cards
      else if(Number(digits.substring(0,6)) >= 622126 && Number(digits.substring(0,6)) <= 622925) {
        return "8";
      }
      //For Discover typr-III Cards
      else if(Number(digits.substring(0,3)) >= 644 && Number(digits.substring(0,3)) <= 649) {
        return "8";
      }
      //For JCB Cards
      else if(Number(digits.substring(0,4)) >= 3528 && Number(digits.substring(0,4)) <= 3589) {
        return "9";
      }
      //For Dankort Cards
      else if(digits.substring(0,4) === "5019") {
        return "10";
      }
      //For InterPayment Cards
      else if(digits.substring(0,3) === "636") {
        return "10";
      }
      //Default image
      else {
        return "0";
      }
    }
    const imageLocation = ["./resources/default.png", "./resources/visa.jpg", "./resources/uatp.jpg", "./resources/amex.jpg", "./resources/union_pay.jpg", "./resources/mastercard.jpg", "./resources/maestro.jpg", "./resources/diner_international.jpg", "./resources/discover.jpg", "./resources/jcb.jpg", "./resources/dankort.jpg", "./resources/interpay.jpg", "./resources/visa_electron.jpg"];
    this.setState({ image: imageLocation[Number(iconForCard)] })
    if(event.target.value.split(" ").join('').length >= 12 && event.target.value.split(" ").join('').length <= 19) {
      let numberArray = event.target.value.split(" ").join("").split("");
      let addChecker = 0;
      for(let i=(numberArray.length-2), j=(numberArray.length-1); i>=0 && j>=0; i=i-2,j=j-2) {
        let newNumberInto_two = numberArray[i]*2;
          if(newNumberInto_two > 9) {
            newNumberInto_two = getSingleDigit(newNumberInto_two); 
          }
          
          // function to get single digit number
          function getSingleDigit(numberGot) {
              let tempNum = numberGot.toString().split("");
              let tempContainer = 0;
              for(let j=0; j<tempNum.length; j++) {
                tempContainer += Number(tempNum[j]);
              }
              return tempContainer;
          }
          
          addChecker += newNumberInto_two + Number(numberArray[j]);        
      }
      if(addChecker%10 === 0) {
        this.setState({ valid: "Valid Card Number", color: "text-success" })
      }
      else {
        this.setState({ valid: "Invalid Card Number", color: "text-danger" })
      }
    }
    else {
      this.setState({ valid: "Invalid Card Number", color: "text-danger" })
    }
    event.target.value = event.target.value.replace(/(\d{4})(\d+)/g, '$1 $2');
  }

    render() {
    return (
      <div className="App">
        <CardComponent addSpaceForCardMumber={this.addSpaces} validStatus={this.state.valid} changeColor={this.state.color} image={this.state.image} />
        <div className="alert m-md-3 m-0 fixed-bottom alert-dismissible fade show" role="alert">
            <span className="font-weight-bold">Notice!</span> Your card details do not leave your device. Verification is done using mathematical calculations, right in the browser. No external requests are made, so rest assured that your card detail is safe. 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
      </div>
    );
  }
}

export default App;
