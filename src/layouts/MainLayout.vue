<template>
    <q-layout view="hHh lpR lFf">
        <q-header :elevated="useLightOrDark(true, false)">
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    icon="menu"
                    aria-label="Menu"
                    @click="toggleLeftDrawer"
                />

                <q-toolbar-title>
                    <div class="absolute-center">
                        <q-icon name="exercise" />
                        GymBro
                    </div>
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer
            v-model="leftDrawerOpen"
            class="bg-primary"
            :width="250"
            :breakpoint="767"
            show-if-above
            bordered
        >
            <q-list>
                <NavLink
                    v-for="link in navLinks"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import NavLink from 'components/Nav/NavLink.vue'
import { useLightOrDark } from 'src/use/useLightOrDark'

defineOptions({
    name: 'MainLayout',
})

const navLinks = [
    {
        title: 'Treinos',
        icon: 'fitness_center',
        link: '/workouts',
    },
    {
        title: 'Exercícios',
        icon: 'sports_gymnastics',
        link: '/exercises',
    },
    {
        title: 'Settings',
        icon: 'settings',
        link: '/settings',
    },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
