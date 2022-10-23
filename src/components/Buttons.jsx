import { useRecoilValue, useSetRecoilState } from 'recoil'
import { statsState } from './Stats'
import { coinState } from './Header'

const Buttons = () => {
  const stats = useRecoilValue(statsState)
  const coins = useRecoilValue(coinState)
  const setStats = useSetRecoilState(statsState)
  const setCoins = useSetRecoilState(coinState)

  const feed = () => {
    const hunger = stats.hunger
    setCoins(coins-10)
    setStats({...stats, hunger: hunger-1 })
  }
  const water = () => {
    const thirst = stats.thirst
    setCoins(coins-10)
    setStats({...stats, thirst: thirst-1 })
  }
  const play = () => {
    const boredom = stats.boredom
    setCoins(coins-10)
    setStats({...stats, boredom: boredom-1 })
  }
  

  return(
  <div>
    <button className="border py-1 px-2 rounded hover:bg-white hover:text-black m-2" onClick={feed}>Food</button>
    <button className="border py-1 px-2 rounded hover:bg-white hover:text-black m-2" onClick={water}>Water</button>
    <button className="border py-1 px-2 rounded hover:bg-white hover:text-black m-2" onClick={play}>Play</button>
  </div>
  )
}
export default Buttons;