<template>
  <property-editor :text="text" :svg-name="svgName">
    <div class="hint-content">
      <!--      <div class="title">Время накладывания</div>-->
      <div class="radio-buttons">
        <div class="radiobutton">
          <input type="radio"
                 name="duration-1"
                 v-model="radioPicked"
                 value="instantly"
                 id="instantly">
          <label for="instantly">Мгновенно</label>
        </div>
        <div class="radiobutton">
          <input type="radio"
                 name="duration-1"
                 v-model="radioPicked"
                 value="concentration"
                 id="concentration">
          <label for="concentration">Концентрация</label>
        </div>
        <div class="radiobutton">
          <input type="radio"
                 name="duration-1"
                 v-model="radioPicked"
                 value="time"
                 id="duration-time">
          <label for="duration-time">Конкретное время</label>
        </div>
      </div>
      <hr>
      <div class="addition">
        <div class="nothing" v-show="radioPicked==='instantly'">Ничего нет.</div>
        <div class="concentration" v-show="radioPicked==='concentration'">
          <div class="pre-text">Дополните текстом:</div>
          <div class="reaction-input">
            <custom-text-area starts-with="Концентрация, вплоть до "/>
          </div>
        </div>
        <div class="time" v-show="radioPicked==='time'">
          <div class="pre-text">Выберите время:</div>
          <div class="buttons">
            <div class="form_radio_btn">
              <input id="duration-time-radio-1" type="radio" name="duration-time-1" value="1" checked>
              <label for="duration-time-radio-1">1 мин</label>
            </div>

            <div class="form_radio_btn">
              <input id="duration-time-radio-2" type="radio" name="duration-time-1" value="2">
              <label for="duration-time-radio-2">10 мин</label>
            </div>

            <div class="form_radio_btn">
              <input id="duration-time-radio-3" type="radio" name="duration-time-1" value="3">
              <label for="duration-time-radio-3">1 час</label>
            </div>

            <div class="form_radio_btn">
              <input id="duration-time-radio-4" type="radio" name="duration-time-1" value="3">
              <label for="duration-time-radio-4">8 часов</label>
            </div>
          </div>
          <input type="text" class="custom-time">
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
  name: "PropertyEditorDuration",
  data() {
    return {
      text: "Мгновенно",
      svgName: "duration",
      radioPicked: ""
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

    & .concentration {
      height: 60px;
      display: flex;
      flex-direction: column;

      & .pre-text {
        color: #2c3e50;
        font-size: 16px;
        font-family: Montserrat-regular, serif;

      }

    }

    & .time {

      & .pre-text {
        color: #2c3e50;
        font-size: 16px;
        font-family: Montserrat-regular, serif;

      }

      .custom-time {
        font-family: Montserrat-regular, serif;
        border-radius: 6px;
        border-width: 0;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
        padding: 0.2em 0.3em;
        box-sizing: border-box;
        font-size: 16px;
        width: 100%;
        margin: 0.4em 0;
        color: #2c3e50;

        &:focus {
          outline: none;
        }
      }

      .buttons {
        margin-top: 0.2em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.2em 1.2em;
      }

      & .form_radio_btn {

        & input[type=radio] {
          display: none;

          &:checked + label {
            background: #FDFFA3;
          }
        }

        & label {
          display: inline-block;
          //margin-right: 10px;
          font-family: Montserrat-regular, serif;
          border-radius: 16px;
          border-width: 0;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
          padding: 0.2em 0.9em;
          box-sizing: border-box;
          background-color: #FAFAFA;
          font-size: 16px;
        }
      }
    }
  }
}
</style>