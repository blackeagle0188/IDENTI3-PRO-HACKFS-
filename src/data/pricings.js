import { v4 as uuidv4 } from "uuid";

export default [
    {
        "id": uuidv4(),
        "priceMonthly": 0,
        "priceYearly": 0,
        "title": "Free trial",
        "btnText": "Start for Free",
        "description": "If you're new to SEO or just need the basics.",
        "features": [
            "Users 1",
            "Full access to design tool",
            "Publish with Volt ® watermark",
            "Sub-domain publish",
            "Public Share & Comments",
            "Targeted ads",
            "Chat Support"
        ]
    },
    {
        "id": uuidv4(),
        "priceMonthly": 199,
        "priceYearly": 99,
        "title": "Standard",
        "btnText": "Go to Standard",
        "description": "Full access to keyword research tools.",
        "features": [
            "Users 5+",
            "All features on FREE plan",
            "Ads free",
            "Hide Volt ® watermark",
            "All apps",
            "Connect to custom domain",
            "3rd party service integrations"
        ]
    },
    {
        "id": uuidv4(),
        "priceMonthly": 299,
        "priceYearly": 199,
        "variant": "secondary",
        "title": "Premium",
        "btnText": "Start with Pro",
        "btnTextColor": "dark",
        "description": "The ideal plan for businesses and agencies.",
        "features": [
            "Users 20+",
            "All features on STANDARD plan",
            "CMS Integrated",
            "Premium Analytics",
            "Single Sign-On (SSO)",
            "Co-conception program",
            "Unlimited editable exports"
        ]
    }
]