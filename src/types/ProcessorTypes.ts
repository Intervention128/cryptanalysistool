import type {AvailableProcessors} from '../processors/processors'

export interface QueueItem {
  processorId: keyof AvailableProcessors
  mountedId: string
}
