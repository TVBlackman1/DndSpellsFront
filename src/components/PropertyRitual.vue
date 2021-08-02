<template>
  <property :text="text" :svg-name="svgName">
    <div class="hint-content">
      <div class="title">Ритуал</div>
      Ритуалы можно применять без траты ячеек заклинания.
    </div>
  </property>
</template>

<script>
import Property from "@/components/Property";
export default {
  name: "PropertyRitual",
  data() {
    return {
      text: "Не ритуал",
      svgName: "ritual"
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