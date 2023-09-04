import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"

const AuthProtected =({children})=>{

    const {state}= useContext(AuthContext)
    const router = useNavigate()

    if(state?.user?.name){
        // toast.success(state?.user?.name)
        return(children)
    }else{
        return(
            <div style={{width:"60%",margin:"8rem auto"}}>
                <h1 style={{ marginTop: "20px",fontSize:"2.8rem",textAlign:"center"  }}>This page requires login to access. Please log in first.</h1>
                <button onClick={()=>router('/login')} style={{ margin: "4rem auto",backgroundColor:"maroon",color:"white",outline:"none",border:"none",padding:"1rem 4rem",cursor:"pointer",display:"block",fontWeight:"700",fontSize:"1.6rem" }}>Login</button>
            </div>
        )
    }

}

export default AuthProtected;