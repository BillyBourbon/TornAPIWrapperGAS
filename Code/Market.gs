
class Market extends TornApi{
  constructor(id,apikey){
    super(apikey)
    this.section = `market`
    this.id = id
  }
  bazaar(){
    this.selections.push(`bazaar`)
    return this
  }
  itemmarket(){
    this.selections.push(`itemmarket`)
    return this
  }
  lookup(){
    this.selections.push(`lookup`)
    return this
  }
  timestamp(){
    this.selections.push(`timestamp`)
    return this

  }
}
