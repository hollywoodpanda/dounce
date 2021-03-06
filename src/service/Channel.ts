'use strict'

import dgram, { Socket } from 'dgram'
import { ChannelDTO } from '../data/ChannelDTO'
import { SocketInfoDTO } from '../data/SocketInfoDTO'
import { Logger } from '../util/Logger'

export class Channel {

    protected logger: Logger

    readonly data: ChannelDTO

    protected socket!: Socket

    constructor (data: ChannelDTO) {
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

    send (message: Buffer, to: SocketInfoDTO) {
        this.logger.info(`Sending message "${message.toString()}" to`, to)
        this.socket.send(message, to.port, to.address)
    }

}