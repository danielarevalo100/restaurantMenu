import { useState, useEffect } from 'react';

/* components */
import View from 'components/View';
import Text from 'components/Text';
import Plate from 'components/Plate';

/* managers */
import { categoriesApi, platesApi } from 'managers/Api';

/* styles */
import './styles.scss';

const Home = (props) => {

  const [ category, setCategory ] = useState(0);
  const [ categories, setCategories ] = useState([]);
  const [ plates, setPlates ] = useState([]);

  useEffect(() => {
    categoriesApi.get((res) => {
      setCategories(res);
      platesApi.get((res) => {
        setPlates(res)
      })

    })
  }, [])

  const drawPlates = () => {
    return plates.map(({ _id, name, desc, price, image, categories: cat }) => {
      const ids = cat.map(item => item._id)
      if(ids.includes(categories[category]._id)){
        return <Plate key={_id} image={image} title={name} desc={desc} price={price}/>
      } else {
        return null
      }
    })
  }

  return( 
    <View className='home'>
      <View>
        <Text className='margin-top font-title-cursive' color='var(--yellow)' fontSize='3'>El Fortin Porte&ntilde;o</Text>
        <Text className='font-title-bold uppercase' fontSize='4' spacing={0.2} textAlign='center' color='white'>Nuestro menu especial</Text>
      </View>
      <View className='full-width margin-top'>
        <View className='row wrap' style={{ padding: '0.5rem' }}>
          {categories.map(({ name: cat }, i) => (
            <View onClick={() => setCategory(i)} className={`category ${category == i ? 'selected': ''}`}><Text className='font-title-bold uppercase' fontSize='1.7' spacing={0.2} color='#fff'>{cat}</Text></View>
          ))}
        </View>
        <View style={{ marginTop: '1rem' }}></View>
      <View className='full-width row wrap plates-container justify-start'>
        {drawPlates()}
      </View>
      </View>
    </View>
  )
}

export default Home;
