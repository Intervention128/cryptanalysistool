import type {FC, ForwardRefExoticComponent, RefAttributes} from 'react'
import React, {useRef, useState} from 'react'
import type {ProcessHandle} from '../../src/types/ProcessHandle'

type CipherComponent = ForwardRefExoticComponent<RefAttributes<ProcessHandle>>

const CipherTestFrame: FC<{Cipher: CipherComponent}> = ({Cipher}) => {
  const ref = useRef<ProcessHandle>(null)
  const [text, setText] = useState<string>('')

  const run = () => {
    ref.current?.run('Hello World!').then(setText)
  }

  return (
    <>
      <Cipher ref={ref} />
      <button data-cy="run" onClick={run}>Run</button>
      <p data-cy="result">{text}</p>
    </>
  )
}

export default CipherTestFrame
