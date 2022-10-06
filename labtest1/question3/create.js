// import the 'fs' module to allow the program to interact with the file system.
import fs from 'fs';


//  check if the 'Logs' directory exists. If it does not, create it.
if(!fs.existsSync("Logs")) {
    fs.mkdirSync("Logs");
}

// change the current working directory to 'Logs'.
process.chdir("Logs");


// run a loop that will iterate 10 times.
for(let i = 0; i < 10; i++) {

    //  defines a variable called 'filename' that is equal to 'log' plus the iteration number of the loop.
    // So, the first time the loop runs, 'filename' will be equal to 'log0.txt'.
    const filename = `log${i}.txt`;

    // writes the string 'some text' to the file specified by 'filename'.
    fs.writeFile(filename, 'some text', (err) => {
        if (err) {
            throw err;
        }
    });
    console.log(filename);
}