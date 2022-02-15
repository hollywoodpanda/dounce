'use strict'

import { Vector2D } from '../../Vector2D'
import { MessageData } from './MessageData'


export type MoveMessageType = {
    velocity: Vector2D
}

export type MoveMessageData = MessageData<MoveMessageType>