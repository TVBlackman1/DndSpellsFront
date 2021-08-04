<template>
  <property-editor :text="text" :svg-name="svgName">
    <div class="hint-content">
      <!--      <div class="title">Время накладывания</div>-->
      <div class="radio-buttons">
        <div class="radiobutton">
          <input type="radio"
                 name="asd1"
                 id="1action">
          <label for="1action">1 действие</label>
        </div>
        <div class="radiobutton">
          <input type="radio"
                 name="asd1"
                 id="1reaction">
          <label for="1reaction">1 реакция</label>
        </div>
        <div class="radiobutton">
          <input type="radio"
                 name="asd1"
                 id="time">
          <label for="time">Конкретное время</label>
        </div>
      </div>
      <hr>
      <div class="addition">
        <!--        <div class="nothing">Ничего нет.</div>-->
        <div class="reaction">
          <div class="pre-text">Дополните текстом:</div>
          <div class="reaction-input">
            <custom-text-area/>
          </div>
        </div>
      </div>
    </div>
  </property-editor>
</template>

<script>
import PropertyEditor from "@/components/add-spell/properties/PropertyEditor";
import "autosize"
import CustomTextArea from "@/components/add-spell/properties/CustomTextArea";

export default {
  name: "PropertyEditorCastTime",
  data() {
    return {
      text: "1 действие",
      svgName: "cast-time"
    }
  },
  components: {CustomTextArea, PropertyEditor}
}
</script>

<style scoped lang="scss">
.hint-content {
  display: flex;
  flex-direction: column;
  font-family: Montserrat-regular, serif;
  font-size: 18px;
  transition: 0.15s;

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

  & .addition {
    & .nothing {
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ABB2BA;
      font-size: 18px;
    }

    & .reaction {
      height: 60px;
      display: flex;
      flex-direction: column;

      & .pre-text {
        color: #2c3e50;
        font-size: 16px;
        font-family: Montserrat-regular, serif;

      }

    }
  }
}
</style>