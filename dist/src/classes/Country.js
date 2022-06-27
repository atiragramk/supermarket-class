"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
class Country {
    constructor(name, president, alliances, reforms, situation) {
        this.name = name;
        this.president = president;
        this.alliances = alliances;
        this.reforms = reforms;
        this.situation = situation;
    }
    receiveRequirements(alliance) {
        this.reforms = alliance.giveRequirements();
    }
    makeApplication() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.makeReforms();
        });
    }
    receiveStatus(status) {
        this.alliances = status;
        console.log(status);
    }
    makeReforms() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.reforms.reduce((updated, reform) => {
                    reform.status = "done";
                    updated.push(reform);
                    return updated;
                }, []));
            }, 20000);
        });
        promise.then((value) => {
            this.reforms = value;
        });
        return promise;
    }
    checkNeighbors(neighbor) {
        if (neighbor.name === 'russia') {
            this.situation = 'war';
        }
    }
}
exports.Country = Country;
