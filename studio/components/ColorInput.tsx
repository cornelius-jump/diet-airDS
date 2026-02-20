import {StringInputProps, set, unset} from 'sanity'
import {Stack, Text, Card, Flex, Box} from '@sanity/ui'
import {HexColorPicker} from 'react-colorful'
import {useCallback, useState} from 'react'
import styled from 'styled-components'

const ColorPreview = styled.div<{$color: string}>`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: ${(props) => props.$color};
  border: 2px solid var(--card-border-color);
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const PickerWrapper = styled.div`
  .react-colorful {
    width: 100%;
    height: 200px;
  }
`

export function ColorInput(props: StringInputProps) {
  const {elementProps, onChange, value = ''} = props
  const [showPicker, setShowPicker] = useState(false)

  const handleChange = useCallback(
    (newColor: string) => {
      onChange(newColor ? set(newColor.toUpperCase()) : unset())
    },
    [onChange]
  )

  const handleTextChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const val = event.target.value
      handleChange(val)
    },
    [handleChange]
  )

  const isValidHex = /^#[0-9A-F]{6}$/i.test(value)
  const displayColor = isValidHex ? value : '#000000'

  return (
    <Stack space={3}>
      <Flex gap={2} align="center">
        <ColorPreview
          $color={displayColor}
          onClick={() => setShowPicker(!showPicker)}
          title="Click to open color picker"
        />
        <Box flex={1}>
          <input
            {...elementProps}
            type="text"
            value={value}
            onChange={handleTextChange}
            placeholder="#000000"
            style={{
              width: '100%',
              padding: '8px 12px',
              fontSize: '14px',
              fontFamily: 'monospace',
              border: '1px solid var(--card-border-color)',
              borderRadius: '4px',
              background: 'var(--card-bg-color)',
              color: 'var(--card-fg-color)',
            }}
          />
        </Box>
      </Flex>

      {!isValidHex && value && (
        <Card padding={2} tone="caution" radius={2}>
          <Text size={1}>Invalid hex color. Format: #000000</Text>
        </Card>
      )}

      {showPicker && (
        <Card padding={3} radius={2} shadow={2}>
          <PickerWrapper>
            <HexColorPicker color={displayColor} onChange={handleChange} />
          </PickerWrapper>
        </Card>
      )}

      {props.description && (
        <Text size={1} muted>
          {props.description}
        </Text>
      )}
    </Stack>
  )
}
