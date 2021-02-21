import axios from 'axios';
import cheerio from 'cheerio';
import { WIKIPEDIA, FINVIZ } from './enum/list_of_pages';

const page_url:string = WIKIPEDIA.LIST_OF_US_STATES;
const finviz:string = FINVIZ.MAIN_PAGE;

// Kickstart
async function getTopGainer(){
    const {data} = await axios.get(finviz);
    const $ = cheerio.load(data);
    const table_gainers = $("td[width='50%']")[0];
    const table_losers = $("td[width='50%'][valign='top']")[1];
    const tickers:{}[] = [];
    const labels:string[] = [
        "Ticker",
        "Last",
        "Change",
        "Volume",
        "Signal"
    ];

    $(table_gainers).find("tr").slice(1).each((i, row)=>{
        let tickerObj:any = {}; 
        $(row).find("td").filter("${this}.text()").each((j,col)=>{
            const label = labels[j];
            const text = $(col).text();
            console.log($(col).text());
        });
        console.log(" ");
    })
}

// async function getStates_US(){
//     const {data} = await axios.get(page_url);
//     const $ = cheerio.load(data);
//     const table = $('caption:contains("States of the United States of America")').parent();
//     const states:{}[] = [];
//     const labels:string[] = [
//         "code",
//         "captial",
//         "largest",
//         "ratification",
//         "populations",
//         "total_area_miles",
//         "total_area_km",
//         "land_area_miles",
//         "land_area_km",
//         "water_area_miles",
//         "water_area_km",
//         "number_of_reps"
//     ];

//     // Start of real action //
//     table.find('tbody tr').slice(2).each((rowIndex, element)=>{
//         const $rowElement = $(element).find("td");
//         console.log("ROW " + ++rowIndex + "======================================");
//         $rowElement.each((colIndex, colElement)=>{
//             console.log("Col " + ++colIndex + " shows " + $(colElement).find("a"));
//         });
//         console.log("======================================");
//         // const nRowIndex:number = ++rowIndex;
//         // const $row = $(element);
//         // const state:any = {};
//         // $row.find('td').each((colIndex, colElement)=>{
//         //     const $col = $(colElement);
//         //     let offset:number;
//         //     if(colIndex === 1 && $col.attr('colspan')==='2'){
//         //         offset = 0;
//         //     } else {
//         //         offset = 1;
//         //     }
//         //     console.log("OFFSET : "+ offset);
//         //     const label = labels[colIndex + offset];
//         //     state[label] = $col.text().trim();
//         // });
//         // states.push(state);
//     });
//     // console.log(states);
// }

// Mock Applications
getTopGainer();

// ToDo Stuff
// export {
//     getStates_US
// }