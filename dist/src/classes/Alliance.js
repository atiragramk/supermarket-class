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
exports.Alliance = void 0;
class Alliance {
    constructor(name, header, type, members, requirements) {
        this.name = name;
        this.header = header;
        this.type = type;
        this.members = members;
        this.requirements = requirements;
    }
    giveRequirements() {
        return this.requirements;
    }
    acceptance(country) {
        return __awaiter(this, void 0, void 0, function* () {
            if (country.situation === "war") {
                this.giveMemberStatus(country);
                return;
            }
            const criteria = (yield country.makeApplication()).every((reform) => reform.status === "done");
            if (criteria) {
                this.giveMemberStatus(country);
            }
            else {
                throw new Error("You are not able to get member status of our alliance, you should make all requirements done");
            }
        });
    }
    giveMemberStatus(country) {
        if (this.name == "NATO") {
            throw new Error("We are accepted you soon...");
        }
        country.receiveStatus(this.name);
        this.members.push(country.name);
    }
}
exports.Alliance = Alliance;
