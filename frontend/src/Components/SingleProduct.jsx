import { useNavigate, useParams } from "react-router-dom";
import AuthProtected from "./AuthProtected";

const SingleProduct = () => {
    const { id } = useParams();
    const router = useNavigate()
    return (
        <>
            <AuthProtected>
                <div style={{marginTop:"5rem",marginLeft:"5rem"}}>
                <h3 style={{ marginTop: "20px",fontSize:"1.6rem" }} >Single Product ID : {id}</h3>
                <button onClick={()=>router('/MultipleProduct')} style={{ marginTop: "20px",backgroundColor:"maroon",color:"white",outline:"none",border:"none",padding:"1rem",cursor:"pointer" }}>Back</button>
                </div>
             
            </AuthProtected>

        </>

    )
}
export default SingleProduct;