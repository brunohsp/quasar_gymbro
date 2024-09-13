<template>
    <q-page class="vertical-top float-left q-ma-md">
        <q-toggle
            size="lg"
            v-model="storeSettings.settings.darkMode"
            :icon="storeSettings.darkToggleIcon"
            label="Modo Escuro"
        />
        <div class="q-pa-md">
            <q-list bordered padding>
                <q-item-label header>Entries</q-item-label>

                <q-item tag="label" v-ripple>
                    <q-item-section>
                        <q-item-label>Deleção permitida</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-toggle
                            v-model="storeSettings.settings.allowToDelete"
                        />
                    </q-item-section>
                </q-item>

                <q-item tag="label" v-ripple>
                    <q-item-section>
                        <q-item-label>Mostrar tipo de exercício</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-toggle
                            v-model="storeSettings.settings.ShowExerciseTypes"
                        />
                    </q-item-section>
                </q-item>
            </q-list>
        </div>
    </q-page>
</template>

<script setup>
import { useStoreSettings } from 'src/stores/storeSettings'

const storeSettings = useStoreSettings()
</script>
