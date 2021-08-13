<template>
  <property :text="distance" :svg-name="svgName">
    <div class="hint-content">
      <div class="title">Дистанция</div>
      Это максимальная дистанция, на которую можно использовать заклинание.
    </div>
  </property>
</template>

<script>
import Property from "@/components/Property";
export default {
  name: "PropertyDistance",
  props: ['distance'],
  data() {
    return {
      svgName: "distance"
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