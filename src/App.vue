<template>
    <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { useStoreSettings } from 'src/stores/storeSettings'
import { useStoreExercise } from 'src/stores/storeExercise'

defineOptions({
    name: 'App',
})

const storeSettings = useStoreSettings()
const storeExercise = useStoreExercise()

onMounted(() => {
    storeSettings.loadSettings()
    storeExercise.loadExercises()
})
</script>
