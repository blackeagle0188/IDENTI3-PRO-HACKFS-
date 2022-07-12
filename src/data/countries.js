import { v4 as uuidv4 } from "uuid";

import USAFlag from 'assets/img/flags/united-states-of-america.svg';
import CanadaFlag from 'assets/img/flags/canada.svg';
import GermanyFlag from 'assets/img/flags/germany.svg';
import FranceFlag from 'assets/img/flags/france.svg';
import JapanFlag from 'assets/img/flags/japan.svg';
import ItalyFlag from 'assets/img/flags/italy.svg';
import NetherlandsFlag from 'assets/img/flags/netherlands.svg';
import SwedenFlag from 'assets/img/flags/sweden.svg';

export default [
    {
        "id": uuidv4(),
        "image": USAFlag,
        "name": "United States",
        "visits": 272.109,
        "percentage": 36
    },
    {
        "id": uuidv4(),
        "image": CanadaFlag,
        "name": "Canada",
        "visits": 160.064,
        "percentage": 20,
        "color": "secondary"
    },
    {
        "id": uuidv4(),
        "image": GermanyFlag,
        "name": "Germany",
        "visits": 120.048,
        "percentage": 15,
        "color": "tertiary"
    },
    {
        "id": uuidv4(),
        "image": FranceFlag,
        "name": "France",
        "visits": 100.048,
        "percentage": 8
    },
    {
        "id": uuidv4(),
        "image": JapanFlag,
        "name": "Japan",
        "visits": 56.022,
        "percentage": 7
    },
    {
        "id": uuidv4(),
        "image": ItalyFlag,
        "name": "Italy",
        "visits": 48.019,
        "percentage": 6
    },
    {
        "id": uuidv4(),
        "image": NetherlandsFlag,
        "name": "Netherlands",
        "visits": 40.016,
        "percentage": 5
    },
    {
        "id": uuidv4(),
        "image": SwedenFlag,
        "name": "Sweden",
        "visits": 26.016,
        "percentage": 3
    }
]