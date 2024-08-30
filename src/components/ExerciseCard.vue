<template>
    <q-card class="exercise-card" flat bordered>
        <q-img :src="props.thumbnail" />

        <q-card-section>
            <q-btn
                fab
                color="secondary"
                icon="add"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%)"
                @click="newAnnotationDialog = true"
            />

            <div class="row no-wrap items-center">
                <div class="col text-h5 ellipsis">
                    {{ props.exerciseName }}

                    <q-popup-edit
                        @save="onTitleUpdate"
                        :model-value="props.exerciseName"
                        v-slot="scope"
                        :cover="false"
                        :offset="[16, 12]"
                        anchor="top left"
                        label-set="Ok"
                        label-cancel="Cancelar"
                        auto-save
                        buttons
                    >
                        <q-input
                            v-model="scope.value"
                            @keyup.enter="scope.set"
                            input-class="text-weight-bold"
                            autofocus
                            dense
                        />
                    </q-popup-edit>
                </div>
            </div>

            <div class="row no-wrap q-mr-md">
                <div class="col text-subtitle1 ellipsis">
                    {{ exerciseTypeLabel }}
                </div>
            </div>
        </q-card-section>

        <q-card-section
            class="q-pt-none"
            v-for="{ title, text } in props.exerciseAnnotations"
            :key="`${title}: ${text}`"
        >
            <div class="text-h6">
                {{ title }}
            </div>
            <div class="text-caption text-grey">
                {{ text }}
            </div>
            <q-separator class="q-my-md" v-if="lastAnnotation(title)" />
        </q-card-section>

        <q-dialog v-model="newAnnotationDialog" persistent flex>
            <q-card style="min-width: 400px">
                <q-card-section class="q-pt-none q-mt-md">
                    <q-input
                        filled
                        dense
                        label="Título"
                        v-model="newAnnotationTitle"
                    />
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <q-input
                        filled
                        dense
                        label="Texto"
                        type="textarea"
                        v-model="newAnnotationText"
                    />
                </q-card-section>

                <q-card-actions align="right" class="text-primary">
                    <q-btn
                        flat
                        label="Cancelar"
                        @click="onCancellingNewAnnotation"
                        v-close-popup
                    />
                    <q-btn
                        flat
                        label="Adicionar anotação"
                        @click="onCreateNewAnnotation"
                        v-close-popup
                    />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-card>
</template>

<script setup>
import { useStoreExercise } from 'src/stores/storeExercise'
import { getCurrentInstance } from 'vue'
import { computed, ref, defineEmits, defineProps } from 'vue'

const storeExercise = useStoreExercise()

const props = defineProps({
    thumbnail: {
        type: [String],
        required: false,
    },
    exerciseName: {
        type: [String],
        required: true,
    },
    exerciseTypes: {
        type: [Array],
        required: true,
    },
    exerciseAnnotations: {
        type: [Array, null],
        required: false,
    },
    exerciseId: {
        type: [String],
        required: true,
    },
})

const lastAnnotation = (title) => {
    const lastElement = props.exerciseAnnotations.lastIndexOf()
    return title !== props.exerciseAnnotations.at(lastElement).title
}

const exerciseTypeLabel = computed(() => {
    return props.exerciseTypes.join(' | ')
})

/* Dialog */

const newAnnotationDialog = ref(false)
const newAnnotationText = ref('')
const newAnnotationTitle = ref('')

const clearAnnotationInputs = () => {
    newAnnotationTitle.value = ''
    newAnnotationText.value = ''
}

const onCancellingNewAnnotation = () => {
    clearAnnotationInputs()
}

const onCreateNewAnnotation = () => {
    storeExercise.addAnnotation({
        id: props.exerciseId,
        title: newAnnotationTitle.value,
        text: newAnnotationText.value,
    })
    clearAnnotationInputs()
}

/* Updates */

const onTitleUpdate = (value) => {
    storeExercise.updateExercise(props.exerciseId, { name: value })
}
</script>

<style lang="sass" scoped>
.exercise-card
    width: 100%
    max-width: 400px
</style>
