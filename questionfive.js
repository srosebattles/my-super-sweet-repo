
var searchTerm = "mackerel";
var stations = [
 "Baker Street",
 "Charing Cross",
 "Edgware Road (Bakerloo)",
 "Elephant and Castle",
 "Embankment",
 "Harlesden",
 "Harrow and Wealdstone",
 "Kensal Green",
 "Kenton",
 "Kilburn Park",
 "Lambeth North",
 "Maida Vale",
 "Marylebone",
 "North Wembley",
 "Oxford Circus",
 "Paddington",
 "Piccadilly Circus",
 "Queen's Park",
 "Regent's Park",
 "South Kenton",
 "Stonebridge Park",
 "Warwick Avenue",
 "Waterloo",
 "Wembley Central",
 "Willesden Junction",
 "Bank",
 "Barkingside",
 "Bethnal Green",
 "Bond Street",
 "Buckhurst Hill",
 "Chancery Lane",
 "Chigwell",
 "Debden",
 "Ealing Broadway",
 "East Acton",
 "Epping",
 "Fairlop",
 "Gants Hill",
 "Grange Hill",
 "Greenford",
 "Hainault",
 "Hanger Lane",
 "Holborn",
 "Holland Park",
 "Lancaster Gate",
 "Leyton",
 "Leytonstone",
 "Liverpool Street",
 "Loughton",
 "Marble Arch",
 "Mile End",
 "Newbury Park",
 "North Acton",
 "Northolt",
 "Notting Hill Gate",
 "Perivale",
 "Queensway",
 "Redbridge",
 "Roding Valley",
 "Ruislip Gardens",
 "Shepherd's Bush",
 "Snaresbrook",
 "South Ruislip",
 "South Woodford",
 "St Paul's",
 "Stratford",
 "Theydon Bois",
 "Tottenham Court Road",
 "Wanstead",
 "West Acton",
 "West Ruislip",
 "White City",
 "Woodford",
 "Acton Town",
 "Aldgate East",
 "Barking",
 "Barons Court",
 "Becontree",
 "Blackfriars",
 "Bow Road",
 "Bromley-by-Bow",
 "Cannon Street",
 "Chiswick Park",
 "Dagenham East",
 "Dagenham Heathway",
 "Ealing Common",
 "Earl's Court",
 "East Ham",
 "East Putney",
 "Edgware Road (H & C)",
 "Elm Park",
 "Fulham Broadway",
 "Gloucester Road",
 "Gunnersbury",
 "Hammersmith (District and Picc)",
 "High Street Kensington",
 "Hornchurch",
 "Kensington (Olympia)",
 "Kew Gardens",
 "Mansion House",
 "Monument",
 "Parsons Green",
 "Plaistow",
 "Putney Bridge",
 "Ravenscourt Park",
 "Richmond",
 "Sloane Square",
 "South Kensington",
 "Southfields",
 "St. James's Park",
 "Stamford Brook",
 "Stepney Green",
 "Temple",
 "Tower Hill",
 "Turnham Green",
 "Upminster",
 "Upminster Bridge",
 "Upney",
 "Upton Park",
 "Victoria",
 "West Brompton",
 "West Ham",
 "West Kensington",
 "Westminster",
 "Whitechapel",
 "Wimbledon",
 "Wimbledon Park",
 "Aldgate",
 "Barbican",
 "Euston Square",
 "Farringdon",
 "Great Portland Street",
 "Hammersmith",
 "King's Cross St Pancras",
 "Moorgate",
 "Bermondsey",
 "Canada Water",
 "Canary Wharf",
 "Canning Town",
 "Canons Park",
 "Dollis Hill",
 "Finchley Road",
 "Green Park",
 "Kilburn",
 "Kingsbury",
 "London Bridge",
 "Neasden",
 "North Greenwich",
 "Queensbury",
 "Southwark",
 "St John's Wood",
 "Stanmore",
 "Swiss Cottage",
 "Wembley Park",
 "West Hampstead",
 "Willesden Green",
 "Amersham",
 "Chalfont and Latimer",
 "Chorleywood",
 "Colliers Wood",
 "Croxley",
 "Eastcote",
 "Harrow on the Hill",
 "Hillingdon",
 "Ickenham",
 "Moor Park",
 "North Harrow",
 "Northwick Park",
 "Northwood",
 "Northwood Hills",
 "Pinner",
 "Rayners Lane",
 "Rickmansworth",
 "Ruislip",
 "Ruislip Manor",
 "Uxbridge",
 "Watford",
 "West Harrow",
 "Angel",
 "Archway",
 "Balham",
 "Belsize Park",
 "Borough",
 "Brent Cross",
 "Burnt Oak",
 "Camden Town",
 "Chalk Farm",
 "Clapham Common",
 "Clapham North",
 "Clapham South",
 "Colindale",
 "East Finchley",
 "Edgware",
 "Euston",
 "Finchley Central",
 "Golders Green",
 "Goodge Street",
 "Hampstead",
 "Hendon Central",
 "High Barnet",
 "Highgate",
 "Kennington",
 "Kentish Town",
 "Leicester Square",
 "Mill Hill East",
 "Morden",
 "Mornington Crescent",
 "Old Street",
 "Oval",
 "South Wimbledon",
 "Stockwell",
 "Tooting Bec",
 "Tooting Broadway",
 "Totteridge and Whetstone",
 "Tufnell Park",
 "Warren Street",
 "West Finchley",
 "Woodside Park",
 "Alperton",
 "Arnos Grove",
 "Arsenal",
 "Boston Manor",
 "Bounds Green",
 "Caledonian Road",
 "Cockfosters",
 "Covent Garden",
 "Finsbury Park",
 "Hatton Cross",
 "Heathrow Terminal 4",
 "Heathrow Terminal 5",
 "Heathrow Terminals 123",
 "Holloway Road",
 "Hounslow Central",
 "Hounslow East",
 "Hounslow West",
 "Hyde Park Corner",
 "Knightsbridge",
 "Manor House",
 "North Ealing",
 "Northfields",
 "Oakwood",
 "Osterley",
 "Park Royal",
 "Russell Square",
 "South Ealing",
 "South Harrow",
 "Southgate",
 "Sudbury Hill",
 "Sudbury Town",
 "Turnpike Lane",
 "Wood Green",
 "Blackhorse Road",
 "Brixton",
 "Highbury and Islington",
 "Pimlico",
 "Seven Sisters",
 "Tottenham Hale",
 "Vauxhall",
 "Walthamstow Central"
];

