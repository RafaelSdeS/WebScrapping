const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = 'https://oglobo.globo.com/'

axios(url)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const array = []
    $('.logo', html).each(function () {
      const title = $(this).text()
      const link = $(this).find('a').attr('href')
      array.push({
        title,
        link
      })
    })
    console.log(array)
  })
  .catch(err => console.log(err))

app.listen(PORT, () => console.log('Runnin'))
