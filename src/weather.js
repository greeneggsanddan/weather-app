export default class Weather {
  constructor (location, region, country, local_time, current_temp, current_condition, dates, temps, conditions) {
    this.location = location;
    this.region = region;
    this.country = country;
    this.local_time = local_time;
    this.current_temp = current_temp;
    this.current_condition = current_condition;
    this.dates = dates;
    this.temps = temps;
    this.conditions = conditions;
  }
}