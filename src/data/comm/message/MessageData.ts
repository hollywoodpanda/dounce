'use strict'

import { SocketInfoData } from '../SocketInfoData'

export interface MessageData<T> {

    read: () => T

    sender: SocketInfoData

}