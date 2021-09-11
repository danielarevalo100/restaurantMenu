/* components */
import View from 'components/View';
import Text from 'components/Text';

/* style */
import './styles.scss';

const Plate = ({ image, title, desc, price }) => {
  return (
    <View className='plate'>
      <img src={image}/>
      <View className='' style={{ padding: '0 1rem 1rem 1rem' }}>
        <Text className='font-title uppercase' fontSize='2' color='#fff' spacing='0.2' style={{ marginTop: '1rem' }}>{title}</Text>
        <Text className='font-title' color='#999' fontSize='1.8' textAlign='center' spacing='0.2'>{desc}</Text>
        <Text className='font-title-cursive' fontSize='3' color='var(--yellow)'>${price}</Text>
      </View>


    </View>
  )

}
export default Plate;
