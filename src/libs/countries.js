exports.Countries = {
  toIso2: function(c) {
    var ctry = this.find(c);
    return ctry
      ? ctry.iso2
      : null;
  },
  toIso3: function(c) {
    var ctry = this.find(c);
    return ctry
      ? ctry.iso3
      : null;
  },
  find: function(c) {
    return this.list.find(function(ct) {
      return (ct.iso3.toLowerCase() === c.toLowerCase() || ct.iso2.toLowerCase() == c.toLowerCase());
    });
  },
  list: [
    {
      "continent": "Asia",
      "iso2": "AF",
      "iso3": "AFG",
      "name": "Afghanistan",
      "fullname": "The Islamic Republic of Afghanistan",
      "capital": "Kabul",
      "tld": ".af",
      "currency": "AFN",
      "phone": "+93"
    }, {
      "continent": "Europe",
      "iso2": "AL",
      "iso3": "ALB",
      "name": "Albania",
      "fullname": "The Republic of Albania",
      "capital": "Tirana",
      "tld": ".al",
      "currency": "ALL",
      "phone": "+355"
    }, {
      "continent": "Africa",
      "iso2": "DZ",
      "iso3": "DZA",
      "name": "Algeria",
      "fullname": "The People's Democratic Republic of Algeria",
      "capital": "Algiers",
      "tld": ".dz",
      "currency": "DZD",
      "phone": "+213"
    }, {
      "continent": "Oceania",
      "iso2": "AS",
      "iso3": "ASM",
      "name": "American Samoa",
      "fullname": "American Samoa",
      "capital": "Pago Pago",
      "tld": ".as",
      "currency": "USD",
      "phone": "+1684"
    }, {
      "continent": "Europe",
      "iso2": "AD",
      "iso3": "AND",
      "name": "Andorra",
      "fullname": "The Principality of Andorra",
      "capital": "Andorra la Vella",
      "tld": ".ad",
      "currency": "EUR",
      "phone": "+376"
    }, {
      "continent": "Africa",
      "iso2": "AO",
      "iso3": "AGO",
      "name": "Angola",
      "fullname": "The Republic of Angola",
      "capital": "Luanda",
      "tld": ".ao",
      "currency": "AOA",
      "phone": "+244"
    }, {
      "continent": "North America",
      "iso2": "AI",
      "iso3": "AIA",
      "name": "Anguilla",
      "fullname": "Anguilla",
      "capital": "The Valley",
      "tld": ".ai",
      "currency": "XCD",
      "phone": "+1264"
    }, {
      "continent": "North America",
      "iso2": "AG",
      "iso3": "ATG",
      "name": "Antigua And Barbuda",
      "fullname": "Antigua and Barbuda",
      "capital": "Saint John’s",
      "tld": ".ag",
      "currency": "XCD",
      "phone": "+1268"
    }, {
      "continent": "South America",
      "iso2": "AR",
      "iso3": "ARG",
      "name": "Argentina",
      "fullname": "The Argentine Republic",
      "capital": "Buenos Aires",
      "tld": ".ar",
      "currency": "ARS",
      "phone": "+54"
    }, {
      "continent": "Asia",
      "iso2": "AM",
      "iso3": "ARM",
      "name": "Armenia",
      "fullname": "The Republic of Armenia",
      "capital": "Yerevan",
      "tld": ".am",
      "currency": "AMD",
      "phone": "+374"
    }, {
      "continent": "North America",
      "iso2": "AW",
      "iso3": "ABW",
      "name": "Aruba",
      "fullname": "Aruba",
      "capital": "Oranjestad",
      "tld": ".aw",
      "currency": "ANG",
      "phone": "+297"
    }, {
      "continent": "Oceania",
      "iso2": "AU",
      "iso3": "AUS",
      "name": "Australia",
      "fullname": "Australia",
      "capital": "Canberra",
      "tld": ".au",
      "currency": "AUD",
      "phone": "+61"
    }, {
      "continent": "Europe",
      "iso2": "AT",
      "iso3": "AUT",
      "name": "Austria",
      "fullname": "The Republic of Austria",
      "capital": "Vienna",
      "tld": ".at",
      "currency": "EUR",
      "phone": "+43"
    }, {
      "continent": "Asia",
      "iso2": "AZ",
      "iso3": "AZE",
      "name": "Azerbaijan",
      "fullname": "The Republic of Azerbaijan",
      "capital": "Baku",
      "tld": ".az",
      "currency": "AZN",
      "phone": "+994"
    }, {
      "continent": "North America",
      "iso2": "BS",
      "iso3": "BHS",
      "name": "Bahamas",
      "fullname": "The Commonwealth of the Bahamas",
      "capital": "Nassau",
      "tld": ".bs",
      "currency": "BSD",
      "phone": "+1242"
    }, {
      "continent": "Asia",
      "iso2": "BH",
      "iso3": "BHR",
      "name": "Bahrain",
      "fullname": "The Kingdom of Bahrain",
      "capital": "Manama",
      "tld": ".bh",
      "currency": "BHD",
      "phone": "+973"
    }, {
      "continent": "Asia",
      "iso2": "BD",
      "iso3": "BGD",
      "name": "Bangladesh",
      "fullname": "The People's Republic of Bangladesh",
      "capital": "Dhaka",
      "tld": ".bd",
      "currency": "BDT",
      "phone": "+880"
    }, {
      "continent": "North America",
      "iso2": "BB",
      "iso3": "BRB",
      "name": "Barbados",
      "fullname": "Barbados",
      "capital": "Bridgetown",
      "tld": ".bb",
      "currency": "BBD",
      "phone": "+1246"
    }, {
      "continent": "Europe",
      "iso2": "BY",
      "iso3": "BLR",
      "name": "Belarus",
      "fullname": "The Republic of Belarus",
      "capital": "Minsk",
      "tld": ".by",
      "currency": "BYR",
      "phone": "+375"
    }, {
      "continent": "Europe",
      "iso2": "BE",
      "iso3": "BEL",
      "name": "Belgium",
      "fullname": "The Kingdom of Belgium",
      "capital": "Brussels",
      "tld": ".be",
      "currency": "EUR",
      "phone": "+32"
    }, {
      "continent": "North America",
      "iso2": "BZ",
      "iso3": "BLZ",
      "name": "Belize",
      "fullname": "Belize",
      "capital": "Belmopan",
      "tld": ".bz",
      "currency": "BZD",
      "phone": "+51"
    }, {
      "continent": "Africa",
      "iso2": "BJ",
      "iso3": "BEN",
      "name": "Benin",
      "fullname": "The Republic of Benin",
      "capital": "Porto-novo",
      "tld": ".bj",
      "currency": "XOF",
      "phone": "+229"
    }, {
      "continent": "North America",
      "iso2": "BM",
      "iso3": "BMU",
      "name": "Bermuda",
      "fullname": "Bermuda",
      "capital": "Hamilton",
      "tld": ".bm",
      "currency": "BMD",
      "phone": "+1441"
    }, {
      "continent": "Asia",
      "iso2": "BT",
      "iso3": "BTN",
      "name": "Bhutan",
      "fullname": "The Kingdom of Bhutan",
      "capital": "Thimphu",
      "tld": ".bt",
      "currency": "BTN",
      "phone": "+975"
    }, {
      "continent": "South America",
      "iso2": "BO",
      "iso3": "BOL",
      "name": "Bolivia",
      "fullname": "The Plurinational State of Bolivia",
      "capital": "La Paz",
      "tld": ".bo",
      "currency": "BOB",
      "phone": "+591"
    }, {
      "continent": "Europe",
      "iso2": "BA",
      "iso3": "BIH",
      "name": "Bosnia And Herzegovina",
      "fullname": "Bosnia and Herzegovina",
      "capital": "Sarajevo",
      "tld": ".ba",
      "currency": "BAM",
      "phone": "+387"
    }, {
      "continent": "Africa",
      "iso2": "BW",
      "iso3": "BWA",
      "name": "Botswana",
      "fullname": "The Republic of Botswana",
      "capital": "Gaborone",
      "tld": ".bw",
      "currency": "BWP",
      "phone": "+267"
    }, {
      "continent": "South America",
      "iso2": "BR",
      "iso3": "BRA",
      "name": "Brazil",
      "fullname": "The Federative Republic of Brazil",
      "capital": "Brasilia",
      "tld": ".br",
      "currency": "BRL",
      "phone": "+55"
    }, {
      "continent": "Asia",
      "iso2": "BN",
      "iso3": "BRN",
      "name": "Brunei Darussalam",
      "fullname": "Brunei Darussalam",
      "capital": "Bandar Seri Begawan",
      "tld": ".bn",
      "currency": "BND",
      "phone": "+673"
    }, {
      "continent": "Europe",
      "iso2": "BG",
      "iso3": "BGR",
      "name": "Bulgaria",
      "fullname": "The Republic of Bulgaria",
      "capital": "Sofia",
      "tld": ".bg",
      "currency": "BGN",
      "phone": "+359"
    }, {
      "continent": "Africa",
      "iso2": "BF",
      "iso3": "BFA",
      "name": "Burkina Faso",
      "fullname": "Burkina Faso",
      "capital": "Ouagadougou",
      "tld": ".bf",
      "currency": "XOF",
      "phone": "+226"
    }, {
      "continent": "Africa",
      "iso2": "BI",
      "iso3": "BDI",
      "name": "Burundi",
      "fullname": "The Republic of Burundi",
      "capital": "Bujumbura",
      "tld": ".bi",
      "currency": "BIF",
      "phone": "+257"
    }, {
      "continent": "Asia",
      "iso2": "KH",
      "iso3": "KHM",
      "name": "Cambodia",
      "fullname": "The Kingdom of Cambodia",
      "capital": "Phnom Penh",
      "tld": ".kh",
      "currency": "KHR",
      "phone": "+855"
    }, {
      "continent": "Africa",
      "iso2": "CM",
      "iso3": "CMR",
      "name": "Cameroon",
      "fullname": "The Republic of Cameroon",
      "capital": "Yaounde",
      "tld": ".cm",
      "currency": "XAF",
      "phone": "+237"
    }, {
      "continent": "North America",
      "iso2": "CA",
      "iso3": "CAN",
      "name": "Canada",
      "fullname": "Canada",
      "capital": "Ottawa",
      "tld": ".ca",
      "currency": "CAD",
      "phone": "+1"
    }, {
      "continent": "Africa",
      "iso2": "CV",
      "iso3": "CPV",
      "name": "Cape Verde",
      "fullname": "Republic of Cabo Verde",
      "capital": "Praia",
      "tld": ".cv",
      "currency": "CVE",
      "phone": "+238"
    }, {
      "continent": "North America",
      "iso2": "KY",
      "iso3": "CYM",
      "name": "Cayman Islands",
      "fullname": "Cayman Islands",
      "capital": "George Town",
      "tld": ".ky",
      "currency": "KYD",
      "phone": "+1345"
    }, {
      "continent": "Africa",
      "iso2": "CF",
      "iso3": "CAF",
      "name": "Central African Republic",
      "fullname": "The Central African Republic",
      "capital": "Bangui",
      "tld": ".cf",
      "currency": "XAF",
      "phone": "+236"
    }, {
      "continent": "Africa",
      "iso2": "TD",
      "iso3": "TCD",
      "name": "Chad",
      "fullname": "The Republic of Chad",
      "capital": "n'Djamena",
      "tld": ".td",
      "currency": "XAF",
      "phone": "+235"
    }, {
      "continent": "South America",
      "iso2": "CL",
      "iso3": "CHL",
      "name": "Chile",
      "fullname": "The Republic of Chile",
      "capital": "Santiago",
      "tld": ".cl",
      "currency": "CLP",
      "phone": "+56"
    }, {
      "continent": "Asia",
      "iso2": "CN",
      "iso3": "CHN",
      "name": "China",
      "fullname": "The People's Republic of China",
      "capital": "Beijing",
      "tld": ".cn",
      "currency": "CNY",
      "phone": "+86"
    }, {
      "continent": "South America",
      "iso2": "CO",
      "iso3": "COL",
      "name": "Colombia",
      "fullname": "The Republic of Colombia",
      "capital": "Bogotá",
      "tld": ".co",
      "currency": "COP",
      "phone": "+57"
    }, {
      "continent": "Africa",
      "iso2": "KM",
      "iso3": "COM",
      "name": "Comoros",
      "fullname": "The Union of the Comoros",
      "capital": "Moroni",
      "tld": ".km",
      "currency": "KMF",
      "phone": "+269"
    }, {
      "continent": "Africa",
      "iso2": "CG",
      "iso3": "COG",
      "name": "Congo",
      "fullname": "The Republic of the Congo",
      "capital": "Brazzaville",
      "tld": ".cg",
      "currency": "XAF",
      "phone": "+242"
    }, {
      "continent": "Oceania",
      "iso2": "CK",
      "iso3": "COK",
      "name": "Cook Islands",
      "fullname": "The Cook Islands",
      "capital": "Avarua",
      "tld": ".ck",
      "currency": "NZD",
      "phone": "+682"
    }, {
      "continent": "North America",
      "iso2": "CR",
      "iso3": "CRI",
      "name": "Costa Rica",
      "fullname": "The Republic of Costa Rica",
      "capital": "San Jose",
      "tld": ".cr",
      "currency": "CRC",
      "phone": "+56"
    }, {
      "continent": "Africa",
      "iso2": "CI",
      "iso3": "CIV",
      "name": "Côte D'ivoire",
      "fullname": "The Republic of Côte d'Ivoire",
      "capital": "Yamoussoukro",
      "tld": ".ci",
      "currency": "XOF",
      "phone": "+225"
    }, {
      "continent": "Europe",
      "iso2": "HR",
      "iso3": "HRV",
      "name": "Croatia",
      "fullname": "The Republic of Croatia",
      "capital": "Zagreb",
      "tld": ".hr",
      "currency": "HRK",
      "phone": "+385"
    }, {
      "continent": "North America",
      "iso2": "CU",
      "iso3": "CUB",
      "name": "Cuba",
      "fullname": "The Republic of Cuba",
      "capital": "Havana",
      "tld": ".cu",
      "currency": "CUP",
      "phone": "+53"
    }, {
      "continent": "Asia",
      "iso2": "CY",
      "iso3": "CYP",
      "name": "Cyprus",
      "fullname": "The Republic of Cyprus",
      "capital": "Nicosia",
      "tld": ".cy",
      "currency": "CYP",
      "phone": "+357"
    }, {
      "continent": "Europe",
      "iso2": "CZ",
      "iso3": "CZE",
      "name": "Czech Republic",
      "fullname": "The Czech Republic",
      "capital": "Prague",
      "tld": ".cz",
      "currency": "CZK",
      "phone": "+420"
    }, {
      "continent": "Europe",
      "iso2": "DK",
      "iso3": "DNK",
      "name": "Denmark",
      "fullname": "The Kingdom of Denmark",
      "capital": "Copenhagen",
      "tld": ".dk",
      "currency": "DKK",
      "phone": "+45"
    }, {
      "continent": "Africa",
      "iso2": "DJ",
      "iso3": "DJI",
      "name": "Djibouti",
      "fullname": "The Republic of Djibouti",
      "capital": "Djibouti",
      "tld": "dj",
      "currency": "DJF",
      "phone": "+253"
    }, {
      "continent": "North America",
      "iso2": "DM",
      "iso3": "DMA",
      "name": "Dominica",
      "fullname": "The Commonwealth of Dominica",
      "capital": "Roseau",
      "tld": ".dm",
      "currency": "XCD",
      "phone": "+1767"
    }, {
      "continent": "South America",
      "iso2": "DO",
      "iso3": "DOM",
      "name": "Dominican Republic",
      "fullname": "The Dominican Republic",
      "capital": "Santo Domingo",
      "tld": ".do",
      "currency": "DOP",
      "phone": "+1809"
    }, {
      "continent": "Africa",
      "iso2": "CD",
      "iso3": "COD",
      "name": "DR Congo",
      "fullname": "The Democratic Republic of the Congo",
      "capital": "Kinshasa",
      "tld": ".cd",
      "currency": "CDF",
      "phone": "+243"
    }, {
      "continent": "Oceania",
      "iso2": "TL",
      "iso3": "TLS",
      "name": "East Timor",
      "fullname": "The Democratic Republic of Timor-Leste",
      "capital": "Dilli",
      "tld": ".tl",
      "currency": "IDR",
      "phone": "+670"
    }, {
      "continent": "South America",
      "iso2": "EC",
      "iso3": "ECU",
      "name": "Ecuador",
      "fullname": "The Republic of Ecuador",
      "capital": "Quito",
      "tld": ".ec",
      "currency": "USD",
      "phone": "+593"
    }, {
      "continent": "Africa",
      "iso2": "EG",
      "iso3": "EGY",
      "name": "Egypt",
      "fullname": "The Arab Republic of Egypt",
      "capital": "Cairo",
      "tld": ".eg",
      "currency": "EGP",
      "phone": "+20"
    }, {
      "continent": "North America",
      "iso2": "SV",
      "iso3": "SLV",
      "name": "El Salvador",
      "fullname": "The Republic of el Salvador",
      "capital": "San Salvador",
      "tld": ".sv",
      "currency": "SVC",
      "phone": "+53"
    }, {
      "continent": "Africa",
      "iso2": "GQ",
      "iso3": "GNQ",
      "name": "Equatorial Guinea",
      "fullname": "The Republic of Equatorial Guinea",
      "capital": "Malabo",
      "tld": ".gq",
      "currency": "XAF",
      "phone": "+240"
    }, {
      "continent": "Africa",
      "iso2": "ER",
      "iso3": "ERI",
      "name": "Eritrea",
      "fullname": "The State of Eritrea",
      "capital": "Asmara",
      "tld": ".er",
      "currency": "ERN",
      "phone": "+291"
    }, {
      "continent": "Europe",
      "iso2": "EE",
      "iso3": "EST",
      "name": "Estonia",
      "fullname": "The Republic of Estonia",
      "capital": "Tallinn",
      "tld": ".ee",
      "currency": "EEK",
      "phone": "+372"
    }, {
      "continent": "Africa",
      "iso2": "ET",
      "iso3": "ETH",
      "name": "Ethiopia",
      "fullname": "The Federal Democratic Republic of Ethiopia",
      "capital": "Addis Ababa",
      "tld": ".et",
      "currency": "ETB",
      "phone": "+251"
    }, {
      "continent": "Europe",
      "iso2": "FO",
      "iso3": "FRO",
      "name": "Faroe Islands",
      "fullname": "Faroe Islands",
      "capital": "Palikir",
      "tld": ".fo",
      "currency": "DKK",
      "phone": "+298"
    }, {
      "continent": "Oceania",
      "iso2": "FJ",
      "iso3": "FJI",
      "name": "Fiji",
      "fullname": "The Republic of Fiji",
      "capital": "Suva",
      "tld": ".fj",
      "currency": "FJD",
      "phone": "+679"
    }, {
      "continent": "Europe",
      "iso2": "FI",
      "iso3": "FIN",
      "name": "Finland",
      "fullname": "The Republic of Finland",
      "capital": "Helsinki",
      "tld": ".fi",
      "currency": "EUR",
      "phone": "+358"
    }, {
      "continent": "Europe",
      "iso2": "FR",
      "iso3": "FRA",
      "name": "France",
      "fullname": "The French Republic",
      "capital": "Paris",
      "tld": ".fr",
      "currency": "EUR",
      "phone": "+33"
    }, {
      "continent": "South America",
      "iso2": "GF",
      "iso3": "GUF",
      "name": "French Guyana",
      "fullname": "French Guyana",
      "capital": "Cayenne",
      "tld": ".gf",
      "currency": "EUR",
      "phone": "+594"
    }, {
      "continent": "Oceania",
      "iso2": "PF",
      "iso3": "PYF",
      "name": "French Polynesia",
      "fullname": "French Polynesia",
      "capital": "Papeete",
      "tld": ".pf",
      "currency": "XPF",
      "phone": "+689"
    }, {
      "continent": "Africa",
      "iso2": "GA",
      "iso3": "GAB",
      "name": "Gabon",
      "fullname": "The Gabonese Republic",
      "capital": "Libreville",
      "tld": ".ga",
      "currency": "XAF",
      "phone": "+241"
    }, {
      "continent": "Africa",
      "iso2": "GM",
      "iso3": "GMB",
      "name": "Gambia",
      "fullname": "The Republic of the Gambia",
      "capital": "Banjul",
      "tld": ".gm",
      "currency": "GMD",
      "phone": "+220"
    }, {
      "continent": "Europe",
      "iso2": "GE",
      "iso3": "GEO",
      "name": "Georgia",
      "fullname": "Georgia",
      "capital": "Tbilisi",
      "tld": ".ge",
      "currency": "GEL",
      "phone": "+995"
    }, {
      "continent": "Europe",
      "iso2": "DE",
      "iso3": "DEU",
      "name": "Germany",
      "fullname": "The Federal Republic of Germany",
      "capital": "Berlin",
      "tld": ".de",
      "currency": "EUR",
      "phone": "+49"
    }, {
      "continent": "Africa",
      "iso2": "GH",
      "iso3": "GHA",
      "name": "Ghana",
      "fullname": "The Republic of Ghana",
      "capital": "Accra",
      "tld": ".gh",
      "currency": "GHC",
      "phone": "+233"
    }, {
      "continent": "Africa",
      "iso2": "GI",
      "iso3": "GIB",
      "name": "Gibraltar",
      "fullname": "Gibraltar",
      "capital": "Gibraltar",
      "tld": ".gi",
      "currency": "GIP",
      "phone": "+350"
    }, {
      "continent": "Europe",
      "iso2": "GR",
      "iso3": "GRC",
      "name": "Greece",
      "fullname": "The Hellenic Republic",
      "capital": "Athens",
      "tld": ".gr",
      "currency": "EUR",
      "phone": "+30"
    }, {
      "continent": "North America",
      "iso2": "GL",
      "iso3": "GRL",
      "name": "Greenland",
      "fullname": "Greenland",
      "capital": "Nuuk",
      "tld": ".gl",
      "currency": "DKK",
      "phone": "+299"
    }, {
      "continent": "North America",
      "iso2": "GD",
      "iso3": "GRD",
      "name": "Grenada",
      "fullname": "Grenada",
      "capital": "Saint George’s",
      "tld": ".gd",
      "currency": "XCD",
      "phone": "+1473"
    }, {
      "continent": "North America",
      "iso2": "GP",
      "iso3": "GLP",
      "name": "Guadeloupe",
      "fullname": "Guadeloupe",
      "capital": "Basse-Terre",
      "tld": ".gp",
      "currency": "EUR",
      "phone": "+590"
    }, {
      "continent": "Asia",
      "iso2": "GU",
      "iso3": "GUM",
      "name": "Guam",
      "fullname": "Guam",
      "capital": "Hagåtña",
      "tld": ".gu",
      "currency": "USD",
      "phone": "+1671"
    }, {
      "continent": "North America",
      "iso2": "GT",
      "iso3": "GTM",
      "name": "Guatemala",
      "fullname": "The Republic of Guatemala",
      "capital": "Guatemala City",
      "tld": ".gt",
      "currency": "GTQ",
      "phone": "+52"
    }, {
      "continent": "Europe",
      "iso2": "GG",
      "iso3": "GGY",
      "name": "Guernsey",
      "fullname": "Guernsey",
      "capital": "St. Peter Port",
      "tld": ".gg",
      "currency": "GGP",
      "phone": "+44"
    }, {
      "continent": "Africa",
      "iso2": "GN",
      "iso3": "GIN",
      "name": "Guinea",
      "fullname": "The Republic of Guinea",
      "capital": "Conakry",
      "tld": ".gn",
      "currency": "GNF",
      "phone": "+224"
    }, {
      "continent": "Africa",
      "iso2": "GW",
      "iso3": "GNB",
      "name": "Guinea-bissau",
      "fullname": "The Republic of Guinea-bissau",
      "capital": "Bissau",
      "tld": ".gw",
      "currency": "XOF",
      "phone": "+245"
    }, {
      "continent": "South America",
      "iso2": "GY",
      "iso3": "GUY",
      "name": "Guyana",
      "fullname": "The Republic of Guyana",
      "capital": "Georgetown",
      "tld": ".gy",
      "currency": "GYD",
      "phone": "+592"
    }, {
      "continent": "North America",
      "iso2": "HT",
      "iso3": "HTI",
      "name": "Haiti",
      "fullname": "The Republic of Haiti",
      "capital": "Port-au-prince",
      "tld": ".ht",
      "currency": "USD",
      "phone": "+59"
    }, {
      "continent": "North America",
      "iso2": "HN",
      "iso3": "HND",
      "name": "Honduras",
      "fullname": "The Republic of Honduras",
      "capital": "Tegucigalpa",
      "tld": ".hn",
      "currency": "HNL",
      "phone": "+54"
    }, {
      "continent": "Asia",
      "iso2": "HK",
      "iso3": "HKG",
      "name": "Hong Kong",
      "fullname": "Hong Kong Special Administrative Region of the People's Republic of China",
      "capital": "Hong Kong",
      "tld": ".hk",
      "currency": "HNL",
      "phone": "+852"
    }, {
      "continent": "Europe",
      "iso2": "HU",
      "iso3": "HUN",
      "name": "Hungary",
      "fullname": "Hungary",
      "capital": "Budapest",
      "tld": ".hu",
      "currency": "HUF",
      "phone": "+36"
    }, {
      "continent": "Europe",
      "iso2": "IS",
      "iso3": "ISL",
      "name": "Iceland",
      "fullname": "The Republic of Iceland",
      "capital": "Reykjavik",
      "tld": ".is",
      "currency": "ISK",
      "phone": "+354"
    }, {
      "continent": "Asia",
      "iso2": "IN",
      "iso3": "IND",
      "name": "India",
      "fullname": "The Republic of India",
      "capital": "New Delhi",
      "tld": ".in",
      "currency": "INR",
      "phone": "+91"
    }, {
      "continent": "Asia",
      "iso2": "ID",
      "iso3": "IDN",
      "name": "Indonesia",
      "fullname": "The Republic of Indonesia",
      "capital": "Jakarta",
      "tld": ".id",
      "currency": "IDR",
      "phone": "+62"
    }, {
      "continent": "Asia",
      "iso2": "IR",
      "iso3": "IRN",
      "name": "Iran",
      "fullname": "The Islamic Republic of Iran",
      "capital": "Tehran",
      "tld": ".ir",
      "currency": "IRR",
      "phone": "+98"
    }, {
      "continent": "Asia",
      "iso2": "IQ",
      "iso3": "IRQ",
      "name": "Iraq",
      "fullname": "The Republic of Iraq",
      "capital": "Baghdad",
      "tld": ".iq",
      "currency": "IQD",
      "phone": "+964"
    }, {
      "continent": "Europe",
      "iso2": "IE",
      "iso3": "IRL",
      "name": "Ireland",
      "fullname": "Ireland",
      "capital": "Dublin",
      "tld": ".ie",
      "currency": "EUR",
      "phone": "+353"
    }, {
      "continent": "Europe",
      "iso2": "IM",
      "iso3": "IMN",
      "name": "Isle Of Man",
      "fullname": "Isle Of Man",
      "capital": "Douglas",
      "tld": ".im",
      "currency": "IMP",
      "phone": "+44"
    }, {
      "continent": "Asia",
      "iso2": "IL",
      "iso3": "ISR",
      "name": "Israel",
      "fullname": "The State of Israel",
      "capital": "Tel Aviv",
      "tld": ".il",
      "currency": "ILS",
      "phone": "+972"
    }, {
      "continent": "Europe",
      "iso2": "IT",
      "iso3": "ITA",
      "name": "Italy",
      "fullname": "The Republic of Italy",
      "capital": "Rome",
      "tld": ".it",
      "currency": "EUR",
      "phone": "+39"
    }, {
      "continent": "North America",
      "iso2": "JM",
      "iso3": "JAM",
      "name": "Jamaica",
      "fullname": "Jamaica",
      "capital": "Kingston",
      "tld": ".jm",
      "currency": "JMD",
      "phone": "+1876"
    }, {
      "continent": "Asia",
      "iso2": "JP",
      "iso3": "JPN",
      "name": "Japan",
      "fullname": "Japan",
      "capital": "Tokyo",
      "tld": ".jp",
      "currency": "JPY",
      "phone": "+81"
    }, {
      "continent": "Europe",
      "iso2": "JE",
      "iso3": "JEY",
      "name": "Jersey",
      "fullname": "Jersey",
      "capital": "Saint Helier",
      "tld": ".je",
      "currency": "JEP",
      "phone": "+44"
    }, {
      "continent": "Asia",
      "iso2": "JO",
      "iso3": "JOR",
      "name": "Jordan",
      "fullname": "The Hashemite Kingdom of Jordan",
      "capital": "Amman",
      "tld": ".jo",
      "currency": "JOD",
      "phone": "+962"
    }, {
      "continent": "Asia",
      "iso2": "KZ",
      "iso3": "KAZ",
      "name": "Kazakhstan",
      "fullname": "The Republic of Kazakhstan",
      "capital": "Astana",
      "tld": ".kz",
      "currency": "KZT",
      "phone": "+7"
    }, {
      "continent": "Africa",
      "iso2": "KE",
      "iso3": "KEN",
      "name": "Kenya",
      "fullname": "The Republic of Kenya",
      "capital": "Nairobi",
      "tld": ".ke",
      "currency": "KES",
      "phone": "+254"
    }, {
      "continent": "Oceania",
      "iso2": "KI",
      "iso3": "KIR",
      "name": "Kiribati",
      "fullname": "The Republic of Kiribati",
      "capital": "Tarawa Atoll",
      "tld": ".ki",
      "currency": "AUD",
      "phone": "+686"
    }, {
      "continent": "Asia",
      "iso2": "KW",
      "iso3": "KWT",
      "name": "Kuwait",
      "fullname": "The State of Kuwait",
      "capital": "Kuwait City",
      "tld": ".kw",
      "currency": "KWD",
      "phone": "+965"
    }, {
      "continent": "Asia",
      "iso2": "KG",
      "iso3": "KGZ",
      "name": "Kyrgyzstan",
      "fullname": "The Kyrgyz Republic",
      "capital": "Bishkek",
      "tld": ".kg",
      "currency": "KGS",
      "phone": "+996"
    }, {
      "continent": "Asia",
      "iso2": "LA",
      "iso3": "LAO",
      "name": "Laos",
      "fullname": "The Lao People's Democratic Republic",
      "capital": "Vientiane",
      "tld": ".la",
      "currency": "LAK",
      "phone": "+856"
    }, {
      "continent": "Europe",
      "iso2": "LV",
      "iso3": "LVA",
      "name": "Latvia",
      "fullname": "The Republic of Latvia",
      "capital": "Riga",
      "tld": ".lv",
      "currency": "LVL",
      "phone": "+371"
    }, {
      "continent": "Asia",
      "iso2": "LB",
      "iso3": "LBN",
      "name": "Lebanon",
      "fullname": "The Lebanese Republic",
      "capital": "Beirut",
      "tld": ".lb",
      "currency": "LBP",
      "phone": "+961"
    }, {
      "continent": "Africa",
      "iso2": "LS",
      "iso3": "LSO",
      "name": "Lesotho",
      "fullname": "The Kingdom of Lesotho",
      "capital": "Maseru",
      "tld": ".ls",
      "currency": "LSL",
      "phone": "+266"
    }, {
      "continent": "Africa",
      "iso2": "LR",
      "iso3": "LBR",
      "name": "Liberia",
      "fullname": "The Republic of Liberia",
      "capital": "Monrovia",
      "tld": ".lr",
      "currency": "LRD",
      "phone": "+231"
    }, {
      "continent": "Africa",
      "iso2": "LY",
      "iso3": "LBY",
      "name": "Libya",
      "fullname": "Libya",
      "capital": "Tripoli",
      "tld": ".ly",
      "currency": "LYD",
      "phone": "+218"
    }, {
      "continent": "Europe",
      "iso2": "LI",
      "iso3": "LIE",
      "name": "Liechtenstein",
      "fullname": "The Principality of Liechtenstein",
      "capital": "Vaduz",
      "tld": ".li",
      "currency": "CHF",
      "phone": "+423"
    }, {
      "continent": "Europe",
      "iso2": "LT",
      "iso3": "LTU",
      "name": "Lithuania",
      "fullname": "The Republic of Lithuania",
      "capital": "Vilnius",
      "tld": ".lt",
      "currency": "LTL",
      "phone": "+370"
    }, {
      "continent": "Europe",
      "iso2": "LU",
      "iso3": "LUX",
      "name": "Luxembourg",
      "fullname": "The Grand Duchy of Luxembourg",
      "capital": "Luxembourg",
      "tld": ".lu",
      "currency": "EUR",
      "phone": "+352"
    }, {
      "continent": "Asia",
      "iso2": "MO",
      "iso3": "MAC",
      "name": "Macao",
      "fullname": "Macao Special Administrative Region of the People's Republic of China",
      "capital": "Macao",
      "tld": ".mo",
      "currency": "MOP",
      "phone": "+853"
    }, {
      "continent": "Europe",
      "iso2": "MK",
      "iso3": "MKD",
      "name": "Macedonia",
      "fullname": "The Former Yugoslav Republic of Macedonia",
      "capital": "Skopje",
      "tld": ".mk",
      "currency": "MKD",
      "phone": "+389"
    }, {
      "continent": "Africa",
      "iso2": "MG",
      "iso3": "MDG",
      "name": "Madagascar",
      "fullname": "The Republic of Madagascar",
      "capital": "Antananarivo",
      "tld": ".mg",
      "currency": "MGA",
      "phone": "+261"
    }, {
      "continent": "Africa",
      "iso2": "MW",
      "iso3": "MWI",
      "name": "Malawi",
      "fullname": "The Republic of Malawi",
      "capital": "Lilongwe",
      "tld": ".mw",
      "currency": "MWK",
      "phone": "+265"
    }, {
      "continent": "Asia",
      "iso2": "MY",
      "iso3": "MYS",
      "name": "Malaysia",
      "fullname": "Malaysia",
      "capital": "Kuala Lumpur",
      "tld": ".my",
      "currency": "MYR",
      "phone": "+60"
    }, {
      "continent": "Asia",
      "iso2": "MV",
      "iso3": "MDV",
      "name": "Maldives",
      "fullname": "The Republic of Maldives",
      "capital": "Male",
      "tld": ".mv",
      "currency": "MVR",
      "phone": "+960"
    }, {
      "continent": "Africa",
      "iso2": "ML",
      "iso3": "MLI",
      "name": "Mali",
      "fullname": "The Republic of Mali",
      "capital": "Bamako",
      "tld": ".ml",
      "currency": "XOF",
      "phone": "+223"
    }, {
      "continent": "Europe",
      "iso2": "MT",
      "iso3": "MLT",
      "name": "Malta",
      "fullname": "The Republic of Malta",
      "capital": "Valletta",
      "tld": ".mt",
      "currency": "EUR",
      "phone": "+356"
    }, {
      "continent": "Oceania",
      "iso2": "MH",
      "iso3": "MHL",
      "name": "Marshall Islands",
      "fullname": "The Republic of the Marshall Islands",
      "capital": "Majuro",
      "tld": ".mh",
      "currency": "USD",
      "phone": "+692"
    }, {
      "continent": "North America",
      "iso2": "MQ",
      "iso3": "MTQ",
      "name": "Martinique",
      "fullname": "Martinique",
      "capital": "Fort-de-France",
      "tld": ".mq",
      "currency": "EUR",
      "phone": "+596"
    }, {
      "continent": "Africa",
      "iso2": "MR",
      "iso3": "MRT",
      "name": "Mauritania",
      "fullname": "The Islamic Republic of Mauritania",
      "capital": "Nouakchott",
      "tld": ".mr",
      "currency": "MRO",
      "phone": "+222"
    }, {
      "continent": "Africa",
      "iso2": "MU",
      "iso3": "MUS",
      "name": "Mauritius",
      "fullname": "The Republic of Mauritius",
      "capital": "Port Louis",
      "tld": ".mu",
      "currency": "MUR",
      "phone": "+230"
    }, {
      "continent": "Africa",
      "iso2": "YT",
      "iso3": "MYT",
      "name": "Mayotte",
      "fullname": "The Department of Mayotte",
      "capital": "Mamoudzou",
      "tld": ".yt",
      "currency": "EUR",
      "phone": "+269"
    }, {
      "continent": "North America",
      "iso2": "MX",
      "iso3": "MEX",
      "name": "Mexico",
      "fullname": "The United Mexican States",
      "capital": "Mexico City",
      "tld": ".mx",
      "currency": "MXN",
      "phone": "+52"
    }, {
      "continent": "Oceania",
      "iso2": "FM",
      "iso3": "FSM",
      "name": "Micronesia",
      "fullname": "The Federated States of Micronesia",
      "capital": "Palikir",
      "tld": ".fm",
      "currency": "USD",
      "phone": "+691"
    }, {
      "continent": "Europe",
      "iso2": "MD",
      "iso3": "MDA",
      "name": "Moldova",
      "fullname": "The Republic of Moldova",
      "capital": "Chisinau",
      "tld": ".md",
      "currency": "MDL",
      "phone": "+373"
    }, {
      "continent": "Europe",
      "iso2": "MC",
      "iso3": "MCO",
      "name": "Monaco",
      "fullname": "The Principality of Monaco",
      "capital": "Monaco",
      "tld": ".mc",
      "currency": "EUR",
      "phone": "+377"
    }, {
      "continent": "Asia",
      "iso2": "MN",
      "iso3": "MNG",
      "name": "Mongolia",
      "fullname": "Mongolia",
      "capital": "Ulaanbaatar",
      "tld": ".mn",
      "currency": "MNT",
      "phone": "+976"
    }, {
      "continent": "Europe",
      "iso2": "ME",
      "iso3": "MNE",
      "name": "Montenegro",
      "fullname": "Montenegro",
      "capital": "Podgorica",
      "tld": ".me",
      "currency": "EUR",
      "phone": "+382"
    }, {
      "continent": "North America",
      "iso2": "MS",
      "iso3": "MSR",
      "name": "Montserrat",
      "fullname": "Montserrat",
      "capital": "Plymouth",
      "tld": ".ms",
      "currency": "XCD",
      "phone": "+1664"
    }, {
      "continent": "Africa",
      "iso2": "MA",
      "iso3": "MAR",
      "name": "Morocco",
      "fullname": "The Kingdom of Morocco",
      "capital": "Rabat",
      "tld": ".ma",
      "currency": "MAD",
      "phone": "+211"
    }, {
      "continent": "Africa",
      "iso2": "MZ",
      "iso3": "MOZ",
      "name": "Mozambique",
      "fullname": "The Republic of Mozambique",
      "capital": "Maputo",
      "tld": ".mz",
      "currency": "MZM",
      "phone": "+258"
    }, {
      "continent": "Asia",
      "iso2": "MM",
      "iso3": "MMR",
      "name": "Myanmar",
      "fullname": "The Republic of the Union of Myanmar",
      "capital": "Nypyidaw",
      "tld": ".mm",
      "currency": "MMK",
      "phone": "+95"
    }, {
      "continent": "Africa",
      "iso2": "NA",
      "iso3": "NAM",
      "name": "Namibia",
      "fullname": "The Republic of Namibia",
      "capital": "Windhoek",
      "tld": ".na",
      "currency": "ZAR",
      "phone": "+264"
    }, {
      "continent": "Oceania",
      "iso2": "NR",
      "iso3": "NRU",
      "name": "Nauru",
      "fullname": "The Republic of Nauru",
      "capital": "Yaren District",
      "tld": ".nr",
      "currency": "AUD",
      "phone": "+674"
    }, {
      "continent": "Asia",
      "iso2": "NP",
      "iso3": "NPL",
      "name": "Nepal",
      "fullname": "The Federal Democratic Republic of Nepal",
      "capital": "Kathmandu",
      "tld": ".np",
      "currency": "NPR",
      "phone": "+977"
    }, {
      "continent": "Europe",
      "iso2": "NL",
      "iso3": "NLD",
      "name": "Netherlands",
      "fullname": "The Kingdom of the Netherlands",
      "capital": "Amsterdam",
      "tld": ".nl",
      "currency": "EUR",
      "phone": "+31"
    }, {
      "continent": "Oceania",
      "iso2": "NZ",
      "iso3": "NZL",
      "name": "New Zealand",
      "fullname": "New Zealand",
      "capital": "Wellington",
      "tld": ".nz",
      "currency": "NZD",
      "phone": "+64"
    }, {
      "continent": "North America",
      "iso2": "NI",
      "iso3": "NIC",
      "name": "Nicaragua",
      "fullname": "The Republic of Nicaragua",
      "capital": "Managua",
      "tld": ".ni",
      "currency": "NIO",
      "phone": "+55"
    }, {
      "continent": "Africa",
      "iso2": "NE",
      "iso3": "NER",
      "name": "Niger",
      "fullname": "The Republic of the Niger",
      "capital": "Niamey",
      "tld": ".ne",
      "currency": "XOF",
      "phone": "+227"
    }, {
      "continent": "Africa",
      "iso2": "NG",
      "iso3": "NGA",
      "name": "Nigeria",
      "fullname": "The Federal Republic of Nigeria",
      "capital": "Abuja",
      "tld": ".ng",
      "currency": "NGN",
      "phone": "+234"
    }, {
      "continent": "Asia",
      "iso2": "KP",
      "iso3": "PRK",
      "name": "North Korea",
      "fullname": "The Democratic People's Republic of Korea",
      "capital": "Pyongyang",
      "tld": ".kp",
      "currency": "KPW",
      "phone": "+850"
    }, {
      "continent": "Europe",
      "iso2": "NO",
      "iso3": "NOR",
      "name": "Norway",
      "fullname": "The Kingdom of Norway",
      "capital": "Oslo",
      "tld": ".no",
      "currency": "NOK",
      "phone": "+47"
    }, {
      "continent": "Asia",
      "iso2": "OM",
      "iso3": "OMN",
      "name": "Oman",
      "fullname": "The Sultanate of Oman",
      "capital": "Muscat",
      "tld": ".om",
      "currency": "OMR",
      "phone": "+968"
    }, {
      "continent": "Asia",
      "iso2": "PK",
      "iso3": "PAK",
      "name": "Pakistan",
      "fullname": "The Islamic Republic of Pakistan",
      "capital": "Islamabad",
      "tld": ".pk",
      "currency": "PKR",
      "phone": "+92"
    }, {
      "continent": "Oceania",
      "iso2": "PW",
      "iso3": "PLW",
      "name": "Palau",
      "fullname": "The Republic of Palau",
      "capital": "Ngerulmud",
      "tld": ".pw",
      "currency": "USD",
      "phone": "+680"
    }, {
      "continent": "Asia",
      "iso2": "PS",
      "iso3": "PSE",
      "name": "Palestine",
      "fullname": "The State of Palestine",
      "capital": "Ramallah",
      "tld": ".ps",
      "currency": "",
      "phone": "+970"
    }, {
      "continent": "South America",
      "iso2": "PA",
      "iso3": "PAN",
      "name": "Panama",
      "fullname": "The Republic of Panama",
      "capital": "Panama City",
      "tld": ".pa",
      "currency": "USD",
      "phone": "+57"
    }, {
      "continent": "Oceania",
      "iso2": "PG",
      "iso3": "PNG",
      "name": "Papua New Guinea",
      "fullname": "Independent State of Papua New Guinea",
      "capital": "Port Moresby",
      "tld": ".pg",
      "currency": "PGK",
      "phone": "+675"
    }, {
      "continent": "South America",
      "iso2": "PY",
      "iso3": "PRY",
      "name": "Paraguay",
      "fullname": "The Republic of Paraguay",
      "capital": "Asunción",
      "tld": ".py",
      "currency": "PYG",
      "phone": "+595"
    }, {
      "continent": "South America",
      "iso2": "PE",
      "iso3": "PER",
      "name": "Peru",
      "fullname": "The Republic of Peru",
      "capital": "Lima",
      "tld": ".pe",
      "currency": "PEN",
      "phone": "+51"
    }, {
      "continent": "Asia",
      "iso2": "PH",
      "iso3": "PHL",
      "name": "Philippines",
      "fullname": "The Republic of the Philippines",
      "capital": "Manila",
      "tld": ".ph",
      "currency": "PHP",
      "phone": "+63"
    }, {
      "continent": "Oceania",
      "iso2": "PN",
      "iso3": "PCN",
      "name": "Pitcairn",
      "fullname": "Pitcairn",
      "capital": "Adamstown",
      "tld": ".pn",
      "currency": "NZD",
      "phone": "+649"
    }, {
      "continent": "Europe",
      "iso2": "PL",
      "iso3": "POL",
      "name": "Poland",
      "fullname": "The Republic of Poland",
      "capital": "Warsaw",
      "tld": ".pl",
      "currency": "PLN",
      "phone": "+48"
    }, {
      "continent": "Europe",
      "iso2": "PT",
      "iso3": "PRT",
      "name": "Portugal",
      "fullname": "The Portuguese Republic",
      "capital": "Lisbon",
      "tld": ".pt",
      "currency": "EUR",
      "phone": "+351"
    }, {
      "continent": "North America",
      "iso2": "PR",
      "iso3": "PRI",
      "name": "Puerto Rico",
      "fullname": "The Commonwealth of Puerto Rico",
      "capital": "San Juan",
      "tld": ".pr",
      "currency": "USD",
      "phone": "+1939"
    }, {
      "continent": "Asia",
      "iso2": "QA",
      "iso3": "QAT",
      "name": "Qatar",
      "fullname": "The State of Qatar",
      "capital": "Doha",
      "tld": ".qa",
      "currency": "QAR",
      "phone": "+974"
    }, {
      "continent": "Africa",
      "iso2": "RE",
      "iso3": "REU",
      "name": "Réunion",
      "fullname": "Réunion",
      "capital": "Saint-Denis",
      "tld": ".re",
      "currency": "EUR",
      "phone": "+262"
    }, {
      "continent": "Europe",
      "iso2": "RO",
      "iso3": "ROU",
      "name": "Romania",
      "fullname": "Romania",
      "capital": "Bucharest",
      "tld": ".ro",
      "currency": "RON",
      "phone": "+40"
    }, {
      "continent": "Asia",
      "iso2": "RU",
      "iso3": "RUS",
      "name": "Russia",
      "fullname": "The Russian Federation",
      "capital": "Moscow",
      "tld": ".ru",
      "currency": "RUB",
      "phone": "+7"
    }, {
      "continent": "Africa",
      "iso2": "RW",
      "iso3": "RWA",
      "name": "Rwanda",
      "fullname": "The Republic of Rwanda",
      "capital": "Kigali",
      "tld": ".rw",
      "currency": "RWF",
      "phone": "+250"
    }, {
      "continent": "Africa",
      "iso2": "SH",
      "iso3": "SHN",
      "name": "Saint Helena",
      "fullname": "Saint Helena",
      "capital": "Jamestown",
      "tld": ".sh",
      "currency": "SHP",
      "phone": "+290"
    }, {
      "continent": "North America",
      "iso2": "KN",
      "iso3": "KNA",
      "name": "Saint Kitts And Nevis",
      "fullname": "Saint Kitts and Nevis",
      "capital": "Basseterre",
      "tld": ".kn",
      "currency": "XCD",
      "phone": "+1869"
    }, {
      "continent": "South America",
      "iso2": "LC",
      "iso3": "LCA",
      "name": "Saint Lucia",
      "fullname": "Saint Lucia",
      "capital": "Castries",
      "tld": ".lc",
      "currency": "XCD",
      "phone": "+1758"
    }, {
      "continent": "North America",
      "iso2": "PM",
      "iso3": "SPM",
      "name": "Saint Pierre And Miquelon",
      "fullname": "Saint Pierre And Miquelon",
      "capital": "Saint-Pierre",
      "tld": ".pm",
      "currency": "EUR",
      "phone": "+508"
    }, {
      "continent": "South America",
      "iso2": "VC",
      "iso3": "VCT",
      "name": "Saint Vincent And The Grenadines",
      "fullname": "Saint Vincent and the Grenadines",
      "capital": "Kingstown",
      "tld": ".vc",
      "currency": "XCD",
      "phone": "+1784"
    }, {
      "continent": "Oceania",
      "iso2": "WS",
      "iso3": "WSM",
      "name": "Samoa",
      "fullname": "The Independent State of Samoa",
      "capital": "Apia",
      "tld": ".ws",
      "currency": "WST",
      "phone": "+685"
    }, {
      "continent": "Europe",
      "iso2": "SM",
      "iso3": "SMR",
      "name": "San Marino",
      "fullname": "The Republic of San Marino",
      "capital": "San Marino",
      "tld": ".sm",
      "currency": "EUR",
      "phone": "+378"
    }, {
      "continent": "Africa",
      "iso2": "ST",
      "iso3": "STP",
      "name": "São Tomé and Príncipe",
      "fullname": "The Democratic Republic of São Tomé and Príncipe",
      "capital": "São Tomé",
      "tld": ".st",
      "currency": "STD",
      "phone": "+239"
    }, {
      "continent": "Asia",
      "iso2": "SA",
      "iso3": "SAU",
      "name": "Saudi Arabia",
      "fullname": "The Kingdom of Saudi Arabia",
      "capital": "Riyadh",
      "tld": ".sa",
      "currency": "SAR",
      "phone": "+966"
    }, {
      "continent": "Africa",
      "iso2": "SN",
      "iso3": "SEN",
      "name": "Senegal",
      "fullname": "The Republic of Senegal",
      "capital": "Dakar",
      "tld": ".sn",
      "currency": "XOF",
      "phone": "+221"
    }, {
      "continent": "Europe",
      "iso2": "RS",
      "iso3": "SRB",
      "name": "Serbia",
      "fullname": "The Republic of Serbia",
      "capital": "Belgrade",
      "tld": ".cs",
      "currency": "EUR",
      "phone": "+381"
    }, {
      "continent": "Africa",
      "iso2": "SC",
      "iso3": "SYC",
      "name": "Seychelles",
      "fullname": "The Republic of Seychelles",
      "capital": "Victoria",
      "tld": ".sc",
      "currency": "SCR",
      "phone": "+248"
    }, {
      "continent": "Africa",
      "iso2": "SL",
      "iso3": "SLE",
      "name": "Sierra Leone",
      "fullname": "The Republic of Sierra Leone",
      "capital": "Freetown",
      "tld": ".sl",
      "currency": "SLL",
      "phone": "+232"
    }, {
      "continent": "Asia",
      "iso2": "SG",
      "iso3": "SGP",
      "name": "Singapore",
      "fullname": "The Republic of Singapore",
      "capital": "Singapore",
      "tld": ".sg",
      "currency": "SGD",
      "phone": "+65"
    }, {
      "continent": "Europe",
      "iso2": "SK",
      "iso3": "SVK",
      "name": "Slovakia",
      "fullname": "The Slovak Republic",
      "capital": "Bratislava",
      "tld": ".sk",
      "currency": "SKK",
      "phone": "+421"
    }, {
      "continent": "Europe",
      "iso2": "SI",
      "iso3": "SVN",
      "name": "Slovenia",
      "fullname": "The Republic of Slovenia",
      "capital": "Ljubljana",
      "tld": ".si",
      "currency": "SIT",
      "phone": "+386"
    }, {
      "continent": "Oceania",
      "iso2": "SB",
      "iso3": "SLB",
      "name": "Solomon Islands",
      "fullname": "Solomon Islands",
      "capital": "Honiara",
      "tld": ".sb",
      "currency": "SBD",
      "phone": "+677"
    }, {
      "continent": "Africa",
      "iso2": "SO",
      "iso3": "SOM",
      "name": "Somalia",
      "fullname": "The Federal Republic of Somalia",
      "capital": "Mogadishu",
      "tld": ".so",
      "currency": "SOS",
      "phone": "+252"
    }, {
      "continent": "Africa",
      "iso2": "ZA",
      "iso3": "ZAF",
      "name": "South Africa",
      "fullname": "The Republic of South Africa",
      "capital": "Pretoria",
      "tld": ".za",
      "currency": "ZAR",
      "phone": "+27"
    }, {
      "continent": "Asia",
      "iso2": "KR",
      "iso3": "KOR",
      "name": "South Korea",
      "fullname": "The Republic of Korea",
      "capital": "Seoul",
      "tld": ".kr",
      "currency": "KRW",
      "phone": "+82"
    }, {
      "continent": "Africa",
      "iso2": "SS",
      "iso3": "SSD",
      "name": "South Sudan",
      "fullname": "The Republic of South Sudan",
      "capital": "Juba",
      "tld": ".ss",
      "currency": "SSP",
      "phone": "+221"
    }, {
      "continent": "Europe",
      "iso2": "ES",
      "iso3": "ESP",
      "name": "Spain",
      "fullname": "The Kingdom of Spain",
      "capital": "Madrid",
      "tld": ".es",
      "currency": "EUR",
      "phone": "+34"
    }, {
      "continent": "Asia",
      "iso2": "LK",
      "iso3": "LKA",
      "name": "Sri Lanka",
      "fullname": "The Democratic Socialist Republic of Sri Lanka",
      "capital": "Colombo",
      "tld": ".lk",
      "currency": "LKR",
      "phone": "+94"
    }, {
      "continent": "Africa",
      "iso2": "SD",
      "iso3": "SDN",
      "name": "Sudan",
      "fullname": "The Republic of the Sudan",
      "capital": "Khartoum",
      "tld": ".sd",
      "currency": "SDD",
      "phone": "+249"
    }, {
      "continent": "South America",
      "iso2": "SR",
      "iso3": "SUR",
      "name": "Suriname",
      "fullname": "The Republic of Suriname",
      "capital": "Paramaribo",
      "tld": ".sr",
      "currency": "SRD",
      "phone": "+597"
    }, {
      "continent": "Africa",
      "iso2": "SZ",
      "iso3": "SWZ",
      "name": "Swaziland",
      "fullname": "The Kingdom of Swaziland",
      "capital": "Mbabane",
      "tld": ".sz",
      "currency": "SZL",
      "phone": "+268"
    }, {
      "continent": "Europe",
      "iso2": "SE",
      "iso3": "SWE",
      "name": "Sweden",
      "fullname": "The Kingdom of Sweden",
      "capital": "Stockholm",
      "tld": ".se",
      "currency": "SEK",
      "phone": "+46"
    }, {
      "continent": "Europe",
      "iso2": "CH",
      "iso3": "CHE",
      "name": "Switzerland",
      "fullname": "The Swiss Confederation",
      "capital": "Bern",
      "tld": ".ch",
      "currency": "CHF",
      "phone": "+41"
    }, {
      "continent": "Asia",
      "iso2": "SY",
      "iso3": "SYR",
      "name": "Syria",
      "fullname": "The Syrian Arab Republic",
      "capital": "Damascus",
      "tld": ".sy",
      "currency": "SYP",
      "phone": "+963"
    }, {
      "continent": "Asia",
      "iso2": "TW",
      "iso3": "TWN",
      "name": "Taiwan",
      "fullname": "Taiwan",
      "capital": "Taipei",
      "tld": ".tw",
      "currency": "TWD",
      "phone": "+886"
    }, {
      "continent": "Asia",
      "iso2": "TJ",
      "iso3": "TJK",
      "name": "Tajikistan",
      "fullname": "The Republic of Tajikistan",
      "capital": "Dushanbe",
      "tld": ".tj",
      "currency": "RUB",
      "phone": "+992"
    }, {
      "continent": "Africa",
      "iso2": "TZ",
      "iso3": "TZA",
      "name": "Tanzania",
      "fullname": "The United Republic of Tanzania",
      "capital": "Dar es Salaam",
      "tld": ".tz",
      "currency": "TZS",
      "phone": "+255"
    }, {
      "continent": "Asia",
      "iso2": "TH",
      "iso3": "THA",
      "name": "Thailand",
      "fullname": "The Kingdom of Thailand",
      "capital": "Bangkok",
      "tld": ".th",
      "currency": "THB",
      "phone": "+66"
    }, {
      "continent": "Africa",
      "iso2": "TG",
      "iso3": "TGO",
      "name": "Togo",
      "fullname": "The Togolese Republic",
      "capital": "Lomé",
      "tld": ".tg",
      "currency": "XOF",
      "phone": "+228"
    }, {
      "continent": "Oceania",
      "iso2": "TO",
      "iso3": "TON",
      "name": "Tonga",
      "fullname": "The Kingdom of Tonga",
      "capital": "Nukuʻalofa",
      "tld": ".to",
      "currency": "TOP",
      "phone": "+676"
    }, {
      "continent": "South America",
      "iso2": "TT",
      "iso3": "TTO",
      "name": "Trinidad And Tobago",
      "fullname": "The Republic of Trinidad and Tobago",
      "capital": "Port of Spain",
      "tld": ".tt",
      "currency": "TTD",
      "phone": "+1868"
    }, {
      "continent": "Africa",
      "iso2": "TN",
      "iso3": "TUN",
      "name": "Tunisia",
      "fullname": "The Republic of Tunisia",
      "capital": "Tunis",
      "tld": ".tn",
      "currency": "TND",
      "phone": "+216"
    }, {
      "continent": "Asia",
      "iso2": "TR",
      "iso3": "TUR",
      "name": "Turkey",
      "fullname": "The Republic of Turkey",
      "capital": "Ankara",
      "tld": ".tr",
      "currency": "TRY",
      "phone": "+90"
    }, {
      "continent": "Asia",
      "iso2": "TM",
      "iso3": "TKM",
      "name": "Turkmenistan",
      "fullname": "Turkmenistan",
      "capital": "Ashgabat",
      "tld": ".tm",
      "currency": "TMM",
      "phone": "+993"
    }, {
      "continent": "Oceania",
      "iso2": "TV",
      "iso3": "TUV",
      "name": "Tuvalu",
      "fullname": "Tuvalu",
      "capital": "Funafuti",
      "tld": ".tv",
      "currency": "TVD",
      "phone": "+688"
    }, {
      "continent": "Africa",
      "iso2": "UG",
      "iso3": "UGA",
      "name": "Uganda",
      "fullname": "The Republic of Uganda",
      "capital": "Kampala",
      "tld": ".ug",
      "currency": "UGX",
      "phone": "+256"
    }, {
      "continent": "Europe",
      "iso2": "UA",
      "iso3": "UKR",
      "name": "Ukraine",
      "fullname": "Ukraine",
      "capital": "Kiev",
      "tld": ".ua",
      "currency": "UAH",
      "phone": "+380"
    }, {
      "continent": "Asia",
      "iso2": "AE",
      "iso3": "UAE",
      "name": "United Arab Emirates",
      "fullname": "The United Arab Emirates",
      "capital": "Abu Dhabi",
      "tld": ".ae",
      "currency": "AED",
      "phone": "+971"
    }, {
      "continent": "Europe",
      "iso2": "GB",
      "iso3": "GBR",
      "name": "United Kingdom",
      "fullname": "The United Kingdom of Great Britain and Northern Ireland",
      "capital": "London",
      "tld": ".gb",
      "currency": "GBP",
      "phone": "+44"
    }, {
      "continent": "North America",
      "iso2": "US",
      "iso3": "USA",
      "name": "United States",
      "fullname": "The United States of America",
      "capital": "Washington, D.C.",
      "tld": ".us",
      "currency": "USD",
      "phone": "+1"
    }, {
      "continent": "South America",
      "iso2": "UY",
      "iso3": "URY",
      "name": "Uruguay",
      "fullname": "The Eastern Republic of Uruguay",
      "capital": "Montevideo",
      "tld": ".uy",
      "currency": "UYU",
      "phone": "+598"
    }, {
      "continent": "Asia",
      "iso2": "UZ",
      "iso3": "UZB",
      "name": "Uzbekistan",
      "fullname": "The Republic of Uzbekistan",
      "capital": "Tashkent",
      "tld": ".uz",
      "currency": "UZS",
      "phone": "+998"
    }, {
      "continent": "Oceania",
      "iso2": "VU",
      "iso3": "VUT",
      "name": "Vanuatu",
      "fullname": "The Republic of Vanuatu",
      "capital": "Port Vila",
      "tld": ".vu",
      "currency": "VUV",
      "phone": "+678"
    }, {
      "continent": "South America",
      "iso2": "VE",
      "iso3": "VEN",
      "name": "Venezuela",
      "fullname": "The Bolivarian Republic of Venezuela",
      "capital": "Caracas",
      "tld": ".ve",
      "currency": "VEB",
      "phone": "+58"
    }, {
      "continent": "Asia",
      "iso2": "VN",
      "iso3": "VNM",
      "name": "Vietnam",
      "fullname": "The Socialist Republic of Viet Nam",
      "capital": "Hanoi",
      "tld": ".vn",
      "currency": "VND",
      "phone": "+84"
    }, {
      "continent": "North America",
      "iso2": "VG",
      "iso3": "VGB",
      "name": "Virgin Islands, British",
      "fullname": "British Virgin Islands",
      "capital": "Road Town",
      "tld": ".vg",
      "currency": "USD",
      "phone": "+1284"
    }, {
      "continent": "South America",
      "iso2": "VI",
      "iso3": "VIR",
      "name": "Virgin Islands, US",
      "fullname": "U.S. Virgin Islands",
      "capital": "Charlotte Amalie",
      "tld": ".vi",
      "currency": "USD",
      "phone": "+1340"
    }, {
      "continent": "Africa",
      "iso2": "EH",
      "iso3": "ESH",
      "name": "Western Sahara",
      "fullname": "Western Sahara",
      "capital": "El-Aaiún",
      "tld": ".eh",
      "currency": "MAD",
      "phone": ""
    }, {
      "continent": "Asia",
      "iso2": "YE",
      "iso3": "YEM",
      "name": "Yemen",
      "fullname": "The Republic of Yemen",
      "capital": "Sana’a",
      "tld": ".ye",
      "currency": "YER",
      "phone": "+967"
    }, {
      "continent": "Africa",
      "iso2": "ZM",
      "iso3": "ZMB",
      "name": "Zambia",
      "fullname": "The Republic of Zambia",
      "capital": "Lusaka",
      "tld": ".zm",
      "currency": "ZMK",
      "phone": "+260"
    }, {
      "continent": "Africa",
      "iso2": "ZW",
      "iso3": "ZWE",
      "name": "Zimbabwe",
      "fullname": "The Republic of Zimbabwe",
      "capital": "Harare",
      "tld": ".zw",
      "currency": "ZWD",
      "phone": "+263"
    }
  ]
};
