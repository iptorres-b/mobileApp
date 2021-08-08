import AsyncStorage from "@react-native-async-storage/async-storage";

class Storage {
    static instance = new Storage();
//this is to get the store data from the user
    store = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
            return true;
        } catch (err) {
            console.log('Storage store err', err);
            return false;
        }
    };
//this is to get storage items
    get = async key => {
        console.log(key);
        try {
            return await AsyncStorage.getItem(key);
        } catch (err) {
            console.log('Storage get err', err);
            throw Error(err);
        }
    };
//the multi get is to get many keys in a function
    multiGet = async keys => {
        try {
            return await AsyncStorage.multiGet(keys);
        } catch (err) {
            console.log('Storage multiget err', err);
            throw Error(err);
        }
    };
//the multi remove is to remove many keys in a function
    multiRemove = async keys => {
        try {
            await AsyncStorage.multiRemove(keys);
            return true;
        } catch (err) {
            console.log('Multi remove err', err);
            return false;
        }
    };
//this is to get all the keys called
    getAllKeys = async () => {
        try {
            return await AsyncStorage.getAllKeys();
        } catch (err) {
            console.log('Storage get all keys err', err);
            throw Error(err);
        }
    };
// and this is to remove the key
    remove = async key => {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        } catch (err) {
            console.log('Storage delete err', err);
            throw Error(err);
        }
    };
}

export default Storage;