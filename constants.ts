export const PRESENTATION_DATA = {
  market_overview: {
    quick_commerce: {
      title: "India Quick Commerce Market Size & Projections",
      data: [
        { year: "FY20", market_size_usd_billion: 0.1 },
        { year: "FY22", market_size_usd_billion: 0.3 },
        { year: "FY23", market_size_usd_billion: 3.0 },
        { year: "FY24", market_size_usd_billion: 3.3 },
        { year: "FY25 (Est.)", market_size_usd_billion: 7.1 },
        { year: "FY29 (Proj.)", market_size_usd_billion: 9.95 },
        { year: "FY30 (Proj.)", market_size_usd_billion: 35.0 },
      ],
      market_share_by_city_tier: {
          data: [
              { tier: "Tier I Metros", share_percentage: 66.55 },
              { tier: "Tier II & Below", share_percentage: 33.45 }
          ],
      }
    },
  },
  competitive_landscape: {
    dark_store_network: [
      { player: "JioMart", store_count: 18000 },
      { player: "Blinkit", store_count: 791 },
      { player: "Zepto", store_count: 350 },
      { player: "Swiggy Instamart", store_count: 557 },
    ],
    average_order_value: {
        data: [
            { player: "Blinkit", aov_inr: "614-660" },
            { player: "Swiggy Instamart", aov_inr: "460-499" },
            { player: "Zepto", aov_inr: "430-470" }
        ]
    },
  },
  fruits_and_vegetables: {
      post_harvest_wastage: {
        percentage_low: 30,
        percentage_high: 40,
        value_inr_crore: 92000,
      },
      cold_chain_market: {
        capacity_utilization: {
            utilization_percentage: 60
        }
    }
  },
  consumer_insights: {
    online_payment_preferences: {
        data: [
            { mode: "Online", revenue_share_percentage: 61.1 },
            { mode: "Offline (COD)", revenue_share_percentage: 38.9 }
        ]
    },
    priorities: {
        labels: ["Freshness", "Price", "Quality", "Convenience", "Trust"],
        values: [5, 4, 5, 3, 4] // Assigning sample values 1-5 for importance
    },
    delivery_speed_expectations: {
        data: [
            { preference: "Delivery within 30 minutes", percentage: 72 },
            { preference: "Delivery by appointment", percentage: 28 }
        ]
    }
  },
  employment_data: {
      current_employment: {
          estimate_low: 6,
          estimate_high: 7
      },
      projected_employment: {
          estimate_low: 11,
          estimate_high: 13
      }
  },
  farmnet_solution: {
    investment: 250,
    projected_revenue: 650,
  },
  jioMart_specifics: {
    reach: {
      pin_codes: 4000,
    },
    current_fnv_contribution_percentage: 5,
    target_fnv_contribution_percentage: 8,
  }
};