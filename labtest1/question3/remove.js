import fs from 'fs'; 
import path from 'path';

// checking if there is a file name "Logs"
if (fs.existsSync('Logs')) {
  // reading what is inside the "Logs"
  fs.readdir('Logs', (err, files) => {
    // error handling 
    if (err) throw err;
    // iterating over the files
    for (const file of files) {
      // creating the filepath
      const filepath = path.join('Logs', file);
      // deleting the files
      fs.unlink(filepath, (err) => {
        if (err) throw err;
      });
      // printing the file names
      console.log(`delete files...${file}`);
    }
    // deleting the Logs directory
    fs.rmdirSync('Logs');
  });
}