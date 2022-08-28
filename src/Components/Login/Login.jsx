import { useState } from 'react';
  import styles from "./Login.module.css";
//  import LoginSignup from "./LoginSignup.png"
import { useNavigate,Link } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,

} from '@chakra-ui/react'

//  import { Stack,Box,Button} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/AuthRedux/action';
import { LOGIN_SUCCESS } from '../Redux/AuthRedux/actionType';
import {Navbar} from '../Navbar/Navbar';
// import Footer from "."
// import { Button,Text } from '@chakra-ui/react';
  export default function Login() {
  
    const [toggleType, setToggleType] = useState(false);
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
   
    const HandleLogin=()=>{

      if(username && password){
        localStorage.setItem("email",username)
      var obj1={
        username,
        password
      }
      dispatch(login(obj1)).then((r)=>{
        // if(r===LOGIN_SUCCESS)
        navigate("/")
      })
      .catch((e) => {
        
       navigate("/")
      })

      // navigate("/")
    }
    }

        return (
          <>
         
         <div style={{boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",width:"350px", height:"520px",margin:"auto",marginTop:"20px",justifyContent:"center",lineHeight:"45px",padding:"30px",borderRadius:"10px"}}>
      
              <div>
                <h1 className={styles.title}>Login</h1>
                <button className={styles.buttonFacebook} style={{height:"1.5rem"}} >Login with Facebook</button>
                <button   className={styles.buttonGoogle} style={{height:"1.5rem"}} >Login with Google</button>
                <p>OR</p>
                <input  className={styles.input} value={username} placeholder="EMAIL" onChange={(e)=>setusername(e.target.value)}
                style={{height:"1.5rem"}}
                />
                <div>
                  <div
                    onClick={() => setToggleType(toggleType ? false : true)}
                  >
                  </div>
                </div>
                <input  className={styles.input} value={password} placeholder="PASSWORD"  onChange={(e) =>setpassword(e.target.value)}
               style={{height:"1.5rem"}}
               />
                <div style={{display:"flex",justifyContent:"space-between",color:"blue"}}>
                  <input type="checkbox"  style={{height:"1.5rem"}}/>remember password
                  <p>Forgot Password</p>

                </div>
              </div>
              <div>
                    <button className={styles.buttonLogin} onClick={HandleLogin} > 
                Login
                </button>
              </div> 
      
              <div className={styles.bottomLine} style={{height:"1.5rem"}}>
                Don't have an account? <Link to="/auth/signup"><a>Sign Up</a></Link>
              </div>
            </div>
            {/* <Footer/> */}
           
          </>
        
        
        )
   
          
  }