import CaesarCipher from './caesar/CaesarCipher'

const processors = {
  CaesarCipher,
}

export type Processors = typeof processors

export default processors
