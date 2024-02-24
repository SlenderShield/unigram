import karnatakaGovIcon from './assets/fwdserviceicon/01-Karnataka-Gov.png';
import rdprIcon from './assets/fwdserviceicon/02-RDPR.png';
import eGramSwarajIcon from './assets/fwdserviceicon/03-e-Gram-Swaraj.png';
import panchatantraIcon from './assets/fwdserviceicon/04-Panchatantra-2.0.png';
import sakalaIcon from './assets/fwdserviceicon/05-Sakala.png';
import gskIcon from './assets/fwdserviceicon/05.1-GSK-2.0.png';
import swachhBharatIcon from './assets/fwdserviceicon/06-Swachh-Bharat-Mission.png';
import rdwsIcon from './assets/fwdserviceicon/07-RDWS.png';
import swacchaMevaJayateIcon from './assets/fwdserviceicon/07-Swaccha-Meva-Jayate.png';
import bskIcon from './assets/fwdserviceicon/08-BSK.png';
import ashrayaIcon from './assets/fwdserviceicon/09-Ashraya.png';
import eSwattuIcon from './assets/fwdserviceicon/10-E-Swattu.png';
import mgnregaIcon from './assets/fwdserviceicon/11-MGNREGA.png';
import gpdpIcon from './assets/fwdserviceicon/12-GPDP.png';
import digitalLibraryIcon from './assets/fwdserviceicon/13-Digital-Library.png';
import adhaarIcon from './assets/fwdserviceicon/14-Adhaar.png';
import kanajaIcon from './assets/fwdserviceicon/15-kanaja.png';
import eKannadaIcon from './assets/fwdserviceicon/16-E-Kannada.png';
import kshrcIcon from './assets/fwdserviceicon/17-KSHRC.png';
import electionCommissionIcon from './assets/fwdserviceicon/18-Election-Comission.png';
import legalServiceAuthorityIcon from './assets/fwdserviceicon/19-Leagul-Service-Authority.png';
import govContactManualIcon from './assets/fwdserviceicon/20-Gov-Contact-Manual.png';
import eProcurementIcon from './assets/fwdserviceicon/21-E-Procurement.png';
import gemIcon from './assets/fwdserviceicon/22-Gem.png';
import ipgrsIcon from './assets/fwdserviceicon/23-IPGRS.png';
import ksatIcon from './assets/fwdserviceicon/24-KSAT.png';
import eCourtIcon from './assets/fwdserviceicon/25-E-Court.png';
import rtiIcon from './assets/fwdserviceicon/26-RTI.png';
import khajaneIcon from './assets/fwdserviceicon/27-Khajane.png';
import womenCommissionIcon from './assets/fwdserviceicon/28-Women-Comission.png';

export const menuItemsData = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'About',
        url: '/about',
    },
    {
        title: 'Services',
        url: '/services',
        submenu: [
            {
                title: "Circular ADDA",
                url: "circular-adda",
                submenu: [
                    {
                        title: "Panchayath Raj",
                        url: "panchayath-raj",
                        submenu: [
                            {
                                title: "Accounts",
                                url: "accounts"
                            },
                            {
                                title: "Acts and Rules",
                                url: "acts-and-rules"
                            },
                            {
                                title: "CFC Grants",
                                url: "cfc-grants"
                            },
                            {
                                title: "Court Matters",
                                url: "court-matters"
                            },
                            {
                                title: "E Swathu",
                                url: "e-swathu"
                            },
                            {
                                title: "GP Staff",
                                url: "gp-staff"
                            },
                            {
                                title: "KTPP",
                                url: "ktpp"
                            },
                            {
                                title: "MGNREGA",
                                url: "mgnrega"
                            },
                            {
                                title: "Others",
                                url: "others"
                            },
                        ]
                    },
                    {
                        title: "Service Matters",
                        url: "service-matters",
                        submenu: [
                            {
                                title: "Act and Rules",
                                url: "act-and-rules"
                            },
                            {
                                title: "CCA",
                                url: "cca"
                            },
                            {
                                title: "Establishment",
                                url: "establishment"
                            },
                            {
                                title: "Finance Matters",
                                url: "finance-matters"
                            },
                            {
                                title: "Leave Rules",
                                url: "leave-rules"
                            },
                            {
                                title: "Others",
                                url: "others"
                            },
                            {
                                title: "Protocal",
                                url: "protocal"
                            },
                            {
                                title: "User Manual",
                                url: "user-manual"
                            },
                        ]
                    },
                ]
            },
            {
                title: "RTI",
                url: "rti",
                submenu: [
                    {
                        title: "RTI 4(1) A",
                        url: "rti-4-1a"
                    },
                    {
                        title: "RTI 4(1) B",
                        url: "rti-4-1b"
                    },
                    {
                        title: "RTI Helpline",
                        url: "rti-helpline"
                    }
                ]
            },
            {
                title: "Engineering",
                url: "engineering"
            },
            {
                title: "GP Assistant",
                url: "gp-assistant"
            },
        ]
    },
    {
        title: 'Blog',
        url: '/blog',
    },
    {
        title: 'Contact',
        url: '/contact',
    },
    {
        title: 'Login',
        url: '/login'
    }
];

