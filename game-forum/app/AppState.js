import Post from "./Models/Post.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  user = {}
  profile = {}
  /** @type {Value[]} */
  values = []
  /** @type {Post[]} */
  posts = [new Post({title:'test post', user:"tester", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur excepturi labore quod eligendi tenetur fuga maiores voluptate natus expedita libero, omnis dicta, ratione molestias neque nihil dolorum! Veritatis, recusandae."})]
  activePost = null

  comments = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})


