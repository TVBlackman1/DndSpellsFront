<template>
  <div class="property">
    <div :class="'svg-elem ' + svgName"></div>
    <div class="property-edit">
      <div :class="['button-more', 'svg-elem', 'arrow-more', {opened: hint}]" @click="toggleHint"></div>
      <div class="text">{{ text }}</div>

      <transition name="fade">
        <hr v-show="hint">
      </transition>
      <transition name="fade">
        <div class="hint" v-show="hint">
          <slot></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropertyEditor",
  data() {
    return {
      svgClass: "",
      hint: true
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
  display: flex;
  flex-direction: row;
  //align-items: center;
  position: relative;
  width: 480px;

  & .property-edit {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    background-color: #FAFAFA;
    border-radius: 12px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);

    //.fade-enter-active, .fade-leave-active {
    //  transition: opacity 2.5s;
    //}

    & .button-more {
      position: absolute;
      top: 0;
      right: 0;
      transition: 0.15s;

      &:hover {
        cursor: pointer;
      }

      &.opened {
        transform: rotateZ(180deg);
      }
    }

    & hr {
      color: gray;
      border-style: inset;
      border-width: 0.5px;
      margin: 0 0.5em 0.5em;
    }

    & .text {
      padding: 0.15em 1.2em;
      font-family: Montserrat-regular, serif;
      font-size: 18px;
      box-sizing: border-box;
    }

    & .hint {
      width: 100%;
      overflow-y: auto;
      //height: 400px;
      max-height: 560px;
      padding: 0.3em 0.6em 1.3em;
      box-sizing: border-box;

      font-family: Montserrat-regular, serif;
      font-size: 16px;
    }

    &:hover {
      //cursor: pointer;

      //.svg-elem {
      //  filter: invert(57%) sepia(46%) saturate(4750%) hue-rotate(326deg) brightness(97%) contrast(89%);
      //}
    }
  }

}

//.hint {
//  position: absolute;
//  z-index: 2;
//  border-radius: 8px;
//  left: 0;
//  top: 30px;
//  width: 420px;
//  overflow-y: auto;
//  max-height: 200px;
//  background-color: #fff;
//  -webkit-box-shadow: 2px 2px 6px 1px rgba(0,0,0,0.45);
//  box-shadow: 2px 2px 6px 1px rgba(0,0,0,0.45);
//  padding: 0.3em 0.6em;
//  box-sizing: border-box;
//
//  font-family: Montserrat-regular, serif;
//  font-size: 16px;
//}


</style>