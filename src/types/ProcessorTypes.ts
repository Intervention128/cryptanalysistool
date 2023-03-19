import type {Processors} from '../processors/processors'

export interface Processor {
  name: string
  processorId: keyof Processors
  run: (input: string) => string
  mountedId: string
}
