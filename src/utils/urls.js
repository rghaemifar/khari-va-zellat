export const thesisUrl = '/thesis'
export const loginUrl = '/auth/login'
export const teachersUrl = '/teachers'
export const messageUrl = '/message'
export const assignedThesis = '/thesis/assigned'
export const getRefereesUrl = (thesis_id) =>
  `/thesis/next-assignee?thesis=${thesis_id}`
export const approveThesisUrl = '/thesis/approve'
export const rejectThesisUrl = '/thesis/reject'
