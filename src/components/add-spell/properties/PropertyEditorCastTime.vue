<template>
  <property-editor :text="text" :svg-name="svgName">
    <div class="hint-content">
<!--      <div class="title">Время накладывания</div>-->
      <div class="radio-buttons">
        <div class="radiobutton">
          <input type="radio"
                 name="asd1"
                 id="1action"
                 @click="$event.preventDefault">
          <label for="1action">1 действие</label>
        </div>
        <div class="radiobutton">
          <input type="radio"
                 name="asd1"
                 id="1reaction"
                 @click="$event.preventDefault">
          <label for="1reaction">1 реакция</label>
        </div>
        <div class="radiobutton">
          <input type="radio"
                 name="asd1"
                 id="time"
                 @click="$event.preventDefault">
          <label for="time">Конкретное время</label>
        </div>
      </div>
      <hr>
      <div class="addition"></div>
    </div>
  </property-editor>
</template>

<script>
import PropertyEditor from "@/components/add-spell/properties/PropertyEditor";

export default {
  name: "PropertyEditorCastTime",
  data() {
    return {
      text: "1 действие",
      svgName: "cast-time"
    }
  },
  components: {PropertyEditor}
}
</script>

<style scoped lang="scss">
.hint-content {
  display: flex;
  flex-direction: column;
  font-family: Montserrat-regular, serif;
  font-size: 18px;

  .title {
    text-align: center;
    font-family: Montserrat-semi-bold, serif;
    margin-bottom: 0.4em;
  }

  & hr {
    color: gray;
    border-style: inset;
    border-width: 0.5px;
    margin: 0.5em 0;
  }

  & .radio-buttons {
    display: flex;
    flex-direction: column;

    & input {
      margin-right: 10px;
    }
  }
}
</style>