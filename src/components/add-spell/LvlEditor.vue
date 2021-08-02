<template>
  <div class="content">
    <div class="lvl-image">{{ currentLvl }}</div>
    <ul class="levels">
      <li v-for="(lvl, ind) in levels"
          :key="ind"
          :class="{'active': currentLvl === lvl}"
          @click="setLevelValue($event, lvl)">
        {{ lvl }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LvlEditor",
  data() {
    return {
      levels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      currentLvl: 0,
      prevListItem: undefined
    }
  },
  methods: {
    setLevelValue(event, newLevel) {
      event.target.classList.toggle('active')
      this.prevListItem?.classList.toggle('active')
      this.prevListItem = event.target

      this.currentLvl = newLevel

    },
  }
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;

  & .lvl-image {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Montserrat-bold, serif;
    font-size: 18px;
    border: 3px dashed #2c3e50;
    padding: 0.3em;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    margin-right: 24px;
    //transition: 0.15s;

    &:hover {
      cursor: pointer;
      border-color: #ec5b5b;
    }
  }

  & ul.levels {
    display: flex;
    list-style: none;
    background-color: #FAFAFA;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    margin: 0;
    padding: 0.2em 1.2em;

    & li {
      margin: 0 8px;
      padding: 0 0.3em;
      font-family: Montserrat-bold, serif;
      font-size: 18px;

      &:hover {
        cursor: pointer;
      }

      &.active {
        border-width: 0 0 3px 0;
        //border: 1px solid black
        border-color: #DDE122;
        border-style: solid;
      }
    }
  }
}
</style>