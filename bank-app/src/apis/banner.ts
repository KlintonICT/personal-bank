import { apiClient } from './config';

export const fetchBanner = () => apiClient({ method: 'GET', url: '/banners' });
