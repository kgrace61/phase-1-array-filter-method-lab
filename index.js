function findMatching(drivers, name){
   const matchingDrivers =[]
   const lowerCaseName = name.toLowerCase();
    for (const driver of drivers){
        const lowerCaseDriverName=driver.toLowerCase();
        if (lowerCaseDriverName === lowerCaseName){
            matchingDrivers.push(driver);
        }
    }
    
return matchingDrivers;
}
function fuzzyMatch(drivers, name){
    const firstLettersMatch = []
    for (const driver of drivers){
        if (driver.startsWith(name)){
            firstLettersMatch.push(driver);
        }
    }
    return firstLettersMatch;
}
//takes array of drivers name and a string as arguements
//returns matching list of drivers (drivers that match
// the passed in name)
//case insensitive ??

function matchName(drivers, name) {
const doTheNamesMatch= []
for (const driver of drivers){
    if (driver.name === name){
    doTheNamesMatch.push(driver);
}
}
return doTheNamesMatch;
}
