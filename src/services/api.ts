const API_BASE_URL = 'http://localhost:3001/api';

// Get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

// Set auth token in localStorage
const setAuthToken = (token: string) => {
  localStorage.setItem('authToken', token);
};

// Remove auth token from localStorage
const removeAuthToken = () => {
  localStorage.removeItem('authToken');
};

// API request helper with auth
const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const token = getAuthToken();
  
  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'API request failed');
    }

    return response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

// Auth API
export const authAPI = {
  register: async (name: string, email: string, password: string) => {
    const response = await apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
    
    if (response.token) {
      setAuthToken(response.token);
    }
    
    return response;
  },

  login: async (email: string, password: string) => {
    const response = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (response.token) {
      setAuthToken(response.token);
    }
    
    return response;
  },

  logout: () => {
    removeAuthToken();
  },

  getProfile: async () => {
    const response = await apiRequest('/auth/profile');
    return response.user;
  },
};

// Posts API
export const postsAPI = {
  getAll: async (userId?: string) => {
    const query = userId ? `?userId=${userId}` : '';
    const response = await apiRequest(`/posts${query}`);
    return response.posts || [];
  },

  create: async (postData: { title: string; content: string; date?: string; image?: string }) => {
    const response = await apiRequest('/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
    return response.post;
  },

  update: async (id: string, postData: { title: string; content: string; date?: string; image?: string }) => {
    const response = await apiRequest(`/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(postData),
    });
    return response.post;
  },

  delete: async (id: string) => {
    return apiRequest(`/posts/${id}`, {
      method: 'DELETE',
    });
  },
};

// Activities API
export const activitiesAPI = {
  getAll: async (userId?: string) => {
    const query = userId ? `?userId=${userId}` : '';
    const response = await apiRequest(`/activities${query}`);
    return response.activities || [];
  },

  create: async (activityData: { 
    title: string; 
    description: string; 
    character?: string; 
    links?: string[]; 
    documents?: string[] 
  }) => {
    const response = await apiRequest('/activities', {
      method: 'POST',
      body: JSON.stringify(activityData),
    });
    return response.activity;
  },

  update: async (id: string, activityData: { 
    title: string; 
    description: string; 
    character?: string; 
    links?: string[]; 
    documents?: string[] 
  }) => {
    const response = await apiRequest(`/activities/${id}`, {
      method: 'PUT',
      body: JSON.stringify(activityData),
    });
    return response.activity;
  },

  delete: async (id: string) => {
    return apiRequest(`/activities/${id}`, {
      method: 'DELETE',
    });
  },
};

// Images API
export const imagesAPI = {
  getAll: async () => {
    const response = await apiRequest('/images');
    return response.images || [];
  },

  upload: async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);

    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/images/upload`, {
      method: 'POST',
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Upload failed');
    }

    const result = await response.json();
    return result.image;
  },

  delete: async (id: string) => {
    return apiRequest(`/images/${id}`, {
      method: 'DELETE',
    });
  },
};

// Health check
export const healthAPI = {
  check: async () => {
    return apiRequest('/health');
  },
};