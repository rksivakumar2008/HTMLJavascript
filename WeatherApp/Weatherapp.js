'use strick'
var data;

function callWeatherAPI() {
    var domain = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var APIID = '&units=metric&APPID=9936c568bdbe8c69d5175e0469c66f49';
    //var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9936c568bdbe8c69d5175e0469c66f49';

    var cityNameValue = document.getElementById('cityName').value;
    if (cityNameValue.trim() == '') {
        alert('City can\'t be empty');
        document.getElementById('cityName').focus();
        return;
    }

    var url = domain + cityNameValue.trim() + APIID;
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();
    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', url, true);

    request.onload = function () {
        // Begin accessing JSON data here
        data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            document.getElementById('cityNameTitle').innerHTML = cityNameValue.trim();
            document.getElementById('tempValue').innerHTML = data.main.temp;
            document.getElementById('tempMaxValue').innerHTML = data.main.temp_max;
            document.getElementById('tempMinValue').innerHTML = data.main.temp_min;
            document.getElementById('humidityValue').innerHTML = data.main.humidity;
            document.getElementById('pressureValue').innerHTML = data.main.pressure;
            document.getElementById('feelsLikeValue').innerHTML = data.main.feels_like;
            document.getElementById('latitudeValue').innerHTML = data.coord.lat;
            document.getElementById('longitudeValue').innerHTML = data.coord.lon;
            document.getElementById('cityName').value = '';
        } else {
            console.log('error');
            alert('Error');
        }
    }
    // Send request
    request.send();
}



// Auto Complete - start

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

/*An array containing all the country names in the world:*/
//var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

