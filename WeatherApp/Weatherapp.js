'use strict'

var countries = ["AGARTALA", "AGRA", "AHMEDABAD", "AIZWAL", "AJMER", "ALLAHABAD", "ALLEPPEY", "ALIBAUG", "ALMORA", "ALSISAR", "ALWAR", "AMBALA", "AMLA", "AMRITSAR", "ANAND", "ANKLESHWAR", "ASHTAMUDI", "AULI", "AURANGABAD", "BADDI", "BADRINATH", "BALASINOR", "BALRAMPUR", "BAMBORA", "BANDHAVGARH", "BANDIPUR", "BANGALORE", "BARBIL", "BAREILLY", "BEHROR", "BELGAUM", "BERHAMPUR", "BETALGHAT", "BHARATPUR", "BHANDARDARA", "BHARUCH", "BHAVANGADH", "BHAVNAGAR", "BHILAI", "BHIMTAL", "BHOPAL", "BHUBANESHWAR", "BHUJ", "BIKANER", "BINSAR", "BODHGAYA", "BUNDI", "CALICUT", "CANANNORE", "CHAIL", "CHAMBA", "CHANDIGARH", "CHENNAI", "CHIKMAGALUR", "CHIPLUN", "CHITRAKOOT", "CHITTORGARH", "COIMBATORE", "COONOOR", "COORG", "CORBETT NATIONAL PARK", "CUTTACK", "DABHOSA", "DALHOUSIE", "DAMAN", "DANDELI", "DAPOLI", "DARJEELING", "DAUSA", "DEHRADUN", "DHARAMSHALA", "DIBRUGARH", "DIGHA", "DIU", "DIVE AGAR", "DOOARS", "DURGAPUR", "DURSHET", "DWARKA", "FARIDABAD", "FIROZABAD", "GANGOTRI", "GANGTOK", "GANAPATIPULE", "GANDHIDHAM", "GANDHINAGAR", "GARHMUKTESHWAR", "GARHWAL", "GAYA", "GHAZIABAD", "GOA", "GOKHARNA", "GONDAL", "GORAKHPUR", "GREATER NOIDA", "GULMARG", "GURGAON", "GURUVAYOOR", "GUWAHATI", "GWALIOR", "HALEBID", "HAMPI", "HANSI", "HARIDWAR", "HASSAN", "HOSPET", "HOSUR", "HUBLI", "HYDERABAD", "IDUKKI", "IGATPURI", "IMPHAL", "INDORE", "JABALPUR", "JAIPUR", "JAISALMER", "JALANDHAR", "JALGAON", "JAMBUGODHA", "JAMMU", "JAMNAGAR", "JAMSHEDPUR", "JAWHAR", "JHANSI", "JODHPUR", "JOJAWAR", "JORHAT", "JUNAGADH", "KABINI", "KALIMPONG", "KANATAL", "KANCHIPURAM", "KANHA", "KANPUR", "KANYAKUMARI", "KARGIL", "KARJAT", "KARNAL", "KARUR", "KARWAR", "KASARGOD", "KASAULI", "KASHIPUR", "KASHID", "KATRA", "KAUSANI", "KAZA", "KAZIRANGA", "KEDARNATH", "KHAJJIAR", "KHAJURAHO", "KHANDALA", "KHIMSAR", "KOCHIN", "KODAIKANAL", "KOLHAPUR", "KOLKATA", "KOLLAM", "KOTA", "KOTAGIRI", "KOTTAYAM", "KOVALAM", "KUFRI", "KUMBALGARH", "KULLU", "KUMARAKOM", "KUMBAKONAM", "KUMILY", "KURSEONG", "KUSHINAGAR", "LACHUNG", "LEH", "LAKSHADWEEP", "LONAVALA", "LOTHAL", "LUCKNOW", "LUDHIANA", "LUMBINI", "MADURAI", "MAHABALESHWAR", "MAHABALIPURAM", "MALAPPURAM", "MALPE", "MALSHEJ GHAT", "MALVAN", "MANALI", "MANDAVI", "MANDAWA", "MANESAR", "MARARRI", "MANDORMONI", "MANGALORE", "MANMAD", "MARCHULA", "MATHERAN", "MATHURA", "MCLEODGANJ", "MOHALI", "MOUNT ABU", "MORADABAD", "MORBI", "MUKTESHWAR", "MUMBAI", "MUNDRA", "MUNNAR", "MURUD JANJIRA", "MUSSOORIE", "MYSORE", "NADUKANI", "NAGAPATTINAM", "NAGARHOLE", "NAGAUR FORT", "NAGOTHANE", "NAGPUR", "NAHAN", "NAINITAL", "NALDHERA", "NANDED", "NAPNE", "NASIK", "NAVI MUMBAI", "NERAL", "NEW DELHI", "NILGIRI", "NOIDA", "OOTY", "ORCHHA", "OSIAN", "PACHMARHI", "PALAMPUR", "PALANPUR", "PALI", "PAHALGAM", "PALITANA", "PALLAKAD", "PANCHGANI", "PANCHKULA", "PANNA", "PANHALA", "PANVEL", "PANTNAGAR", "PARWANOO", "PATIALA", "PATHANKOT", "PATNA", "PATNITOP", "PELLING", "PENCH", "PHAGWARA", "PHALODI", "PINJORE", "PONDICHERRY", "POOVAR", "PORBANDAR", "PORT BLAIR", "POSHINA", "PRAGPUR", "PUNE", "PURI", "PUSKHAR", "PUTTAPARTHI", "RAI BAREILLY", "RAICHAK", "RAIPUR", "RAJASTHAN", "RAJGIR", "RAJKOT", "RAJPIPLA", "RAJSAMAND", "RAJAHMUNDRY", "RAMESHWARAM", "RAM NAGAR", "RAMGARH", "RANAKPUR", "RANCHI", "RANIKHET", "RANNY", "RANTHAMBORE", "RATNAGIRI", "RAVANGLA", "RISHIKESH", "RISHYAP", "ROHETGARH", "ROURKELA", "SAJAN", "SALEM", "SAPUTARA", "SASAN GIR", "SATTAL", "SAWAI MADHOPUR", "SAWANTWADI", "SECUNDERABAD", "SHILLONG", "SHIMLA", "SHIMLIPAL", "SHIRDI", "SHARAVANBELGOLA", "SHIVANASAMUDRA", "SIANA", "SILIGURI", "SILVASSA", "SIVAGANGA DISTRICT", "SOLAN", "SONAULI", "SRINAGAR", "SUNDERBAN", "SURAT", "TANJORE", "TAPOLA", "TARAPITH", "THANE", "THEKKADY", "THIRVANNAMALAI", "THIRUVANANTHAPURAM", "TIRUCHIRAPALLI", "TIRUPUR", "TIRUPATI", "THRISSUR", "UDAIPUR", "UDHAMPUR", "UDUPI", "UJJAIN", "UTTARKASHI", "VADODARA", "VAGAMON", "VARKALA", "VAPI", "VARANASI", "VELANKANNI", "VELLORE", "VERAVAL", "VIJAYAWADA", "VIKRAMGADH", "VISHAKAPATNAM", "WAYANAD", "WANKANER", "YAMUNOTRI", "YERCAUD", "YUKSOM"];
var responseData;
var dispValues = [['','','',''],['','','',''],['','','','']];
var cityLat, cityLon;
var iconURL = "http://openweathermap.org/img/wn/"
var iconFileName = "01d";
var iconFileNameExt = "@2x.png";

