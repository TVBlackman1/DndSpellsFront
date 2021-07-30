<template>
  <div class="spell-card">
    <div class="name-holder">
      {{name}}
    </div>
    <div class="properties"></div>
    <div class="description">
<!--      <pre>-->
        {{description}}
<!--      </pre>-->
    </div>
    <div class="sources"></div>
<!--    <property :text="magicSchool" :svg-source="magicSchoolSVG" />-->
    <property-magic-school />
    <property-cast-time />
  </div>
</template>

<script>
// import Property from "@/components/Property";
import SchoolSVG from "@/assets/svg/school_black_24dp.svg"
import PropertyMagicSchool from "@/components/PropertyMagicSchool";
import PropertyCastTime from "@/components/PropertyCastTime";

export default {
  name: "Card",
  components: {PropertyCastTime, PropertyMagicSchool},
  data(){
    return {
      name: "Безмолвный образ [Silent image]",
      level: 1,
      magicSchool: "Иллюзия",
      magicSchoolSVG: SchoolSVG,
      description: "Вы создаёте образ предмета, существа или другого видимого явления, помещающийся в объеме в куб с длиной ребра 15 футов. Образ появляется в точке, которую вы видите в пределах дистанции, и существует, пока активно заклинание. Это исключительно зрительная иллюзия, не сопровождаемая звуками, запахами и прочими сенсорными эффектами.\n" +
          "\n" +
          "Вы можете действием заставить образ переместиться в любое место в пределах дистанции. Пока образ меняет местоположение, вы можете изменять его внешность, чтобы перемещение выглядело естественным. Например, если вы создаете образ существа и перемещаете его, вы можете изменить образ, чтобы казалось, что оно идет.\n" +
          "\n" +
          "Физическое взаимодействие с образом дает понять, что это иллюзия, потому что сквозь него все проходит. Существа, исследующие образ действием, могут определить, что это иллюзия, совершив успешную проверку Интеллекта (Расследование) против Сл ваших заклинаний. Если существо распознает иллюзию, оно может видеть сквозь нее.",

    }
  },
}
</script>

<style scoped lang="scss">
@import "~@/css/fonts.css";

.spell-card {
  border: 1px solid steelblue;
  border-radius: 8px;
  width: 860px;
  text-align: left;
  padding: 0.4em 0.8em;
  background-color: #F5F5F5;

  & .name-holder {
    font-family: Montserrat-semi-bold, serif;
    font-size: 24px;
  }

  & .description {
    font-family: Montserrat-regular, serif;
    font-size: 18px;
  }
}
</style>