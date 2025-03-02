import {faker} from '@faker-js/faker';
function createRandomeCarList(){
    return {
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        
        image:'https://media.cnn.com/api/v1/images/stellar/prod/2024-08-17t153837z-1112799281-rc2rh9a4cjxd-rtrmadp-3-ukraine-crisis-russia-tesla.JPG?c=16x9&q=w_1280,c_fill',
        miles:1000,
        gearType:'Automatic',
        price:faker.finance.amount({min:4000, max:20000})
    };
}

const carList=faker.helpers.multiple(createRandomeCarList,{
    count:7
})

export default{
    carList
}