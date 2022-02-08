'use strict'

import { Actor } from '../../data/Actor'
import { Server } from '../Server'

export class WorldServer extends Server {

    readonly actors: [Actor] = []

    addActor (actor: Actor) {
        this.actors.push(actor)
    }

    removeActor (actor: Actor) {
        this.actors.splice(this.actors.indexOf(actor), 1)
    }

}