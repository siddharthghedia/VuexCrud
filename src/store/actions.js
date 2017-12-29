import axios from 'axios'

export const getArticles = ({ commit }) => {
  return axios.get('http://vuexcrudapi.test/api/articles').then((response) => {
    commit('setArticles', response.data)
  })
}

export const addArticle = ({ commit }, article) => {
  return axios.post('http://vuexcrudapi.test/api/articles', {
    name: article.name,
    description: article.description
  }).then((response) => {
    commit('addArticle', article)
    return Promise.resolve(response)
  }).catch((error) => {
    commit('setValidationErrors', error.response.data.errors)
    return Promise.reject(error)
  })
}

export const editArticle = ({ commit }, articleId) => {
  return axios.get(`http://vuexcrudapi.test/api/articles/${articleId}/edit`).then((response) => {
    commit('editArticle', response.data)
  })
}

export const updateArticle = ({ commit }, article) => {
  return axios.patch('http://vuexcrudapi.test/api/articles/' + article.id, {
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
  return axios.delete(`http://vuexcrudapi.test/api/articles/${articleId}`)
}

export const clearValidationErrors = ({ commit }) => {
  commit('setValidationErrors', [])
}
