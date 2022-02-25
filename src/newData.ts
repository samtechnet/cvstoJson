import express from 'express';
import csv from 'csvtojson';
import path from 'path';
import { promises as fspromises } from 'fs'; 
import { Buffer } from 'buffer';
import { PathLike } from 'fs';
import {open} from 'fs/promises'

const convert = express.Router();

convert.get('/', async  (req: express.Request, res: express.Response) => {
    try {
        // const csvFile: any = await fspromises.open('../', "a+")
        // if (!('.csv'.split('.').slice(1).join('.') === '.csv')){
        //     res.send('invalid file ')
        // } else {
        //     const jsonArray = await csv().fromFile(csvFile)
        //         let result = jsonArray.map((values) => {
        //             if (values.phone === undefined) {
        //                 values.phone = 'Missing Data'
        //             }
        //             return values
        //         })
        //         res.send(result)
        //     }
        // }catch (err) {
        //         console.log(err) 
        //     }
       
       const csvFile = path.join(`${__dirname}/data.csv`)
        console.log(__dirname)
        if (!(path.extname(csvFile) === '.csv')) {
            return res.send('invalid file type')
            } else {
                const jsonArray = await csv().fromFile(csvFile)
                let result = jsonArray.map((values) => {
                    if (values.phone === undefined) {
                        values.phone = 'Missing Data'
                    }
                    return values
                })
            await fspromises.writeFile('newDate.json', JSON.stringify(result, null, 2))
            // try {
            //     const newData = null
            // }
            //const newData = await fspromises.open('NewDate.json', 'a+');
            res.send(result)
            //console.log(newData);
            //await newData.write(JSON.stringify(newData, null, 2));
            //JSON.stringify(result, null, 2);
            //await newData.readFile("utf8")
            
            //console.log(result);
           //await fspromises.close()
        }
        //await fspromises.close(newData)
        } catch (err) {
            console.log(err) 
        }
    });


//     const myFile = await fsPromises.open('myfile.txt', a+);
//   await myFile.write('add text');

    // jsonReader('/NewData.csv', (err, data) => {
    //     if(err) {
    //         console.log(err)
    //     }else {
    //         await fs.writeFile('NewData.csv', JSON.stringify(`${result}`), (err: any) =>  {
    //             if (err) {
    //                 console.log(err);
    //             } else {
    //                 console.log('File successfully written')
    //                 }
    //             })

    //     }
        

    // })
      
export default convert