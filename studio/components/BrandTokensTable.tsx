import {ObjectInputProps, set} from 'sanity'
import {Stack, Card, Text, Box} from '@sanity/ui'
import {useCallback} from 'react'
import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`

const Th = styled.th`
  text-align: left;
  padding: 8px 12px;
  background: var(--card-border-color);
  font-weight: 600;
  border: 1px solid var(--card-hairline-soft-color);
`

const Td = styled.td`
  padding: 8px 12px;
  border: 1px solid var(--card-hairline-soft-color);
`

const TokenName = styled.div`
  font-family: monospace;
  color: var(--card-muted-fg-color);
`

const Input = styled.input`
  width: 100%;
  padding: 6px 8px;
  font-family: monospace;
  font-size: 13px;
  border: 1px solid var(--card-border-color);
  border-radius: 3px;
  background: var(--card-bg-color);
  color: var(--card-fg-color);

  &:focus {
    outline: none;
    border-color: var(--card-focus-ring-color);
  }
`

const ColorPreview = styled.div<{$color: string}>`
  width: 24px;
  height: 24px;
  border-radius: 3px;
  background: ${(props) => props.$color};
  border: 1px solid var(--card-border-color);
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle;
`

const tokens = [
  {name: 'core', label: 'Core', type: 'color'},
  {name: 'light', label: 'Light', type: 'color'},
  {name: 'dark', label: 'Dark', type: 'color'},
  {name: 'darkSurface', label: 'Dark Surface', type: 'color'},
  {name: 'interactive', label: 'Interactive', type: 'color'},
  {name: 'inverted', label: 'Inverted', type: 'color'},
  {name: 'lightBase', label: 'Light Base', type: 'color'},
  {name: 'lightSurface', label: 'Light Surface', type: 'color'},
  {name: 'lightTransactional', label: 'Light Transactional', type: 'color'},
  {name: 'lightPrimaryBtn', label: 'Light Primary Button', type: 'color'},
  {name: 'darkTransactional', label: 'Dark Transactional', type: 'color'},
  {name: 'darkPrimaryBtn', label: 'Dark Primary Button', type: 'color'},
]

export function BrandTokensTable(props: ObjectInputProps) {
  const {value = {}, onChange} = props

  const handleChange = useCallback(
    (fieldName: string, newValue: string) => {
      onChange(set({...value, [fieldName]: newValue.toUpperCase()}))
    },
    [onChange, value]
  )

  return (
    <Stack space={3}>
      <Card padding={0} border radius={2}>
        <Table>
          <thead>
            <tr>
              <Th>Token Name</Th>
              <Th>Value</Th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token) => {
              const val = (value as any)?.[token.name] || ''
              const isValidHex = /^#[0-9A-F]{6}$/i.test(val)

              return (
                <tr key={token.name}>
                  <Td>
                    <TokenName>{token.name}</TokenName>
                  </Td>
                  <Td>
                    {token.type === 'color' && isValidHex && (
                      <ColorPreview $color={val} />
                    )}
                    <Input
                      type="text"
                      value={val}
                      onChange={(e) => handleChange(token.name, e.target.value)}
                      placeholder={token.type === 'color' ? '#000000' : ''}
                      style={{display: 'inline-block', width: token.type === 'color' ? 'calc(100% - 36px)' : '100%'}}
                    />
                  </Td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Card>
    </Stack>
  )
}
