<template>
    <q-page>
        <div class="flex row wrap q-gutter-md q-pa-md">
            <exercise-card
                v-for="exercise in exercises"
                :key="exercise.name"
                :exercise-name="exercise.name"
                :thumbnail="exercise.thumbnail"
                :exercise-types="exercise.types"
                :exercise-annotations="exercise.annotations"
                @on-create-annotation="
                    ({ title, text }) =>
                        saveAnnotation({ exercise, title, text })
                "
            />
        </div>

        <new-exercise-dialog
            v-model="newExercise"
            @on-create-exercise="addExerciseCard"
        />

        <q-btn
            fab
            color="primary"
            icon="add"
            class="absolute-bottom-right q-mr-lg"
            @click="newExercise = true"
        />
    </q-page>
</template>

<script setup>
import ExerciseCard from 'src/components/ExerciseCard.vue'
import NewExerciseDialog from 'src/components/NewExerciseDialog.vue'
import { ref } from 'vue'

const exercises = ref([])
exercises.value = [
    {
        name: 'Supino reto',
        types: ['Peito', 'Peito Medial'],
        thumbnail:
            'https://static.wixstatic.com/media/2edbed_bcb35259926b4e02be0e5c7935b6f656~mv2.webp/v1/fill/w_980,h_515,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2edbed_bcb35259926b4e02be0e5c7935b6f656~mv2.webp',
        annotations: [],
    },
    {
        name: 'Supino Declinado',
        types: ['Peito', 'Peito Medial'],
        thumbnail:
            'https://static.wixstatic.com/media/2edbed_b7821ca02c1948eba783e1b21dea2e8b~mv2.png/v1/fill/w_980,h_542,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/2edbed_b7821ca02c1948eba783e1b21dea2e8b~mv2.png',
        annotations: [],
    },
]

const saveAnnotation = ({ exercise, title, text }) => {
    exercises.value
        .find((element) => element.name === exercise.name)
        .annotations.push({ title, text })
}

const addExerciseCard = ({ name, types }) => {
    exercises.value.push({
        name,
        types: types.map((type) => type.value),
        thumbnail: '',
        annotations: [],
    })
}

const newExercise = ref(false)
</script>
