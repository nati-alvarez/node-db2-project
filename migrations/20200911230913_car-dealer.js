
exports.up = function(knex) {
    return knex.schema.dropTableIfExists("car-dealer").then(()=>{
        return knex.schema.createTable("car-dealer", table=>{
            table.text("vin").primary().notNullable();
            table.text("make").notNullable();
            table.text("model").notNullable();
            table.decimal("mileage").notNullable();
            table.text("transmission_type");
            table.text("title_status");
        })
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("car-dealer")
};
