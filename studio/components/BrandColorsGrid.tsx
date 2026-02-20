import {ObjectInputProps, set, unset} from 'sanity'
import {Stack, Grid, Card, Text, Box, Flex} from '@sanity/ui'
import {HexColorPicker} from 'react-colorful'
import {useCallback, useState} from 'react'
import styled from 'styled-components'

const CompactColorInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const ColorPreview = styled.div<{$color: string}>`
  width: 100%;
  height: 32px;
  border-radius: 4px;
  background: ${(props) => props.$color};
  border: 2px solid var(--card-border-color);
  cursor: pointer;
  transition: transform 0.15s ease;
  position: relative;

  &:hover {
    transform: scale(1.02);
  }
`

const ColorLabel = styled.label`
  font-size: 11px;
  font-weight: 600;
  color: var(--card-muted-fg-color);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const HexInput = styled.input`
  width: 100%;
  padding: 4px 6px;
  font-size: 12px;
  font-family: monospace;
  border: 1px solid var(--card-border-color);
  border-radius: 3px;
  background: var(--card-bg-color);
  color: var(--card-fg-color);
  text-align: center;

  &:focus {
    outline: none;
    border-color: var(--card-focus-ring-color);
  }
`

const PickerPopover = styled(Card)`
  position: absolute;
  z-index: 1000;
  top: 100%;
  left: 0;
  margin-top: 4px;

  .react-colorful {
    width: 180px;
    height: 140px;
  }
`

const colorFields = [
  {name: 'core', label: 'Core', description: 'Primary brand'},
  {name: 'light', label: 'Light', description: 'Accent color'},
  {name: 'dark', label: 'Dark', description: 'Dark base'},
  {name: 'darkSurface', label: 'Dark Surface', description: 'Dark surface'},
  {name: 'interactive', label: 'Interactive', description: 'Links/buttons'},
  {name: 'inverted', label: 'Inverted', description: 'Contrast'},
  {name: 'lightBase', label: 'Light Base', description: 'Light BG'},
  {name: 'lightSurface', label: 'Light Surface', description: 'Light surface'},
  {name: 'lightTransactional', label: 'Light Trans.', description: 'Light trans btn'},
  {name: 'lightPrimaryBtn', label: 'Light Primary', description: 'Light primary btn'},
  {name: 'darkTransactional', label: 'Dark Trans.', description: 'Dark trans btn'},
  {name: 'darkPrimaryBtn', label: 'Dark Primary', description: 'Dark primary btn'},
]

interface ColorFieldProps {
  name: string
  label: string
  description: string
  value: string
  onChange: (value: string) => void
}

function ColorField({name, label, description, value, onChange}: ColorFieldProps) {
  const [showPicker, setShowPicker] = useState(false)
  const isValidHex = /^#[0-9A-F]{6}$/i.test(value)
  const displayColor = isValidHex ? value : '#000000'

  return (
    <CompactColorInput>
      <ColorLabel htmlFor={name} title={description}>
        {label}
      </ColorLabel>
      <Box style={{position: 'relative'}}>
        <ColorPreview
          $color={displayColor}
          onClick={() => setShowPicker(!showPicker)}
          title={`${label} - ${description}`}
        />
        {showPicker && (
          <PickerPopover padding={2} radius={2} shadow={3}>
            <HexColorPicker color={displayColor} onChange={onChange} />
            <Box paddingTop={2}>
              <Text size={0} align="center" style={{fontFamily: 'monospace'}}>
                {displayColor}
              </Text>
            </Box>
          </PickerPopover>
        )}
      </Box>
      <HexInput
        id={name}
        type="text"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="#000000"
      />
    </CompactColorInput>
  )
}

export function BrandColorsGrid(props: ObjectInputProps) {
  const {value = {}, onChange} = props

  const handleColorChange = useCallback(
    (fieldName: string, newValue: string) => {
      onChange(
        newValue
          ? set({...value, [fieldName]: newValue.toUpperCase()})
          : set({...value, [fieldName]: undefined})
      )
    },
    [onChange, value]
  )

  // Close all pickers when clicking outside
  useCallback(() => {
    const handleClickOutside = () => {
      // This is handled by individual ColorField state
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <Stack space={4}>
      <Text size={1} weight="semibold">
        Brand Color Palette
      </Text>
      <Grid columns={[2, 3, 4, 6]} gap={3}>
        {colorFields.map((field) => (
          <ColorField
            key={field.name}
            name={field.name}
            label={field.label}
            description={field.description}
            value={(value as any)?.[field.name] || ''}
            onChange={(newValue) => handleColorChange(field.name, newValue)}
          />
        ))}
      </Grid>
    </Stack>
  )
}
