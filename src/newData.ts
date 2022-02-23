import express from 'express';
import csv from 'csvtojson';
import path from 'path';
import { promises as fspromises } from 'fs'; 
import { Buffer } from 'buffer';
import { PathLike } from 'fs';

const newData = express.Router();

newData.get('/', async (req: express.Request, res: express.Response) => {
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
            return res.send('invalid file type'),
            console.log(csvFile)
            
            } else {
                const jsonArray = await csv().fromFile(csvFile)
                let result = jsonArray.map((values) => {
                    if (values.phone === undefined) {
                        values.phone = 'Missing Data'
                    }
                    return values
                })
                res.send(result)
            }
        } catch (err) {
            console.log(err) 
        }
    });





export default newData