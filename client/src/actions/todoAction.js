import axios from 'axios';

export const getTodo = async (token) => {
  return axios.get(`${process.env.REACT_APP_API}/todo`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  })
}

export const addTodo = async (data, token) => {
  return axios.post(`${process.env.REACT_APP_API}/add-todo`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export const completeTodo = async (token, id) => {
  return axios.delete(`${process.env.REACT_APP_API}/complete-todo/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  })
}