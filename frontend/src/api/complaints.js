const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const createComplaint = async (complaintData) => {
  try {
    const response = await fetch(`${API_URL}/complaints`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(complaintData),
    });
    return await response.json();
  } catch (error) {
    throw new Error('Failed to create complaint');
  }
};

export const getComplaints = async () => {
  try {
    const response = await fetch(`${API_URL}/complaints`);
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch complaints');
  }
};

export const updateComplaint = async (id, status) => {
  try {
    const response = await fetch(`${API_URL}/complaints/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    return await response.json();
  } catch (error) {
    throw new Error('Failed to update complaint');
  }
};