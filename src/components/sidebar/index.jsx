import { Box, Drawer, Icon, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SIDEBAR_ITEMS } from '@/constants/sidebarIcons'
import { GeneralContext } from '@/providers/generalContext'

function SideBar() {
  const { isSidebarOpen, setIsSidebarOpen } = React.useContext(GeneralContext)

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
        {SIDEBAR_ITEMS.map((item, i) => (
          <a key={item.title} href={item.url} style={{ color: 'white' }}>
            <Box display='flex' alignItems='center'>
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
          </a>
        ))}
      </Drawer>
    </Box>
  )
}

export default SideBar
