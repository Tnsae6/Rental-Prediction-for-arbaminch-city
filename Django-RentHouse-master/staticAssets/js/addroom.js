
var form_field = document.getElementsByTagName('input');
form_field[1].placeholder = 'Owner Name..';
form_field[2].placeholder = 'Owner Email..';
form_field[3].placeholder = 'Owner Mobile No...';
form_field[11].placeholder = 'Total bedrooms...';
form_field[12].placeholder = 'Price...';
form_field[13].placeholder = 'Enter Nearest City Name...';
form_field[14].placeholder = 'House number';
form_field[15].placeholder = 'specific name of area...';



var stateObject = {
    "Ethiopia": {
        "SNNP": ["Arba-Minch" ]
        
    }
}

window.onload = function () {
    var county = document.getElementById("country"),
        state = document.getElementById("state"),
        district = document.getElementById("district");
    for (var country in stateObject) {
        county.options[county.options.length] = new Option(country, country);
    }
    county.onchange = function () {
        state.length = 1; // remove all options bar first
        district.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        for (var stateName in stateObject[this.value]) {
            state.options[state.options.length] = new Option(stateName, stateName);
        }
    }
    county.onchange(); // reset in case page is reloaded
    state.onchange = function () {
        district.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        var districtName = stateObject[county.value][this.value];
        for (var i = 0; i < districtName.length; i++) {
            district.options[district.options.length] = new Option(districtName[i], districtName[i]);
        }
    }
}