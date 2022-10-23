import { atom, useRecoilValue } from 'recoil'
import Buttons from './Buttons';

const dogState = atom({
  key: 'dogState', // unique ID (with respect to other atoms/selectors)
  default: {
    name: 'Rover',
    img: 'https://cdn.discordapp.com/attachments/1033175931688333354/1033497362921959424/unknown.png'
  }, // default value (aka initial value)
});
const Dog = () => {
  const dog = useRecoilValue(dogState)
  return(
    <div className='container flex-column justify-center'>
      <h3>This is {dog.name}!</h3>
      <img src={dog.img} />
      <Buttons />
    </div>
  )
}
export default Dog;