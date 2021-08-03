<template>
  <div class="add-spell">
    <div class="name">
      <div class="input-holder"><input type="text"></div>
    </div>
    <div class="all-characteristics">
      <div class="left">
        <div class="lvl">
          <div class="paragraph">Уровень</div>
          <lvl-editor />
        </div>
        <div class="properties">
          <div class="paragraph">Свойства</div>
          <div class="container">
            <property-editor-cast-time />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="description-block">
          <div class="paragraph">Описание</div>
        </div>
      </div>
    </div>
    <div class="buttons">buttons</div>
  </div>
</template>

<script>
import LvlEditor from "@/components/add-spell/LvlEditor";
import PropertyEditorCastTime from "@/components/add-spell/properties/PropertyEditorCastTime";

export default {
  name: "AddSpell",
  components: {PropertyEditorCastTime, LvlEditor},
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/css/fonts.css";

.add-spell {
  border-radius: 8px;
  width: 1100px;
  min-height: 400px;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & .paragraph {
      text-align: center;
      font-family: Montserrat-semi-bold, serif;
      font-size: 16px;
    }
  }
}
</style>