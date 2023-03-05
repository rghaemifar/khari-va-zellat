import MainLayout from '@/components/mainLayout'
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { request } from '../utils/request'
import { messageUrl, teachersUrl } from '../utils/urls'

function SendMessage() {
  const [assignees, setAssignees] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const res = await request({
      url: messageUrl,
      method: 'POST',
      body: JSON.stringify({
        title: data.get('title'),
        content: data.get('content'),
        receiver_id: Number(data.get('receiver_id')),
      }),
    })
  }

  const getAssignees = async () => {
    const res = await request({
      url: teachersUrl,
    })
    if (!res) return
    setAssignees(res)
  }

  useEffect(() => {
    getAssignees()
  }, [])

  return (
    <MainLayout>
      <Stack gap='64px' sx={{ direction: 'ltr' }}>
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            label='موضوع'
            name='title'
            id='title'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            label='متن پیام'
            name='content'
            id='content'
            multiline
            rows={10}
          />
          <InputLabel id='receiver_id_label'>نام استاد بررسی کننده</InputLabel>
          <Select
            margin='normal'
            required
            fullWidth
            label='نام استاد بررسی کننده'
            name='receiver_id'
            id='receiver_id'
            labelId='receiver_id_label'
          >
            {assignees.map((el) => (
              <MenuItem value={el.id} key={el.email}>
                {el.email} - {el.role}
              </MenuItem>
            ))}
          </Select>
          <Box>
            <Button
              sx={{ width: '15%', marginTop: '20px' }}
              variant='contained'
              type='submit'
              fullWidth
            >
              ارسال
            </Button>
          </Box>{' '}
        </Box>
      </Stack>
    </MainLayout>
  )
}

export default SendMessage
