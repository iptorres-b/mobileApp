import URLS from './url'

class Http {
    static instance = new Http();
// this is to get all the badges and their data
    get_all = async () => {
        try {
            let request = await fetch(`${URLS.badges_url}/all/`);
            let response = await request.json();
            return response;
        } catch(err){
            console.log('http get method err', err);
            throw Error(err);
        }
    };
// this is to get the badges id
    get = async badgeId => {
        try {
            let request = await fetch(`${URLS.badges_url}/_id:${badgeId}/`);
            let response = await request.json();
            return response;
        } catch(err){
            console.log('http get method err', err);
            throw Error(err);
        }
    };

    //this is the post method for the new badges created
    post = async badge => {
        try {
            let request = await fetch(`${URLS.badges_url}/new/`,{
                method: 'POST',
                body: JSON.stringify(badge),
            });
            let response = await request.json();
            return response;
        } catch(err){
            console.log('http post method err', err);
            throw Error(err);
        }
    };
    // this is for putting the new badges created
    put = async (badgeId, body) => {
        try {
            let request = await fetch(`${URLS.badges_url}/_id:${badgeId}/`,{
                method: 'PUT',
                headers:{
                    'Content-Type':'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(body),
            });
            let response = await request.json();
            return response;
        } catch(err){
            console.log('http put method err', err);
            throw Error(err);
        }
    };
    //and this one for deleting them
    remove =async badgeId => {
        try {
            let request = await fetch(`${URLS.badges_url}/_id:${badgeId}/`,{
                method: 'DELETE',
            });
            let response = await request.json();
            return response;
        } catch(err){
            console.log('http delete method err', err);
            throw Error(err);
        }
    };
}

export default Http;