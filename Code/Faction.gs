
class Faction extends TornApi{
  constructor(id,apikey){
    super(apikey)
    this.section = `faction`
    this.id = id
  }
  applications()
  {
    this.selections.push(`applications`)
    return this
  }
  armor()
  {
    this.selections.push(`armor`)
    return this
  }
  armorynews()
  {
    this.selections.push(`armorynews`)
    return this
  }
  attacks( fromTimestamp = 0, toTimestamp = 0 )
  {
    let selection = `attacks`
    if( fromTimestamp && fromTimestamp > 0 ) selection+=`&from=${fromTimestamp}`
    if( toTimestamp && toTimestamp > 0 ) selection+=`&to=${toTimestamp}`

    this.selections.push(selection)
    return this
  }
  attacknews()
  {
    this.selections.push(`attacknews`)
    return this
  }
  attacksfull()
  {
    this.selections.push(`attacksfull`)
    return this
  }
  basic()
  {
    this.selections.push(`basic`)
    return this
  }
  boosters()
  {
    this.selections.push(`boosters`)
    return this
  }
  caches()
  {
    this.selections.push(`caches`)
    return this
  }
  cesium()
  {
    this.selections.push(`cesium`)
    return this
  }
  chain()
  {
    this.selections.push(`chain`)
    return this
  }
  chainreport()
  {
    this.selections.push(`chainreport`)
    return this
  }
  chains( fromTimestamp = 0, toTimestamp = 0 )
  {
    let selection = `chains`
    if( fromTimestamp && fromTimestamp > 0 ) selection+=`&from=${fromTimestamp}`
    if( toTimestamp && toTimestamp > 0 ) selection+=`&to=${toTimestamp}`

    this.selections.push(selection)
    return this
  }
  checkPermissions()
  {
    this.selections.push(`checkPermissions`)
    return this
  }
  contributors()
  {
    this.selections.push(`contributors`)
    return this
  }
  crimeexp()
  {
    this.selections.push(`crimeexp`)
    return this
  }
  crimenews()
  {
    this.selections.push(`crimenews`)
    return this
  }
  crimes( fromTimestamp = 0, toTimestamp = 0 )
  {
    let selection = `crimes`
    if( fromTimestamp && fromTimestamp > 0 ) selection+=`&from=${fromTimestamp}`
    if( toTimestamp && toTimestamp > 0 ) selection+=`&to=${toTimestamp}`

    this.selections.push(selection)
    return this
  }
  currency()
  {
    this.selections.push(`currency`)
    return this
  }
  donations()
  {
    this.selections.push(`donations`)
    return this
  }
  drugs()
  {
    this.selections.push(`drugs`)
    return this 
  }
  fundsnews()
  {
    this.selections.push(`fundsnews`)
    return this
  }
  mainnews()
  {
    this.selections.push(`mainnews`)
    return this
  }
  medical()
  {
    this.selections.push(`medical`)
    return this
  }
  membershipnews()
  {
    this.selections.push(`membershipnews`)
    return this
  }
  positions()
  {
    this.selections.push(`positions`)
    return this
  }
  rankedwars()
  {
    this.selections.push(`rankedwars`)
    return this
  }
  reports()
  {
    this.selections.push(`reports`)
    return this 
  }
  revives()
  {
    this.selections.push(`revives`)
    return this
  }
  revivesfull()
  {
    this.selections.push(`revivesfull`)
    return this
  }
  stats()
  {
    this.selections.push(`stats`)
    return this
  }
  temporary()
  {
    this.selections.push(`temporary`)
    return this
  }
  territory()
  {
    this.selections.push(`territory`)
    return this
  }
  territorynews()
  {
    this.selections.push(`territorynews`)
    return this
  }
  timestamp()
  {
    this.selections.push(`timestamp`)
    return this
  }
  upgrades()
  {
    this.selections.push(`upgrades`)
    return this
  }
  weapons()
  {
    this.selections.push(`weapons`)
    return this
  }
}
