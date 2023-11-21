import axios from 'axios';

const config = {
  headers: {
    Authorization: `Bearer ${
      typeof window !== 'undefined' ? localStorage.getItem('token') : false
    }`,
  },
};

const url = process.env.BASE_URL;

const getAllUsers = async () => {
  try {
    const response = await axios.get(url + 'user', config);
    return response.data;
  } catch (error) {
    console.error('Error fetching all users:', error);
    throw error;
  }
};

export default getAllUsers;
