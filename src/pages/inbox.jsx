import MainLayout from '@/components/mainLayout'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { request } from '../utils/request'
import { messageUrl } from '../utils/urls'

function Inbox() {
  const columns = ['تاریخ ساخت', 'فرستنده', 'متن پیام', 'موضوع']

  const [messages, setMessages] = useState([])

  const getMessages = async () => {
    const res = await request({
      url: messageUrl,
    })
    if (!res) return
    setMessages(res)
  }

  useEffect(() => {
    getMessages()
  }, [])

  return (
    <MainLayout>
      <TableContainer
        component={Paper}
        sx={{
          minWidth: 900,
          maxHeight: '82vh',
          overflowY: 'auto',
          border: '1px solid #00baba',
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((item) => (
                <TableCell key={item}>
                  <Typography variant={'body_m'}>{item}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.map((el) => (
              <TableRow key={el.id}>
                <TableCell>
                  <Typography variant={'body_m'}>{el.created_at}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'body_m'}>{el.sender?.email}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'body_m'}>{el.content}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'body_m'}>{el.title}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainLayout>
  )
}

export default Inbox
