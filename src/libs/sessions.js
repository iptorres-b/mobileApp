import BASE_URL from './http';
import Storage from './storage';

class UserSesion {
    static instance = new UserSesion();

    login = async body => {
        try {
        } catch (err) {
            console.log('Login error', err);
            throw Error(err);
        }
    };

    logout = async key => {
        try {
            await Storage.instance.remove(key);
            return true;
        } catch (err) {
            console.log('Logout err', err);
            return false;
        }
    };

    signup = async body => {
        try{
            await fetch(`${BASE_URL.users_url}/users/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(body),
            });
        } catch (err) {
            console.log('Sign up Err', err);
            throw Error(err);
        }
    };

    getToken = async key => {
        try {
            return await Storage.instance.get(key);
        } catch (err) {
            console.log('Get token error', err);
        }
    };
}

export default UserSesion;