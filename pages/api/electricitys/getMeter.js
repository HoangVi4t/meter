import axios from 'axios'

export function getMeter1() {
  return axios.get(`https://66533b00813d78e6d6d7a37f.mockapi.io/api/v1/meters/meter`)
    .then((res) => {
      return {
        data: res.data
      }
    })
    .catch((err) => {
      throw err
    })
}