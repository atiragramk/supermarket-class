"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Requirements = void 0;
class Requirements {
    constructor() {
        this.reforms = [
            { name: 'judge reform', priority: 'urgent', status: 'pending' },
            { name: 'medical reform', priority: 'high', status: 'pending' },
            { name: 'land reform', priority: 'low', status: 'pending' },
            { name: 'bussiness reform', priority: 'high', status: 'pending' },
            { name: 'public administration reform', priority: 'low', status: 'pending' },
        ];
    }
    get reform() {
        return this.reforms;
    }
}
exports.Requirements = Requirements;
