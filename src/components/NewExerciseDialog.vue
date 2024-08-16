<template>
    <q-dialog v-model="model" persistent flex>
        <q-card style="min-width: 400px">
            <q-card-section class="q-pt-none q-mt-md">
                <q-input filled dense label="Nome" v-model="name" />
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div
                    class="row q-mb-md"
                    v-for="(type, index) in types"
                    :key="index"
                >
                    <q-input
                        class="q-mr-md col-10"
                        filled
                        dense
                        :label="typeInputLabel(index)"
                        v-model="type.value"
                    />
                    <q-btn
                        class="float-right"
                        push
                        round
                        color="negative"
                        icon="remove"
                        @click="types.splice(index, 1)"
                    />
                </div>
                <div class="row q-mb-md">
                    <div class="q-mr-md col-10" />
                    <q-btn
                        class="float-right"
                        push
                        round
                        color="positive"
                        icon="add"
                        @click="types.push({ value: '' })"
                    />
                </div>
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn
                    flat
                    label="Cancelar"
                    @click="onCancellingNewExercise"
                    v-close-popup
                />
                <q-btn
                    flat
                    label="Adicionar Exercício"
                    @click="onCreateNewExercise"
                    v-close-popup
                />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script setup>
import { computed } from 'vue'
import { ref } from 'vue'

const model = defineModel({ required: true, default: false })
const emit = defineEmits(['on-create-exercise'])

const types = ref([{ value: '' }])
const name = ref('')
const typeInputLabel = (index) => `Tipo exercício ${index}`

const clearAnnotationInputs = () => {
    name.value = ''
    types.value = [{ value: '' }]
}

const onCancellingNewExercise = () => {
    clearAnnotationInputs()
}

const onCreateNewExercise = () => {
    emit('on-create-exercise', {
        name: name.value,
        types: types.value,
    })
    clearAnnotationInputs()
}
</script>

<style lang="sass" scoped></style>
