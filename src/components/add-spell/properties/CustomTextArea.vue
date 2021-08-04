<template>
  <textarea ref="txtArea" v-model="text"></textarea>
</template>

<script>
import autosize from "autosize/dist/autosize";

export default {
  name: "CustomTextArea",
  data() {
    return {
      defaultText: "1 реакция, ",
      text: "1 реакция, "
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
  border-radius: 6px;
  border-width: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  width: 100%;
  resize: none;

  &:focus {
    outline: none;
  }
}
</style>