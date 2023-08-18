import axios from "axios"
const jntestoneAPI = axios.create({
  baseURL: "https://jn-test-one-42888.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return jntestoneAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_bank_list(payload) {
  return jntestoneAPI.get(`/api/v1/bank/`)
}
function api_v1_bank_create(payload) {
  return jntestoneAPI.post(`/api/v1/bank/`, payload.data)
}
function api_v1_bank_retrieve(payload) {
  return jntestoneAPI.get(`/api/v1/bank/${payload.id}/`)
}
function api_v1_bank_update(payload) {
  return jntestoneAPI.put(`/api/v1/bank/${payload.id}/`, payload.data)
}
function api_v1_bank_partial_update(payload) {
  return jntestoneAPI.patch(`/api/v1/bank/${payload.id}/`, payload.data)
}
function api_v1_bank_destroy(payload) {
  return jntestoneAPI.delete(`/api/v1/bank/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return jntestoneAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return jntestoneAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_login_create(payload) {
  return jntestoneAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return jntestoneAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return jntestoneAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return jntestoneAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return jntestoneAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return jntestoneAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return jntestoneAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return jntestoneAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_retrieve(payload) {
  return jntestoneAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return jntestoneAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return jntestoneAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_bank_list,
  api_v1_bank_create,
  api_v1_bank_retrieve,
  api_v1_bank_update,
  api_v1_bank_partial_update,
  api_v1_bank_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
