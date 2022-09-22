const slideData = [
    {
        photo: "./images/loopgroep.jpg",
        title: "Groepsfoto",
        text: "nieuwe foto met alle muzikanten"
    },
    {
        photo: "./images/mza.jpg",
        title: "MZA 2022",
        text: "midzomerfavondfestival in De Kwakel"
    },
    {
        photo: "./images/opdekar.jpg",
        title: "Sinterklaas",
        text: "rondrit door Uithoorn en De Kwakel met Sinterklaas"
    },
    {
        photo: "./images/mijdrecht.jpg",
        title: "Marathon",
        text: "langs de route van de Ronde Venen Marathon"
    },
    {
        photo: "./images/kinderoptocht.jpg",
        title: "Kinderoptocht",
        text: "de kinderoptocht met de kermis in De Kwakel"
    },
];

const gridData = [
    {
        id: "tourbtn",
        photo: "./images/landkaart.jpg",
        title: "Tourschema",
        sub: "wil je ons een keer zien spelen?",
        button: "bekijk de lijst",
    },
    {
        id: "whobtn",
        photo: "./images/logo.jpg",
        title: "Even voorstellen",
        sub: "wat is Steelband Tavenu?",
        button: "lees verder",
    },
    {
        id: "membersbtn",
        photo: "./images/muzikanten.jpg",
        title: "Muzikanten",
        sub: "de muzikanten stellen zich voor",
        button: "bekijk ze hier",
    },
];

const wieData = [
    "Wat is nu precies een steelband? Daarvoor gaan we eerst terug naar de vorige eeuw, naar Trinidad. Daar spelen ontevreden slaven met houten lepels en bamboestokken op trommels, lege flessen, lege kisten en na de aanleg van een militair vliegveld ook op lege olievaten. Het blijkt al snel dat de olievaten niet alleen gebruikt kunnen worden om er puur op te slaan, maar ze worden al snel bewerkt, zodat er een systeem komt van uitgeklopte holtes die elk een aparte klank geven. Zo is er dus een hele reeks aan steeldrums ontstaan, met hogere en lagere tonen. De hoge tonen zijn kleine holtes, en hoe lager de toon wordt, hoe groter het vakje.",
    "Onze steelband is dus een complete band, met alle variaties van steeldrums. De melodie wordt gespeeld op de tenor, dat is 1 vat met een heleboel hoge noten er in verwerkt, in totaal zo'n 2½ a 3 octaven. De tweede stem wordt gespeeld op de double tenor en op de guitar. De guitar is ook een enkele pan met een klein bereik, dus die wordt ook tussendoor ingezet om de akkoorden mee te spelen. De double tenor bestaat uit 2 vaten en daarop worden de iets lagere tonen gespeeld. Dan hebben we ook nog de double second, die is een beetje vergelijkbaar met de double tenor. Wat noten betreft wordt deze iets meer gebruikt voor de begeleiding met akkoorden, maar zeker ook regelmatig leuke loopjes of de tweede stem. Op de cello worden de lage tonen gespeeld. Veelal akkoorden, maar om nummers op te leuken ook vaak begeleidende melodieën. De cello bestaat bij ons uit 3 pannen. De allerlaagste tonen zijn natuurlijk voor de bas. Onze bas sets bestaan uit 6 olievaten en hebben een bereik van anderhalf octaaf. Het geheel wordt aangevuld met een drumstel, die toch vooral bepalend is voor het ritme en het tempo in de nummers.",
    "Met optredens is het altijd een heel gesleep met spullen, want we nemen natuurlijk aardig wat ruimte in beslag. Als de instrumenten dan eenmaal staan, dan staat het ook prima en kunnen we onze nummers ten gehore brengen. Alleen is dat niet altijd overal even handig of gewenst. Daarom hebben we daar wat dingen op bedacht. Als eerste hebben we een podiumwagen aangeschaft en zelf helemaal omgebouwd naar onze wensen. Deze podiumwagen kunnen we ergens neerzetten en uitklappen en dan vanaf de wagen spelen, desnoods met geluidsversterking. Plus we staan droog. Ook kunnen we er rijdend mee optreden. Zo hebben we al met verschillende bloemencorso's meegedaan en ook elk jaar in november rijden we als zwarte pieten mee met Sinterklaasintochten in het land. We hebben ook wel eens een optreden gedaan in een winkelcentrum, en dan staan we de hele dag op één plek. Voor de winkels is dat ook niet altijd even handig, dus mede daardoor zijn we in 2013 ook een zogenaamde loopsteelband begonnen. Hierbij zijn de instrumenten iets anders, elke muzikant heeft 1 steeldrum, en die heb je dan omhangen. Het aantal verschillende instrumenten is iets minder. We hebben hier alleen de tenor, de guitar en dan een 4-bas en een 2-bas. En uiteraard een slagwerker ter begeleiding. Omdat alle instrumenten uit 1 pan bestaan zijn er ook minder noten beschikbaar, en is daardoor het bereik van de toonladders minder. We hebben dan ook een ander repertoire dan voor de “gewone” steelband. En wat dus het grote voordeel is van de loopsteelband, is dat we makkelijk snel kunnen verplaatsen. We kunnen niet echt marcheren zoals een muziekkorps, maar een klein stukje voorop lopen bij een optocht kan wel.",
];

const tavenuData = [
    "De steelband is onderdeel van Muziekvereniging TAVENU uit De Kwakel.",
    "Alle aanvullende informatie over o.a. het bestuur, huishoudelijk reglement, contributie, etc is terug te vinden op de volgende website:",
    "www.tavenu-dekwakel.nl",
    {url: "https://tavenu-dekwakel.nl"},
];

const privacyData = [
    "Steelband Tavenu maakt onderdeel uit van Muziekvereniging Tavenu. Muziekvereniging Tavenu hecht veel waarde aan de bescherming van uw persoonsgegevens. In deze Privacy Policy willen we heldere en transparante informatie geven over hoe wij omgaan met persoonsgegevens.",
    "Wij doen er alles aan om uw privacy te waarborgen en gaan daarom zorgvuldig om met persoonsgegevens. Muziekvereniging Tavenu houdt zich in alle gevallen aan de toepassselijke wet- en regelgeving, waaronder de Algemene Vordering Gegevensbescherming. Dit brengt met zich mee dat wij in ieder geval:",
    [
        "Uw persoonsgegevens verwerken in overeenstemming met het doel waarvoor deze zijn verstrekt. Deze doelen en type persoonsgegevens zijn beschreven in dit Privacy Policy;",
        "Verwerking van uw persoonsgegevens beperkt is tot enkel die gegevens welke minimaal nodig zijn voor de doeleinden waarvoor ze worden verwerkt;",
        "Vragen om uw uitdrukkelijke toestemming als wij deze nodig hebben voor de verwerking van uw persoonsgegevens;",
        "Passende technische en organisatorische maatregelen hebben genomen zodat de beveiliging van uw persoonsgegevens gewaarborgd is;",
        "Geen persoonsgegevsn doorgeven aan andere partijen, tenzij dit nodig is voor uitvoering van de doeleinden waarvoor ze zijn verstrekt;",
        "Op de hoogte zijn van de rechten omtrent uw persoonsgegevens, u hierop willen wijzen en deze respecteren;",
    ],
    "Als Muziekvereniging Tavenu zijn wij verantwoordelijk voor de verwerking van uw persoonsgegevens. Indien u na het doornemen van ons Privacy Policy, of in algemenere zin, vragen heeft hierover of contact met ons wenst op te nemen kan dit via de contactgegevens onder de menuknop 'contact'.",
];
