function findMatching(drivers, string) {
    const driverData = drivers.filter(checkMatchingDriver)

    function checkMatchingDriver(driver) {
        return driver === string || driver === string.toLowerCase()
    }
    return driverData
}

function fuzzyMatch(drivers, string) {
    const driverData = drivers.filter(checkMatchingLetter)

    function checkMatchingLetter(letters) {
        return letters.startsWith(string)
    }
    return driverData
}

function matchName (drivers, string) {
    const driverData = drivers.filter(checkMatchingName) 

    function checkMatchingName (driver) {
        return driver.name === string
    }
    return driverData
}