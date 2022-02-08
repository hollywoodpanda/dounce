'use strict'

import { SocketInfoData } from './data/transfer/SocketInfoData'
import { Channel } from './core/Channel'
import { Server } from './core/Server'

const server = new Server({
    kind: 'udp6',
    info: {port: 2223, address: 'localhost'},
    onError: (error: Error) => console.error(error),
    onMessage: (msg: Buffer, info: SocketInfoData) => {
        console.info('Server received!', msg.toString(), info)
        server.send(
            Buffer.from(
                'I received your message, dude'
            ), 
            info
        )
    },
    onListening: () => console.log('listening'),
    onClose: () => console.log('closing')
})

server.bind()

const client = new Channel({
    kind: 'udp6',
    info: {port: 2221, address: 'localhost'},
    onError: (error: Error) => console.error(error),
    onMessage: (msg: Buffer, info: SocketInfoData) => {
        console.info(
            'Message received', 
            msg.toString(), 
            info
        )
    },
    onListening: () => console.log('listening'),
    onClose: () => console.log('closing')
})

setInterval(() => {

    client.send(Buffer.from('TOMA NO CU RAPA!'), server.data.info)

}, 1000)
