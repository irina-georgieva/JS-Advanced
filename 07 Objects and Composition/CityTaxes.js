function cityInfo(city, population, treasury) {

    let record = {
        name: city,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent/100);
        },
        applyRecession(percent) {
            this.treasury -= Math.floor(this.treasury * percent/100);
        },
    };

    return record;
}