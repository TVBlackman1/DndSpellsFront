<template>
  <div class="property" @click="toggleHint">
    <div :class="'svg-elem ' + svgName"></div>
    <div class="text">{{ text }}</div>
    <div class="hint" v-show="hint">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Property",
  data() {
    return {
      svgClass: "",
      hint: false
    }
  },
  methods: {
    toggleHint() {
      this.hint = !this.hint
    }
  },
  props: ['svgName', 'text']
}
</script>

<style scoped lang="scss">
@import "~@/css/svg-styles.scss";

.property {
  display: inline-flex;
  flex-direction: row;
  //align-items: center;
  position: relative;

  & .text {
    padding-top: 0.15em;
    font-family: Montserrat-regular, serif;
    font-size: 16px;
  }

  &:hover {
    cursor: pointer;

    .svg-elem {
      filter: invert(57%) sepia(46%) saturate(4750%) hue-rotate(326deg) brightness(97%) contrast(89%);
    }
  }
}

.hint {
  position: absolute;
  z-index: 2;
  border-radius: 8px;
  left: 0;
  top: 30px;
  width: 420px;
  overflow-y: auto;
  max-height: 200px;
  background-color: #fff;
  -webkit-box-shadow: 2px 2px 6px 1px rgba(0,0,0,0.45);
  box-shadow: 2px 2px 6px 1px rgba(0,0,0,0.45);
  padding: 0.3em 0.6em;
  box-sizing: border-box;

  font-family: Montserrat-regular, serif;
  font-size: 16px;
}

</style>