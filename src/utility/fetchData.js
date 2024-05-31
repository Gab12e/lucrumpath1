let fetchData = async(url, {method, data = {data: 'no data'}}, cb)=>{
    console.log('called')
    try {
      let response = await fetch(`https://currencyapi.glitch.me/${url}`, method !== 'GET' || method !== 'HEAD' ? {
        method: method,
        body: JSON.stringify(data)
      } : {
        method: method
      })
      let dataJson = await response.json()
      cb && cb(dataJson)
    } catch (error) {
      console.error(error)
      cb(null, error)
    }
  }

export default fetchData