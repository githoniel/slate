import { Text } from 'slate'

export const input = {
  text: { text: 'my', bold: true, underline: true },
  props: { text: 'my', bold: true },
}

export const test = ({ text, props }) => {
  return Text.equals(text, props)
}

export const output = false
