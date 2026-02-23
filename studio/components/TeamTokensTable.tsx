import {DocumentInputProps, set, unset, useClient} from 'sanity'
import {Stack, Card} from '@sanity/ui'
import {useCallback, useEffect, useState} from 'react'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  table-layout: fixed;
`

const Th = styled.th`
  text-align: left;
  padding: 8px 12px;
  background: var(--card-border-color);
  font-weight: 600;
  border: 1px solid var(--card-hairline-soft-color);
`

const Td = styled.td`
  padding: 4px 12px;
  border: 1px solid var(--card-hairline-soft-color);
  overflow: hidden;
  word-wrap: break-word;
`

const TokenName = styled.div`
  font-family: monospace;
  color: var(--card-muted-fg-color);
  font-size: 12px;
  white-space: nowrap;
`

const Input = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 6px 8px;
  font-family: monospace;
  font-size: 13px;
  border: none;
  background: transparent;
  color: var(--card-fg-color);
  box-sizing: border-box;

  &:focus {
    outline: none;
    background: var(--card-bg-color);
  }
`

const Select = styled.select`
  width: 100%;
  max-width: 100%;
  padding: 6px 8px;
  font-family: monospace;
  font-size: 13px;
  border: none;
  background: transparent;
  color: var(--card-fg-color);
  box-sizing: border-box;

  &:focus {
    outline: none;
    background: var(--card-bg-color);
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

const ImagePreview = styled.img`
  max-width: 80px;
  max-height: 80px;
  border-radius: 3px;
  border: 1px solid var(--card-border-color);
  object-fit: contain;
  background: var(--card-bg-color);
  flex-shrink: 0;
`

const ImageUploadButton = styled.label`
  display: inline-block;
  padding: 4px 8px;
  font-size: 11px;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--card-hairline-soft-color);
  }
`

const HiddenFileInput = styled.input`
  display: none;
