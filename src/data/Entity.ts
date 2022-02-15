'use strict'

import { Component } from './Component'

export class Entity {

    readonly id: number
    readonly components: [Component]

    constructor (id: number) {
        this.id = id
        this.components = [0]
    }
    
    add (component: Component) {
        this.components.push(component)
    }

    remove (component: Component) {
        this.components.splice(this.components.indexOf(component), 1)
    }

    contains (component: Component) {
        this.components.indexOf(component) >= 0
    }

}