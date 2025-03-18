<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="card p-4 shadow" style="width: 350px;">
            <h3 class="text-center mb-3">Iniciar Sesión</h3>
            <form @submit.prevent="login">
                <div class="mb-3">
                    <label for="email" class="form-label">Correo electrónico</label>
                    <input type="email" v-model="email" class="form-control" id="email" placeholder="Ingrese su correo"
                        required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input type="password" v-model="password" class="form-control" id="password"
                        placeholder="Ingrese su contraseña" required>
                </div>
                <div class="container text-center mt-5">
                    <router-link to="/about" class="btn btn-primary w-100 ">
                        Ir al Login
                    </router-link>
                </div>
                <!--   <button type="submit" class="btn btn-primary w-100">Ingresar</button> -->
            </form>
            <p v-if="error" class="text-danger text-center mt-2">{{ error }}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        login() {

        }
    },
}
</script>
<style ></style>