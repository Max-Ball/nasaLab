import { AppState } from "../AppState"
import { Space } from "../model/Space"
import Pop from "../utils/Pop"
import { NASAapi } from "./AxiosService"

class SpacesService {

  async getSpaceInfo() {
    const res = await NASAapi.get('planetary/apod')
    AppState.spaceInfo = new Space(res.data)
  }

  async getSpaceInfoByDate(date) {
    let newDate = new Date().toISOString().substring(0, 10)
    if (date > newDate) {
      Pop.error('This Date is in the future')
    } else {
      const res = await NASAapi.get('planetary/apod', {
        params: {
          date: date
        }
      })
      AppState.spaceInfo = new Space(res.data)
      console.log(date);
      console.log(new Date().toISOString().substring(0, 10))
    }

  }
}

export const spacesService = new SpacesService()