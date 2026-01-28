import axios from 'axios';

// Force production URL - ignore environment variables
const API_BASE_URL = 'https://safezone-backend-9p9z.onrender.com/api/v1';

// Debug: Log the API URL being used
if (typeof window !== 'undefined') {
  console.log('Using API Base URL:', API_BASE_URL);
}

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Auth API
export const authAPI = {
  login: (email, password) => api.post('/auth/login', { email, password }),
};

// Categories API
export const categoriesAPI = {
  getAll: () => api.get('/categories'),
  getById: (id) => api.get(`/categories/${id}`),
  create: (data) => api.post('/categories', data),
  update: (id, data) => api.put(`/categories/${id}`, data),
  delete: (id) => api.delete(`/categories/${id}`),
};

// Products API
export const productsAPI = {
  getAll: () => api.get('/products'),
  getById: (id) => api.get(`/products/${id}`),
  create: (formData) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return axios.post(`${API_BASE_URL}/products`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  update: (id, formData) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return axios.put(`${API_BASE_URL}/products/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  delete: (id) => api.delete(`/products/${id}`),
  uploadDatasheet: (id, formData) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return axios.post(`${API_BASE_URL}/products/${id}/datasheet`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
};

// Markets API
export const marketsAPI = {
  getAll: () => api.get('/markets'),
  getById: (id) => api.get(`/markets/${id}`),
  create: (formData) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return axios.post(`${API_BASE_URL}/markets`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  update: (id, formData) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return axios.put(`${API_BASE_URL}/markets/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  delete: (id) => api.delete(`/markets/${id}`),
};

// Services API
export const servicesAPI = {
  getAll: () => api.get('/services'),
  getById: (id) => api.get(`/services/${id}`),
  create: (formData) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return axios.post(`${API_BASE_URL}/services`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  update: (id, formData) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return axios.put(`${API_BASE_URL}/services/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  delete: (id) => api.delete(`/services/${id}`),
};

// Banners API
export const bannersAPI = {
  getAll: () => api.get('/banners'),
  getById: (id) => api.get(`/banners/${id}`),
  create: (formData) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return axios.post(`${API_BASE_URL}/banners`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  update: (id, formData) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return axios.put(`${API_BASE_URL}/banners/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  delete: (id) => api.delete(`/banners/${id}`),
};

// Upload API
export const uploadAPI = {
  uploadImage: (formData) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return axios.post(`${API_BASE_URL}/upload/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uploadPDF: (formData) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return axios.post(`${API_BASE_URL}/upload/pdf`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
};

// Careers API
export const careersAPI = {
  getAll: () => api.get('/careers'),
  getById: (id) => api.get(`/careers/${id}`),
  create: (formData) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return axios.post(`${API_BASE_URL}/careers`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  update: (id, formData) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return axios.put(`${API_BASE_URL}/careers/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  delete: (id) => api.delete(`/careers/${id}`),
};

// Users API
export const usersAPI = {
  getAll: () => api.get('/users'),
  getById: (id) => api.get(`/users/${id}`),
  create: (data) => api.post('/users', data),
  update: (id, data) => api.put(`/users/${id}`, data),
  delete: (id) => api.delete(`/users/${id}`),
};

// Contact API
export const contactAPI = {
  submit: (data) => api.post('/contact', data),
  getAll: () => api.get('/contact'),
  getById: (id) => api.get(`/contact/${id}`),
  updateStatus: (id, status) => api.put(`/contact/${id}`, { status }),
  delete: (id) => api.delete(`/contact/${id}`),
};

export default api;

