import { President } from "./src/classes/President";
import { Country } from "./src/classes/Country";
import { Alliance } from "./src/classes/Alliance";
import { Requirements } from "./src/classes/Requirements";
import { Members } from "./src/classes/Members";

const president = new President('Zelensky', 'Ukraine');

const country = new Country('Ukraine', president, 'none', [], 'peace');
const header = new President('Charles Michel', 'Belguim')
const members = new Members();
const requirements = new Requirements();
const euroUnion = new Alliance('EU', header, 'economic', members.memberEU, requirements.reform);


const natoHeader = new President('Jens Stoltenberg', 'Norway');
const nato = new Alliance('NATO', natoHeader, 'military', members.memberNato, requirements.reform)
const putler = new President('vladimir', 'russia')
const neighbor = new Country('russia', putler, 'OKDB', [], 'infinity war');


country.receiveRequirements(euroUnion);
// country.checkNeighbors(neighbor);

const receiveStatus = async () => {
    // await nato.acceptance(country);
    await euroUnion.acceptance(country);
}

receiveStatus();
