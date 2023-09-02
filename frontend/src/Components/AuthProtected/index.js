import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"

const AuthProtected =({children})=>{

    const {state}= useContext(AuthContext)
    const router = useNavigate()

    if(state?.user?.name){
        toast.success(state?.user?.name)
        return(children)
    }else{
        return(
            <div style={{marginTop:"80px",marginLeft:"5rem"}}>
                <h1 style={{ marginTop: "20px",fontSize:"1.6rem" }}>This page is Auth protected. Do login.</h1>
                <button onClick={()=>router('/login')} style={{ marginTop: "20px",backgroundColor:"maroon",color:"white",outline:"none",border:"none",padding:"1rem",cursor:"pointer" }}>Login</button>
            </div>
        )
    }

}

export default AuthProtected;