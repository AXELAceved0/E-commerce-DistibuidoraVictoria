import { Route, Routes } from "react-router-dom"
import LoginPages from "../components/header/pages/LoginPages"

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPages />} />
        </Routes>
    )
}
export default PublicRoutes