import { NPCStatBlock } from './NPCClass'
import NPCStats from '../NPCStats'

export default interface NPCTemplate {
  name: string
  description: string
  features: {
    name: string
    description: string
  }[]
  traits: {
    name: string
    effect: string
  }[]
  statTransform?: (arg: NPCStats) => NPCStats
  statCaps?: { [key: string]: number }
  incompatibleTemplates: string[]
}
