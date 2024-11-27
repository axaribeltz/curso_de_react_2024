import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {
  return (
    <section className='App'>
      <TwitterFollowCard userName='midudev'>Miguel Ángel Dúran</TwitterFollowCard>
      <TwitterFollowCard userName='pheralb'>Pablo Hernandez</TwitterFollowCard>
      <TwitterFollowCard userName='axariBeltz'>Axari beltz</TwitterFollowCard>
    </section>
  )
}
