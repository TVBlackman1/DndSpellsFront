<template>
  <div class="container">
    <card v-for="(spell, index) in spells"
          :key="index"
          :state="spell"/>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "CardContainer",
  data() {
    return {
      spells: [
        {name: "Изобилие врагов [Enemies abound]", level: 3},
        {name: "Истинное воскрешение [True resurrection]", level: 9},
        {name: "Отилюков упругий шар [Otiluke’s resilient sphere]", level: 4},
      ],
    }
  },
  components: {Card}
}
</script>

<style scoped>

</style>