var countries = ["AGARTALA", "AGRA", "AHMEDABAD", "AIZWAL", "AJMER", "ALLAHABAD", "ALLEPPEY", "ALIBAUG", "ALMORA", "ALSISAR", "ALWAR", "AMBALA", "AMLA", "AMRITSAR", "ANAND", "ANKLESHWAR", "ASHTAMUDI", "AULI", "AURANGABAD", "BADDI", "BADRINATH", "BALASINOR", "BALRAMPUR", "BAMBORA", "BANDHAVGARH", "BANDIPUR", "BANGALORE", "BARBIL", "BAREILLY", "BEHROR", "BELGAUM", "BERHAMPUR", "BETALGHAT", "BHARATPUR", "BHANDARDARA", "BHARUCH", "BHAVANGADH", "BHAVNAGAR", "BHILAI", "BHIMTAL", "BHOPAL", "BHUBANESHWAR", "BHUJ", "BIKANER", "BINSAR", "BODHGAYA", "BUNDI", "CALICUT", "CANANNORE", "CHAIL", "CHAMBA", "CHANDIGARH", "CHENNAI", "CHIKMAGALUR", "CHIPLUN", "CHITRAKOOT", "CHITTORGARH", "COIMBATORE", "COONOOR", "COORG", "CORBETT NATIONAL PARK", "CUTTACK", "DABHOSA", "DALHOUSIE", "DAMAN", "DANDELI", "DAPOLI", "DARJEELING", "DAUSA", "DEHRADUN", "DHARAMSHALA", "DIBRUGARH", "DIGHA", "DIU", "DIVE AGAR", "DOOARS", "DURGAPUR", "DURSHET", "DWARKA", "FARIDABAD", "FIROZABAD", "GANGOTRI", "GANGTOK", "GANAPATIPULE", "GANDHIDHAM", "GANDHINAGAR", "GARHMUKTESHWAR", "GARHWAL", "GAYA", "GHAZIABAD", "GOA", "GOKHARNA", "GONDAL", "GORAKHPUR", "GREATER NOIDA", "GULMARG", "GURGAON", "GURUVAYOOR", "GUWAHATI", "GWALIOR", "HALEBID", "HAMPI", "HANSI", "HARIDWAR", "HASSAN", "HOSPET", "HOSUR", "HUBLI", "HYDERABAD", "IDUKKI", "IGATPURI", "IMPHAL", "INDORE", "JABALPUR", "JAIPUR", "JAISALMER", "JALANDHAR", "JALGAON", "JAMBUGODHA", "JAMMU", "JAMNAGAR", "JAMSHEDPUR", "JAWHAR", "JHANSI", "JODHPUR", "JOJAWAR", "JORHAT", "JUNAGADH", "KABINI", "KALIMPONG", "KANATAL", "KANCHIPURAM", "KANHA", "KANPUR", "KANYAKUMARI", "KARGIL", "KARJAT", "KARNAL", "KARUR", "KARWAR", "KASARGOD", "KASAULI", "KASHIPUR", "KASHID", "KATRA", "KAUSANI", "KAZA", "KAZIRANGA", "KEDARNATH", "KHAJJIAR", "KHAJURAHO", "KHANDALA", "KHIMSAR", "KOCHIN", "KODAIKANAL", "KOLHAPUR", "KOLKATA", "KOLLAM", "KOTA", "KOTAGIRI", "KOTTAYAM", "KOVALAM", "KUFRI", "KUMBALGARH", "KULLU", "KUMARAKOM", "KUMBAKONAM", "KUMILY", "KURSEONG", "KUSHINAGAR", "LACHUNG", "LEH", "LAKSHADWEEP", "LONAVALA", "LOTHAL", "LUCKNOW", "LUDHIANA", "LUMBINI", "MADURAI", "MAHABALESHWAR", "MAHABALIPURAM", "MALAPPURAM", "MALPE", "MALSHEJ GHAT", "MALVAN", "MANALI", "MANDAVI", "MANDAWA", "MANESAR", "MARARRI", "MANDORMONI", "MANGALORE", "MANMAD", "MARCHULA", "MATHERAN", "MATHURA", "MCLEODGANJ", "MOHALI", "MOUNT ABU", "MORADABAD", "MORBI", "MUKTESHWAR", "MUMBAI", "MUNDRA", "MUNNAR", "MURUD JANJIRA", "MUSSOORIE", "MYSORE", "NADUKANI", "NAGAPATTINAM", "NAGARHOLE", "NAGAUR FORT", "NAGOTHANE", "NAGPUR", "NAHAN", "NAINITAL", "NALDHERA", "NANDED", "NAPNE", "NASIK", "NAVI MUMBAI", "NERAL", "NEW DELHI", "NILGIRI", "NOIDA", "OOTY", "ORCHHA", "OSIAN", "PACHMARHI", "PALAMPUR", "PALANPUR", "PALI", "PAHALGAM", "PALITANA", "PALLAKAD", "PANCHGANI", "PANCHKULA", "PANNA", "PANHALA", "PANVEL", "PANTNAGAR", "PARWANOO", "PATIALA", "PATHANKOT", "PATNA", "PATNITOP", "PELLING", "PENCH", "PHAGWARA", "PHALODI", "PINJORE", "PONDICHERRY", "POOVAR", "PORBANDAR", "PORT BLAIR", "POSHINA", "PRAGPUR", "PUNE", "PURI", "PUSKHAR", "PUTTAPARTHI", "RAI BAREILLY", "RAICHAK", "RAIPUR", "RAJASTHAN", "RAJGIR", "RAJKOT", "RAJPIPLA", "RAJSAMAND", "RAJAHMUNDRY", "RAMESHWARAM", "RAM NAGAR", "RAMGARH", "RANAKPUR", "RANCHI", "RANIKHET", "RANNY", "RANTHAMBORE", "RATNAGIRI", "RAVANGLA", "RISHIKESH", "RISHYAP", "ROHETGARH", "ROURKELA", "SAJAN", "SALEM", "SAPUTARA", "SASAN GIR", "SATTAL", "SAWAI MADHOPUR", "SAWANTWADI", "SECUNDERABAD", "SHILLONG", "SHIMLA", "SHIMLIPAL", "SHIRDI", "SHARAVANBELGOLA", "SHIVANASAMUDRA", "SIANA", "SILIGURI", "SILVASSA", "SIVAGANGA DISTRICT", "SOLAN", "SONAULI", "SRINAGAR", "SUNDERBAN", "SURAT", "TANJORE", "TAPOLA", "TARAPITH", "THANE", "THEKKADY", "THIRVANNAMALAI", "THIRUVANANTHAPURAM", "TIRUCHIRAPALLI", "TIRUPUR", "TIRUPATI", "THRISSUR", "UDAIPUR", "UDHAMPUR", "UDUPI", "UJJAIN", "UTTARKASHI", "VADODARA", "VAGAMON", "VARKALA", "VAPI", "VARANASI", "VELANKANNI", "VELLORE", "VERAVAL", "VIJAYAWADA", "VIKRAMGADH", "VISHAKAPATNAM", "WAYANAD", "WANKANER", "YAMUNOTRI", "YERCAUD", "YUKSOM"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("cityName"), countries);

// Auto Complete - end

