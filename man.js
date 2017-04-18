import People from './People'

export default class Man extends People {
  constructor(name){
       super()
       this._name = name
   }

  get name(){return this._name}


}
