import { Text } from 'slate'

export const input = {
  text: { text: 'my', bold: true },
  props: { text: 'my', bold: true, underline: true },
}

export const test = ({ text, props }) => {
  return Text.equals(text, props)
}

export const output = false
