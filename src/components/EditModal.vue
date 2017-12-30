<template>
    <transition name="modal">
        <div class="modal changes" style="display: flex">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Update Article</p>
                    <button class="delete" aria-label="close" @click.prevent="setShowEditModal(false)"></button>
                </header>
                <form @submit.prevent="update">
                    <section class="modal-card-body">
                        <div class="field">
                            <label class="label" for="name">Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Enter Name" id="name" v-model="article.name">
                            </div>
                            <p class="help is-danger" v-if="validation.name">{{ validation.name[0] }}</p>
                        </div>
                        <div class="field">
                            <label class="label" for="description">Description</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Enter Description" id="description" v-model="article.description">
                            </div>
                            <p class="help is-danger" v-if="validation.description">{{ validation.description[0] }}</p>
                        </div>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-primary" type="submit">Save</button>
                        <button class="button" @click.prevent="setShowEditModal(false)">Cancel</button>
                    </footer>
                </form>
            </div>
        </div>
    </transition>
</template>

<script>
    import Vue from 'vue'
    import Notification from './Notification'
    import { mapActions, mapGetters, mapMutations } from 'vuex'
    const NotificationComponent = Vue.extend(Notification)
    const openNotification = (propsData = {
      title: '',
      message: '',
      type: '',
      direction: '',
      duration: 2000,
      container: '.notifications'
    }) => {
      return new NotificationComponent({
        el: document.createElement('div'),
        propsData
      })
    }
    export default {
      computed: {
        ...mapGetters({
          article: 'article',
          showModal: 'showModal',
          validation: 'getValidationErrors'
        })
      },
      methods: {
        ...mapActions({
          updateArticle: 'updateArticle'
        }),
        update () {
          this.updateArticle(this.article)
            .then((response) => {
              openNotification({
                message: response.data.message,
                type: 'success'
              })
            })
        },
        ...mapMutations({
          setShowEditModal: 'setShowEditModal'
        })
      }

    }
</script>

<style>
    .changes{
        display: flex;
        min-height: 100vh;
    }
</style>