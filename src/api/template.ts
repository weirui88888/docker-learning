import request from '../request'
//www.text2image.fun/api/mini-app/get-template
const getTemplate = async () => {
  return request.get(`/api/mini-app/get-template`)
}

export { getTemplate }
