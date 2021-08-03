<template>
  <property-editor :text="text" :svg-name="svgName">
    <div class="hint-content">
      <div class="title">Время накладывания</div>
      <div class="checkboxes">
        <input type="checkbox" value="hello" @click="$event.preventDefault">
      </div>
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
}
</style>