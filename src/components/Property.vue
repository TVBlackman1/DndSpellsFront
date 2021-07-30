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
.property {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  & .svg-elem {
    $size: 24px;
    background-size: cover;
    width: $size;
    height: $size;
    margin-right: 8px;
    filter: invert(19%) sepia(13%) saturate(1476%) hue-rotate(169deg) brightness(98%) contrast(87%);
    //transition: 0.01s;

    &.magical-school {
      background: url("~@/assets/svg/school_black_24dp.svg") center no-repeat;
    }

    &.cast-time {
      background: url("~@/assets/svg/schedule_black_24dp.svg") center no-repeat;
    }
  }

  & .text {
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
  border-radius: 8px;
  left: 0;
  top: 30px;
  width: 400px;
  overflow-y: auto;
  max-height: 200px;
  background-color: #fff;
  -webkit-box-shadow: 2px 2px 6px 1px rgba(0,0,0,0.45);
  box-shadow: 2px 2px 6px 1px rgba(0,0,0,0.45);
  padding: 0.2em 0.4em;
  box-sizing: border-box;

  font-family: Montserrat-regular, serif;
  font-size: 16px;
}

</style>