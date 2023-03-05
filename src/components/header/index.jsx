import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import { GeneralContext } from '@/providers/generalContext'
import { useRouter } from 'next/router'
import { logout, isLoggedIn } from '../../utils/auth'

const Header = () => {
  const router = useRouter()

  const [anchorElUser, setAnchorElUser] = useState(null)
  const [isUserLoggedIn, setUserIsLoggedIn] = useState(false)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const login = () => {
    router.push('/login/')
  }

  const handleLogout = () => {
    handleCloseUserMenu()
    setUserIsLoggedIn(false)
    logout()
  }

  const settings = [
    isUserLoggedIn
      ? { title: 'خروج', onClick: handleLogout }
      : { title: 'ورود', onClick: login },
  ]

  useEffect(() => {
    const hasToken = isLoggedIn()
    setUserIsLoggedIn(hasToken)
  }, [])

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box
            sx={[{ pl: 34 }, { flexGrow: 0, transition: '0.3s ease-in-out' }]}
          >
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ pr: 0 }}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.title} onClick={setting.onClick}>
                  <Typography textAlign='center'>{setting.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
