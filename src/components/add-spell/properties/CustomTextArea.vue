<template>
  <textarea ref="txtArea" v-model="text"></textarea>
</template>

<script>
import autosize from "autosize/dist/autosize";

export default {
  name: "CustomTextArea",
  props: {
    startsWith: String
  },

  data() {
    return {
      defaultText: this.startsWith,
      text: this.startsWith
    }
  },
  mounted() {
    autosize(this.$refs.txtArea);
  },
  methods: {
  },
  watch: {
    text(val) {
      if(val.length < this.defaultText.length) {
        this.text = this.defaultText
      }
    }
  }
}
</script>

<style scoped lang="scss">
textarea {
  font-family: Montserrat-regular, serif;
  color: #2c3e50;
  border-radius: 6px;
  border-width: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  padding: 0.2em 0.3em;
  box-sizing: border-box;
  max-height: 300px;
  font-size: 16px;
  width: 100%;
  resize: none;

  &:focus {
    outline: none;
  }
}
</style>