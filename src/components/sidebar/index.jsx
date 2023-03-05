import { Box, Drawer, Icon, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { sidebarItems } from '@/constants/sidebarIcons'
import { GeneralContext } from '@/providers/generalContext'
import Link from 'next/link'
import { getAccessibleRoutes } from '../../utils/roles'

function SideBar() {
  const { isSidebarOpen } = React.useContext(GeneralContext)
  const [accessibleRoutes, setAccesssibleRoutes] = useState([])

  const getShit = async () => {
    const res = await getAccessibleRoutes()
    setAccesssibleRoutes(res)
  }

  useEffect(() => {
    getShit()
  }, [])

  const shiiit = useMemo(
    () => sidebarItems.filter((route) => accessibleRoutes.includes(route.key)),
    [accessibleRoutes]
  )

  return (
    <Box sx={{ display: 'flex', direction: 'ltr' }}>
      <Drawer
        sx={(theme) => ({
          width: isSidebarOpen ? '280px' : '92px',
          whiteSpace: 'nowrap',
          transition: '225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
          '& .MuiPaper-root': {
            width: isSidebarOpen ? '280px' : '92px',
            padding: '12px',
            transition: '225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
            overflowX: 'hidden',
            background: theme.palette.info.dark,
            border: 'none',
          },
        })}
        anchor='left'
        variant='permanent'
        open={isSidebarOpen}
      >
        {shiiit.map((item) => (
          <Link key={item.title} to={item.url} href={item.url}>
            <Box
              display='flex'
              alignItems='center'
              style={{ color: 'white', cursor: 'pointer' }}
            >
              <Icon>{item.icon}</Icon>
              <Typography
                padding='12px'
                margin='16px'
                align='left'
                color='white'
              >
                {item.title}
              </Typography>
            </Box>
          </Link>
        ))}
      </Drawer>
    </Box>
  )
}

export default SideBar
