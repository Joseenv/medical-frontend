<script setup>
import { ref, onMounted, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()
const product = ref({})
const API = 'https://backend-testing-production.up.railway.app/api/products';
const nombre = ref('');
const precio = ref(null);
const descripcion = ref('');
const laboratorio = ref('');
const stock = ref(null);
const vencimiento = ref('');
const imagen = ref('');
const categoria = ref('');

const getProductById = async () => {
    const response = await fetch(`${API}/${route.params.id}`);
    const data = await response.json();
    product.value = data;
    nombre.value = product.value.nombre;
    precio.value = product.value.precio;
    descripcion.value = product.value.descripcion;
    laboratorio.value = product.value.laboratorio;
    stock.value = product.value.stock;
    vencimiento.value = product.value.vencimiento;
    imagen.value = product.value.imagen;
    categoria.value = product.value.categoria;
}

onMounted(() => {
    getProductById()
})


const updateProduct = () => {
    fetch(`${API}/${product.value._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
             "nombre"      :nombre.value,
             "precio"      :precio.value,
             "descripcion" :descripcion.value,
             "laboratorio" :laboratorio.value,
             "stock"       :stock.value ,
             "vencimiento" :vencimiento.value,
             "imagen"      :imagen.value,
             "categoria"   :categoria.value
        })
    })
    .then(res => {
        if (res.ok) { 
            console.log("HTTP request successful")
            router.push({
                name: 'list-products'
            })
        }
        else { console.log("HTTP request unsuccessful") }
    })
}

</script>


<template>
    <section class="section__adduser">

        <div class="categorys">
            <span class="categorys__title">Modificar producto</span>
        </div>
        <form 
            class="form" 
            @submit.prevent="updateProduct"
        >
            <div class="form__inputs">
                <div class="input__item">
                    <label for="name">Nombre <span>*</span></label>
                    <input 
                        type="text" 
                        name="nombre" 
                        placeholder="Nombre del producto" 
                        v-model="nombre" 
                    >
                </div>
                <div class="input__item">
                    <label for="precio">Precio <span>*</span></label>
                    <input 
                        type="number" 
                        placeholder="S/." 
                        v-model="precio" 
                    >
                </div>
                <div class="input__item">
                    <label for="descripcion">Descripción del producto <span>*</span></label>
                    <input 
                        type="text" 
                        name="descripcion" 
                        placeholder="Descripción..." 
                        v-model="descripcion" 
                    >
                </div>
                <div class="input__item">
                    <label for="laboratorio">Laboratorio <span>*</span></label>
                    <input 
                        type="text" 
                        name="laboratorio" 
                        placeholder="Laboratorio de origen" 
                        v-model="laboratorio"
                    >
                </div>
                <div class="input__item">
                    <label for="stock">Stock <span>*</span></label>
                    <input 
                        type="number" 
                        name="stock" 
                        placeholder="Unidades en stock" 
                        v-model="stock" 
                    >
                </div>
                <div class="input__item">
                    <label for="vencimiento">Fecha de vencimiento <span>*</span></label>
                    <input 
                        type="text" 
                        name="vencimiento" 
                        placeholder="DD/MM/AAAA" 
                        v-model="vencimiento" 
                    >
                </div>
                <div class="input__item">
                    <label for="imagen">Imagen <span>*</span></label>
                    <input 
                        type="text" 
                        name="imagen" 
                        placeholder="URL de imagen del producto" 
                        v-model="imagen" 
                    >
                </div>
                <div class="input__item">
                    <label for="categoria">Categoría <span>*</span></label>
                    <input 
                        type="text" 
                        name="categoria" 
                        placeholder="Categoria del producto" 
                        v-model="categoria" 
                    >
                </div>
            </div>
            <div class="form__actions">
                <button 
                    class="action__cancel" 
                    @click="router.push({name: 'list-products'})"
                >
                    Cancelar
                </button>
                <button 
                    type="submit" 
                    class="action__save"
                >
                    Agregar producto
                </button>
            </div>
        </form>
    </section>
</template>



<style scoped>
.section__adduser{
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    width: 100%;
}
.categorys{
    width: 100%;
    background-color: var(--background-component-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3.2rem;
    border-radius: 10px;
    box-shadow: var(--shadow);
    height: 8rem;
}
.form {
    width: 100%;
    background-color: var(--background-component-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: var(--shadow);
}
.form__inputs {
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 3.2rem 0;
}
.categorys__title{
    color: var(--color-primary);
    font-size: 2.4rem;
    font-weight: 700;
}
.input__item {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.input__item label {
    font-weight: 500;
    color: var(--color-heading);
}
.input__item label span{
    color: var(--color-secundary);
}
.input__item input {
    padding: 16px 16px;
    border: 1px solid var(--text-inactive);
    border-radius: 8px;
    width: 32rem;
    font-weight: 400;
}
.input__item input::placeholder {
    color: var(--text-inactive);
    font-weight: 400;
}
.input__item input:focus {
    outline: 1.6px solid var(--vt-c-divider-dark-1)
}
.form__actions {
    display: flex;
    gap: 64px;
    align-items: center;
    margin: 3.2rem 0;
}
.action__cancel {
    background: none;
    border: none;
    font-weight: 500;
    color: var(--color-secundary);
    cursor: pointer;
}
.action__save {
    background-color: #F1FAFF;
    border: none;
    color: var(--color-primary);
    padding: 10px 24px;
    border-radius: 8px;
    cursor: pointer;
}
</style>