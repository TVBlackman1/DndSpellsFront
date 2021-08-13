<template>
  <property :text="castTime" :svg-name="svgName">
    <div class="hint-content">
      <div class="title">Время накладывания</div>
      Сколько времени потребуется магу, чтобы наложить заклинание.
    </div>
  </property>
</template>

<script>
import Property from "@/components/Property";

export default {
  name: "PropertyCastTime",
  props: ['castTime'],
  data() {
    return {
      svgName: "cast-time"
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