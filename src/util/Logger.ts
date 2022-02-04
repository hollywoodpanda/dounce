'use strict'

export type LoggerKind = 'wtf' | 'error' | 'warning' | 'log' | 'info'

export type Props = (unknown | undefined)[]

export class Logger {

    readonly name: string

    constructor (name: string) {
        this.name = name
    }

    private prefix (kind: LoggerKind, message: string): string {
        return `${new Date().toLocaleString()} ${kind.toUpperCase()} [${this.name}] ${message}`
    }

    info (message: string, ...props: Props) {
        console.info(this.prefix('info', message), ...props)
    }

    log (message: string, ...props: Props) {
        console.log(this.prefix('log', message), ...props)
    }

    warn (message: string, ...props: Props) {
        console.warn(this.prefix('warning', message), ...props)
    } 

    error (message: string, ...props: Props) {
        console.error(this.prefix('error', message), ...props)
    }

    wtf (message: string, ...props: Props) {
        console.error(this.prefix('wtf', message), ...props)
    }

}