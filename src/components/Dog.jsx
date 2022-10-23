import { atom, useRecoilValue } from 'recoil'
import Buttons from './Buttons';

export const dogState = atom({
  key: 'dogState', // unique ID (with respect to other atoms/selectors)
  default: {
    name: 'Rover',
    img: 'https://cdn.discordapp.com/attachments/1033175931688333354/1033497362921959424/unknown.png'
  }, // default value (aka initial value)
});
const Dog = () => {
  const dog = useRecoilValue(dogState)
  return(
    <div className='container flex-column justify-center' >
      <h3>This is {dog.name}!</h3>
      <div style= {{ width: '480px', height: '480px', backgroundImage: `url("https://cdn.discordapp.com/attachments/1033175931688333354/1033589942003187743/unknown.png")`}}><img src={dog.img} style={{ padding: '120px'}}/></div>
      <Buttons />
    </div>
  )
}
export default Dog;