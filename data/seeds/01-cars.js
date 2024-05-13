// STRETCH
const cars = [
    {
        vin: '11111111111111101',
        make: 'toyota',
        model: 'MK4 supra',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '11111111111110002',
        make: 'nissan',
        model: 'R34 Skyline GTR',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '11111111111110003',
        make: 'honda',
        model: 's2000',
        mileage: 250000,
        title: 'clean',
        
    },
    {
        vin: '11111111111110004',
        make: 'mazda',
        model: 'rx7 FD3S',
        mileage: 215000,
        
    }
]

exports.seed = function(knex) {
    return knex('cars').truncate()
        .then(function() {
            return knex('cars').insert(cars)
        })
}