<template>
  <div class="add-spell">
    <div class="name">
      <div class="input-holder"><input type="text"></div>
    </div>
    <div class="all-characteristics">
      <div class="left">
        <div class="lvl">
          <div class="paragraph">Уровень</div>
          <lvl-editor/>
        </div>
        <div class="properties">
          <div class="paragraph">Свойства</div>
          <div class="container" ref="properties">
            <component v-for="propertyComponent in propertyComponents"
                       :is="propertyComponent.name"
                       :key="propertyComponent.refName"
                       :ref="propertyComponent.refName"></component>
          </div>

        </div>
      </div>
      <div class="right">
        <div class="description-block">
          <div class="paragraph">Описание</div>
          <div class="description">
            <textarea/>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="buttons">
      <button>Выйти</button>
      <button @click="getCastTime">Сохранить</button>
    </div>
  </div>
</template>

<script>
import LvlEditor from "@/components/add-spell/LvlEditor";
import PropertyEditorCastTime from "@/components/add-spell/properties/PropertyEditorCastTime";
import PropertyEditorDuration from "@/components/add-spell/properties/PropertyEditorDuration";
import PropertyEditorMagicSchool from "./properties/PropertyEditorMagicSchool";
import PropertyEditorDistance from "./properties/PropertyEditorDistance";
import PropertyEditorComponents from "./properties/PropertyEditorComponents";
import PropertyEditorRitual from "./properties/PropertyEditorRitual";
import PropertyComponents from './../../constructors/PropertyComponent'

export default {
  name: "AddSpell",
  data() {
    return {
      propertyComponents: PropertyComponents.fromNames(
          'property-editor-cast-time',
          'property-editor-duration',
          'property-editor-magic-school',
          'property-editor-distance',
          'property-editor-components',
          'property-editor-ritual'
      )
    }
  },
  methods: {
    getCastTime() {

      let _this = this
      this.propertyComponents.forEach(property => {
        console.log(property.obj(_this))
      })
    }
  },
  components: {
    PropertyEditorRitual,
    PropertyEditorComponents,
    PropertyEditorDistance,
    PropertyEditorMagicSchool, PropertyEditorDuration, PropertyEditorCastTime, LvlEditor
  }
}
</script>

<style scoped lang="scss">
@import "~@/css/fonts.css";

.add-spell {
  margin: 2em auto;
  position: relative;
  border-radius: 8px;
  width: 1100px;
  min-height: 400px;
  //max-height: 400px;
  overflow-y: auto;
  text-align: left;
  padding: 0.4em 0.8em 0.8em;
  background-color: #F5F5F5;
  -webkit-box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.45);
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;

  & .name {
    & .input-holder {
      font-family: Montserrat-regular, serif;
      font-size: 24px;

      & input {
        border-width: 0 0 1px 0;
        background: transparent;
        box-sizing: border-box;
        border-radius: 6px 6px 0 0;
        border-color: #2c3e50;
        color: #2c3e50;
        width: 100%;
        font-family: Montserrat-semi-bold, serif;
        font-size: 24px;
        margin: 10px 0;

        &:focus {
          background: #fff;
          outline: none;
        }
      }

      &::before {
        content: "Название:";
        margin-right: 20px;
      }
    }
  }

  & .all-characteristics {
    position: relative;
    display: grid;
    //flex-direction: row;
    grid-template-columns: max-content 1fr;
    grid-gap: 3em;
    //justify-content: space-between;

    & .paragraph {
      text-align: center;
      font-family: Montserrat-semi-bold, serif;
      font-size: 16px;
      margin: 0.8em 0 0.6em
    }

    & .properties {
      //background-color: #e8e8e8;
      //border-radius: 12px;
      & .container {
        $height: 240px;
        display: flex;
        flex-direction: column;
        max-height: $height;
        height: $height;
        overflow-y: auto;

        & > div {
          margin-bottom: 11px;
        }
      }
    }

    & .right {
      display: flex;
      flex-direction: column;
    }

    & .description-block {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    & .description {
      flex: 1;

      & textarea {
        resize: none;
        font-family: Montserrat-regular, serif;
        color: #2c3e50;
        border-radius: 6px;
        border-width: 0;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
        padding: 0.2em 0.3em;
        box-sizing: border-box;
        font-size: 16px;
        width: 100%;
        background-color: #FAFAFA;
        height: 100%;
        align-self: stretch;

        &:focus {
          outline: none;
        }
      }
    }
  }

  & hr {
    color: gray;
    border-style: inset;
    border-width: 0.5px;
    margin: 1.5em 0.5em 0.5em;
  }

  & .buttons {
    //position: absolute;
    //bottom: 0;
    //right: 0;
    //left: 0;
    padding: 1em;
    display: flex;
    flex-direction: row;
    justify-content: center;

    & button {
      font-family: Montserrat-regular, serif;
      border-radius: 8px;
      border-width: 0;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
      padding: 0.3em 1.2em;
      box-sizing: border-box;
      background-color: #FAFAFA;
      font-size: 20px;
      margin: 0 2em;

      &:hover {
        cursor: pointer;
        background-color: #e5e8ec;
      }

      &:focus {
        background-color: #bec3c9;
      }
    }
  }
}
</style>