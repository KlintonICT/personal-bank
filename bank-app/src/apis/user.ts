import { apiClient } from './config';

export const fetchUserInfo = () => apiClient({ method: 'GET', url: '/user' });
export const fetchRecentTransaction = () => apiClient({ method: 'GET', url: '/transaction/recent' });
