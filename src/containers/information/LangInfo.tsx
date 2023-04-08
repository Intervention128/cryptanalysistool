import {Typography} from '@mui/material'
import type {FC} from 'react'

interface LangInfoProps {
  name: string
  color: string
}

const LangInfo: FC<LangInfoProps> = ({name, color}) => {
  return (
    <Typography>{name}</Typography>
  )
}

export default LangInfo
