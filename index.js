// Code your solution in this file!
const returnFirstTwoDrivers=p1=> p1.slice(0,2);

const returnLastTwoDrivers=p1=>p1.slice(2);

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num)
{
    return (num)=>num*num;
}

// const fareDoubler = fare =>
// {
//     const doubledFare = createFareMultiplier(fare);
//     return doubledFare; 
// }




