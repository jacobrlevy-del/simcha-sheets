// Simcha Sheets: storefront config (owned by the COO)
// PAYPAL_BUSINESS: the founder's PayPal Merchant ID (preferred, from PayPal > Account Settings > Business information)
//                  or the account email. Leave empty and the Buy button shows "Coming soon".
window.SS_CONFIG = {
  PAYPAL_BUSINESS: "jacobrlevy@gmail.com",
  SITE_URL: "https://simcha-sheets.netlify.app",
  CURRENCY: "USD",
  // Pay-what-you-want tiers (all deliver the same PDF; all proceeds after PayPal fee go to Magen David Adom)
  TIERS: [
    { amount: "1.00", label: "$1" },
    { amount: "5.00", label: "$5" },
    { amount: "18.00", label: "$18 · chai" },
    { amount: "36.00", label: "$36 · double chai" }
  ],
  PRODUCTS: {
    "CH-5787": { name: "Chanukah 5787 Family Pack (PDF)", price: "1.00", returnPath: "/d/yiPtuR87-Gl880IJ/" }
  }
};
