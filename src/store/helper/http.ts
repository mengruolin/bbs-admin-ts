import axios, { AxiosRequestConfig } from 'axios'
import { Loading, MessageBox } from 'element-ui';
import { ElLoadingComponent } from 'element-ui/types/loading';
let loadingService: null | ElLoadingComponent = null

axios.defaults.baseURL = process.env.REACT_APP_PROXY_URL

axios.interceptors.request.use( config => {
  // Do something before request is sent
  const token = window.localStorage.getItem('token')
  config.headers.authorization = token
  return config
  }, error => {
  // Do something with request error
  // Toast.fail(error)
  return Promise.reject(error);
})

axios.interceptors.response.use( response => {
  loadingService && loadingService.close()

  if (response.config.url !== '/api/v1/login' && response.data.code === '401') {
    MessageBox.alert(response.data.msg, '登陆失效', {
      confirmButtonText: '跳转登录页',
      callback: action => {
        window.location.href = '/login'
      },
    })
  }

  return response.data;
  }, error => {
  // Do something with response error
  // Toast.fail(error)
  return Promise.reject(error);
})

const get = (url: string, params?: any) => {
  return axios.get(url, {params})
}

const post = (url: string, params?: any, config?: AxiosRequestConfig) => {
  return axios.post(url, params, config)
}

const getl = (url: string, params?: any) => {

  loadingService = Loading.service({})

  return axios.get(url, {params})
}

const postl = (url: string, params?: any, config?: AxiosRequestConfig) => {

  loadingService = Loading.service({})

  return axios.post(url, params, config)
}

export default {
  get,
  getl,
  post,
  postl,
};
