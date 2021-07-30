<template>
  <property :text="text" :svg-name="svgName">
    <div class="hint-content">
      <div class="title">Школа магии</div>
      Основные школы магии в системе D&D:
      <ul>
        <li>Воплошение</li>
        <li>Вызов</li>
        <li>Иллюзия</li>
        <li>Некромантия</li>
        <li>Ограждение</li>
        <li>Очарование</li>
        <li>Преобразование</li>
        <li>Прорицание</li>
      </ul>
    </div>
  </property>
</template>

<script>
import Property from "@/components/Property";
export default {
  name: "PropertyMagicSchool",
  data() {
    return {
      text: "Иллюзия",
      svgName: "magical-school"
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