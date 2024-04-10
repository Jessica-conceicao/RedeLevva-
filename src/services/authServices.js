<<<<<<< HEAD
import axios from '../utils/axios';

class AuthService {
  login = (email, password) => {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/home/login', { email, password })
        .then((response) => {
          if (response.data.user) {
            this.setToken('JWT');
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  //login = (fullName, email, password) => {};

  loginWithToken = () => {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/home/me') // envio o token pelo header
        .then((response) => {
          if (response.data.user) {
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  logout = () => {
    this.removeToken();
  };

  setToken = (token) => {
    localStorage.setItem('accessToken', token);
  };

  getToken = () => localStorage.getItem('accessToken');

  removeToken = () => localStorage.removeItem('accessToken');

  isAuthenticated = () => !!this.getToken();
=======

import axios from '../utils/axios';

class AuthService {

    Login(email,password){
        return new Promise(( resolve , reject) => {
            axios.post('/api/home/login',{email, password})
            .then(response => {
                if (response.data.user) {
                    resolve(response.data.user)
                }else {
                    reject(response.data.error)
                }
            })
            .catch(error => {
                reject(error)
            })
        })
    }
>>>>>>> 2d2cfa60132015f98666131d9f6817a601d3b0ba
}

const authService = new AuthService();

export default authService;