<template>
  <property :text="text" :svg-name="svgName">
    <div class="hint-content">
      <div class="title">Длительность эффекта</div>
      Сколько времени будет действовать заклинание. Если
      заклинание работает только при концентрации, то оно может
      закончиться досрочно.
    </div>
  </property>
</template>

<script>
import Property from "@/components/Property";
export default {
  name: "PropertyDuration",
  data() {
    return {
      text: "Концентрация, вплоть до 10 минут",
      svgName: "duration"
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