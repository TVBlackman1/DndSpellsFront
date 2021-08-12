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
          <label :for="elem.uuid">{{ elem.value }}</label>
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
import PropertyGetterObject from "../../../mixins/PropertyGetterObject";
import newSpellActions from '../../../store/modules/new-spell/action-types'

export default {
  name: "PropertyEditorMagicSchool",
  data() {
    return {
      svgName: "magical-school",
      radio: {
        uuid: uuid.v1(),
        picked: 0,
        list: [
          {value: 'Воплощение', uuid: uuid.v1()},
          {value: 'Вызов', uuid: uuid.v1()},
          {value: 'Иллюзия', uuid: uuid.v1()},
          {value: 'Некромантия', uuid: uuid.v1()},
          {value: 'Ограждение', uuid: uuid.v1()},
          {value: 'Очарование', uuid: uuid.v1()},
          {value: 'Преобразование', uuid: uuid.v1()},
          {value: 'Прорицание', uuid: uuid.v1()},
        ]
      },
    }
  },
  computed: {
    text() {
      let ind = this.radio.picked || 0
      let elem = this.radio.list[ind]

      this.$store.dispatch({
        type: newSpellActions.setLevel,
        newValue: 3
      })
      // console.log(this.$store.state.newSpell.lvl)
      // this.$store.state.newSpell.commit('set-level', 3)
      console.log("computed ends")
      return elem.value
    }
  },
  watch: {
    text(val) {
      this.$store.dispatch({
        type: newSpellActions.setProperty,
        propertyName: 'magicSchool',
        value: val
      })
      console.log(this.$store.state.newSpell.properties)
      console.log(val, "!!")
    }
  },
  mixins: [PropertyGetterObject],
  components: {PropertyEditor}
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