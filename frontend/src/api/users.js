const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const createUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  } catch (error) {
    throw new Error('Failed to create user');
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};