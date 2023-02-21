<template>
    <div class="main flex gap-5">
        <button class="btn text-white bg-black px-5 py-2 rounded-xl" @click="isDark = true, $emit('changeTheme', isDark)" :class="{'dark': isDark === true}">Темная тема</button>
        <button class="btn text-white bg-black px-5 py-2 rounded-xl" @click="isDark = false, $emit('changeTheme', isDark)" :class="{'dark': isDark === true}">Светлая тема</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isDark: false,
        }
    },
}
</script>

<style lang="scss" scoped>
.dark {
    background-color: white;
    color: black;
}
</style>