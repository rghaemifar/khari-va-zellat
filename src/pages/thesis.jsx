import React, { useEffect, useState } from 'react'
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
import { request } from '../utils/request'
import { thesisUrl } from '../utils/urls'
import { getRole } from '../utils/roles'
import Link from 'next/link'

function ThesisStatuses() {
  const columns = ['تاریخ ساخت', 'وضعیت', 'داور', 'توضیحات', 'تیتر']

  const [thesis, setThesis] = useState([])
  const role = getRole()

  const getThesis = async () => {
    const res = await request({
      url: thesisUrl,
    })
    if (!res) return
    setThesis(res)
  }

  useEffect(() => {
    getThesis()
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
              {role && role !== 'student' ? (
                <TableCell key={'edit'}>
                  <Typography variant={'body_m'}>-</Typography>
                </TableCell>
              ) : (
                <></>
              )}
              {columns.map((item) => (
                <TableCell key={item}>
                  <Typography variant={'body_m'}>{item}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {thesis.map((el) => (
              <TableRow key={el.id}>
                {role && role !== 'student' ? (
                  <TableCell>
                    <Link href={`thesis-detail/${el.id}`}>
                      <Typography
                        variant={'body_m'}
                        sx={{ color: 'blue', cursor: 'pointer' }}
                      >
                        بررسی
                      </Typography>
                    </Link>
                  </TableCell>
                ) : (
                  <></>
                )}
                <TableCell>
                  <Typography variant={'body_m'}>{el.created_at}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'body_m'}>{el.status}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'body_m'}>
                    {el.assignee?.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'body_m'}>{el.description}</Typography>
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

export default ThesisStatuses
