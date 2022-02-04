'use strict'

import { SocketInfoDTO } from './data/SocketInfoDTO'
import { Server } from './service/Server'

const server = Server.create({
    kind: 'udp4',
    port: 2221,
    onError: (error: Error) => console.error(error),
    onMessage: (msg: string, info: SocketInfoDTO) => {
        console.info(msg, info)
    },
    onListening: () => console.log('listening'),
    onClose: () => console.log('closing'),
    send: (msg: string, info: SocketInfoDTO) => {
        console.info(`Sending ${msg}`, info)
    }
})

server.bind()
