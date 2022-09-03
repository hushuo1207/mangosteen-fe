import { Icon } from 'vant';
import { defineComponent } from 'vue';
import { Center } from '../shared/Center';
import { FloatButton } from '../shared/FloatButton';
import s from './StartPage.module.scss';
export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log('hi')
    }
    return () => (
      <div>
        <nav>menu</nav>
        <Center class={s.pig_wrapper}>
          <Icon name="pig" class={s.pig} />
        </Center>
        <div class={s.button_wrapper}>
        <FloatButton iconName='add'/>
        </div>
      </div>
    )
  }
})