import { defineStore } from 'pinia'
import { uid } from 'quasar'
import { ref } from 'vue'

export const useStoreExercise = defineStore('exercises', () => {
    /*
        state
    */

    const exercises = ref([])
    exercises.value = [
        {
            id: uid(),
            name: 'Supino reto',
            types: ['Peito', 'Peito Medial'],
            thumbnail:
                'https://static.wixstatic.com/media/2edbed_bcb35259926b4e02be0e5c7935b6f656~mv2.webp/v1/fill/w_980,h_515,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2edbed_bcb35259926b4e02be0e5c7935b6f656~mv2.webp',
            annotations: [],
        },
        {
            id: uid(),
            name: 'Supino Declinado',
            types: ['Peito', 'Peito Inferior'],
            thumbnail:
                'https://static.wixstatic.com/media/2edbed_b7821ca02c1948eba783e1b21dea2e8b~mv2.png/v1/fill/w_980,h_542,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/2edbed_b7821ca02c1948eba783e1b21dea2e8b~mv2.png',
            annotations: [],
        },
    ]

    /*
        getters
    */

    /*
        actions
    */

    const addExercise = ({ name, types, thumbnail = '' }) => {
        exercises.value.push({
            id: uid(),
            name,
            types: types.map((type) => type.value),
            thumbnail: thumbnail,
            annotations: [],
        })
        console.log(exercises.value)
    }

    const updateExercise = (id, updates) => {
        const index = getExerciseIndexById(id)
        Object.assign(exercises.value[index], updates)
    }

    const addAnnotation = ({ id, title, text }) => {
        exercises.value
            .find((exercise) => exercise.id === id)
            .annotations.push({ title, text })
    }

    /*
        Helpers
    */

    const getExerciseIndexById = (id) => {
        return exercises.value.findIndex((exercise) => exercise.id === id)
    }

    const sortEnd = ({ oldIndex, newIndex }) => {
        const movedExercise = exercises.value[oldIndex]
        exercises.value.splice(oldIndex, 1)
        exercises.value.splice(newIndex, 0, movedExercise)
    }

    /*
        return
    */

    return { exercises, addExercise, updateExercise, addAnnotation, sortEnd }
})
