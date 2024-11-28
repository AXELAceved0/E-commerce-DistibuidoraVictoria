import { Navigate, Route, Routes } from "react-router-dom"
import Header from "../components/header/Header"
import HomePage from "../components/homepage/HomePage"

const PrivateRoutes = () => {
const isAuthenticated = true

if(!isAuthenticated ){
    return <Navigate to="/login" />
}

    return(
        <>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
        </>
    )
}

export default PrivateRoutes