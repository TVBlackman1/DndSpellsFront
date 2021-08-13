<template>
  <property :text="components" :svg-name="svgName">
    <div class="hint-content">
      <div class="title">Компоненты заклинания</div>
      Есть три типа компонентов: вербальные, соматические и материальные.
    </div>
  </property>
</template>

<script>
import Property from "@/components/Property";
export default {
  name: "PropertyComponents",
  props: ['components'],
  data() {
    return {
      svgName: "components"
    }
  },
  components: {Property}
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