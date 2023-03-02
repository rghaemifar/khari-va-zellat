import BorderColorIcon from '@mui/icons-material/BorderColor'
import SendIcon from '@mui/icons-material/Send'
import PreviewIcon from '@mui/icons-material/Preview'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import MessageIcon from '@mui/icons-material/Message'
import InboxIcon from '@mui/icons-material/Inbox'
import IosShareIcon from '@mui/icons-material/IosShare'
import ForumIcon from '@mui/icons-material/Forum'

export const SIDEBAR_ITEMS = [
  {
    icon: <BorderColorIcon />,
    title: 'پایان نامه',
    url: '/edit-thesis/',
  },
  {
    icon: <PreviewIcon />,
    title: 'مشاهده لیست پایان نامه ها',
    url: '/thesis-statuses/',
  },
  {
    icon: <RemoveRedEyeIcon />,
    title: 'مشاهده وضعیت پایان نامه ها',
    url: '/thesis-statuses/',
  },
  {
    icon: <MessageIcon />,
    title: 'ارسال پیام',
    url: '/send-message/',
  },
  {
    icon: <InboxIcon />,
    title: 'صندوق ورودی',
    url: '/inbox/',
  },
  {
    icon: <IosShareIcon />,
    title: 'ارسال اسامی داوران',
    url: '/send-referees-names/',
  },
  {
    icon: <ForumIcon />,
    title: 'مشاهده نظرات استاد راهنما',
    url: '/teacher-comments/',
  },
]
