//returns the TornApi class for the user to use in their scripts
function api(apikey){
  if(!apikey) return {error:{error:`No Api Key`}}
  return new TornApi(apikey)
}
