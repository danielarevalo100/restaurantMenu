import { useEffect, useState, forwardRef, useRef } from 'react';
import { FormControlLabel, Checkbox, ButtonBase } from '@material-ui/core';

/* components */
import View from 'components/View';
import Text from 'components/Text';
import CustomTable from 'components/CustomTable';

/* managers */
import { platesApi, categoriesApi } from 'managers/Api';
import csv from 'csvtojson';

/* styles */
import './styles.scss';

const Plates = () => {

  /* refs */
  const fileInput = useRef(null);

  /* variables */
  const columns = [
    //{ style: { width: '10%' }, title: 'Imagen', field: 'image', render: (row) => row.image ? (<img style={{ width: '4rem' }} src={row.image}/>) : 'No hay imagen disponible' },
    { style: { width: '20%' }, title: 'Nombre', field: 'name' },
    { style: { width: '35%', paddingRight: '5rem' }, title: 'Descripcion', field: 'desc' },
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

  const handleAddFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (x) => handleCSVfile(x.target.result)
    reader.readAsText(file);
    console.log(file)

  }

  const handleCSVfile = async (file) => {
    const parsed = await csv({ output: 'csv' }).fromString(file);
    parsed.forEach(plate => {
      platesApi.add({ name: plate[0], desc: plate[1], price: plate[2], categories: [plate[4]] }, (res) => console.log(res))
    })
  }

  return(
    <View className='plates'>
      <View className='container' style={{ marginTop: '3rem' }}>
        <View style={{ marginBottom: '1rem' }} className=''>
          <ButtonBase style={{ backgroundColor: 'rgb(238, 238, 238)', borderRadius: '0.3rem', padding: '0.5rem 1rem' }} onClick={() => fileInput.current.click()}>Import</ButtonBase>
          <input ref={fileInput} style={{ display: 'none' }} className='hidden' type='file' accept='text/csv' onChange={(e) => handleAddFile(e)}/>
        </View>
        <CustomTable title='Plates' columns={columns}  data={data} loading={data.length == 0 || loading} editable={editable()}/>
      </View>
    </View>
  )

}

export default Plates;
