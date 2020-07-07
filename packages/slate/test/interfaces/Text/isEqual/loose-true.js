import { Text } from 'slate'

export const input = {
  text: { text: '', bold: true },
  props: { text: 'my', bold: true },
}

export const test = ({ text, props }) => {
  return Text.equals(text, props, {
    loose: true,
  })
}

export const output = true
