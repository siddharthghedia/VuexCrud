import axios from 'axios'
const url = 'http://vuexcrudapi.test/api/articles'

export const getArticles = ({ commit }) => {
  return axios.get(url).then((response) => {
    commit('setArticles', response.data)
  })
}

export const addArticle = ({ commit }, article) => {
  return axios.post(url, {
    name: article.name,
    description: article.description
  }).then((response) => {
    commit('addArticle', response.data.data)
    return Promise.resolve(response)
  }).catch((error) => {
    commit('setValidationErrors', error.response.data.errors)
    return Promise.reject(error)
  })
}

export const editArticle = ({ commit }, articleId) => {
  return axios.get(url + `/${articleId}/edit`).then((response) => {
    commit('editArticle', response.data)
  })
}

export const updateArticle = ({ commit }, article) => {
  return axios.patch(url + '/' + article.id, {
    name: article.name,
    description: article.description
  }).then((response) => {
    commit('updateArticle', article)
    return Promise.resolve(response)
  }).catch((error) => {
    commit('setValidationErrors', error.response.data.errors)
    return Promise.reject(error)
  })
}

export const deleteArticle = ({ commit }, articleId) => {
  commit('deleteArticle', articleId)
  return axios.delete(url + `/${articleId}`)
}

export const clearValidationErrors = ({ commit }) => {
  commit('setValidationErrors', [])
}
