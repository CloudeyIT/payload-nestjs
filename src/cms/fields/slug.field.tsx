import { useField, useFormFields } from '../hooks/payload.hooks'
import React, { useEffect } from 'react'
import { FieldWithPath, TextField } from 'payload/types'

export const SlugField: React.FC<FieldWithPath & TextField> = (props) => {
  const { value, setValue, initialValue } = useField<string>({ path: props.path })
  const title = useFormFields(([fields]) => fields.title)

  const slugify = (text: string) => {
    return softSlugify(text)
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  }

  const softSlugify = (text: string) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/ä/g, 'a')
      .replace(/[öõ]/g, 'o')
      .replace(/ü/g, 'u')
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
  }

  const generateSlug = () => {
    setValue(slugify(title?.value as string ?? ''))
  }

  useEffect(() => {
    if (!initialValue) {
      generateSlug()
    }
  }, [title.value])

  return (
    <div className={'field-type text'}>
      <label htmlFor={props.path}>{props.label as string}</label>
      <div style={{ display: 'flex', gap: '16px' }}>
        <input onChange={(e) => setValue(softSlugify(e.target.value))}
               value={value ?? ''}
               onBlur={(e) => setValue(slugify(e.target.value))} />
        <button className={'btn btn--size-small btn--style-secondary btn--icon-style-none'}
                style={{marginTop: 'auto', marginBottom: 'auto'}}
                onClick={(e) => {
                  e.preventDefault()
                  generateSlug()
                }}>
          Generate
        </button>
      </div>
    </div>
  )
}

export default SlugField