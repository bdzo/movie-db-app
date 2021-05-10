import axios from 'axios'
import { stringify } from 'querystring'

export class MoviesSevice {
  httpClient
  baseUrl
  apiKey
  language

  constructor(baseUrl, apiKey, language) {
    this.httpClient = axios
    this.baseUrl = baseUrl
    this.apiKey = apiKey
    this.language = language
  }

  async popular(pageNum) {
    const queryString = stringify({ api_key: this.apiKey
                                  , language: this.language
                                  , page: pageNum })

    const response = await axios.get(`${this.baseUrl}popular?${queryString}`)
    return response.data.results
  }

  topRated() {

  }

  upcomming() {

  }

  read() {

  }

  search() {

  }
}