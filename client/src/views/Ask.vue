<template>
  <div class="ask">
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-10">
          <div class="form p-4 shadow rounded">
            <form @submit.prevent="submitQuestion">
                <div class="form-group">
                    <label>Title</label>
                    <p class="description">Be spesific and imagine you're asking a question to another person</p>
                    <input v-model="title" class="form-control" placeholder="e.g. Is there an R function for finding the index of an element in a vector?">
                </div>
                <div class="form-group">
                    <label>Body</label>
                    <p class="description">Include all the information someone would need to answer your question</p>
                    <!-- <textarea rows="3" class="form-control"></textarea> -->
                    <vue-editor v-model="content"></vue-editor>
                </div>
                <button type="submit" class="btn btn-primary">Review your question</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      title: '',
      content: '',
    };
  },
  methods: {
    submitQuestion() {
      const question = {
        title: this.title,
        desc: this.content,
      };
      this.$store.dispatch('submitQuestion', question);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: 700;
  margin-bottom: 0;
}
.btn-primary {
  background-color: #0095ff;
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.4);
  margin-top: 1rem;
}
.description {
  margin-bottom: .3rem;
  color: #61737c;
  font-size: 12px;
}
</style>
