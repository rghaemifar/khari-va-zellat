import BorderColorIcon from '@mui/icons-material/BorderColor'
import PreviewIcon from '@mui/icons-material/Preview'
import MessageIcon from '@mui/icons-material/Message'
import InboxIcon from '@mui/icons-material/Inbox'
import IosShareIcon from '@mui/icons-material/IosShare'

export const sidebarItems = [
  {
    icon: <BorderColorIcon />,
    title: 'ایجاد پایان‌نامه',
    url: '/add-thesis/',
    key: 'sendThesis',
  },
  {
    icon: <PreviewIcon />,
    title: 'پایان‌نامه ها',
    url: '/thesis/',
    key: 'viewAllThesis',
  },
  {
    icon: <MessageIcon />,
    title: 'ارسال پیام',
    url: '/send-message/',
    key: 'sendMessage',
  },
  {
    icon: <InboxIcon />,
    title: 'صندوق ورودی',
    url: '/inbox/',
    key: 'viewAllMessage',
  },
  {
    icon: <IosShareIcon />,
    title: 'تعیین داوران',
    url: '/referees-assignment/',
    key: 'sendThesisToReferee',
  },
]
