<template>
  <div @click="$router.push({ name: 'entry', params: { id: 10 } })" class="entry-container mb-3 pointer p-2">
      <!--titulo-->
      <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">5</span>
        <span class="mx-1 fs-5">Marzo</span>
        <span class="mx-2 fw-light">2022, Sabado</span>
      </div>
      <div class="entry-description">
          Mollit pariatur reprehenderit duis nostrud ex labore Lorem consectetur dolore sit occaecat. Aliquip commodo anim dolore sit voluptate amet sit. Labore adipisicing tempor pariatur consequat do eiusmod excepteur dolor eiusmod eiusmod veniam. Cillum sint fugiat labore occaecat sunt velit occaecat ad excepteur consequat ad aliqua adipisicing pariatur. Pariatur excepteur irure ipsum ad amet deserunt reprehenderit incididunt consequat.
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: #6e6d6d, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description{
    font-size: 12px;
  }
}


</style>