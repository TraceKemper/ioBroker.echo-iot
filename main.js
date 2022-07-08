'use strict';

const utils = require('@iobroker/adapter-core');


class EchoIot extends utils.Adapter {
    constructor(options) {
        super({
            ...options,
            name: 'echo-iot',
        });
        this.on('ready', this.onReady.bind(this));
        this.on('stateChange', this.onStateChange.bind(this));
        // this.on('objectChange', this.onObjectChange.bind(this));
        // this.on('message', this.onMessage.bind(this));
        this.on('unload', this.onUnload.bind(this));
    }


    async onReady() {
        if (!this.config.deviceName) {
            this.log.error(`AAAAAAAAAAAAAAAAAAAAAAAAAAA Device name is not set`);
        } else {
            this.log.debug(`AAAAAAAAAAAAAAAAAAAAAAAAAAA Device name is ${this.config.deviceName}$`);
        }

        if (!this.config.echoName) {
            this.log.error(`AAAAAAAAAAAAAAAAAAAAAAAAAAA Echo name is not set`);
        } else {
            this.log.debug(`AAAAAAAAAAAAAAAAAAAAAAAAAAA Echo name is ${this.config.echoName}$`);
        }

        if (!this.config.echoType) {
            this.log.error(`AAAAAAAAAAAAAAAAAAAAAAAAAAA Echo type is not set`);
        } else {
            this.log.debug(`AAAAAAAAAAAAAAAAAAAAAAAAAAA Echo type is ${this.config.echoType}$`);
        }

        if (!this.config.devices) {
            this.log.error(`AAAAAAAAAAAAAAAAAAAAAAAAAAA Echo type is not set`);
        } else {
            this.log.debug(`AAAAAAAAAAAAAAAAAAAAAAAAAAA Echo type is ${this.config.devices}$`);
        }
    }



    /**
     * Is called if a subscribed state changes
     * @param {string} id
     * @param {ioBroker.State | null | undefined} state
     */
    onStateChange(id, state) {
        if (state) {
            // The state was changed
            this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
        } else {
            // The state was deleted
            this.log.info(`state ${id} deleted`);
        }
    }


    onUnload(callback) {
        try {
            this.log.debug('cleaned everything up...');
            callback();
        } catch (e) {
            callback();
        }
    }
}

if (require.main !== module) {
    // Export the constructor in compact mode
    /**
     * @param {Partial<utils.AdapterOptions>} [options={}]
     */
    module.exports = (options) => new EchoIot(options);
} else {
    // otherwise start the instance directly
    new EchoIot();
}