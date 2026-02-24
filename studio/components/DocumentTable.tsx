/**
 * DocumentTable.tsx
 *
 * Shared table-format document input used by all content types.
 * Pass a `tableFields` array to configure which fields appear and how.
 * Supports field types: text, color, image, select, reference.
 */

import {set, unset, useClient} from 'sanity'
import {Stack, Card} from '@sanity/ui'
import {useCallback, useEffect, useState} from 'react'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'

// ── Styled components (identical to TeamTokensTable) ──────────────────────

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  table-layout: fixed;
`

const SectionHeader = styled.td`
  padding: 10px 12px 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--card-muted-fg-color);
  background: var(--card-border-color);
  border: 1px solid var(--card-hairline-soft-color);
  border-top: 3px solid var(--card-shadow-outline-color);
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

// ── Field type definitions ────────────────────────────────────────────────

export type FieldDef =
  | {type: 'section'; label: string; path?: never}
  | {type: 'text';    path: string; label: string}
  | {type: 'color';   path: string; label: string}
  | {type: 'image';   path: string; label: string}
  | {type: 'select';  path: string; label: string; options: string[]}
  | {type: 'reference'; path: string; label: string; to: string}

// ── Main component ────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DocumentTable(props: any) {
  const {value = {}, onChange, tableFields} = props as {value: Record<string, any>; onChange: (patch: any) => void; tableFields: FieldDef[]}
  const client = useClient({apiVersion: '2024-01-01'})
  const [uploadingImages, setUploadingImages] = useState<Record<string, boolean>>({})
  const [referenceOptions, setReferenceOptions] = useState<Record<string, Array<{_id: string; name: string}>>>({})

  const builder = imageUrlBuilder(client)

  // ── Load reference options ──────────────────────────────────────────────
  useEffect(() => {
    const refFields = tableFields.filter(
      (f): f is Extract<FieldDef, {type: 'reference'}> => f.type === 'reference',
    )
    const uniqueTypes = [...new Set(refFields.map((f) => f.to))]
    for (const toType of uniqueTypes) {
      client
        .fetch(`*[_type == $type] | order(name asc) { _id, name }`, {type: toType})
        .then((docs: Array<{_id: string; name: string}>) => {
          setReferenceOptions((prev) => ({...prev, [toType]: docs}))
        })
        .catch(() => {})
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // ── Hide Studio document header / padding ──────────────────────────────
  useEffect(() => {
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

  // ── Helpers ────────────────────────────────────────────────────────────

  const getImageUrl = (imageRef: any) => {
    if (!imageRef?.asset?._ref) return null
    return builder.image(imageRef).url()
  }

  const getValue = (path: string): any => {
    const parts = path.split('.')
    let val: any = value
    for (const part of parts) {
      val = val?.[part]
    }
    return val ?? ''
  }

  const handleChange = useCallback(
    (path: string, newValue: string | Record<string, any>) => {
      const parts = path.split('.')
      if (parts.length === 1) {
        onChange(set(newValue, [parts[0]]))
      } else if (parts.length === 2) {
        onChange(set(newValue, [parts[0], parts[1]]))
      } else if (parts.length === 3) {
        onChange(set(newValue, [parts[0], parts[1], parts[2]]))
      }
    },
    [onChange],
  )

  const handleUnset = useCallback(
    (path: string) => {
      const parts = path.split('.')
      if (parts.length === 1) onChange(unset([parts[0]]))
    },
    [onChange],
  )

  const handleImageUpload = useCallback(
    async (path: string, file: File) => {
      try {
        setUploadingImages((prev) => ({...prev, [path]: true}))
        const asset = await client.assets.upload('image', file, {filename: file.name})
        const imageRef = {
          _type: 'image',
          asset: {_type: 'reference', _ref: asset._id},
        }
        const parts = path.split('.')
        if (parts.length === 1) onChange(set(imageRef, [parts[0]]))
        else if (parts.length === 2) onChange(set(imageRef, [parts[0], parts[1]]))
        else if (parts.length === 3) onChange(set(imageRef, [parts[0], parts[1], parts[2]]))
      } catch {
        alert('Error uploading image. Please try again.')
      } finally {
        setUploadingImages((prev) => ({...prev, [path]: false}))
      }
    },
    [client, onChange],
  )

  // ── Render single field row ────────────────────────────────────────────

  const renderField = (field: FieldDef) => {
    if (field.type === 'section') return null
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
          {/* ── Color preview swatch ── */}
          {field.type === 'color' && hasColorValue && <ColorPreview $color={val} />}

          {/* ── Image upload ── */}
          {field.type === 'image' ? (
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              {imageUrl && <ImagePreview src={imageUrl} alt={field.label} />}
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
                    if (file) handleImageUpload(field.path, file)
                  }}
                />
              </div>
            </div>

          /* ── Select dropdown ── */
          ) : field.type === 'select' ? (
            <Select value={val} onChange={(e) => handleChange(field.path, e.target.value)}>
              <option value="">Select...</option>
              {field.options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </Select>

          /* ── Reference dropdown (loaded from Sanity) ── */
          ) : field.type === 'reference' ? (
            <Select
              value={val?._ref || ''}
              onChange={(e) => {
                if (e.target.value) {
                  handleChange(field.path, {_type: 'reference', _ref: e.target.value})
                } else {
                  handleUnset(field.path)
                }
              }}
            >
              <option value="">Select...</option>
              {(referenceOptions[field.to] || []).map((doc) => (
                <option key={doc._id} value={doc._id}>{doc.name}</option>
              ))}
            </Select>

          /* ── Text / color input ── */
          ) : (
            <Input
              type="text"
              value={val}
              onChange={(e) => handleChange(field.path, e.target.value)}
              placeholder={field.type === 'color' ? '#000000' : ''}
              style={{
                display: 'inline-block',
                width: field.type === 'color' && hasColorValue ? 'calc(100% - 36px)' : '100%',
              }}
            />
          )}
        </Td>
      </tr>
    )
  }

  // ── Group fields into sections ────────────────────────────────────────

  const sections: {label: string | undefined; fields: FieldDef[]}[] = []
  let current: {label: string | undefined; fields: FieldDef[]} = {label: undefined, fields: []}
  for (const field of tableFields) {
    if (field.type === 'section') {
      if (current.fields.length > 0 || current.label) sections.push(current)
      current = {label: field.label, fields: []}
    } else {
      current.fields.push(field)
    }
  }
  if (current.fields.length > 0) sections.push(current)

  // ── Render ────────────────────────────────────────────────────────────

  return (
    <Stack space={3} paddingTop={4}>
      {sections.map((section, i) => (
        <Card key={i} padding={0} border radius={2}>
          <Table>
            <colgroup>
              <col style={{width: 'auto'}} />
              <col />
            </colgroup>
            <tbody>
              {section.label && (
                <tr>
                  <SectionHeader colSpan={2}>{section.label}</SectionHeader>
                </tr>
              )}
              {section.fields.map(renderField)}
            </tbody>
          </Table>
        </Card>
      ))}
    </Stack>
  )
}
