import Lottie from "lottie-react";
{/*import { Link } from "react-router-dom"; */}
import animationData from "../assets/Animation - 1731566216424.json";
import "./login.css";
import Left from "../component/Left";
import Form from "./Form";
const Login = () => {
  return (
    <div className="outer-login">
      <Left />
      <div className="main-container">
        <div className="form-box">
           <div className="form-box-left">
              <Form/>

           </div>

          <div className="form-box-right">
          <Lottie
              animationData={animationData}
              height={300}
            width={1000}
              className="lottie-class"
            />
          {/* <Link to="/" id='page-link-login'>I am already member</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
