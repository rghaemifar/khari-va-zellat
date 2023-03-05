import MainLayout from '@/components/mainLayout'
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { Box, Stack } from '@mui/system'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { teachersUrl, thesisUrl } from '../utils/urls'
import { request } from '../utils/request'

const MAX_UPLOAD_SIZE = 50 * 1024 * 1024 /* 5Mb */

const FILE_NAME = 'file'

function EditThesis() {
  const [file, setFile] = useState(null)
  const { enqueueSnackbar } = useSnackbar()

  const onUploadThesis = (e) => {
    if (e.target.files[0].size > MAX_UPLOAD_SIZE) {
      enqueueSnackbar('حجم فایل ارسالی نباید بیشتر از 50 مگابایت باشد', {
        variant: 'warning',
      })
      return
    }

    setFile({
      file: e.target.files[0],
    })

    e.target.value = ''
  }

  const onDeletePrescriptionFile = () => {
    setFile(null)
  }

  const handleOpenFileInNewTab = () => {
    let file = order?.prescription?.paper?.file
    let url = URL.createObjectURL(file)
    window.open(url, '_blank')
  }

  let fileName = file?.file?.name

  const handleSubmit = async (event) => {
    event.preventDefault()
    // const data = new FormData(event.currentTarget)
    // data.append('file', file.file)
    const data = new FormData(event.currentTarget)
    const res = await request({
      url: thesisUrl,
      method: 'POST',
      body: JSON.stringify({
        title: data.get('name'),
        description: data.get('description'),
        assignee_id: Number(data.get('assignee_id')),
      }),
    })
  }

  const [assignees, setAssignees] = useState([])

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
            label='نام'
            name='name'
            id='name'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            label='توضیحات'
            name='description'
            id='description'
            multiline
            rows={10}
          />
          <InputLabel id='assignee_id_label'>نام استاد بررسی کننده</InputLabel>
          <Select
            margin='normal'
            required
            fullWidth
            label='نام استاد بررسی کننده'
            name='assignee_id'
            id='assignee_id'
            labelId='assignee_id_label'
          >
            {assignees.map((el) => (
              <MenuItem value={el.id} key={el.email}>
                {el.email} - {el.role}
              </MenuItem>
            ))}
          </Select>
          <Box marginLeft={'50px'} width='100%'>
            {!file ? (
              <>
                <Button
                  sx={{ display: 'flex', margin: 'auto' }}
                  variant='outlined'
                >
                  <label style={{ cursor: 'pointer' }} htmlFor='upload-thesis'>
                    انتخاب فایل
                  </label>
                </Button>
                <input
                  hidden
                  type='file'
                  id='upload-thesis'
                  accept='.png, .pdf, .jpg, .jpeg, .jfif'
                  onChange={onUploadThesis}
                />
              </>
            ) : (
              <Box
                padding='0.75rem 1rem'
                width='30%'
                margin='auto'
                sx={{
                  background:
                    'linear-gradient(0deg, rgba(10, 97, 164, 0.05), rgba(10, 97, 164, 0.05)), #fdfcff',
                }}
                borderRadius='0.5rem'
                display='flex'
                alignItems='center'
                justifyContent='space-between'
              >
                <Typography
                  sx={{
                    cursor: 'pointer',
                    color: 'rgb(13, 71, 161)',
                  }}
                  onClick={handleOpenFileInNewTab}
                >
                  {FILE_NAME}
                  {fileName.substring(
                    fileName.length,
                    fileName.lastIndexOf('.')
                  )}
                </Typography>
                <Box
                  display='flex'
                  alignItems='center'
                  color='red'
                  sx={{
                    cursor: 'pointer',
                    svg: {
                      marginLeft: '0.25rem',
                    },
                  }}
                  onClick={onDeletePrescriptionFile}
                >
                  <DeleteOutlineIcon /> حذف
                </Box>
              </Box>
            )}
          </Box>
          <Box>
            <Button
              sx={{ width: '15%', marginTop: '20px' }}
              variant='contained'
              type='submit'
              fullWidth
            >
              ارسال
            </Button>
          </Box>
        </Box>
      </Stack>
    </MainLayout>
  )
}

export default EditThesis
