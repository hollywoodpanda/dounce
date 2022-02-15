'use strict'

import { Console } from 'console'
import { Component } from '../data/Component'
import { Entity } from '../data/Entity'



export class Engine<C extends Component, E extends Entity> {

    readonly entities: Map<E, [C]>

    constructor () {
        this.entities = new Map()
    }

    filter (...componentTypes: [C]): [E] {

        const filtered = new Array<C>()

        this.entities.forEach((components, entity) => {

            filtered.push(...components.filter(component => {
                try {
                    return Boolean(component as C)
                } catch (err) { return false }
            })

        })

        return filtered

    }

    private static instanceOf<T> (value: T, argType: Function): boolean {
        return value instanceof argType
    }

    private static ofType<C extends Component> (components: [C], arg: Function) {
        
        const typeName = /function\s*([^(]*)/i?.exec(String(arg))?.[1]?.toLocaleLowerCase()
        
        components.forEach(component => {

            let isOfType = typeof(component) === typeName

            if (!isOfType) {
                try {

                } catch (err) {}
            }

        })

    } 

}