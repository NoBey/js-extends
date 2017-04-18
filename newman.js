import People from './People'

export default class newMan extends People {
  constructor(name){
       super()
       this._name = name
   }

   hi(){
     console.log('newMan--->hi')
   }

   get name(){return this._name}

}
