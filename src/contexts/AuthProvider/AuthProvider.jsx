import AuthContext from "../AuthContext/AuthContext";

const AuthProvider = ({ children }) => {

    const value = {
        name: "John Doe",
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;