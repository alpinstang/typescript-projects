import { User } from './user';
import { Company } from './company';
import { CustomMap } from './CustomMap';

const customMap = new CustomMap('map');
const user = new User();
const company = new Company();

customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
