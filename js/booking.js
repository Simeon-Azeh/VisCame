
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const content = document.querySelector('.content');
    const navbar = document.querySelector('.navbar');
    
    loader.style.display = 'none';
    content.style.display = 'block';
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    });
});

//Mobile media queries
// Get the mobile menu button, the mobile navigation menu, and the close icon
const mobileMenuButton = document.getElementById('mobile_menu');
const mobileNavMenu = document.querySelector('.mobile_nav_menu');
const mobileMenuClose = document.getElementById('mobile_menu_close');

// Add click event listener to the mobile menu button
mobileMenuButton.addEventListener('click', function() {
    // Toggle the 'active' class on the mobile navigation menu
    mobileNavMenu.classList.toggle('active');
});

// Add click event listener to the close icon
mobileMenuClose.addEventListener('click', function() {
    // Hide the mobile navigation menu
    mobileNavMenu.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const destinationsCount = new countUp.CountUp('destinations-count', 236);
  const toursCount = new countUp.CountUp('tours-count', 1700);
  const customersCount = new countUp.CountUp('customers-count', 5890);
  const guidesCount = new countUp.CountUp('guides-count', 120);
  
  destinationsCount.start();
  toursCount.start();
  customersCount.start();
  guidesCount.start();
});




function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
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
            b.addEventListener("click", function(e) {
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
    inp.addEventListener("keydown", function(e) {
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
  var airports = [
  "Hartsfield-Jackson Atlanta International Airport, United States",
  "Beijing Capital International Airport, China",
  "Los Angeles International Airport, United States",
  "Dubai International Airport, United Arab Emirates",
  "Tokyo Haneda Airport, Japan",
  "O'Hare International Airport, United States",
  "London Heathrow Airport, United Kingdom",
  "Hong Kong International Airport, Hong Kong",
  "Shanghai Pudong International Airport, China",
  "Charles de Gaulle Airport, France",
  "Dallas/Fort Worth International Airport, United States",
  "Amsterdam Airport Schiphol, Netherlands",
  "Frankfurt Airport, Germany",
  "Istanbul Atatürk Airport, Turkey",
  "Guangzhou Baiyun International Airport, China",
  "Singapore Changi Airport, Singapore",
  "Incheon International Airport, South Korea",
  "Denver International Airport, United States",
  "Suvarnabhumi Airport, Thailand",
  "John F. Kennedy International Airport, United States",
  "Kuala Lumpur International Airport, Malaysia",
  "San Francisco International Airport, United States",
  "McCarran International Airport, United States",
  "Miami International Airport, United States",
  "Munich Airport, Germany",
  "Charlotte Douglas International Airport, United States",
  "Phoenix Sky Harbor International Airport, United States",
  "George Bush Intercontinental Airport, United States",
  "Adolfo Suárez Madrid–Barajas Airport, Spain",
  "Sydney Kingsford Smith Airport, Australia",
  "George Bush Intercontinental Airport, United States",
  "Seattle-Tacoma International Airport, United States",
  "Orlando International Airport, United States",
  "Newark Liberty International Airport, United States",
  "Vancouver International Airport, Canada",
  "Toronto Pearson International Airport, Canada",
  "Leonardo da Vinci–Fiumicino Airport, Italy",
  "Domodedovo International Airport, Russia",
  "Mexico City International Airport, Mexico",
  "São Paulo–Guarulhos International Airport, Brazil",
  "Narita International Airport, Japan",
  "Sheremetyevo International Airport, Russia",
  "Chhatrapati Shivaji Maharaj International Airport, India",
  "Ninoy Aquino International Airport, Philippines",
  "Galeão International Airport, Brazil",
  "Barcelona–El Prat Airport, Spain",
  "Fort Lauderdale–Hollywood International Airport, United States",
  "Brisbane Airport, Australia",
  "O. R. Tambo International Airport, South Africa",
  "Gimpo International Airport, South Korea",
  "Hamad International Airport, Qatar",
  "Boston Logan International Airport, United States",
  "Salt Lake City International Airport, United States",
  "Minneapolis–Saint Paul International Airport, United States",
  "Dublin Airport, Ireland",
  "Copenhagen Airport, Denmark",
  "Melbourne Airport, Australia",
  "Washington Dulles International Airport, United States",
  "Baltimore–Washington International Airport, United States",
  "Stockholm Arlanda Airport, Sweden",
  "Kansai International Airport, Japan",
  "Zurich Airport, Switzerland",
  "Vienna International Airport, Austria",
  "Helsinki-Vantaa Airport, Finland",
  "Manchester Airport, United Kingdom",
  "Oslo Airport, Gardermoen, Norway",
  "Brussels Airport, Belgium",
  "Berlin Tegel Airport, Germany",
  "Luis Muñoz Marín International Airport, Puerto Rico",
  "Jorge Chávez International Airport, Peru",
  "Budapest Ferenc Liszt International Airport, Hungary",
  "Mexico City International Airport, Mexico",
  "Warsaw Chopin Airport, Poland",
  "Václav Havel Airport Prague, Czech Republic",
  "Santiago International Airport, Chile",
  "Chhatrapati Shivaji Maharaj International Airport, India",
  "King Abdulaziz International Airport, Saudi Arabia",
  "Geneva Airport, Switzerland",
  "Lisbon Airport, Portugal",
  "Athens International Airport, Greece",
  "Cape Town International Airport, South Africa",
  "Riga International Airport, Latvia",
  "Henri Coandă International Airport, Romania",
  "Cancún International Airport, Mexico",
  "Daniel K. Inouye International Airport, United States",
  "Sheremetyevo International Airport, Russia",
  "Muscat International Airport, Oman",
  "Kuwait International Airport, Kuwait",
  "Cairo International Airport, Egypt",
  "Mohammed V International Airport, Morocco",
  "Abu Dhabi International Airport, United Arab Emirates",
  "Taiwan Taoyuan International Airport, Taiwan",
  "Sabiha Gökçen International Airport, Turkey",
  "Bergen Airport, Flesland, Norway",
  // Add more airports as needed
];

  
  /*initiate the autocomplete function on the "myInput" element, and pass along the airports array as possible autocomplete values:*/
  autocomplete(document.getElementById("myInput"), airports);