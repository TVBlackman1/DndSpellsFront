<template>
  <property-editor :text="text" :svg-name="svgName">
    <div class="hint-content">
      <div class="radio-buttons">
        <div
            v-for="(elem, index) in checkboxes.list"
            :key="elem.uuid"
            class="radiobutton">
          <input type="checkbox"
                 :name="elem.uuid"
                 v-model="checkboxes.picked"
                 :value="index"
                 :id="elem.uuid">
          <label :for="elem.uuid">{{ elem.value }}</label>
        </div>
      </div>
      <hr>
      <div class="addition">
        <div class="nothing" v-show="!hasMaterials">Ничего нет.</div>

        <div v-show="hasMaterials">
          <!--          <div class="pre-text">Опишите материалы:</div>-->
          <!--          <div class="reaction-input">-->
          <custom-text-area starts-with="" ref="materialsTextArea"/>
          <!--          </div>-->
        </div>
      </div>
    </div>
  </property-editor>
</template>

<script>
import PropertyEditor from "@/components/add-spell/properties/PropertyEditor";
import "autosize"
// import CustomTextArea from "@/components/add-spell/properties/CustomTextArea";
import {uuid} from "vue-uuid";
import CustomTextArea from "./CustomTextArea";

export default {
  name: "PropertyEditorComponents",
  data() {
    return {
      svgName: "components",
      checkboxes: {
        uuid: uuid.v1(),
        picked: [],
        list: [
          {value: 'Вербальное', uuid: uuid.v1(), abbreviation: "В"},
          {value: 'Соматическое', uuid: uuid.v1(), abbreviation: "С"},
          {value: 'Материальное', uuid: uuid.v1(), abbreviation: "М"},
        ]
      },
    }
  },
  computed: {
    hasMaterials() {
      return this.checkboxes.picked.indexOf(2) !== -1
    },
    text() {
      let materialText = ""
      if(this.$refs.materialsTextArea)
        materialText = this.$refs.materialsTextArea.text

      if(this.checkboxes.picked.length === 0) {
        return "Нет компонентов"
      }
      const elems = this.checkboxes.picked.slice()
      elems.sort()

      const abbreviations = elems.map((index) => this.checkboxes.list[index].abbreviation)
      let ret = abbreviations.join(', ')
      if(this.hasMaterials) {
        ret += ' (' + materialText + ')'
      }

      return ret
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

        & input[type=checkbox] {
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