import customAxios from './app.interceptor'
import { API_BASEURL } from '../../configs/app.config'

/**
 * @typedef ValidateJwtRequestBody
 * @type {object}
 * @property {string} auth_key
 */
/**
 * Check if JWT token is valid
 * @param  {ValidateJwtRequestBody} body
 * @return {Promise<HttpResponse>}
 */
export function validateJwt (body) {
  return customAxios({
    method: 'post',
    url: `${API_BASEURL}/validate-jwt`,
    data: body
  })
}

/**
 * @typedef LoginRequestBody
 * @type {object}
 * @property {string} email
 * @property {string} password
 */
/**
 * Check if JWT token is valid
 * @param  {LoginRequestBody} body
 * @return {Promise<Auth[]>}
 */
export function login (body) {
  return customAxios({
    method: 'post',
    url: `${API_BASEURL}/staffs/login`,
    data: body,
    loadMessage: 'Logging In'
  })
}

export function me () {
  return customAxios({
    method: 'post',
    url: `${API_BASEURL}/staffs/me`
  })
}
