// terdapat array employees
const cities = ["merak", "tangerang", "jakarta", "bogor", "cianjur", "cimahi", "bandung"];

const bogor = cities.indexOf("bogor")

const citiesSliced = [...cities.slice(0, bogor), ...cities.slice(bogor + 1)]

function citiesSlice(arrays, cityBetween) {

const jakarta = arrays.indexOf(cityBetween)

const kota = [...arrays.slice(0, jakarta), ...arrays.slice(jakarta + 1)]

return kota;

}

console.log(citiesSlice(cities,"jakarta"));

//['merak', 'tangerang', 'bogor', 'cianjur', 'cimahi', 'bandung']