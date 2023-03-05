import React, { useEffect, useState } from 'react'
import MainLayout from '@/components/mainLayout'
import { Button, InputLabel, MenuItem, Select } from '@mui/material'
import { useRouter } from 'next/router'
import { request } from '../../utils/request'
import { approveThesisUrl, rejectThesisUrl, thesisUrl } from '../../utils/urls'
import { Box } from '@mui/system'
import { getRole } from '../../utils/roles'

export default function ThesisDetail() {
  const { query } = useRouter()
  const [data, setData] = useState()
  const role = getRole()
  const isManager = role === 'manager'

  const fetchThesis = async (id) => {
    const res = await request({
      url: thesisUrl,
    })
    if (!res) return
    const shit = res.find((el) => Number(el.id) === Number(id))
    setData(shit)
  }

  useEffect(() => {
    const id = query.id
    if (!id) return
    fetchThesis(id)
  }, [query.id])

  const handleAccept = async (nextReferee, nextReferee2) => {
    const id = query.id
    const res = await request({
      url: approveThesisUrl,
      method: 'POST',
      body: JSON.stringify({
        thesis_id: id,
        next_assignee: nextReferee2 ? [nextReferee, nextReferee2] : nextReferee,
      }),
    })
    if (!res) return
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    handleAccept(
      Number(data.get('receiver_id')),
      Number(data.get('receiver_id_2'))
    )
  }

  const handleReject = async () => {
    const id = query.id
    await request({
      url: rejectThesisUrl,
      method: 'POST',
      body: JSON.stringify({
        thesis_id: id,
      }),
    })
  }

  return (
    <MainLayout>
      <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
        {data ? (
          <Box dir='rtl'>
            <Box sx={{}}>موضوع:‌ {data.title}</Box>
            <Box sx={{ marginTop: '30px' }}>توضیحات: </Box>
            <Box sx={{ marginTop: '10px' }}>{data.description}</Box>
            <Box sx={{ marginTop: '30px' }}>
              <a href={`${data.url}`} target='_blank'>
                لینک
              </a>
            </Box>
            {data.next_referees?.length ? (
              <Box sx={{ marginTop: '30px' }}>
                <InputLabel id='receiver_id_label'>
                  نام بررسی کننده بعدی
                </InputLabel>
                <Select
                  margin='normal'
                  required
                  fullWidth
                  label='نام استاد بررسی کننده'
                  name='receiver_id'
                  id='receiver_id'
                  labelId='receiver_id_label'
                >
                  {data.next_referees?.map((el) => (
                    <MenuItem value={el.id} key={el.email}>
                      {el.email} - {el.role}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            ) : (
              <></>
            )}
            {isManager && data.next_referees?.length ? (
              <Box sx={{ marginTop: '30px' }}>
                <InputLabel id='receiver_id_2_label'>
                  نام بررسی کننده بعدی دوم
                </InputLabel>
                <Select
                  margin='normal'
                  required
                  fullWidth
                  label='نام استاد بررسی کننده'
                  name='receiver_id_2'
                  id='receiver_id_2'
                  labelId='receiver_id_2_label'
                >
                  {data.next_referees?.map((el) => (
                    <MenuItem value={el.id} key={el.email}>
                      {el.email} - {el.role}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            ) : (
              <></>
            )}
            <Box sx={{ marginTop: '30px' }}>
              <Button
                variant='contained'
                sx={{ marginRight: '10px' }}
                type='submit'
              >
                تایید
              </Button>
              <Button variant='contained' onClick={handleReject}>
                رد
              </Button>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </MainLayout>
  )
}