function callWeatherAPI() {
    //var urlCurrent = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9936c568bdbe8c69d5175e0469c66f49'; // for current day
    //var urlDaily = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=9936c568bdbe8c69d5175e0469c66f49';
    //var urlHist = 'http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&dt=1592996400&appid=9936c568bdbe8c69d5175e0469c66f49';

    var domainCurrent = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var APIID = '&units=metric&APPID=9936c568bdbe8c69d5175e0469c66f49';

    var cityNameValue = document.getElementById('cityName').value.trim().toUpperCase();
    if (cityNameValue == '') {
        alert('City can\'t be empty');
        document.getElementById('cityName').focus();
        return;
    }

    var urlMain = domainCurrent + cityNameValue + APIID;
    customizedHttpCall(urlMain, 1);         // Today
    cityLat = responseData.coord.lat;
    cityLon = responseData.coord.lon;
    var ydayUnixTimestamp = responseData.dt - 86400;    // seconds equal to 1 day is subtracted to get y'day date

    urlMain = 'http://api.openweathermap.org/data/2.5/onecall/timemachine?lat='; 
    urlMain = urlMain + cityLat + '&lon=' + cityLon + '&dt=' + ydayUnixTimestamp + APIID;
    customizedHttpCall(urlMain, 0);         // Yesterday

    urlMain = 'https://api.openweathermap.org/data/2.5/onecall?lat=';
    urlMain = urlMain + cityLat + '&lon=' + cityLon + '&exclude=current,minutely,hourly' + APIID;
    customizedHttpCall(urlMain, 2);         // Tomorrow

    displayElements();
    document.getElementById('cityNameTitle').innerHTML = cityNameValue;
    document.getElementById('cityName').value = '';
    addNewCityToArray (cityNameValue);
}

