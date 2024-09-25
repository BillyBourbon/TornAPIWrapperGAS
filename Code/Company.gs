
class Company extends TornApi{
  constructor(id,apikey){
    super(apikey)
    this.section = `company`
    this.id = id
  }
  applications(){
    this.selections.push(`applications`)
    return this

  }
  companies(){
    this.selections.push(`companies`)
    return this

  }
  detailed(){
    this.selections.push(`detailed`)
    return this

  }
  employees(){
    this.selections.push(`employees`)
    return this
  }
  news(){
    this.selections.push(`news`)
    return this

  }
  profile(){
    this.selections.push(`profile`)
    return this

  }
  stock(){
    this.selections.push(`stock`)
    return this

  }
  timestamp(){
    this.selections.push(`timestamp`)
    return this

  }
}
