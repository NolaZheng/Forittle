import { StyleValue } from 'vue'

export type Option = {
  content: string
  value?: number | string
  clickAction: 'quizContinue' | 'optionSelect' | 'numberPicker'
  containerStyle?: StyleValue
  labelStyle?: StyleValue
}

export interface Question {
  description?: string
  background: HTMLImageElement
  options: Option[]
}
