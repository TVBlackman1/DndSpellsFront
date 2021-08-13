<template>
  <header>
    <div class="right-content">
      <div class="spells">Заклинания</div>
      <div class="account">Войти</div>
    </div>
  </header>
</template>

<script>
export default {
  name: "SiteHeader"
}
</script>

<style scoped lang="scss">
.right-content {
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 40px;

  & > div {
    display: inline;
    padding: 0.3em 0.5em;
    margin: 0.7em 2.4em 0.7em 0.4em;
    box-sizing: border-box;
    font-family: Montserrat-semi-bold, serif;
    font-size: 16px;
    color: #858d94;

    &:hover {
      cursor: pointer;
      color: #586473;
    }
  }
}
</style>