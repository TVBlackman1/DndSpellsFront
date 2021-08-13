<template>
  <div class="spell-card">
    <div class="name-holder">
      {{state.name}}
    </div>
    <div class="must-have-info">
      <div class="lvl">{{state.level}}</div>
      <div class="properties">
        <property-cast-time />
        <property-magic-school />
        <property-duration />
        <property-distance />
        <property-components />
        <property-ritual />
      </div>
    </div>

    <div class="description">
<!--      <pre>-->
        {{state.description}}
<!--      </pre>-->
    </div>
    <div class="sources"></div>
<!--    <property :text="magicSchool" :svg-source="magicSchoolSVG" />-->
  </div>
</template>

<script>
// import Property from "@/components/Property";
import SchoolSVG from "@/assets/svg/school_black_24dp.svg"
import PropertyMagicSchool from "@/components/PropertyMagicSchool";
import PropertyCastTime from "@/components/PropertyCastTime";
import PropertyDuration from "@/components/PropertyDuration";
import PropertyComponents from "@/components/PropertyComponents";
import PropertyDistance from "@/components/PropertyDistance";
import PropertyRitual from "@/components/PropertyRitual";

export default {
  name: "Card",
  props: {
    state: {
      name: String,
      level: Number,
      magicSchool: String,
      description: String
    },

  },
  components: {
    PropertyRitual,
    PropertyDistance, PropertyComponents, PropertyDuration, PropertyCastTime, PropertyMagicSchool},
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
  margin: 2em auto;
  //border: 1px solid steelblue;
  border-radius: 8px;
  width: 880px;
  text-align: left;
  padding: 0.4em 0.8em 0.8em;
  //background-color: #F5F5F5;
  //background: linear-gradient(308deg, rgba(215,247,226,1) 0%, rgba(227,247,249,1) 100%);
  //background: rgb(84,224,255);
  background: #F5F5F5 linear-gradient(149deg, rgba(84,224,255,0.04) 0%, rgba(0,255,10,0.04) 100%);

  -webkit-box-shadow: 2px 2px 6px 1px rgba(0,0,0,0.45);
  box-shadow: 2px 2px 6px 1px rgba(0,0,0,0.45);

  & .name-holder {
    font-family: Montserrat-semi-bold, serif;
    font-size: 24px;
  }

  & .description {
    margin-top: 0.8em;
    font-family: Montserrat-regular, serif;
    font-size: 18px;
  }

  & .must-have-info {
    margin-top: 0.9em;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & .lvl {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Montserrat-semi-bold, serif;
    font-size: 24px;
    border: 3px dashed #2c3e50;
    padding: 0.4em;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    margin-right: 30px;
    margin-left: 12px;
    //transition: 0.15s;

    &:hover {
      cursor: pointer;
      border-color: #ec5b5b;
    }
  }

  & .properties {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    grid-column-gap: 15px;
    grid-row-gap: 5px;
  }
}
</style>