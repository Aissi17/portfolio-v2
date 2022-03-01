<template>
  <div class="header__socials">
    <a href="https://linkedin.com" target="__blank">
      <font-awesome-icon icon="fa-brands fa-linkedin" />
    </a>
    <a href="https://linkedin.com" target="__blank">
      <font-awesome-icon icon="fa-brands fa-github" />
    </a>
    <a href="https://facebook.com" target="__blank">
      <font-awesome-icon icon="fa-brands fa-facebook" />
    </a>
    <a href="https://twitter.com" target="__blank">
      <font-awesome-icon icon="fa-brands fa-twitter" />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header__socials {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 3rem;
}
.header__socials::after {
  content: "";
  width: 1px;
  height: 2rem;
  background: var(--color-primary);
}
</style>
