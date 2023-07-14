export default class Weather {
  constructor (location, region, country, local_time, is_day, current_temp, current_condition, current_code, dates, temps, conditions, codes) {
    this.location = location;
    this.region = region;
    this.country = country;
    this.local_time = local_time;
    this.is_day = is_day;
    this.current_temp = current_temp;
    this.current_condition = current_condition;
    this.current_code = current_code;
    this.dates = dates;
    this.temps = temps;
    this.conditions = conditions;
    this.codes = codes
  }
}