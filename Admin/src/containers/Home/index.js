import { useState, useEffect } from 'react';

/* components */
import View from 'components/View';
import Text from 'components/Text';
import CustomTable from 'components/CustomTable';

/* managets */
import { categoriesApi } from 'managers/Api';

/* styles */
import './styles.scss';

const Home = (props) => {

  const columns = [
    {style:{ flex: 1 }, title: 'Name', field: 'name'}
  ]

  /* states */
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(true)


  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    setLoading(true);
    categoriesApi.get((res) => {
      setData(res)
      setLoading(false);
    })
  }

  const tableEditable = () => (
    {
      onRowAdd: (newData) => new Promise((resolve) => {
        categoriesApi.add(newData, (res) => {
          fetchData()
          resolve()
        });
      }),
      onRowUpdate: (updatedData, oldData) => new Promise((resolve) => {
        categoriesApi.update(oldData._id, updatedData, (res) => {
          fetchData()
          resolve()
        });
      }),
      onRowDelete: (oldData) => new Promise((resolve) => {
        categoriesApi.delete(oldData._id, (res) => {
          fetchData()
          resolve()
        });
      })
    }
  ) 

  return( 
    <View className='home'>
      <View className='container'>
        <CustomTable title='Categories' data={data} columns={columns} editable={tableEditable()} loading={data.length == 0 || loading}/>
      </View>
    </View>
  )
}

export default Home;
