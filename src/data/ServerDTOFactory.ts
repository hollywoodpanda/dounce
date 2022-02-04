'use strict'

import { Callback, ErrorCallback, MessageCallback, ServerDTO, SocketKind } from './ServerDTO'

export class ServerDTOFactory {

    static create (
        kind: SocketKind,
        port = 2222,
        onError: ErrorCallback,
        onMessage: MessageCallback,
        onListening: Callback,
        onClose: Callback,
        send: MessageCallback
    ) : ServerDTO {

        return {
            kind,
            port,
            onError,
            onMessage,
            onListening,
            onClose,
            send
        }

    }

}