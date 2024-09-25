class TornApi {
  constructor( apiKey )
  {
    this.selections = []
    this.section = `user`
    this.id = 0
    this.urlBase = `https://api.torn.com`
    this.comment = `ApiCallFromBilbo`
    this.overidecache = false
    
    this.apikey = apiKey 
  }

  faction(id = 0)
  {
    return new Faction(id,this.apikey)
  }

  user(id = 0)
  {
    return new User(id,this.apikey)
  }

  company( id = 0 )
  {
    return new Company(id,this.apikey)
  }

  torn( id = 0 )
  {
    return new Torn(id,this.apikey)
  }

  market(id = 0)
  {
    return new Market(id,this.apikey)
  }
  fetch(fetchOptions = {})
  {
    if(fetchOptions?.comment) this.comment = comment
    if(fetchOptions?.overideCache == true) this.overidecache = true

    this.url = `${this.urlBase}/${this.section}/${this.id}?selections=${this.selections.join(`,`)}&key=${this.apikey}&comment=${this.comment}`

    let call = UrlFetchApp.fetch(this.url)

    if(fetchOptions?.showFullCall == true) return call

    if(call.getResponseCode() !== 200) {
      // return {error:{error:call?.error?.error},text:`api call error`,code:call.getResponseCode()}} 
      return call.error
    }

    call = JSON.parse(call.getContentText())
    return call
  }
}












