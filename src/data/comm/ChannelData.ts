'use strict'

import { SocketInfoData } from './SocketInfoData'

export type Message = Buffer

export type ErrorCallback = (error: Error) => void 

export type MessageCallback = (msg: Message, info: SocketInfoData) => void

export type Callback = () => void

export type SocketKind = 'udp4' | 'udp6'

export interface ChannelData {

    readonly kind:  SocketKind

    readonly info: SocketInfoData

    readonly onError: ErrorCallback

    readonly onMessage: MessageCallback

    readonly onListening: Callback

    readonly onClose: Callback

}