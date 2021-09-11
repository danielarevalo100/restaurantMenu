import React, { useState, useEffect } from 'react'; 
import ReactDOM from 'react-dom';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  Paper,
  CircularProgress
} from '@material-ui/core';

/* icons */
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

/* components */
import View from 'components/View';
import Text from 'components/Text';

/* assets */
import CloseLogo from 'assets/svgs/close.svg'
import AddLogo from './icons/Add.svg';
import EditLogo from './icons/Edit.svg';
import DeleteLogo from './icons/Trash.svg';

/* styles */
import './styles.scss'

const CustomTable = ({ columns, data, editable, title, style, loading, rowActions, tableActions, tableMinWidth }) => {

  /* states */
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [currentRow, setCurrentRow] = useState({});
  const [updatedData, setUpdatedData] = useState({})
  const [currentRowIndex, setCurrentRowIndex] = useState(null);
  const [search, setSearch] = useState('');

  /* screen state */
  useEffect(() => {
    return () => {
      onModalClose()
    }
  }, [])

  /* actions */
  const handleUpdate = (currentData, index) => {
    createDOMElem()
    setCurrentRow(currentData)
    setCurrentRowIndex(index)
  }

  const handleDelete = (currentData) => {
    editable.onRowDelete(currentData)
    setDeleteIndex(null)
  }

  const createDOMElem = () => {
    const div = document.createElement('div')
    div.id = 'portal'
    document.body.appendChild(div)
  }

  const onSave = () => {
    if( currentRowIndex === null ) {
      editable.onRowAdd(updatedData)
    } else {
      editable.onRowUpdate(updatedData, currentRow)
    }
    onModalClose()
  }

  const onRowAdd = () => {
    createDOMElem()
    const initialObject = columns.reduce((acc, val) => {
      if( 'defaultValue' in val ){
        return { ...acc, [val.field]: val.defaultValue }
      }
      return { ...acc, [val.field]: '' }
    }, {})
    setUpdatedData(initialObject)
    setCurrentRow(initialObject)
  }

  const getFilteredData = () => {
    return data.filter((item) => {
      return Object.keys(item).some((value) => JSON.stringify(item[value]).toLowerCase().includes(search.toLowerCase()))
    })
  }

  const onModalClose = () => {
    const elem = document.getElementById('portal')
    if( elem ) {
      elem.remove()
      setCurrentRow({})
      setUpdatedData({})
      setCurrentRowIndex(null)
    }
  }

  /* ui */
  const drawTableRow = (row, index) => {

    if( deleteIndex == index ) {
      return (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '100%' }} >
          <Button onClick={() => setDeleteIndex(null)}><CloseIcon style={{ fontSize: '20px' }}/></Button>
          <Button onClick={() => handleDelete(row)}><CheckIcon style={{ fontSize: '20px' }}/></Button>
          <Text fontSize={1.4}>Do you want to delete this row?</Text>
        </View>
      )
    }
    return (
      <>
        {editable && <View style={{ width: '10%', minWidth: '8ch' }} className='table-cell'>
          <View className='actions-icons-container'>
            {rowActions?.map(({icon, onClick}) => (<img style={{ width: '20px', height: '20px', cursor: 'pointer' }} src={icon} onClick={() => onClick(row)}/>))}
            {'onRowUpdate' in editable && <img src={EditLogo} style={{ width: '20px', height: '20px', cursor: 'pointer' }} onClick={() => handleUpdate(row, index)} />}
            {'onRowDelete' in editable && <img src={DeleteLogo} style={{ width: '20px', height: '20px', cursor: 'pointer' }} onClick={() => setDeleteIndex(index)} />}
          </View>
        </View>}
        {columns.map(({field, style, render}) => (<View className='table-cell' style={style}>
          {render && render(row) || <Text fontSize={1.4} textAlign='left' >{row[field]}</Text>}
        </View>))}
      </>
    )

  }

  const drawStatus = () => {
    if( loading ) {
      return(
        <View style={{ width: '100%'}} className='table-status'>
          <View style={{ margin: '20px', width: '100%' }}><CircularProgress/></View>
        </View>
      )
    }  
    if( data.length == 0 ) {
      return(
        <View style={{ width: '100%'}} className='table-status'>
          <View style={{ margin: '20px', width: '100%' }}><Text fontSize={1.4}>No data available</Text></View>
        </View>
      ) 
    }
  }
  
  const drawTableBody = () => {

    if( !loading ) {
      return (
        getFilteredData().map((row, index) => (
          <View className='table-row'>
            {drawTableRow(row, index)}
          </View>
        ))
      )
    }

  }

  const drawModalFormInput = (item, index) => {

    if( 'lookup' in item ) {
      return (
        <>
          <View className='input-label'><Text fontSize={1.4} color='#ffffff' >{item.title}</Text></View>
          <Select labelId={`select-label-${index}`} value={updatedData[item.field] ?? currentRow[item.field]} onChange={({ target }) => setUpdatedData({...updatedData, [item.field]: target.value})}>
            {Object.keys(item.lookup).map((appName) => {
              return <MenuItem value={appName}>{appName.toUpperCase()}</MenuItem>
            })}
          </Select>
        </>
      )
    }
    if( 'editComponent' in item ) {
      return (React.createElement(item.editComponent, {rowData: currentRow, updatedData: updatedData, onChange: (info) => { console.log('herererererererer', info); setUpdatedData({...updatedData, [item.field]: info}) }}))
    }
    if( item.long ){
      return (<>
        <View className='input-label'><Text fontSize={1.4} color='#ffffff' >{item.title}</Text></View>
        <View style={{ width: '100%' }} className='long-text'>
          <textarea onChange={({ target }) => setUpdatedData({...updatedData, [item.field]: target.value})} rows={(updatedData[item.field] ?? currentRow[item.field])?.length < 1000 ? 10 : 20} value={updatedData[item.field] ?? currentRow[item.field]} />
        </View>
      </>)
    }
    return (<>
      <View className='input-label'><Text fontSize={1.4} color='#ffffff' >{item.title}</Text></View>
      <input onChange={({ target }) => setUpdatedData({...updatedData, [item.field]: target.value})} style={{ width: (updatedData[item.field] ?? currentRow[item.field])?.length + 'ch' }} value={updatedData[item.field] ?? currentRow[item.field]}/>
    </>)

  }

  return (
    <>
      <Paper style={{...style, overflow: 'auto'}} className='custom-table'>
          <View className='actions-container'>
            <Text fontSize={1.5}>{title}</Text>
            <View className='table-general-actions'>
              <TextField label='Search' value={search} onChange={({target}) => setSearch(target.value)}/>
              {(editable && editable.onRowAdd) && <img src={AddLogo} style={{ width: '18px', height: '18px', cursor: 'pointer' }} onClick={onRowAdd}/>}
              {tableActions && tableActions?.map(({icon, onClick}) => <img style={{ width: '18px', height: '18px', cursor: 'pointer' }} src={icon} onClick={(e) => onClick(e, data)}/>)}
            </View>
          </View>
        <View className='table-container'>
          <View style={{ minWidth: tableMinWidth }} className='table-header'>
            <View className='table-row'>
              {editable && <View style={{ width: '10%', minWidth: '8ch' }} className='table-cell'>
                <Text fontSize={1.4}>Actions</Text>
              </View>}
              {columns.map(({title, style}) => (<View className='table-cell' style={style}><Text fontSize={1.4}>{title}</Text></View>))}
            </View>
          </View>
            {drawStatus()}
          <View style={{ minWidth: tableMinWidth }} className='table-body'>
            {drawTableBody()}
          </View>
        </View>
      </Paper>
      {Object.keys(currentRow).length > 0 && ReactDOM.createPortal(
        <View className='modal-container'>
          <View className='modal-container-view'>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }} >
              <View onClick={onModalClose} className='close-button'>
                <img style={{ width: '15px' }} src={CloseLogo}/>
              </View>
            </View>
            <View className='modal-content-view'>
              <View className='form-container'>
                {columns.map((item, index) => (<View style={{ alignItems: 'flex-start', width: '100%', margin: '15px 0' }}>
                  {drawModalFormInput(item, index)}
                </View>))}
              </View>
              <Button onClick={onSave} className='save-button'>
                <Text color='#ffffff'>Save</Text>
              </Button>
            </View>
          </View>
        </View>,
        document.getElementById('portal')
      )}
    </>
  )
}

export default CustomTable;
