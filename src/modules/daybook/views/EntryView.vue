<template>
  <div class="entry-title justify-content-between p-2">
      <div>
          <span class="text-success fs-3 fw-bold">5</span>
          <span class="mx-1 fs-3">Marzo</span>
          <span class="mx-2 fs-4 fw-light">2022, Sabado</span>
      </div>
      <div>
          <button class="btn btn-danger mx-2">
              Borrar
              <i class="fa fa-trash-alt"></i>
          </button>

          <button class="btn btn-primary">
              Subir foto
              <i class="fa fa-upload"></i>
          </button>
      </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="¿Que sucedio hoy?"></textarea>
  </div>
  <Fab icon="fa-save"/>
  <img src="D:\Pictures\Saved Pictures\IMG_20210403_104051.jpg" alt="entry-picture" class="img-thumbnail">
</template>

<script>
import Fab from '../components/Fab-C.vue'

export default {

    components:{
        Fab
    }
}
</script>

<style lang="scss" scoped>

textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow:  0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>