`

const fields = [
  // Identity
  {path: 'name', label: 'name', type: 'text'},
  {path: 'teamId.current', label: 'teamId', type: 'text'},
  {path: 'shortName', label: 'shortName', type: 'text'},

  // Logos
  {path: 'logoPrimary', label: 'logoPrimary', type: 'image'},

  // Core tokens
  {path: 'brandColors.core', label: 'core', type: 'color'},
  {path: 'brandColors.light', label: 'light', type: 'color'},
  {path: 'brandColors.dark', label: 'dark', type: 'color'},
  {path: 'brandColors.interactive', label: 'interactive', type: 'color'},
  {path: 'brandColors.inverted', label: 'inverted', type: 'color'},

  // Light mode tokens
  {path: 'brandColors.lightBase', label: 'lightBase', type: 'color'},
  {path: 'brandColors.lightSurface', label: 'lightSurface', type: 'color'},
  {path: 'brandColors.lightSheet', label: 'lightSheet', type: 'color'},
  {path: 'brandColors.lightNav', label: 'lightNav', type: 'color'},

  // Dark mode tokens
  {path: 'brandColors.darkBase', label: 'darkBase', type: 'color'},
  {path: 'brandColors.darkSurface', label: 'darkSurface', type: 'color'},
  {path: 'brandColors.darkSheet', label: 'darkSheet', type: 'color'},
  {path: 'brandColors.darkNav', label: 'darkNav', type: 'color'},

  // Light interactive tokens
  {path: 'brandColors.lightInteractivePrimary', label: 'lightInteractivePrimary', type: 'color'},
  {path: 'brandColors.lightInteractivePrimaryText', label: 'lightInteractivePrimaryText', type: 'color'},
  {path: 'brandColors.lightInteractiveSecondaryText', label: 'lightInteractiveSecondaryText', type: 'color'},
  {path: 'brandColors.lightInteractiveTertiaryText', label: 'lightInteractiveTertiaryText', type: 'color'},
  {path: 'brandColors.lightInteractiveTransactional', label: 'lightInteractiveTransactional', type: 'color'},
  {path: 'brandColors.lightInteractiveTransactionalText', label: 'lightInteractiveTransactionalText', type: 'color'},

  // Dark interactive tokens
  {path: 'brandColors.darkInteractivePrimary', label: 'darkInteractivePrimary', type: 'color'},
  {path: 'brandColors.darkInteractivePrimaryText', label: 'darkInteractivePrimaryText', type: 'color'},
  {path: 'brandColors.darkInteractiveSecondaryText', label: 'darkInteractiveSecondaryText', type: 'color'},
  {path: 'brandColors.darkInteractiveTertiaryText', label: 'darkInteractiveTertiaryText', type: 'color'},
  {path: 'brandColors.darkInteractiveTransactional', label: 'darkInteractiveTransactional', type: 'color'},
  {path: 'brandColors.darkInteractiveTransactionalText', label: 'darkInteractiveTransactionalText', type: 'color'},

  // Other brand tokens
  {path: 'buttonRadius', label: 'buttonRadius', type: 'select', options: ['8px', '12px', '100px']},
  {path: 'displayFont', label: 'displayFont', type: 'text'},
  {path: 'brandColors.displayWeight', label: 'displayWeight', type: 'select', options: ['400', '700', '800', '900']},
  {path: 'brandColors.displayLetterSpacing', label: 'displayLetterSpacing', type: 'text'},
  {path: 'brandColors.displaySize900', label: 'displaySize900', type: 'text'},
  {path: 'brandColors.displaySize800', label: 'displaySize800', type: 'text'},
  {path: 'brandColors.displaySize700', label: 'displaySize700', type: 'text'},
  {path: 'brandColors.displaySize600', label: 'displaySize600', type: 'text'},
  {path: 'brandColors.displaySize500', label: 'displaySize500', type: 'text'},
  {path: 'brandColors.displaySize400', label: 'displaySize400', type: 'text'},
  {path: 'brandColors.displaySize300', label: 'displaySize300', type: 'text'},
  {path: 'brandColors.displaySize200', label: 'displaySize200', type: 'text'},
  {path: 'brandColors.displaySize100', label: 'displaySize100', type: 'text'},

  // VFS Far
  {path: 'vfsFar.image1', label: 'vfsFar.image1', type: 'image'},
  {path: 'vfsFar.image2', label: 'vfsFar.image2', type: 'image'},
  {path: 'vfsFar.image3', label: 'vfsFar.image3', type: 'image'},
  {path: 'vfsFar.fallback', label: 'vfsFar.fallback', type: 'image'},
  {path: 'vfsFar.price1', label: 'vfsFar.price1', type: 'text'},
  {path: 'vfsFar.price2', label: 'vfsFar.price2', type: 'text'},
  {path: 'vfsFar.price3', label: 'vfsFar.price3', type: 'text'},
  {path: 'vfsFar.priceLabel', label: 'vfsFar.priceLabel', type: 'text'},

  // VFS Close
  {path: 'vfsClose.image1', label: 'vfsClose.image1', type: 'image'},
  {path: 'vfsClose.image2', label: 'vfsClose.image2', type: 'image'},
  {path: 'vfsClose.image3', label: 'vfsClose.image3', type: 'image'},
  {path: 'vfsClose.fallback', label: 'vfsClose.fallback', type: 'image'},
  {path: 'vfsClose.price1', label: 'vfsClose.price1', type: 'text'},
  {path: 'vfsClose.price2', label: 'vfsClose.price2', type: 'text'},
  {path: 'vfsClose.price3', label: 'vfsClose.price3', type: 'text'},
  {path: 'vfsClose.priceLabel', label: 'vfsClose.priceLabel', type: 'text'},

  // Sport & Venue (at the bottom)
  {path: 'sport', label: 'sport', type: 'select', options: ['NBA', 'WNBA', 'NWSL', 'MLS', 'NCAA', 'MLB']},
  {path: 'venue.name', label: 'venue.name', type: 'text'},
  {path: 'venue.city', label: 'venue.city', type: 'text'},

  // Additional logos
  {path: 'logoInverted', label: 'logoInverted', type: 'image'},
  {path: 'logomark', label: 'logomark', type: 'image'},
]

export function TeamTokensTable(props: DocumentInputProps) {
  const {value = {}, onChange} = props
  const client = useClient({apiVersion: '2024-01-01'})
  const [uploadingImages, setUploadingImages] = useState<Record<string, boolean>>({})

  const builder = imageUrlBuilder(client)

  const getImageUrl = (imageRef: any) => {
    if (!imageRef?.asset?._ref) return null
    return builder.image(imageRef).url()
  }

  const handleImageUpload = useCallback(
    async (path: string, file: File) => {
      try {
        setUploadingImages(prev => ({...prev, [path]: true}))

        // Upload the image to Sanity
        const asset = await client.assets.upload('image', file, {
          filename: file.name,
        })

        // Create the image reference
        const imageRef = {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: asset._id,
          }
        }

        // Update the document with the new image reference
        const parts = path.split('.')
        if (parts.length === 1) {
          onChange(set(imageRef, [parts[0]]))
        } else if (parts.length === 2) {
          onChange(set(imageRef, [parts[0], parts[1]]))
        } else if (parts.length === 3) {
          onChange(set(imageRef, [parts[0], parts[1], parts[2]]))
        }
      } catch (error) {
        console.error('Error uploading image:', error)
        alert('Error uploading image. Please try again.')
      } finally {
        setUploadingImages(prev => ({...prev, [path]: false}))
      }
    },
    [client, onChange]
  )

  useEffect(() => {
    // Hide the document header and remove container margins
    const style = document.createElement('style')
    style.innerHTML = `
      [data-testid="document-panel-document-title"],
      [data-testid="document-panel-document-title"] + *,
      [data-ui="Stack"]:has([data-testid="document-panel-document-title"]) {
        display: none !important;
      }
      [data-ui="Container"] {
        padding-left: 0 !important;
        padding-right: 0 !important;
        padding-top: 0 !important;
      }
      [data-testid="form-view"] {
        padding-top: 0 !important;
        margin-top: 0 !important;
      }
      [data-testid="form-view"] > * {
        padding-top: 0 !important;
        margin-top: 0 !important;
      }
      div[margins] {
        display: none !important;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const getValue = (path: string) => {
    const parts = path.split('.')
    let val: any = value
    for (const part of parts) {
      val = val?.[part]
    }
    return val || ''
  }

  const handleChange = useCallback(
    (path: string, newValue: string) => {
      const parts = path.split('.')

      // Build the nested object structure for the specific field
      if (parts.length === 1) {
        // Simple field like 'sport'
        onChange(set(newValue, [parts[0]]))
      } else if (parts.length === 2) {
        // Nested field like 'venue.name' or 'brandColors.core'
        onChange(set(newValue, [parts[0], parts[1]]))
      } else if (parts.length === 3) {
        // Deeply nested like 'vfsFar.price1'
        onChange(set(newValue, [parts[0], parts[1], parts[2]]))
      }
    },
    [onChange]
  )

  return (
    <Stack space={3} paddingTop={4}>
      <Card padding={0} border radius={2}>
        <Table>
          <colgroup>
            <col style={{width: 'auto'}} />
            <col />
          </colgroup>
          <tbody>
            {fields.map((field) => {
              const val = getValue(field.path)
              const isValidHex = field.type === 'color' && /^#[0-9A-F]{6}$/i.test(val)
              const isValidRgba = field.type === 'color' && /^rgba?\(/.test(val)
              const hasColorValue = isValidHex || isValidRgba
              const hasImage = field.type === 'image' && val?.asset?._ref
              const imageUrl = hasImage ? getImageUrl(val) : null
              const isUploading = uploadingImages[field.path]

              return (
                <tr key={field.path}>
                  <Td>
                    <TokenName>{field.label || field.path}</TokenName>
                  </Td>
                  <Td>
                    {field.type === 'color' && hasColorValue && (
                      <ColorPreview $color={val} />
                    )}
                    {field.type === 'image' ? (
                      <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                        {imageUrl && (
                          <ImagePreview src={imageUrl} alt={field.label} />
                        )}
                        <div>
                          <ImageUploadButton htmlFor={`upload-${field.path}`}>
                            {isUploading ? 'Uploading...' : hasImage ? 'Replace image' : 'Upload image'}
                          </ImageUploadButton>
                          <HiddenFileInput
                            id={`upload-${field.path}`}
                            type="file"
                            accept="image/*"
                            disabled={isUploading}
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              if (file) {
                                handleImageUpload(field.path, file)
                              }
                            }}
                          />
                        </div>
                      </div>
                    ) : field.type === 'select' ? (
                      <Select
                        value={val}
                        onChange={(e) => handleChange(field.path, e.target.value)}
                      >
                        <option value="">Select...</option>
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </Select>
                    ) : (
                      <Input
                        type="text"
                        value={val}
                        onChange={(e) => handleChange(field.path, e.target.value)}
                        placeholder={field.type === 'color' ? '#000000' : ''}
                        style={{
                          display: 'inline-block',
                          width: field.type === 'color' && hasColorValue ? 'calc(100% - 36px)' : '100%'
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
