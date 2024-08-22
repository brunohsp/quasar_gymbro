<template>
    <q-page>
        <div class="flex row wrap q-gutter-md q-pa-md">
            <exercise-card
                v-for="exercise in exercises"
                :key="exercise.id"
                :exercise-id="exercise.id"
                :exercise-name="exercise.name"
                :thumbnail="exercise.thumbnail"
                :exercise-types="exercise.types"
                :exercise-annotations="exercise.annotations"
            />
        </div>

        <new-exercise-dialog v-model="newExercise" />

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
import { useStoreExercise } from 'src/stores/storeExercise'

const storeExercises = useStoreExercise()
const exercises = storeExercises.exercises

const newExercise = ref(false)
</script>
