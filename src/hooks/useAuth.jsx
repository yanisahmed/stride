import { useContext } from 'react';
import { AuthContext } from "../authProvider/AuthProvider";

const useAuth = () => {
    auth = useContext(AuthContext);
    return auth;
}

export default useAuth;