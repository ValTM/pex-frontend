import axios from 'axios';

const service = 'http://localhost:10101/api/v1';

export const increment = async (counter, uuid) => {
  const resp = await axios.post(`${service}/counter/inc`, {
    counter,
    uuid,
  });
  return resp.data;
};

export const decrement = async (counter, uuid) => {
  const resp = await axios.post(`${service}/counter/dec`, {
    counter,
    uuid,
  });
  return resp.data;
};

export const reset = async (counter, uuid) => {
  const resp = await axios.post(`${service}/counter/reset`, {
    counter,
    uuid,
  });
  return resp.data;
};
