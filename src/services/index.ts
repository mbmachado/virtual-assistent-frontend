import axios from 'axios';

import { LoginResonseData } from './types';

const header = {
  Accept: 'application/json, text/plain, */*',
  'X-CSRF-TOKEN': '',
  Authorization: 'Bearer ',
};

const api = axios.create({
  baseURL: 'https://virtual-assistent-backend.herokuapp.com',
  headers: header,
});

export const services = {
  login: async (email: string, password: string) => {
    return api.post('/api/v2/auth/login', {
      email,
      password,
    });
  },
  getTopics: async (authToken: string) => {
    let token = authToken
    if(!token){
      token = getAuthOnLocalStorage()?.token || ""
    }
    return api.get('/api/v3/topics', {
      headers: { Accept: 'application/json, text/plain, */*',
      'X-CSRF-TOKEN': '',
      Authorization: `Bearer ${token}`,},
    });
  },
  createQuestion: async (authToken:string,topicId:number,description: string, answare: string) => {
    let token = authToken
    if(!token){
      token = getAuthOnLocalStorage()?.token || ""
    }
    const data = {
      topic_id: topicId,
      description,
      answare,
    }
    console.log(data)
    return api.post('/api/v3/questions',data, {
      headers:{ Accept: 'application/json, text/plain, */*',
      'X-CSRF-TOKEN': '',
      Authorization: `Bearer ${token}`,},
    });
  },
};

export const setAuthOnLocalStorage = (state: LoginResonseData) => {
  window.sessionStorage.setItem('AUTH', JSON.stringify(state));
};

export const getAuthOnLocalStorage = () => {
  const data = window.sessionStorage.getItem('AUTH');
  if (data) return JSON.parse(data) as LoginResonseData;
  return null;
};

export const removeAuthOnLocalStorage = () => {
  window.sessionStorage.removeItem('AUTH');
};
