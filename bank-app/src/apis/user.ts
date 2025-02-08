import { apiClient } from './config';

export const fetchUserInfo = () => apiClient({ method: 'GET', url: '/user' });
