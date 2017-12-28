<template>
    <div class="content has-text-centered">
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <h4 class="title">Articles</h4>
                    <a class="button is-primary is-8 modal-button" @click="openModalCard()">Create Item</a>
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
                                    <a @click="openModalCard()">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                    <a>
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
        <modal :visible="showModal"></modal>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Modal from './Modal'
    import { mapActions, mapGetters } from 'vuex'
    const CardModalComponent = Vue.extend(Modal)
    const openCardModal = (propsData = {
      visible: true
    }) => {
      return new CardModalComponent({
        el: document.createElement('div'),
        propsData
      })
    }
    export default {
      components: {
        Modal
      },
      data () {
        return {
          showModal: false,
          cardModal: null
        }
      },
      computed: {
        ...mapGetters({
          articles: 'articles'
        })
      },
      mounted: function () {
        this.getArticles()
      },
      methods: {
        openModalCard () {
          const cardModal = this.cardModal || (this.cardModal = openCardModal({
            title: 'Create Article'
          }))
          cardModal.$children[0].active()
        },
        ...mapActions({
          getArticles: 'getArticles'
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