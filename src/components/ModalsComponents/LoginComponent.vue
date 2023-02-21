<template>
    <div class="main">
        <modal-base>
            <template #header>
                <modal-header>
                    <template #header-title>
                        {{ headerTitle }}
                    </template>
                    <template #header-subtitle>
                        {{ headerSubtitle }}
                    </template>
                </modal-header>
            </template>
            <template #subtitle>
                {{ subtitle }}
            </template>
            <template #buttons>
                <button
                    class="buttons__btn py-2 border-2 border-rose-300 rounded-xl w-full text-lg font-semibold">Удалить
                    заметку</button>
                <button class="buttons__error mt-5 font-semibold text-inherit border-b-2 ">Подробнее в документации</button>
            </template>
        </modal-base>
    </div>
</template>

<script>
import ModalBase from '@/components/ModalBase';
import ModalHeader from '@/components/ModalsComponents/ModalHeader';
export default {
    data() {
        return {
            headerTitle: "Модуль - ",
            headerSubtitle: "Логин",
            subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem temporibus suscipit",
        }
    },
    components: {
        ModalBase,
        ModalHeader,
    },
}
</script>

<style lang="scss" scoped>

</style>