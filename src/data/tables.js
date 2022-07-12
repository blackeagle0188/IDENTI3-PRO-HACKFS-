import React from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobeIcon } from "@heroicons/react/solid";

import USAFlag from 'assets/img/flags/united-states-of-america.svg';
import CanadaFlag from 'assets/img/flags/canada.svg';
import GermanyFlag from 'assets/img/flags/germany.svg';
import FranceFlag from 'assets/img/flags/france.svg';
import JapanFlag from 'assets/img/flags/japan.svg';
import ItalyFlag from 'assets/img/flags/italy.svg';

import { GoogleIcon, TwitterIcon, YahooIcon, YoutubeIcon } from "components/BrandIcons";

const pageVisits = [
    { id: uuidv4(), views: 4.525, returnValue: 255, bounceRate: 42.55, pageName: "/demo/admin/index.html" },
    { id: uuidv4(), views: 2.987, returnValue: 139, bounceRate: -43.52, pageName: "/demo/admin/forms.html" },
    { id: uuidv4(), views: 2.844, returnValue: 124, bounceRate: -32.35, pageName: "/demo/admin/util.html" },
    { id: uuidv4(), views: 1.220, returnValue: 55, bounceRate: 15.78, pageName: "/demo/admin/validation.html" },
    { id: uuidv4(), views: 505, returnValue: 3, bounceRate: -75.12, pageName: "/demo/admin/modals.html" }
];

const pageTraffic = [
    { id: uuidv4(), source: "github.com", sourceType: "Lyons800 Github", category: "Development Tooling",authType: "MFA", connectionDate: 51, change: 2.45, sourceIcon: <GlobeIcon className="icon icon-xxs text-gray-500 me-2" /> },
    { id: uuidv4(), source: "google.com", sourceType: "Personal Google", category: "General", authType: "MFA" , connectionDate: 18, change: 17.67, sourceIcon: <GoogleIcon size="xxs" color="gray-500" className="me-2" /> },
    { id: uuidv4(), source: "youtube.com", sourceType: "Main Youtube Account", category: "Arts and Entertainment", authType: "MFA", connectionDate: 27, sourceIcon: <YoutubeIcon size="xxs" color="gray-500" className="me-2" /> },
    { id: uuidv4(), source: "yahoo.com", sourceType: "Backup Email", category: "News and Media", authType: "Cookie", connectionDate: 8, change: -9.30, sourceIcon: <YahooIcon size="xxs" color="gray-500" className="me-2" /> },
    { id: uuidv4(), source: "twitter.com", sourceType: "Company Twitter Email", category: "Social Networks", authType: "MFA", connectionDate: 4, sourceIcon: <TwitterIcon size="xxs" color="gray-500" className="me-2" /> },
    { id: uuidv4(), source: "app.dework.xyz", sourceType: "DAO Bounties", category: "DAO Tooling", authType: "Cookie", connectionDate: 4, sourceIcon: <TwitterIcon size="xxs" color="gray-500" className="me-2" /> }


];

const pageRanking = [
    { id: uuidv4(), country: "United States", countryImage: USAFlag, overallRank: 76, overallRankChange: -5, travelRank: 3, widgetsRank: 32, widgetsRankChange: 3 },
    { id: uuidv4(), country: "Canada", countryImage: CanadaFlag, overallRank: 106, overallRankChange: 17, travelRank: 4, widgetsRank: 30, widgetsRankChange: 3 },
    { id: uuidv4(), country: "France", countryImage: FranceFlag, overallRank: 112, overallRankChange: 10, travelRank: 5, widgetsRank: 34, widgetsRankChange: 7 },
    { id: uuidv4(), country: "Japan", countryImage: JapanFlag, overallRank: 115, overallRankChange: 3, travelRank: 7, travelRankChange: 1, widgetsRank: 39, widgetsRankChange: -2 },
    { id: uuidv4(), country: "Germany", countryImage: GermanyFlag, overallRank: 147, overallRankChange: -12, travelRank: 10, travelRankChange: -1, widgetsRank: 12, widgetsRankChange: -5 },
    { id: uuidv4(), country: "Italy", countryImage: ItalyFlag, overallRank: 220, overallRankChange: -56, travelRank: 11, travelRankChange: -3, widgetsRank: 89, widgetsRankChange: 2 }
];

const invoiceItems = [
    { id: uuidv4(), item: "Origin License", description: "Extended License", price: "999,00", quantity: 1 },
    { id: uuidv4(), item: "Custom Services", description: "Instalation and Customization (cost per hour)", price: "150,00", quantity: 20 },
    { id: uuidv4(), item: "Hosting", description: "1 year subcription", price: "499,00", quantity: 1 },
    { id: uuidv4(), item: "Platinum Support", description: "1 year subcription 24/7", price: "3999,00", quantity: 1 },
];

export {
    pageVisits,
    pageTraffic,
    pageRanking,
    invoiceItems,
};