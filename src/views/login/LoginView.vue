<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in 3" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
  <Fieldset legend="Caixa de Texto " :toggleable="true" :collapsed="true">
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
	His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
	Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
  </Fieldset>
</template>
<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<style>
.carousel__item {
  min-height: 500px;
  width: 65%;
  /* background-color: var(--vc-clr-primary); */
  background-image: url("https://agenciapara.com.br/midias/2020/grandes/up_ag_23406_6ba38dba-6373-bcbf-942d-0652435a9fee.jpg");
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.fieldset {
    height: 10px;
    width: 10%;
    margin: 10;
    padding: 10;
}
</style>
