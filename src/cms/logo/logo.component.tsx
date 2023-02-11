import React from 'react'
import { useTheme } from 'payload/dist/admin/components/utilities/Theme'

export const Logo = () => {
  const { theme } = useTheme()

  return (
    theme === 'dark' ?
      <img src={'https://s.cloudey.net/logo/v5/logo-light.png'} alt={'Logo'} style={{ maxHeight: '80px' }} /> :
      <img src={'https://s.cloudey.net/logo/v5/logo-dark.png'} alt={'Logo'} style={{ maxHeight: '80px' }} />
  )
}

export const LogoIcon = () => {
  const { theme } = useTheme()

  return (
    theme === 'dark' ?
      <img src={'https://s.cloudey.net/logo/v5/cloud-white.png'} alt={'Logo'} style={{ maxHeight: '30px' }} /> :
      <img src={'https://s.cloudey.net/logo/v5/cloud-blue.png'} alt={'Logo'} style={{ maxHeight: '30px' }} />
  )
}