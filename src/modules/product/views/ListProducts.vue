<script setup>
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    const API = 'https://backend-testing-production.up.railway.app/api/products'
    const products = ref([]);
    const router = useRouter()
    
    onMounted( async () => {
        getProducts()
    });
    
    const getProducts = async () => {
        const response = await fetch(API);
        const data = await response.json();
        products.value = data;
    }
    
    const deleteUser = async ( id ) => {
        await fetch(`${API}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }   
        })
        .then(res => {
            if (res.ok) { 
                console.log("HTTP request successful")
                router.go() 
            }
        })
    }
    
    const updateProduct= ( id ) => {
        router.push({
            name: 'update-product',
            params: {
                id: id
            }
        })
    }
    
</script>
    
<template>
    <section class="products__container">
           <div class="categorys">
               <span class="categorys__title">Tus productos</span>
           </div>
           <section class="products">
               <article class="product" v-for="product in products">
                   <img :src="product.imagen" alt="" class="product__img">
                   <div class="product__info">
                       <span class="product__name"> {{ product.nombre }} </span>
                       <div class="product__details">
                           <div class="details__lab">
                               <img src="@/assets/icons/bag-2.svg" alt="" class="lab__icon">
                               <span class="lab__name"> {{ product.laboratorio }} </span>    
                           </div>
                           <span class="details__price"> S/. {{ product.precio }} </span>
                       </div>
                   </div>
                   <div class="actions">
                       <img src="@/assets/icons/edit.png" alt="" class="actions__icon edit" @click="updateProduct(product._id)">
                       <img src="@/assets/icons/delete.png" alt="" class="actions__icon delete" @click="deleteUser(product._id)">
                   </div>
               </article>
           </section>
       </section>
</template>
    
<style scoped>
   
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
    .categorys__title{
        color: var(--color-primary);
        font-size: 2.4rem;
        font-weight: 700;
    }
    .categorys__navbar{
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    .nav__menu{
        display: flex;
        gap: 3.2rem;
        list-style: none;
    }
    .menu__item{
        padding: 10px;
        color: var(--text-inactive);
        cursor: pointer;
        border-radius: 8px;
    }
    .active {
        color: var(--text-color);
        background-color: var(--background-active-category);
    }
    .products{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 3.2rem auto;
        gap: 3.2rem;
    }
    .product{
        width: 239px;
        height: 312px;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        background-color: var(--background-component-color);
        border-radius: 1rem;
        align-items: center;
        justify-content: center;
        box-shadow: var(--shadow);
        position: relative;
    
    }
    .product__img{
        width: 16rem;
        height: 16rem;
        object-fit: cover;
    }
    .product__info{
        width: 191px;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        text-align: justify;
        /* white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden; */
    }
    .product__details{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .details__lab{
        display: flex;
        align-items: center;
        gap: 4px;
    }
    .lab__name{
        color: var(--color-primary);
        font-size: 1.3rem;
    }
    .details__price{
        color: var(--color-secundary);
    }
    .actions{
        position: absolute;
        top: 12px;
        left: 8px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .actions__icon{
        width: 22px;
        object-fit: cover;
        cursor: pointer;
    }
</style>