<template>
  <property-editor :text="text" :svg-name="svgName">
    <div class="hint-content">
      <!--      <div class="title">Время накладывания</div>-->
      <div class="radio-buttons">
        <div
            v-for="(elem, index) in radio.list"
            :key="elem.uuid"
            class="radiobutton">
          <input type="radio"
                 class="point"
                 :name="radio.uuid"
                 v-model="radio.picked"
                 :value="index"
                 :id="elem.uuid">
          <label :for="elem.uuid">{{elem.value}}</label>
        </div>
      </div>
      <hr>
      <div class="addition">
        <div class="nothing" v-show="radio.picked===0">Ничего нет.</div>
        <div class="concentration" v-show="radio.picked===1">
          <div class="pre-text">Дополните текстом:</div>
          <div class="reaction-input">
            <custom-text-area starts-with="Концентрация, вплоть до " ref="concentrationTextArea"/>
          </div>
        </div>
        <div class="time" v-show="radio.picked===2">
          <div class="pre-text">Выберите время:</div>
          <div class="buttons">
            <div
                class="form_radio_btn"
                v-for="(elem, index) in time.list"
                :key="elem.uuid">
              <input :id="elem.uuid"
                     type="radio"
                     v-model="time.picked"
                     :name="time.uuid"
                     :value="index">
              <label :for="elem.uuid">{{ elem.value }}</label>
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
import {uuid} from "vue-uuid";
import PropertyGetterObject from "../../../mixins/PropertyGetterObject";
import newSpellActions from "../../../store/modules/new-spell/action-types";

export default {
  name: "PropertyEditorDuration",
  data() {
    return {
      svgName: "duration",
      radio: {
        uuid: uuid.v1(),
        picked: 0,
        list: [
          {value: 'Мгновенно', uuid: uuid.v1()},
          {value: 'Концентрация', uuid: uuid.v1()},
          {value: 'Конкретное время', uuid: uuid.v1()},
        ]
      },
      time: {
        uuid: uuid.v1(),
        picked: 0,
        list: [
          {value: '1 мин', uuid: uuid.v1()},
          {value: '10 мин', uuid: uuid.v1()},
          {value: '1 час', uuid: uuid.v1()},
          {value: '8 часов', uuid: uuid.v1()},
        ]
      }
    }
  },
  computed: {
    text() {
      let ind = this.radio.picked || 0

      if (ind === 0) {
        // immediately
        let elem = this.radio.list[ind]
        return elem.value
      }
      else if(ind === 1) {
        // concentration
        return this.$refs.concentrationTextArea.text
      }
      else if(ind === 2) {
        // current time
        let timeInd = this.time.picked
        let elem = this.time.list[timeInd]
        return elem.value
      }

      return undefined
    }
  },
  watch: {
    text(val) {
      this.$store.dispatch({
        type: newSpellActions.setProperty,
        propertyName: 'duration',
        value: val,
        reloadHelper: {
          radio: this.radio.picked,
          currentTime: this.time.picked,
          reactionText: this.$refs.concentrationTextArea.text
        }
      })
    }
  },
  mixins: [PropertyGetterObject],
  components: {CustomTextArea, PropertyEditor}
}
</script>

<style scoped lang="scss">
@import "src/css/lists";

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