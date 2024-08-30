<template>
    <q-page>
        <q-list>
            <Sortable
                class="flex row wrap q-gutter-md q-pa-md"
                @end="storeExercises.sortEnd"
                :options="{ handle: '.handle' }"
                :list="storeExercises.exercises"
                item-key="id"
                tag="div"
            >
                <template #item="{ element }">
                    <exercise-card
                        :exercise-id="element.id"
                        :exercise-name="element.name"
                        :thumbnail="element.thumbnail"
                        :exercise-types="element.types"
                        :exercise-annotations="element.annotations"
                    />
                </template>
            </Sortable>
        </q-list>

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
import { Sortable } from 'sortablejs-vue3'
import { ref } from 'vue'
import { useStoreExercise } from 'src/stores/storeExercise'

const storeExercises = useStoreExercise()
const exercises = storeExercises.exercises

const newExercise = ref(false)
</script>
