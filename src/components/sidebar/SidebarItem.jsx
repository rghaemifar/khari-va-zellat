import React, { useState } from 'react'
import { Icon, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { GeneralContext } from '@/providers/generalContext'
import { useRouter } from 'next/router'

function SidebarItem({ setItemIndex, itemIndex, index, value }) {
  const { isSidebarOpen, setIsSidebarOpen } = React.useContext(GeneralContext)

  return (
    <Tooltip
      title={value.title}
      componentsProps={{
        tooltip: {
          sx: {
            display: isSidebarOpen && 'none',
            bgcolor: '#ffc453',
            '& .MuiTooltip-arrow': {
              color: '#ffc453',
              marginLeft: '-0.69em !important',
            },
          },
        },
      }}
      arrow
      placement='left'
      // open={index === 1 && true}
    >
      <Box
        gap={isSidebarOpen ? 2 : 5}
        padding='12px'
        color='white'
        marginTop='24px'
        marginLeft={isSidebarOpen ? 0 : 1.25}
        sx={[
          {
            cursor: 'pointer',
            width: 'inherit',
            position: 'relative',
            borderRadius: '25px 0 0 25px',
            transition: 'all 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, width 0ms',
          },
          itemIndex === index && {
            background: 'white',
            color: '#000000',
            transition: 'all 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, width 0ms',
          },
          itemIndex === index
            ? {
                '&::after': {
                  right: isSidebarOpen ? '11px' : '21px',
                  // display: "none",
                  position: 'absolute',
                  content: '""',
                  backgroundColor: 'transparent',
                  transition:
                    'all 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, width 0ms',
                  bottom: '-48px',
                  height: '48px',
                  width: '25px',
                  borderTopRightRadius: '47px',
                  boxShadow: '0 -25px 0 0 #ffffff',
                },
                '&::before': {
                  right: isSidebarOpen ? '11px' : '21px',
                  // display: "none",
                  position: 'absolute',
                  content: '""',
                  backgroundColor: 'transparent',
                  transition:
                    'all 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, width 0ms',
                  bottom: '48px',
                  height: '50px',
                  width: '25px',
                  borderBottomRightRadius: '40px',
                  boxShadow: '0 28px 0 0 #ffffff',
                },
              }
            : {
                '&::after': {
                  right: isSidebarOpen ? '11px' : '21px',
                  // display: "none",
                  position: 'absolute',
                  content: '""',
                  backgroundColor: 'transparent',
                  transition:
                    'all 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, width 0ms',
                  bottom: '-48px',
                  height: '48px',
                  width: '25px',
                  borderTopRightRadius: '47px',
                  boxShadow: '0 -25px 0 0 #000000',
                },
                '&::before': {
                  right: isSidebarOpen ? '11px' : '21px',
                  // display: "none",
                  position: 'absolute',
                  content: '""',
                  backgroundColor: 'transparent',
                  transition:
                    'all 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, width 0ms',
                  bottom: '48px',
                  height: '30px',
                  width: '25px',
                  borderBottomRightRadius: '40px',
                  boxShadow: '0 28px 0 0 #000000',
                },
              },
        ]}
        onClick={() => setItemIndex(index)}
        display='flex'
        alignItems='center'
      >
        <Icon>{value.icon}</Icon>
        <Typography
        // padding="12px"
        // margin="16px"
        // align="left"
        // color="white"
        >
          {value.title}
        </Typography>
      </Box>
    </Tooltip>
  )
}

export default SidebarItem
