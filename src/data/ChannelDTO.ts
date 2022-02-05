'use strict'

import { SocketInfoDTO } from './SocketInfoDTO'

export type Message = Buffer

export type ErrorCallback = (error: Error) => void 

export type MessageCallback = (msg: Message, info: SocketInfoDTO) => void

export type Callback = () => void

export type SocketKind = 'udp4' | 'udp6'

export interface ChannelDTO {

    readonly kind:  SocketKind

    readonly info: SocketInfoDTO

    readonly onError: ErrorCallback

    readonly onMessage: MessageCallback

    readonly onListening: Callback

    readonly onClose: Callback

}