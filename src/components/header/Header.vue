<template>
  <header>
    <div class="container header__container">
      <h5>Hello I'm</h5>
      <h1>Islam Aissi</h1>
      <h5 class="text-light">Full stack developer</h5>
      <CTA />
      <HeaderSocials />

      <div class="me">
        <img src="@/assets/images/me.jpg" alt="me" />
      </div>

      <a href="#contact" class="scroll__down"> Scroll Down </a>
    </div>
  </header>
</template>

<script>
import CTA from "./CTA.vue";
import HeaderSocials from "./HeaderSocials.vue";
export default {
  components: {
    CTA,
    HeaderSocials,
  },
};
</script>
<style>
header {
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;
}

.header__container {
  text-align: center;
  height: 100%;
  position: relative;
}
.me {
  background: var(--color-primary);
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: calc(50% - 11rem);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
}
</style>


1;02