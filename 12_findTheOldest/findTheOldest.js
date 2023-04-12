const findTheOldest = function(people) {
    const sorted = people.sort((lastPerson, nextPerson) => {
        let currentYear = new Date().getFullYear();

        let lastAge = 0;
        if (lastPerson.yearOfDeath) {
            lastAge = lastPerson.yearOfDeath - lastPerson.yearOfBirth;
        } else {
            lastAge = currentYear - lastPerson.yearOfBirth;
        }

        let nextAge = 0;
        if (nextPerson.yearOfDeath) {
            nextAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
        } else {
            nextAge = currentYear - nextPerson.yearOfBirth;
        }

        return lastAge < nextAge ? 1 : -1;
    });

    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
