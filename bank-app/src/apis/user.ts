import { apiClient } from './config';

export const fetchUserInfo = () => apiClient({ method: 'GET', url: '/user' });
export const fetchRecentTransaction = () => apiClient({ method: 'GET', url: '/transaction/recent' });
export const fetchUserCard = () => apiClient({ method: 'GET', url: '/debit-cards' });
export const fetchUserAccount = () => apiClient({ method: 'GET', url: '/accounts' });
