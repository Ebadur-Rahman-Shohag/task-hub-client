
import { Navigate } from "react-router";
import AuthContext from "../../contexts/AuthContext/AuthContext";
import { useContext } from "react";

function ProtectedRoute({ children }) {
    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate to="/login" />;
    }
    return <>{children}</>;
}

export default ProtectedRoute;
