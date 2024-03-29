import { defineComponent, ref, Transition, VNode, watchEffect } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter } from 'vue-router';
import s from './Welcome.module.scss';
import { useSwipe } from '../hooks/useSwipe'
import { throttle } from '../shared/throttle';


const pushMap: Record<string, string> = {
  'Welcome1': '/welcome/2',
  'Welcome2': '/welcome/3',
  'Welcome3': '/welcome/4',
  'Welcome4': '/start',
}

export const Welcome = defineComponent({
  setup: (props, context) => {
    const main = ref<HTMLElement>()
    const { direction, swiping } = useSwipe(main, { beforeStart: e => e.preventDefault() })
    const route = useRoute()
    const router = useRouter()
    //  此处可以使用replace 代替push
    const push = throttle(() => {
      const name = (route.name || 'Welcome1').toString()
      // replce 会导致路由栈中的路由被替换
      router.push(pushMap[name])
    }, 500)
    watchEffect(() => {
      if (swiping.value && direction.value === 'left') {
        // replace()  防止出发回退也想左滑的bug
        push()
      }
    })
    return () => (
      <div class={s.wrapper} ref={main}>
        <header>
          <svg>
            <use xlinkHref='#mangosteen'></use>
          </svg>
          <h1>山竹记账</h1>
        </header>
        <main class={s.main}>
          <RouterView name="main">
            {({ Component: X, route: R }: { Component: VNode, route: RouteLocationNormalizedLoaded }) =>
              <Transition enterFromClass={s.slide_fade_enter_from} enterActiveClass={s.slide_fade_enter_active}
                leaveToClass={s.slide_fade_leave_to} leaveActiveClass={s.slide_fade_leave_active}>
                {X}
              </Transition>
            }
          </RouterView>
        </main>
        <footer>
          <RouterView name="footer" />
        </footer>
      </div>
    )
  }
})