function displayElements() {
    document.getElementById('dateYdValue').innerHTML = dispValues[0][0];
    document.getElementById('tempYdValue').innerHTML = dispValues[0][1] + ' °C';
    document.getElementById('descriptionYdValue').innerHTML = dispValues[0][2] + ' ';
    iconFileName = dispValues[0][3];
    document.getElementById('myImgYd').src = iconURL + iconFileName + iconFileNameExt;

    document.getElementById('dateValue').innerHTML = dispValues[1][0];
    document.getElementById('tempValue').innerHTML = dispValues[1][1] + ' °C';
    document.getElementById('descriptionValue').innerHTML = dispValues[1][2] + ' ';
    iconFileName = dispValues[1][3];
    document.getElementById('myImg').src = iconURL + iconFileName + iconFileNameExt;

    document.getElementById('dateTwValue').innerHTML = dispValues[2][0];
    document.getElementById('tempTwValue').innerHTML = dispValues[2][1] + ' °C';
    document.getElementById('descriptionTwValue').innerHTML = dispValues[2][2] + ' ';
    iconFileName = dispValues[2][3];
    document.getElementById('myImgTw').src = iconURL + iconFileName + iconFileNameExt;
}

function customizedHttpCall(urlPassed, arrIndex) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            responseData = JSON.parse(this.response)
            if (arrIndex==0){
                dispValues[0][0] = convertUTCtoIST(responseData.current.dt);
                dispValues[0][1] = responseData.current.temp.toString();
                dispValues[0][2] = responseData.current.weather[0].description;
                dispValues[0][3] = responseData.current.weather[0].icon;
            }
            if (arrIndex==1){
                dispValues[1][0] = convertUTCtoIST(responseData.dt);
                dispValues[1][1] = responseData.main.temp.toString();
                dispValues[1][2] = responseData.weather[0].description;
                dispValues[1][3] = responseData.weather[0].icon;
            }
            if (arrIndex==2){
                dispValues[2][0] = convertUTCtoIST(responseData.daily[1].dt);
                dispValues[2][1] = responseData.daily[1].temp.day.toString();
                dispValues[2][2] = responseData.daily[1].weather[0].description;
                dispValues[2][3] = responseData.daily[1].weather[0].icon;
            }
        } else if (this.readyState == 4 && this.status == 404) {
            alert('Error occurred / City not found')
        }
    }
    xhttp.open("GET", urlPassed, false);    // false - synchronous call
    xhttp.send();
}

function addNewCityToArray(newCity){
    var newCityFlag = true;
    for (let i = 0; i < countries.length; i++) {
        if (countries[i] == newCity) {
            newCityFlag = false;
            break;
        }
    }
    if (newCityFlag == true) {
        countries.push(newCity);
    }
}

function convertUTCtoIST(dateUTC) {
    var a = new Date(dateUTC * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var fullDate = date + ' ' + month + ' ' + year;     //+ ' ' + hour + ':' + min + ':' + sec
    return fullDate;
}

// Auto Complete - start
function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
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
autocomplete(document.getElementById("cityName"), countries);

// Auto Complete - end

