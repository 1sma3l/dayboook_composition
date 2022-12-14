<template>

    <template v-if="entry">
        <div class="entry-title justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
            </div>
           <input accept="image/png, image/jpeg" v-show="false" type="file" @change="onSelectedImage" ref="imageSelector"> 
            <div>
                <button v-if="entry.id" class="btn btn-danger mx-2" @click="onDeleteEntry">
                    Borrar
                    <i class="fa fa-trash-alt" ></i>
                </button>

                <button @click="onSelectImage" class="btn btn-primary">
                    Subir foto
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>
        <hr>
        <div class="d-flex flex-column px-3 h-75">
            <textarea v-model="entry.text" placeholder="¿Que sucedio hoy?"></textarea>
        </div>

        <img v-if="entry.picture && !localImage" :src="entry.picture" alt="entry-picture" class="img-thumbnail">
        <img v-if="localImage" :src="localImage" alt="entry-picture" class="img-thumbnail">
    </template>
  
  <Fab icon="fa-save" @on:click="saveEntry"/>
  
</template>

<script>
import Fab from '../components/Fab-C.vue'
import { mapGetters, mapActions } from 'vuex'
import Swal from 'sweetalert2'

import getDayMonthYear from '../helpers/getDayMonthYear.js'
import uploadImage from '../helpers/uploadImage'

export default {

    props: {
        id: {
            type: String,
            required: true
        }
    },
    components:{
        Fab
    },
    methods:{

        //Mapeo la accion que quiero que este disponible
        //en este componente
        ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),

        loadEntry(){

            let entry 
            if( this.id === 'new'){

                entry = {
                    text: '',
                    date: new Date().getTime()
                }
            }else{

                entry = this.getEntryById( this.id )
                console.log(entry)
                if( !entry ) {
                    return this.$router.push({ name: 'no-entry' })
                }
            }

            this.entry = entry
        },
        async saveEntry() {

            new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false
            })
            Swal.showLoading()

            const picture = await uploadImage(this.file)

            this.entry.picture = picture

            if( this.entry.id ){
                await this.updateEntry( this.entry ) //actualizacion
            }
            else {

                const id  = await this.createEntry( this.entry ) //Agregamos nuevo
                this.$router.push({ name: 'entry', params: { id: id } })
            }

            this.file = null
            Swal.fire('Guardado', 'Registro con exito', 'success')
            
        },
        async onDeleteEntry() {

            const { isConfirmed } = await Swal.fire({
                title: '¿Esta seguro?',
                text: 'Al borrar, no se regresa la operación',
                showDenyButton: true,
                confirmButtonText: 'Si, estoy seguro'
            })

            if( isConfirmed )
            {
                new Swal({
                    title: 'Espere por favor',
                    allowOutsideClick: false
                })
                Swal.showLoading()

                await this.deleteEntry( this.entry.id ) //Borramos registro
                this.$router.push({ name: 'no-entry' })

                Swal.fire('Eliminado', '', 'success')
            }
        },

        onSelectedImage( event ) {
            
            const file = event.target.files[0]
            if(!file){
                this.localImage = null
                this.file = null
                return
            }

            this.file = file

            const fr = new FileReader()
            fr.onload = () => this.localImage = fr.result
            fr.readAsDataURL(file)
        },

        onSelectImage() {

            this.$refs.imageSelector.click() //Se simula el clic
        }
    },
    computed : {
        //modulo de la store journal, 
        ...mapGetters('journal', ['getEntryById']),
        day(){
            const { day } = getDayMonthYear( this.entry.date )
            return day
        },
        month() {
            const { month } = getDayMonthYear( this.entry.date )
            return month
        },
        yearDay() {
            const { yearDay } = getDayMonthYear( this.entry.date )
            return yearDay
        }
    },
    data(){
        return{
            entry: null,
            localImage: null,
            file: null
        }
    },
    created(){
        //console.log(this.$route.params.id)
        //console.log( this.id )
        this.loadEntry()
    },
    watch : {
        id( ){
           this.loadEntry()
        }
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