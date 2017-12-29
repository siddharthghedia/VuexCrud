<template>
    <div class="content">
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <h4 class="has-text-centered">
                        Articles
                        <a class="button is-primary" style="float: right" @click.prevent="setShowModal(true)">Create Article</a>
                    </h4>
                    <div class="table-responsive">
                        <table class="table is-bordered is-striped is-narrow">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(article, index) in articles">
                                <td>
                                    {{ index+1 }}
                                </td>
                                <td>
                                    {{ article.name }}
                                </td>
                                <td>
                                    {{ article.description }}
                                </td>
                                <td class="is-icon">
                                    <a @click="editArticle(article.id)">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                    <a @click="deleteArticle(article.id)">
                                        <i class="fa fa-trash"></i>
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </article>
            </div>
        </div>
        <modal v-if="showModal"></modal>
        <edit-modal v-if="showEditModal"></edit-modal>
    </div>
</template>

<script>
    import Modal from './Modal'
    import EditModal from './EditModal'
    import { mapActions, mapGetters, mapMutations } from 'vuex'
    export default {
      components: {
        Modal,
        EditModal
      },
      computed: {
        ...mapGetters({
          articles: 'articles',
          showModal: 'showModal',
          showEditModal: 'showEditModal'
        })
      },
      mounted: function () {
        this.getArticles()
      },
      methods: {
        ...mapActions({
          getArticles: 'getArticles',
          editArticle: 'editArticle',
          deleteArticle: 'deleteArticle'
        }),
        ...mapMutations({
          setShowModal: 'setShowModal',
          setShowEditModal: 'setShowEditModal'
        })
      }
    }
</script>

<style lang="scss" scoped>
    .is-title {
        text-transform: capitalize;
    }
    .table-responsive {
        display: block;
        width: 100%;
        min-height: .01%;
        overflow-x: auto;
    }
</style>