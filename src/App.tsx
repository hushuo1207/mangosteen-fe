import { defineComponent, ref } from "vue";
import "./App.scss"

export const App = defineComponent({
    setup() {
        const refCount = ref(0);
        const onClick = () => {
            refCount.value++;
        }
        return () => (
            <div>
                <router-view/>
            </div>

        )
    }
})