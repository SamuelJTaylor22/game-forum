import Post from "./Models/Post.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  user = {}
  profile = {}
  /** @type {Post[]} */
  posts = [new Post({ title: 'I hate every elf i see from night elf a to blood elf b', user: "Noob12", category: "Misc", body: "I got killed by seven elves yesterday and now I hate all elves.  Those pointy eared jerks stole my wife and killed my dog.  Death to all elves everywhere all the time!" }), new Post({ title: 'Git Good', user: "Elitist34", category: "Raid", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur excepturi labore quod eligendi tenetur fuga maiores voluptate natus expedita libero, omnis dicta, ratione molestias neque nihil dolorum! Veritatis, recusandae." })]
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


