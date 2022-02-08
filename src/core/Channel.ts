'use strict'

import dgram, { Socket } from 'dgram'
import { ChannelData } from '../data/transfer/ChannelData'
import { SocketInfoData } from '../data/transfer/SocketInfoData'
import { Logger } from '../util/Logger'

export class Channel {

    protected logger: Logger

    readonly data: ChannelData

    protected socket!: Socket

    constructor (data: ChannelData) {
        this.data = data
        this.logger = new Logger('CHANNEL')
        this.startSocket()
    }

    private startSocket (): void {
        this.logger.info('Starting socket')
        this.socket = dgram.createSocket(this.data.kind)
        this.socket.on('error', this.data.onError)
        this.socket.on('listening', this.data.onListening)
        this.socket.on('message', this.data.onMessage)
        this.socket.on('close', this.data.onClose)
        this.logger.info('Socket started')
    }

    send (message: Buffer, to: SocketInfoData) {
        this.logger.info(`Sending message "${message.toString()}" to`, to)
        this.socket.send(message, to.port, to.address)
    }

}