<script setup>
    import { reactive } from 'vue';
    import useWorker from '../composables/useWorker';

    const { addWorker, cancelActions } = useWorker();
    const data = reactive({
        name: '',
        lastname: '',
        email: '',
        role: ''
    });
</script>


<template>
    <section class="add_worker">
        <div class="categorys">
            <span class="categorys__title">Agregar usuario</span>
        </div>
        <form class="form" @submit.prevent="addWorker(data)">
            <div class="form__inputs">
                <div class="input__item">
                    <label for="name">Nombre <span>*</span></label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Ej: Jose" 
                        v-model="data.name" 
                        required
                    >
                </div>
                <div class="input__item">
                    <label for="lastname">Apellidos <span>*</span></label>
                    <input 
                        type="text" 
                        name="lastname" 
                        placeholder="Ej: Navarro" 
                        v-model="data.lastname" 
                        required
                    >
                </div>
                <div class="input__item">
                    <label for="email">Correo <span>*</span></label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Ej: prueba@ejemplo.com" 
                        v-model="data.email" 
                        required
                    >
                </div>
                <div class="input__item">
                    <label for="role-select">Rol <span>*</span></label>
                    <select 
                        name="role-select" 
                        id="role-select"
                        v-model="data.role"
                        required
                    >
                        <option value="" disabled selected>Seleccione un rol</option>
                        <option value="employee">Empleado</option>
                        <option value="admin">Administrador</option>
                    </select>
                </div>
            
            </div>
            <div class="form__actions">
                <button class="action__cancel" @click.prevent="cancelActions">
                    Cancelar
                </button>
                <button type="submit" class="action__save">
                    Guardar
                </button>
            </div>
        </form>
    </section>
</template>



<style scoped>
    .add_worker{
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
    select {
        padding: 16px 16px;
        border: 1px solid var(--text-inactive);
        border-radius: 8px;
        width: 32rem;
        font-weight: 400;
    }
</style>