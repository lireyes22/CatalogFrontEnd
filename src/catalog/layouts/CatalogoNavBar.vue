<template>
  <div class="w-full flex flex-col sticky top-0 z-20">
    <div class="w-full h-16 bg-white flex items-center px-6">
      <RouterLink to="/catalogo">Catálogo</RouterLink>
    </div>
    <div class="w-full h-8 bg-cyan-700 flex justify-end space-x-4 pr-4">
      <div class="bg-white/20 h-full px-6 flex items-center text-white">
        <Button @click="signOut" v-if="loginActive">Cerrar Sesión</Button>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import useOauthGoogle from '@composables/useOauthGoogle';
import { useLoadingStore } from '@stores/loadingStore';
import clearAllCookies from '@helpers/clearAllCookies';
import Cookies from 'js-cookie';
import { computed, ref } from 'vue';

const { signOutWithGoogle } = useOauthGoogle();
const router = useRouter();
const loadingStore = useLoadingStore();

const loginActive = computed(() => {
  const timeSesionExpired = parseInt(Cookies.get('timeSesionExpired') || '0');
  const timeResult = timeSesionExpired - new Date().getTime();
  if (timeResult <= 0) return false;
  else if (timeResult > 0) return true;
  else return false;
});

const signOut = async () => {
  loadingStore.showLoading();
  signOutWithGoogle().then(() => {
    router.push({ name: 'presentation' });
    clearAllCookies();
    loadingStore.hideLoading();
  });
};
</script>