//var stationsTwo = stations.toLowerCase()

//console.log(stationsTwo)

//^So, the first thing I tried to do was make them all lowercase. Is the reason this isn't working because they're in an array?

//this is the function that is going to to go through and only feed us back station names that don't have the letters from "mackerel" in them
 function findStation(letter, name) {
 //this empty array will hold the answers this function outputs
   var fishFree = []
 //this loop goes though every item in the array, one at a time, starting at the beginning and going until it reaches the end. I started out with a =< and couldn't figure out why I was getting "undefined" at first.
    for (i = 0; i < name.length; i++) {
      //because if true === true later don't make a lick of sense
      var passing = true
//so as the first loop is going through, it is running a loop within it that looks at each of the letters of each item it is looking through
      for (var j = 0; j < letter.length; j++) {
//this variable will hold items with the letters we don't want
       var blacklist = letter[j]
//this is where it checks the lower-cased name against the letters we've blacklisted
      if (name[i].toLowerCase().match(blacklist)) {
        //and if it matches, it's false!
         passing = false
       }
     }
     //k, so if it does pass our check, we want it to get to our fishFree array
      if (passing === true) {
        fishFree.push(name[i])
     }

    }
//returns the final value of fishFree for our use
   return fishFree
 };

console.log(findStation(searchTerm, stations));