// Code your solution in this file!
const returnFirstTwoDrivers=p1=> p1.slice(0,2);

const returnLastTwoDrivers=p1=>p1.slice(2);

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

// below function gets test to pass but cannot be used on next two functions
// function createFareMultiplier(num)
// {
//     return (num)=>num*num;
// }


// below function was created using solutions sheet as a guide  
function createFareMultiplier(num)
{
    return function (p1) 
    {
        return p1*num;
    }
}

const fareDoubler=createFareMultiplier(2);
const fareTripler=createFareMultiplier(3);



// below two function get tests to pass but do not meet requirements
// const fareDoubler = fare => fare*2;
// const fareTripler=fare=>fare*3;

function selectDifferentDrivers(array,func)
{
    return func(array);
}

