<template>
    <section>
        <div class="characters" v-if="characters.length >0">
            <div class="characters__item" v-for="character in characters" :key="character.id">
                <CardCharacter :character="character" />
            </div>
        </div>
        <div v-else class="characters__item-no">
            <h2>
                Qidirgan malumot topilmadi ...
            </h2>
        </div>
    </section>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex"
import CardCharacter from "./CardCharacter.vue";
export default {
    setup() {
        const store = useStore();
        const characters = computed(() => {
            return store.state.charactersFilter;
        });
        onMounted(() => {
            store.dispatch("getCharacters");
        });
        return {
            characters
        };
    },
    components: { CardCharacter }
}
</script>

<style lang="scss" >
.characters {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 3rem 0;

    &__item-no {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;

        h2 {
            text-align: center;
        }
    }
}
</style>