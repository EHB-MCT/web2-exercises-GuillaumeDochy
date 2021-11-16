import * as fs from 'fs/promises';

//get the data from the file
let bgs = await fs.readFile("boardgames.json");
let data = JSON.parse(bgs);

//loop over the boardgames
for (let i in data) {
    //create file name
    let filename = `${i}.json`
    //stringify value
    let bg = JSON.stringify(data[i]);
    //save to file
    await fs.writeFile(filename, bg);
}