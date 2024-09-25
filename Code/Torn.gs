
class Torn extends TornApi{
  constructor(id,apikey){
    super(apikey)
    this.section = `torn`
    this.id = id
  }
  items(){
    this.selections.push(`items`)
    return this
  }
  timestamp(){
    this.selections.push(`timestamp`)
    return this

  }
}
