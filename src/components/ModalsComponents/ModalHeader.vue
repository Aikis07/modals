<template>
    <div class="header">
        <div class="wrapper px-8 py-2 rounded-t-3xl w-96 text-white bg-zinc-600">
            <h2 class="header__text"><span
                    class="header__span opacity-50">
                    <slot name="header-title"></slot>
                </span>
                <slot name="header-subtitle"></slot>
            </h2>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>