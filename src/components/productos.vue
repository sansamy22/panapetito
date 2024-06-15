<template>
    <div class="contenedor">
        <Titulo :titulo="props.categoria" />
        <div class="productos">
            <div class="product">
                <img class="foto" :src="`/imagenes/${producto.imagen}`" alt="Producto">
                <div class="informacion">
                    <h3 class="titulo">
                        {{ producto.nombre }}
                    </h3>
                    <p class="descrpcion">
                        {{ producto.descripcion }}
                    </p>
                    <p class="precio">
                       $ {{ producto.precio }} 
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import Titulo from "@/components/TituloSeccion.vue"
import listaProductos from "@/panaderia.json"
import {defineProps} from "vue"

const props = defineProps ({
    categoria: String
})

const productos = ref([])
</script>