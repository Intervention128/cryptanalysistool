import CaesarCipher from './caesar/CaesarCipher'

export const processors = {
  CaesarCipher,
}
export type AvailableProcessors = typeof processors

export interface ProcessorInfo {
  name: string
  processorId: keyof AvailableProcessors
  description: string
  madeBy: string
}

export const processorsInfo: {[key in keyof AvailableProcessors]: ProcessorInfo} = {
  CaesarCipher: {
    name: 'Caesar Cipher',
    processorId: 'CaesarCipher',
    description: 'A simple substitution cipher',
    madeBy: 'Julius Caesar lol',
  },
}

export default processors
