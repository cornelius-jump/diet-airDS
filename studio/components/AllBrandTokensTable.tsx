import {ObjectInputProps, set} from 'sanity'
import {Stack, Card} from '@sanity/ui'
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

const Select = styled.select`
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
  // Color tokens
  {name: 'core', type: 'color'},
  {name: 'light', type: 'color'},
  {name: 'dark', type: 'color'},
  {name: 'darkSurface', type: 'color'},
  {name: 'interactive', type: 'color'},
  {name: 'inverted', type: 'color'},
  {name: 'lightBase', type: 'color'},
  {name: 'lightSurface', type: 'color'},
  {name: 'lightTransactional', type: 'color'},
  {name: 'lightPrimaryBtn', type: 'color'},
  {name: 'darkTransactional', type: 'color'},
  {name: 'darkPrimaryBtn', type: 'color'},
  // Other brand tokens
  {name: 'buttonRadius', type: 'select', options: ['8px', '12px', '100px']},
  {name: 'displayFont', type: 'text'},
]

interface AllBrandTokensTableProps extends ObjectInputProps {
  // This component receives the entire document value
}

export function AllBrandTokensTable(props: AllBrandTokensTableProps) {
  const {value = {}, onChange} = props

  const handleChange = useCallback(
    (fieldName: string, newValue: string) => {
      onChange(set({...value, [fieldName]: newValue}))
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
              const isValidHex = token.type === 'color' && /^#[0-9A-F]{6}$/i.test(val)

              return (
                <tr key={token.name}>
                  <Td>
                    <TokenName>{token.name}</TokenName>
                  </Td>
                  <Td>
                    {token.type === 'color' && isValidHex && (
                      <ColorPreview $color={val} />
                    )}
                    {token.type === 'select' ? (
                      <Select
                        value={val}
                        onChange={(e) => handleChange(token.name, e.target.value)}
                      >
                        {token.options?.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </Select>
                    ) : (
                      <Input
                        type="text"
                        value={val}
                        onChange={(e) => handleChange(token.name, e.target.value)}
                        placeholder={token.type === 'color' ? '#000000' : ''}
                        style={{
                          display: 'inline-block',
                          width: token.type === 'color' && isValidHex ? 'calc(100% - 36px)' : '100%'
                        }}
                      />
                    )}
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
