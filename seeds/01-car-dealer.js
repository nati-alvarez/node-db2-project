
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').del()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        {vin: "123DD54JS", make: "Toyota", model: "Camry", mileage: 12000.30, transmission_type: "automatic", title_status: "clean"},
        {vin: 'ASA90ASDJADA0', make: "Honda", model: "Civic", mileage: 4000, transmission_type: "manual"},
        {vin: "A4KD90SDS2", make: "Dodge", model: "Charger", mileage: 0}
      ]);
    });
};