export const UsefulLinkImages = [
    { title: "Karnataka Government", imgValue: karnatakaGovIcon, altText: "Image for Karnataka Gov Logo" },
    { title: "RDPR", imgValue: rdprIcon, altText: "Image for RDPR" },
    { title: "e Gram Swaraj", imgValue: eGramSwarajIcon, altText: "Image for e Gram Swaraj" },
    { title: "Panchatantra 2.0", imgValue: panchatantraIcon, altText: "Image for Panchatantra 2.0" },
    { title: "Sakala", imgValue: sakalaIcon, altText: "Image for Sakala" },
    { title: "GSK 2.0", imgValue: gskIcon, altText: "Image for GSK 2.0" },
    { title: "Swachh Bharat Mission", imgValue: swachhBharatIcon, altText: "Image for Swachh Bharat Mission" },
    { title: "RDWS", imgValue: rdwsIcon, altText: "Image for RDWS" },
    { title: "Swaccha Meva Jayate", imgValue: swacchaMevaJayateIcon, altText: "Image for Swaccha Meva Jayate" },
    { title: "BSK", imgValue: bskIcon, altText: "Image for BSK" },
    { title: "Ashraya", imgValue: ashrayaIcon, altText: "Image for Ashraya" },
    { title: "E-Swattu", imgValue: eSwattuIcon, altText: "Image for E-Swattu" },
    { title: "MGNREGA", imgValue: mgnregaIcon, altText: "Image for MGNREGA" },
    { title: "GPDP", imgValue: gpdpIcon, altText: "Image for GPDP" },
    { title: "Digital Library", imgValue: digitalLibraryIcon, altText: "Image for Digital Library" },
    { title: "Adhaar", imgValue: adhaarIcon, altText: "Image for Adhaar" },
    { title: "Kanaja", imgValue: kanajaIcon, altText: "Image for Kanaja" },
    { title: "E-Kannada", imgValue: eKannadaIcon, altText: "Image for E-Kannada" },
    { title: "KSHRC", imgValue: kshrcIcon, altText: "Image for KSHRC" },
    { title: "Election Comission", imgValue: electionCommissionIcon, altText: "Image for Election Comission" },
    { title: "Legal Service Authority", imgValue: legalServiceAuthorityIcon, altText: "Image for Legal Service Authority" },
    { title: "Gov Contact Manual", imgValue: govContactManualIcon, altText: "Image for Gov Contact Manual" },
    { title: "E-Procurement", imgValue: eProcurementIcon, altText: "Image for E-Procurement" },
    { title: "Gem", imgValue: gemIcon, altText: "Image for Gem" },
    { title: "IPGRS", imgValue: ipgrsIcon, altText: "Image for IPGRS" },
    { title: "KSAT", imgValue: ksatIcon, altText: "Image for KSAT" },
    { title: "E Court", imgValue: eCourtIcon, altText: "Image for E Court" },
    { title: "RTI", imgValue: rtiIcon, altText: "Image for RTI" },
    { title: "Khajane", imgValue: khajaneIcon, altText: "Image for Khajane" },
    { title: "Women Comission", imgValue: womenCommissionIcon, altText: "Image for Women Comission" }
  ];