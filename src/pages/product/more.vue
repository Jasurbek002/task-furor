<script setup lang="ts">
import Card from "src/components/Ui/card/Card.vue";
import Nav from "src/components/Ui/wrapper/Nav.vue";
import Section from "../../components/Ui/Card-section/section.vue";
</script>

<template>
  <Nav label="Общая информация о работнике" />
  <Card>
    <div class="img">
      <img src="../../assets/static/user.png" alt="userimg" />
    </div>

    <div class="img">
      <img style="width: 200px;" src="../../assets/static/pasport.jpg" alt="userimg" />
    </div>

    <div class="userinfo">
      <Section value1="Имя" value2="Jasurbek Turg'unov" />
      <Section value1="день рождения" value2="11.01.2002" />
      <Section value1="место Рождение" value2="Fergana, kakand" />
      <Section value1="гражданство" value2="Repoblic of Uzbekistan" />
      <Section value1="Знание языка" value2="Uzbek, Russian, English" />
      <Section
        value1="образование"
        value2="Tashkent state techical universty"
      />
      <Section value1="позиция" value2="Junior soffwear enginer" />
      <Section value1="положение" value2="working now" />
    </div>
  </Card>
</template>

<style scoped>
.img {
  width: 200px;
  height: 250px;
}
</style>
