import { FunctionalComponent } from 'vue';
import s from './welcome/welcome.module.scss';

export const Start: FunctionalComponent = () => {
  
  return <div class={s.card}>start</div>
}

Start.displayName = 'Start'