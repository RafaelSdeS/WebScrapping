const puppeteer = require('puppeteer')

async function scrapeProduct(url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)

  const [el] = await page.$x('//*[@id="imgBlkFront"]')
  const src = await el.getProperty('src')
  const srcTxt = await src.jsonValue()

  const [el2] = await page.$x('//*[@id="price"]')
  const txt = await el2.getProperty('textContent')
  const rawTxt = await txt.jsonValue()

  console.log({ srcTxt, rawTxt })

  browser.close()
}

scrapeProduct(
  'https://www.amazon.com.br/dp/855100431X/ref=s9_acsd_al_bw_c2_x_1_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-9&pf_rd_r=Q48F4HTX594BM760YZNA&pf_rd_t=101&pf_rd_p=db92b6c8-4760-455f-a3ff-7b8df3e65f45&pf_rd_i=6740748011'
)
