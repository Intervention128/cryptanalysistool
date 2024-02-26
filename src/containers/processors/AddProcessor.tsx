import {Close, Search} from '@mui/icons-material'
import {Dialog, DialogContent, DialogTitle, IconButton, Input} from '@mui/material'
import type {FC} from 'react'
import {useState} from 'react'
import {processorsInfo} from '@processors/processors'
import ProcessorInfoCard from './ProcessorInfoCard'

interface AddProcessorProps {
  open: boolean
  onClose: () => void
}

const AddProcessor: FC<AddProcessorProps> = ({open, onClose}) => {
  const [searchText, setSearchText] = useState('')

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{display: 'flex'}}>
        Add Processors
        <div style={{flexGrow: 1}} />
        <Input
          placeholder="Search..."
          startAdornment={<Search />}
          value={searchText}
          onChange={({target: {value}}) => setSearchText(value)}
        />
        <IconButton aria-label="close" onClick={onClose}><Close /></IconButton>
      </DialogTitle>
      <DialogContent>
        {Object.values(processorsInfo)
          .filter(info => info.name.toLowerCase().includes(searchText.toLowerCase()))
          .map(info => <ProcessorInfoCard key={info.name} {...info} />)
        }
      </DialogContent>
    </Dialog>
  )
}

export default AddProcessor
