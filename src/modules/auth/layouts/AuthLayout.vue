<script setup>
import PageHeader from '../components/PageHeader.vue'
</script>

<template>
    <div class="auth">
        <article class="auth__container">
            <section class="auth__side">
                <img 
                    src="../assets/imgs/auth-img.png"
                    alt="Imagen de la vista de autenticación"
                    class="side_img"
                >
            </section>
            <section class="auth__side">
                <PageHeader/>
                <router-view 
                    class="auth__view"
                    v-slot="{ Component }" 
                >
                    <transition 
                        name="fade" 
                        mode="out-in"
                    >
                        <component :is="Component" />
                    </transition>
                </router-view>
            </section>
        </article>
    </div>
</template>

<style scoped>
    .auth {
        max-width: 1280px;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
    .auth__container {
        width: 100%;
        height: 890px;
        display: flex;
        align-items: center;
        background-color: #fff;
        border-radius: 1rem;
    }
    .auth__side {
        width: 640px;
        height: 890px;
    }
    .side_img {
        object-fit: cover;
    }
</style>