const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let counts = {}; 
  let result = []; 

  for (let name of names) {
    if (counts[name] !== undefined) { 
      
      let newName;
      let k = counts[name];
      
      do {
        newName = `${name}(${k})`;
        k++; 
      } while (counts[newName] !== undefined);

      counts[name]++; 
      counts[newName] = 1; 
      result.push(newName); 
    } else {
      counts[name] = 1;
      result.push(name);
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
