var fs = require('fs').promises;

async function readTheFIle(filePath) {
    try {
        const data = await fs.readFile(filePath);
    } catch (error) {
        if (error.code == 'ENOENT') {
            await fs.writeFile(filePath, '');
            console.log("file doesnt exist , creating file ...")
        } else {
            console.log("failed , file permission ..")
        }
    }
}

readTheFIle('hallo.txt');