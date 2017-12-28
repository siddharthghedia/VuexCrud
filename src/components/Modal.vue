<template>
    <card-modal :visible="visible" @close="close" :title="title" transition="zoom">
        <div class="tile is-parent">
            <article class="tile is-child box">
                <div class="block">
                    <label class="label" for="name">Name</label>
                    <p class="control">
                        <input class="input" type="text" placeholder="Name" name="name" id="name">
                    </p>
                    <label class="label">Description</label>
                    <p class="control has-icon has-icon-right">
                        <input class="input is-danger" type="text" placeholder="Description">
                        <span class="icon is-small">
                            <i class="fa fa-warning"></i>
                        </span>
                        <span class="help is-danger">This username is available</span>
                    </p>
                    <p class="control">
                        <button class="button is-primary">Submit</button>
                        <button class="button is-link">Cancel</button>
                    </p>
                </div>
            </article>
        </div>
    </card-modal>
</template>

<script>
    import { CardModal } from 'vue-bulma-modal'
    export default {
      components: {
        CardModal
      },
      props: {
        visible: Boolean,
        title: String,
        url: String
      },
      methods: {
        open (url) {
          window.open(url)
        },
        close () {
          this.$emit('close')
        }
      }
    }
</script>