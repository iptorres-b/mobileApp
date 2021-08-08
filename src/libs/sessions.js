import URLS from './url'
import Storage from './storage'

class UserSesion {
  static instance = new UserSesion()
  //this file is for the functions that a user session can have
//the login function, to log into the app
  login = async body => {
    try {
      let request = await fetch(`${URLS.users_url}/users/login/`, {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          Accept:'application/json'
        },
        body: JSON.stringify(body),
      })
      let response = await request.json()
      try {
        let key = `token-${response.user.username}`
        await Storage.instance.store(key, response.token)
        key = `id-${response.user.username}`
        await Storage.instance.store(key, JSON.stringify(response.user))
        return true
      } catch (error) {
        return response
      }
    } catch (error) {
      throw Error(error)
    }
  }
//then the logout function to get out of the user account
  logout = async () => {
    try {
      const allkeys = await Storage.instance.getAllKeys()
      const tokens = allkeys.filter(key => key.includes('token-'))
      await Storage.instance.multiRemove(tokens)
      const ids = allkeys.filter(key => key.includes('id-'))
      await Storage.instance.multiRemove(ids)
      return true
    } catch (error) {
      console.log('Logout error', error)
      return false
    }
  }
//the signup function, to create a new user session
  signup = async body => {
    try {
      let request = await fetch(`${URLS.users_url}/users/signup/`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          Accept:'application/json'
        },
        body: JSON.stringify(body),
      })
      let response = await request.json()
      if (typeof response.username === 'string') {
        return response.username
      } else {
        return response
      }
    } catch (error) {
      console.log('signup error', error)
      throw Error(error)
    }
  }
//this is to bring the user data, id etc
  getUser = async () => {
    try {
      const allKeys = await Storage.instance.getAllKeys()
      const data = allKeys.filter(key => key.includes('id-'))
      const user = await Storage.instance.get(data.toString())
      return JSON.parse(user)
    } catch (error) {
      console.log("Get user id error", error)
    }
  }
// this get token function is to bring the token, the user username
  getToken = async username => {
    try {
      const key = `token-${username}`
      return await Storage.instance.get(key)
    } catch (error) {
      console.log('getToken error', error)
    }
  }
//and the last one to edit the profile info and images
  editProfile = async (id, token, body) => {
    let uploadData = new FormData()
    uploadData.append('profile.profile_pic', {
      type:'image/jpg',
      uri: body,
      name: 'profile.jpg'
    }) 
    try {
      let request = await fetch(`${URLS.users_url}/profile/${id}/`,{
        method: 'PATCH',
        headers:{
          Accept: 'application/json',
          'Content-Type':'multipart/form-data',
          Authorization: `Token ${token}`
        },
        body: uploadData,
      })

      let response = await request.json()
      return response
    } catch (error) {
      console.log('Edit profile error', error)
    }
  }
}

export default UserSesion