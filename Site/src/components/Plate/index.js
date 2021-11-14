/* components */
import View from 'components/View';
import Text from 'components/Text';

/* utils */
import { isMobile } from 'utils/device';

/* style */
import './styles.scss';

const Plate = ({ image, title, desc, price }) => {
  return (
    <View className='plate'>
      {/*<img src={image}/>*/}
      <View className='full-width' style={{ padding: '0 2rem 2rem 2rem' }}>
        <View className='full-width row space-between align-end' style={{ marginTop: '1rem' }}>

          <Text className='font-title uppercase' fontSize={isMobile() ? '2' : '2.5'} textAlign='left' style={{ lineHeight: 1, maxWidth: '65%' }} color='#fff' spacing='0.2' >{title}</Text>
          <View className='flex' style={{ borderBottom: '0.5rem dotted var(--yellow)', margin: '0 1rem' }}></View>
          <Text className='font-title-cursive' style={{ lineHeight: 1, whiteSpace: 'nowrap' }} fontSize='2.5' color='var(--yellow)'>${price}</Text>
        </View>
        <View className='align-start' style={{ width: '80%', marginRight: 'auto', marginTop: '1rem' }}>
          <Text className='font-title' color='#999' fontSize='1.8' textAlign='left' spacing='0.2'>{desc}</Text>
        </View>
      </View>


    </View>
  )

}
export default Plate;
