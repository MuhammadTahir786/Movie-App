
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import AuthNavigation from './authNavigation';
import MainNavigation from './mainNavigation';


const RootNavigation = () => {

    const { user } = useContext(AuthContext);

    return (
        <>
            {!user ? <AuthNavigation /> : <MainNavigation />}
        </>
    )
}

export default RootNavigation