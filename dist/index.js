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
const President_1 = require("./src/classes/President");
const Country_1 = require("./src/classes/Country");
const Alliance_1 = require("./src/classes/Alliance");
const Requirements_1 = require("./src/classes/Requirements");
const Members_1 = require("./src/classes/Members");
const president = new President_1.President('Zelensky', 'Ukraine');
const country = new Country_1.Country('Ukraine', president, 'none', [], 'peace');
const header = new President_1.President('Charles Michel', 'Belguim');
const members = new Members_1.Members();
const requirements = new Requirements_1.Requirements();
const euroUnion = new Alliance_1.Alliance('EU', header, 'economic', members.memberEU, requirements.reform);
const natoHeader = new President_1.President('Jens Stoltenberg', 'Norway');
const nato = new Alliance_1.Alliance('NATO', natoHeader, 'military', members.memberNato, requirements.reform);
const putler = new President_1.President('vladimir', 'russia');
const neighbor = new Country_1.Country('russia', putler, 'OKDB', [], 'infinity war');
country.receiveRequirements(euroUnion);
// country.checkNeighbors(neighbor);
const receiveStatus = () => __awaiter(void 0, void 0, void 0, function* () {
    // await nato.acceptance(country);
    yield euroUnion.acceptance(country);
});
receiveStatus();
