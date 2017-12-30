<template>
    <transition name="modal">
        <div class="modal changes">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Create Article</p>
                    <button class="delete" aria-label="close" @click.prevent="setShowModal(false)"></button>
                </header>
                <form method="post" @submit.prevent="add()">
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
                        <button class="button" @click.prevent="setShowModal(false)">Cancel</button>
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
      data: function () {
        return {
          article: []
        }
      },
      computed: {
        ...mapGetters({
          showModal: 'showModal',
          validation: 'getValidationErrors'
        })
      },
      methods: {
        ...mapActions({
          addArticle: 'addArticle'
        }),
        add () {
          this.addArticle(this.article)
              .then((response) => {
                openNotification({
                  message: response.data.message,
                  type: 'success'
                })
              })
        },
        ...mapMutations({
          setShowModal: 'setShowModal'
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