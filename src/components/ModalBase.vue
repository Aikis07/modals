<template>
    <div class="main flex flex-col bg-inherit text-inherit rounded-3xl w-96">
        <div class="header flex justify-center w-full">
            <slot name="header"></slot>
        </div>
        <div class="subtitle mt-7 px-8">
            <h2 class="subtitle__text text-lg">
                <slot name="subtitle"></slot>
            </h2>
        </div>
        <div class="buttons flex justify-center mt-10 flex-col items-center w-full px-8 pb-8">
            <slot name="buttons"></slot>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped>

</style>