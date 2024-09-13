import { defineStore } from 'pinia'
import { reactive, watch, computed } from 'vue'
import { Dark, LocalStorage } from 'quasar'

export const useStoreSettings = defineStore('settings', () => {
    /* state */
    const settings = reactive({
        allowToDelete: false,
        ShowExerciseTypes: true,
        darkMode: true,
    })

    /* Darkmode option */
    watch(
        () => settings.darkMode,
        (value) => Dark.set(value)
    )

    const darkToggleIcon = computed(() =>
        settings.darkMode ? 'dark_mode' : 'light_mode'
    )

    /* Local Storage */
    watch(settings, () => {
        saveSettings()
    })

    const saveSettings = () => {
        LocalStorage.set('settings', settings)
    }

    const loadSettings = () => {
        const savedSettings = LocalStorage.getItem('settings')
        if (savedSettings) Object.assign(settings, savedSettings)
    }

    /* return */

    return {
        settings,
        darkToggleIcon,
        loadSettings,
    }
})
