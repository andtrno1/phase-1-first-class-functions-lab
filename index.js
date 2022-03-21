// Code your solution in this file!{}
 
const drivers =[];
const returnFirstTwoDrivers = drivers => drivers.slice(0,2);

const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier){
    return function(a){
        return fareMultiplier * a;

    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const fareQuintupler = createFareMultiplier(4);


function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}