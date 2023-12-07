import type {AvailableProcessors} from '../processors/processors'
export type MountedIdType = `${keyof AvailableProcessors}-${number}`

export interface QueueItem {
  processorId: keyof AvailableProcessors
  mountedId: MountedIdType
}
