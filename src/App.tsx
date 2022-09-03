import { defineComponent, ref } from "vue";
import "./App.scss"

export const App = defineComponent({
    setup() {
        return () => (
            <div class="page">
                <router-view/>
            </div>

        )
    }
})