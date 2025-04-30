//var random_name = require('node-random-name');
//npm installed by npmjs package https://www.npmjs.com/package/casual 

var casual = require('casual');

const random_log_values = () => {

    return {

        log_prefix: casual.random_element(['AB', 'AT', 'TN']),
        log_number: casual.integer(from = 5000, to = 5500),
        log_species: casual.random_element(['WO', 'RO']),
        log_length: casual.integer(from = 10, to = 20),
        log_diameter: casual.integer(from = 10, to = 20),
        log_grade: casual.random_value(['1A']),
        log_defect_length: casual.integer(from = 2, to = 10),
        log_defect_diameter: casual.integer(from = 2, to = 10),
        log_deduct_reason: casual.random_element(['CR', 'IT', 'KN', 'OS', 'RT', 'SH', 'SP', 'ST', 'SW']),
        symbol: casual.currency_symbol,
        grade_value: casual.random_value([1, 3, 42]),
        number: casual.ip,
        full_number: casual.integer(from = 1, to = 50000),
        vendor_value: casual.building_number,
        crew: casual.title,
        random: casual.random,
        as_min_max_lengh: casual.integer(from = 1, to = 7),
        as_min_max_diam: casual.integer(from = 31, to = 33),
        log_grade_2: casual.random_value(['2']),
        log_species_as: casual.random_element(['AS']),
        log_species_ro: casual.random_element(['RO']),
        log_species_wo: casual.random_element(['WO']),
        tag_receive: casual.random_value([5053]),
        tag_transfer: casual.random_value([5069]),
        tag_consumption: casual.random_value([200574]),
        tag_consumption_consum: casual.random_value([5400]),
        log_number: casual.integer(from = 5000, to = 5500),
        new_sequence_number: casual.integer(from = 9100, to = 9200),
        reprice_value: casual.integer(from = 1000, to = 1300),


    };
}
/*module.exports = {

    uom:{
  
      gv: '~Option: Gross Volume',
      nv: '~Option: Net Volume',
      fr: "~Option: Flat Rate",
    } }*/
/*const uom_random = () => { 
  
    return {
        
        uom_ids: casual.random_element([this.uom.gv, this.uom.nv, this.uom.fr]),
      
                 
    };
} */

console.log(casual.integer)

exports.random_log_values = random_log_values;

//exports.uom_random = uom_random;

