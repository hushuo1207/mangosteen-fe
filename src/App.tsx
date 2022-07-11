import { defineComponent, ref } from "vue";

export const App = defineComponent({
    setup() {
        const refCount = ref(0);
        const onClick = () => {
            refCount.value++;
        }
        return () => (
            <>
            <ul>
                <li>
                    <router-link to="/">Foo</router-link>
                </li>
                <li>
                    <router-link to="/about">Bar</router-link>
                </li>
            </ul>
            <header>页面</header>
                <router-view/>
            <footer>页脚</footer>
            </>

        )
    }
})