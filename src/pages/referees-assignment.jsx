import MainLayout from '@/components/mainLayout'
import {
  Button,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { assignedThesis } from '../utils/urls'
import { request } from '../utils/request'

function RefereesAssignment() {
  const columns = ['پایان نامه', 'دانشجو', 'داوران'].reverse()

  const [thesis, setThesis] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // const res = await request({
    //   url: messageUrl,
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title: data.get('title'),
    //     content: data.get('content'),
    //     receiver_id: Number(data.get('receiver_id')),
    //   }),
    // })
  }

  const getThesis = async () => {
    const res = await request({
      url: assignedThesis,
    })
    if (!res) return
    setThesis(res)
  }

  useEffect(() => {
    getThesis()
  }, [])

  return (
    <MainLayout>
      <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
              {thesis.map((el, i) => (
                <TableRow key={el.id}>
                  <TableCell>
                    <Box display='flex' justifyContent='space-evenly'>
                      <Select
                        margin='normal'
                        required
                        fullWidth
                        name={`referee_1__${i}`}
                        id={`referee_1__${i}`}
                      >
                        {el.next_referees?.map((el) => (
                          <MenuItem value={el.id} key={el.email}>
                            {el.email} - {el.role}
                          </MenuItem>
                        ))}
                      </Select>
                      <Select
                        margin='normal'
                        required
                        fullWidth
                        name={`referee_2__${i}`}
                        id={`referee_2__${i}`}
                      >
                        {el.next_referees?.map((el) => (
                          <MenuItem value={el.id} key={el.email}>
                            {el.email} - {el.role}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant={'body_m'}>
                      {el.sender?.email}email
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={'body_m'}>{el.title}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          sx={{ width: '15%', marginTop: '20px' }}
          variant='contained'
          type='submit'
          fullWidth
        >
          ارسال
        </Button>
      </Box>
    </MainLayout>
  )
}

export default RefereesAssignment
