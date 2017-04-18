import man from './man'
import newMan from './newman'

const me = new man('NoBey')
const you = new newMan('pylon')


me.hi() // 输出 hi
me.say('hello') // hello
console.log(me.name) // NoBey

you.hi() // newMan--->hi
you.say('ok') // ok
console.log(you.name) // pylon
