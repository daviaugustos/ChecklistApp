import apiBase from '../config/api';
import axios from 'axios';

export const getChecklist = () => apiBase.get('/epilist?key=52d6c330');

export const completeEquipment = (id) => {
  const secondaryApi = axios.create({
    baseURL: 'https://5f80dc275b1f3f00161a655e.mockapi.io/',
    timeout: 1000,
  });

  return secondaryApi.post('/complete-item', {id});
};
