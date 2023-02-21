<template>
    <div class="wrapper bg-white text-white h-screen flex-col justify-center flex items-center"
        :class="{ 'dark': isDark === true }">
        <theme-buttons @changeTheme="changeTheme" />
        <div class="modals flex justify-center gap-8 mt-6">
            <solution-task class="bg-black rounded-3xl text-white fill-white" :class="{ 'dark-m': isDark === true }" />
            <my-task class="bg-black rounded-3xl text-white" :class="{ 'dark-m': isDark === true }" />
            <login-component class="bg-black rounded-3xl text-white h-fit" :class="{ 'dark-m': isDark === true }" />
        </div>
    </div>
</template>

<script>
import SolutionTask from '@/components/ModalsComponents/SolutionTask';
import MyTask from '@/components/ModalsComponents/MyTask';
import LoginComponent from '@/components/ModalsComponents/LoginComponent';
import ThemeButtons from '@/components/UI/ThemeButtons';
export default {
    data() {
        return {
            isDark: null,
        }
    },
    components: {
        SolutionTask,
        MyTask,
        LoginComponent,
        ThemeButtons,
    },
    methods: {
        changeTheme(data) {
            this.isDark = data
        }
    },
}
</script>

<style lang="scss" scoped>
.dark {
    background-color: black;
    color: white;
    fill: white;
}

.dark-m {
    background-color: white;
    color: black;
    fill: black;
}
</style>