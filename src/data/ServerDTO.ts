'use strict'

import { SocketInfoDTO } from './SocketInfoDTO'

export type ErrorCallback = (error: Error) => void 

export type MessageCallback = (msg: string, info: SocketInfoDTO) => void

export type Callback = () => void

export type SocketKind = 'udp4' | 'udp6'

export interface ServerDTO {

    readonly kind:  SocketKind

    readonly port: number

    readonly onError: ErrorCallback

    readonly onMessage: MessageCallback

    readonly onListening: Callback

    readonly onClose: Callback

    readonly send: MessageCallback

}