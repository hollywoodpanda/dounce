'use strict'

import { ServerDTO } from '../data/ServerDTO'

import dgram, { Socket } from 'dgram'
import { Logger } from '../util/Logger'

export class Server {

    private logger: Logger

    private data: ServerDTO

    private socket!: Socket

    private constructor (data: ServerDTO) {
        this.data = data
        this.logger = new Logger('Server')
    }

    private initSocket () : void {

        this.logger.info('Initializing socket...')

        this.socket = dgram.createSocket(this.data.kind)

        this.socket.on('error', this.data.onError)
        this.socket.on('listening', this.data.onListening)
        this.socket.on('message', this.data.onMessage)
        this.socket.on('close', this.data.onClose)

        this.logger.info('Socket initialized')

    }

    bind () {
        this.logger.info(`Binding to ${this.data.port}`)
        this.socket.bind(this.data.port)
    }

    static create (data: ServerDTO) : Server {

        const server = new Server(data)

        server.logger.info('Starting server %j', data)

        server.initSocket()

        return server

    }

}