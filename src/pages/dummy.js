import React, { useEffect, useState, useRef } from "react";
import "../components/Login/style.scss";
import { Register, Login } from "../components/Login/index";
import "./SignUp.scss";

const SignUp = () => {
  const [isLogginActive, setIsLogginActive] = useState(true);
  const [current, setCurrent] = useState("Login");
  const [currentActive, setCurrentActive] = useState("login");
  useEffect(() => {
    // const { isLogginActive } = this.state;
    // const current = isLogginActive ? "Register" : "Login";
    // const currentActive = isLogginActive ? "login" : "register";
    if (isLogginActive) {
      setCurrent("Login");
      setCurrentActive("login");
    } else {
      setCurrent("Register");
      setCurrentActive("register");
    }
  });

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLogginActive: true
  //   }
  // }

  // componentDidMount() {
  //   //Add .right by default
  //   this.rightSide.classList.add("right");
  // }

  const rightSide = useRef("right");

  useEffect(() => {
    rightSide.current.classList.add("right");
    console.log(rightSide.current);
  });

 




  const changeState = () => {
    // const { isLogginActive } = this.state;
    setIsLogginActive(!isLogginActive);
    if (isLogginActive) {
      rightSide.current.classList.remove("right");
      rightSide.current.classList.add("left");
    } else {
      rightSide.current.classList.remove("left");
      rightSide.current.classList.add("right");
    }
    // this.setState((prevState) => ({
    //   isLogginActive: !prevState.isLogginActive,
    // }));
  };

  // render() {

  return (
    <div className="sign-up">
      <div className="login">
        <div className="container">
          {isLogginActive && (
            <Login containerRef={(ref) => (current = ref)} />
          )}
          {!isLogginActive && (
            <Register containerRef={(ref) => (current = ref)} />
          )}
        </div>
        <RightSide
          current={current}
          currentActive={currentActive}
          containerRef={(ref) => (rightSide = ref)}
          onClick={changeState()}
        />
      </div>
    </div>
  );
};
//}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default SignUp;
