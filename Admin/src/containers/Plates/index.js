import { useEffect, useState, forwardRef } from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

/* components */
import View from 'components/View';
import Text from 'components/Text';
import CustomTable from 'components/CustomTable';

/* managers */
import { platesApi, categoriesApi } from 'managers/Api';

/* styles */
import './styles.scss';

const Plates = () => {

  /* variables */
  const columns = [
    { style: { width: '10%' }, title: 'Imagen', field: 'image', render: (row) => <img style={{ width: '4rem' }} src={row.image}/> },
    { style: { width: '20%' }, title: 'Nombre', field: 'name' },
    { style: { width: '30%' }, title: 'Descripcion', field: 'desc' },
    { style: { width: '10%' }, title: 'Precio', field: 'price' },
    { style: { flex: 1 }, title: 'Categorias', field: 'categories', editComponent: forwardRef((props, ref) => editableField('category', props)) ,render: (row) => <Text fontSize={1.2}>{row.categories.map((item) => item.name).join(',')}</Text> },
  ]

  /* states */
  const [data, setData] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  /* effects */
  useEffect(() => {
    categoriesApi.get((res) => {
      setCategories(res)
    })
    fetchData()
  }, [])

  /* actions */
  const fetchData = () => {
    setLoading(true)
    platesApi.get((res) => {
      setData(res)
      setLoading(false)
    })
  }

  const editableField = (field, props) => {
    if( field == 'category' ) {
      const selectedItems = [...('categories' in props.updatedData ? props.updatedData.categories : 'categories' in props.rowData ? props.rowData.categories : [])];
      const itemsIds = selectedItems.map((item) => item._id);

      return(
        categories.map((category) => (
          <FormControlLabel control={<Checkbox checked={itemsIds.includes(category._id )} color='primary' onChange={(e) => handleCheckbox(props.onChange, selectedItems, category)} name={category.name} />} label={category.name} />
        ))
      )
    }
  }

  const handleCheckbox = (onChange, selectedItems, item) => {

    const ids = selectedItems.map(selectedItem => selectedItem._id);
    if( ids.includes(item._id) ){
      onChange(selectedItems.filter(selectetItem => selectetItem._id != item._id))
    } else {
      onChange([...selectedItems, item])
    }

  }

  const editable = () => ({
    onRowAdd: newData => new Promise((resolve) => {
      const params = {
        ...newData,
        categories: newData.categories.map(category => category._id)
      }
      platesApi.add(params, (res) => {
        fetchData()
        resolve()
      })
    }),
    onRowUpdate: (updatedData, oldData) => new Promise((resolve) => {
      platesApi.update(oldData._id, updatedData, () => {
        fetchData()
        resolve()
      })
    }),
    onRowDelete: (oldData) => new Promise((resolve) => {
      platesApi.delete(oldData._id, () => {
        fetchData()
        resolve()
      })
    }),
  }) 

  return(
    <View className='plates'>
      <View className='container' style={{ marginTop: '3rem' }}>
        <CustomTable title='Platos' columns={columns}  data={data} loading={data.length == 0 || loading} editable={editable()}/>
      </View>
    </View>
  )

}

export default Plates;
