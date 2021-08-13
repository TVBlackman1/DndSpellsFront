<template>
  <div class="spell-card">
    <div class="name-holder">
      {{state.name}}
    </div>
    <div class="must-have-info">
      <div class="lvl">{{state.level}}</div>
      <div class="properties">
        <property-cast-time :castTime="state.castTime"/>
        <property-magic-school :schoolName="state.magicSchool"/>
        <property-duration :duration="state.duration" />
        <property-distance :distance="state.distance"/>
        <property-components :components="state.components"/>
        <property-ritual :ritual="state.ritual"/>
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
      description: String,
    },

  },
  components: {
    PropertyRitual,
    PropertyDistance, PropertyComponents, PropertyDuration, PropertyCastTime, PropertyMagicSchool},
  data(){
    return {

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
    //align-items: center;
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
    margin-right: 24px;
    margin-left: 12px;
    //transition: 0.15s;

    &:hover {
      cursor: pointer;
      border-color: #ec5b5b;
    }
  }

  & .properties {
    display: grid;
    flex: 1;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    grid-column-gap: 15px;
    grid-row-gap: 5px;
  }
}
</style>