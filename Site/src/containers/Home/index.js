import { useState, useEffect } from 'react';
import { Collapse } from '@material-ui/core';

/* components */
import View from 'components/View';
import Text from 'components/Text';
import Plate from 'components/Plate';

/* assets */
import ArrowIcon from 'assets/svgs/arrowDown.svg';
/* managers */
import { categoriesApi, platesApi } from 'managers/Api';

/* styles */
import './styles.scss';

const Home = (props) => {

  const [ category, setCategory ] = useState(0);
  const [ categories, setCategories ] = useState([]);
  const [ plates, setPlates ] = useState([]);
  const [ showCategories, setShowCategories ] = useState(false);

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
      {/*
          {categories.map(({ name: cat }, i) => (
            <View onClick={() => setCategory(i)} className={`category ${category == i ? 'selected': ''}`}><Text className='font-title-bold uppercase' fontSize='1.7' spacing={0.2} color='#fff'>{cat}</Text></View>
          ))}
      */}
      <View className='full-width margin-top' style={{ maxWidth: 1200 }}>
        <View onClick={() => setShowCategories(!showCategories)} className='full-width row justify-start' style={{ padding: '0 2rem' }}>
          <Text className='font-title-cursive' style={{ textTransform: 'capitalize', marginRight: '2rem', borderBottom: '0.4rem dotted var(--yellow)', lineHeight: 1, paddingBottom: '0.5rem', overflow: 'visible' }} fontSize='4' spacing={0.2} color='var(--yellow)'>{categories[category]?.name || ''}</Text>
          <img style={{ width: '2rem', transform: showCategories ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} src={ArrowIcon}/>
          <View className='full-width' style={{ zIndex: 2, position: 'absolute', top: '100%', left: 0 }}>
            <Collapse in={showCategories} className='full-width' style={{ maxHeight: '70vh', overflow: 'auto', borderBottom: '0.4rem dotted var(--yellow)' }}>
              <View className='full-width align-start padding' style={{ backgroundColor: '#121619' }}>
                {categories.map(({ name: cat }, i) => (
                  <View key={cat} onClick={() => setCategory(i)} className={`category ${category == i ? 'selected': ''}`}><Text className='font-title-bold uppercase' fontSize='1.7' spacing={0.2} color='#fff'>{cat}</Text></View>
                ))}
              </View>

            </Collapse>

          </View>
        </View>
        <View style={{ marginTop: '1rem' }}></View>
      <View className='full-width row wrap plates-container align-start justify-start'>
        {drawPlates()}
      </View>
      </View>
    </View>
  )
}

export default Home;
