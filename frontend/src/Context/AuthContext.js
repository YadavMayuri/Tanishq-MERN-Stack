import { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const AuthContext = createContext();

const initialState = { user: null, products: null, cart: null };

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            localStorage.removeItem("TanishqJwtToken")
            toast.success("Logout successfully.")
            return { ...state, user: null }
        case "AddToCart":
            return { ...state, cart: action.payload }
        case "RemoveSingleProduct":
            return { ...state, cart: action.payload }
        case "EmptyCart":
            return { ...state, cart: action.payload }
        default:
            return state;
    }
}

const HandleAuthContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        async function getcurrentuser() {
            const token = JSON.parse(localStorage.getItem("TanishqJwtToken"))
            // console.log("token here",token);
            if (token) {
                const response = await axios.post("http://localhost:3000/api/getCurrentUser", { token })
                // console.log(response,"response here from auth context");
                if (response.data.success) {
                    dispatch({
                        type: "LOGIN",
                        payload: response.data.user
                    })
                } else {
                    toast.error(response.data.message)
                }
            }
        }
        getcurrentuser()
    }, [])

    return (
        <AuthContext.Provider value={{ dispatch, state }}>
            {children}
        </AuthContext.Provider>
    )
}

export default HandleAuthContext;