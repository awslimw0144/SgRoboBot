import axios from 'axios';
import { WIKIPEDIA } from './enum/list_of_pages';

const page_url:string = WIKIPEDIA.LIST_OF_US_STATES;

// Kickstart
async function getStates_US(){
    const {data} = await axios.get(page_url);
    console.log(data);
}

// Mock Application
getStates_US();

// export {
//     getStates_US
// }