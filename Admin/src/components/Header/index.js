import { useHistory } from 'react-router';

/* components */
import View from 'components/View';
import Text from 'components/Text';

const Header = (props) => {

  const history = useHistory();

  return(
    <View className='full-width' style={{ backgroundColor: '#eeeeee', padding: '1rem' }}>
      <View className='full-width row space-between' style={{ maxWidth: '130rem' }}>
        <Text fontSize={4} className='font-title-cursive'>Fortin Porte&ntilde;o</Text>
        <View className='align-end'>
          <View className='row nav'>
            <Text onClick={() => history.push('/plates')} fontSize={1.3}>Platos</Text>
            <Text onClick={() => history.push('/')} style={{ paddingLeft: '3rem' }} fontSize={1.3}>Categorias</Text>
          </View>
        </View>
      </View>
    </View>
  )

}

export default Header;
