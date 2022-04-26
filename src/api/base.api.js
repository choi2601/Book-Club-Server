require('dotenv').config();

import axios from 'axios';
import qs from 'qs';

const { API_URL, ACCESS_TOKEN } = process.env;

export default class BaseAPI {
  #instance;

  constructor(path) {
    path = path.startsWith('/') ? path.slice(1) : path;

    const url = new URL(`/${path}`, API_URL);

    this.#instance = axios.create({
      baseURL: url.href,
      validateStatus: (status) => status < 500,
      paramsSerializer: qs.stringify,
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
  }

  async _get(url, config) {
    const response = await this.#instance.get(url, config);
    return response;
  }
}
