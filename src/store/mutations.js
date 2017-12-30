export const setArticles = (state, articles) => {
  state.articles = articles
}

export const setShowModal = (state, value) => {
  state.showModal = value
  state.validation = []
}

export const setShowEditModal = (state, value) => {
  state.showEditModal = value
  state.validation = []
}

export const addArticle = (state, article) => {
  state.articles.push(article)
  state.showModal = false
}

export const editArticle = (state, article) => {
  state.showEditModal = true
  state.article = article
}

export const updateArticle = (state, article) => {
  let idx = state.articles.map(a => a.id).indexOf(article.id)
  state.articles.splice(idx, 1, article)
  state.showEditModal = false
}

export const deleteArticle = (state, articleId) => {
  state.articles = state.articles.filter((article) => {
    return article.id !== articleId
  })
}

export const setValidationErrors = (state, errors) => {
  state.validation = errors
}
