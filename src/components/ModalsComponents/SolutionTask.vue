<template>
    <div class="main">
        <modal-base>
            <template #header>
                <div class="header__wrapper flex items-center justify-between w-full px-8 pt-8 bg-inherit">
                    <div class="header__inner flex items-center">
                        <info-light class="cross fill-inherit"/>
                        <h2 class="header__title ml-3 text-xl font-semibold">
                            Решение задачи</h2>
                    </div>
                    <white-cross class="cross fill-inherit"/>
                </div>
            </template>
            <template #subtitle>
                {{ subtitle }}
            </template>
            <template #buttons>
                <button class="buttons__btn py-2 border-2 rounded-xl w-full text-lg font-semibold">Ок, ясно</button>
                <button class="buttons__error mt-5 opacity-50">Нашли ошибку?</button>
            </template>
        </modal-base>
    </div>
</template>

<script>
import ModalBase from '@/components/ModalBase';
import WhiteCross from '@/assets/img/WhiteCross.svg';
import InfoLight from '@/assets/img/info-light.svg'
export default {
    data() {
        return {
            subtitle: "Равным образом, перспективное планирование однозначно определяет каждого участника как способного принимать собственные решения касаемо как самодостаточных, так и внешне зависимых концептуальных решений. Разнообразный и богатый опыт говорит нам, что сложившаяся структура организации способствует повышению качества системы.",
        }
    },
    components: {
        ModalBase,
        WhiteCross,
        InfoLight,
    },
}
</script>

<style lang="scss" scoped>
</style>