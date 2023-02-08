<template>
    <div class="h-screen w-full flex items-center justify-center">
        <Transition>
            <div v-show="DisplayContainer" class="w-1/4 p-10 flex flex-col items-center gap-6 rounded-3xl bg-white">
                <h1 class="text-3xl text-indigo-400 font-bold">Hi There!</h1>
                <form class="inline-grid gap-5" @submit.prevent="SendMessage">
                    <input v-model="Message" type="text" placeholder="My perfect message." class="outline-none py-2 px-4 font-medium rounded-lg bg-gray-200 transition ring-gray-300 focus:ring" required/>
                    <div class="flex justify-center gap-2">
                        <button type="submit" class="py-2 px-4 text-white font-medium rounded-lg bg-sky-500 transition hover:bg-sky-600 ring-blue-300 focus:ring">Send to Client</button>
                    </div>
                </form>
            </div>
        </Transition>
    </div>
</template>

<script>
    import { isEnvBrowser, createNuiEventListener, sendPost, createKeyListener } from '@/utils.js';

    export default {
        data() {
            return {
                DisplayContainer: false,
                Message: ''
            }
        },
        methods: {
            ShowContainer(data) {
                this.DisplayContainer = true;
            },
            SendMessage() {
                sendPost('SendMessage', this.Message)
                this.Message = '';
            }
        },
        mounted() {
            if (isEnvBrowser()) document.body.style.backgroundColor = '#111827';

            createNuiEventListener(event => this[event.data.action](event.data.array));

            createKeyListener(27, () => {
                this.DisplayContainer = false;
                sendPost('HideContainer')
            });
        }
    }
</script>

<style>
    body {
        font-family: 'Inter', sans-serif;
    }

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
</style>