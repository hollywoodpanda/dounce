'use strict'

import { Channel } from './Channel'

export class Server extends Channel {

    bind (): void {

        this.socket.bind(
            this.data.info.port,
            this.data.info.address
        )

    }   

}