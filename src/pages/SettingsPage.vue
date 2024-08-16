<template>
    <q-page class="vertical-top float-left q-ma-md">
        <q-toggle
            size="lg"
            v-model="darkMode"
            :icon="toggleIcon"
            label="Modo Escuro"
        />
    </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref, computed, watch } from 'vue'

const $q = useQuasar()

/* Darkmode option */
const darkMode = ref($q.dark.mode)

const toggleIcon = computed(() => {
    return darkMode.value ? 'dark_mode' : 'light_mode'
})

watch(darkMode, () => {
    $q.dark.set(darkMode.value)
})
</script>
