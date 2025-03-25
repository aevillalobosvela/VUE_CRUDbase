import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    password: null, // ⚠ Solo para pruebas
  }),
  actions: {
    login(username, password) {
      // Simulamos un login exitoso
      this.user = username;
      this.password = password; // ⚠ Solo para pruebas, no hacer esto en producción

      // Guardar en localStorage (solo para persistencia en pruebas)
      localStorage.setItem('user', username);
      localStorage.setItem('password', password); // ⚠ No hacer esto en producción
    },
    logout() {
      this.user = null;
      this.password = null;
      localStorage.removeItem('user');
      localStorage.removeItem('password');
    },
    loadUserFromStorage() {
      this.user = localStorage.getItem('user');
      this.password = localStorage.getItem('password'); // ⚠ No recomendado en producción
    }
  }
});