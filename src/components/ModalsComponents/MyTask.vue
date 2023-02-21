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
                <h2 class="subtitle__desc font-semibold mb-4">Запомнить алгоритм, написанный куратором в ходе просмотра
                    курса</h2>
                {{ subtitle }}
            </template>
            <template #buttons>
                <button class="buttons__btn py-2 bg-rose-300 rounded-xl w-full text-lg font-semibold">Удалить
                    заметку</button>
                <button class="buttons__error mt-5 opacity-40 border-b-2 text-inherit">Перейти к заметке</button>
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
            headerTitle: "Мои заметки - ",
            headerSubtitle: "Запомнить алгоритм, написанный куратором в ходе просмотра курса",
            subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem temporibus suscipit, quaerat error minus quibusdam rerum ratione in enim facere doloribus recusandae cupiditate ipsum delectus beatae tenetur laborum velit ducimus alias corrupti!",
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