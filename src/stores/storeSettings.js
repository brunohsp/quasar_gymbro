import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useStoreSettings = defineStore('settings', () => {
    /* state */

    const settings = reactive({
        allowToDelete: false,
        ShowExerciseTypes: true,
    })

    /* return */

    return {
        settings,
    }
})
