# TornAPIWrapperGAS
An API wrapper for use in GoogleAppsScript (GAS) to interact with the TORN API

How To Setup
Setup a GAS project. paste the files found in Folder: Code into the project
Deploy the project as a Libary
Go to project settings and graab your script ID
now the libary is setup you can use it in your scripts by adding it as a libary with the script ID

How To Use

```js
const api = TornApi.api(APIKEY)

function getUser(userId = 0){
  let userCall = api.user(userId).fetch()
}
```
