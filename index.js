import React from 'react';
import ReactDOM from 'react-dom/client'

// HEADER
//     - logo
//     - nav tabs
// BODY
//     - search
//     - card container
//         - cards
// *img
// *name of the restaurent
// * rating
// * how much time 
// * CountQueuingStrategy
// FOOTER
//     - links
//     - copywrites
//     - company deatails


const root = ReactDOM.createRoot(document.getElementById('root'))

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src='https://i.pinimg.com/736x/82/be/d4/82bed479344270067e3d2171379949b3.jpg' width={'100em'}></img>
            </div>
            <div id='nav-tabs'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Contact Us</a></li>
                    <li><a href='#'>Cart</a></li>
                </ul>
            </div >
        </div>
    )
}


const restaurantsList = [
    {
        info: {
            "id": "229",
            "name": "Meghana Foods",
            "cloudinaryImageId": "xqwpuhgnsaf18te7zvtv",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Biryani",
                "Andhra",
                "South Indian",
                "North Indian",
                "Chinese",
                "Seafood"
            ],
            "avgRating": 4.5,
            "parentId": "635",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "17 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-25 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-5ed4a331-e5ac-4294-a246-77f0d1d95a3a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/meghana-foods-koramangala-bangalore-229",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "121603",
            "name": "Kannur Food Point",
            "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
            "locality": "SG Palya",
            "areaName": "BTM",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Kerala",
                "Chinese"
            ],
            "avgRating": 4,
            "parentId": "20974",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-26 03:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-5ed4a331-e5ac-4294-a246-77f0d1d95a3a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kannur-food-point-sg-palya-btm-bangalore-121603",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "428",
            "name": "Biryani Pot",
            "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
            "locality": "Maruti Nagar",
            "areaName": "Btm Layout",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "North Indian",
                "Biryani"
            ],
            "avgRating": 4,
            "parentId": "21798",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-26 03:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-5ed4a331-e5ac-4294-a246-77f0d1d95a3a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/biryani-pot-maruti-nagar-btm-layout-bangalore-428",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "425",
            "name": "Hotel Empire",
            "cloudinaryImageId": "un4omn7rcunkmlw6vikr",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "North Indian",
                "Kebabs",
                "Biryani"
            ],
            "avgRating": 4.3,
            "parentId": "475",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-26 03:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-5ed4a331-e5ac-4294-a246-77f0d1d95a3a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/hotel-empire-koramangala-bangalore-425",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "59593",
            "name": "Al Daaz",
            "cloudinaryImageId": "rxsvhvcdip9dbfdijzk9",
            "locality": "HSR Layout",
            "areaName": "HSR",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "American",
                "Arabian",
                "Chinese",
                "Desserts",
                "Mughlai",
                "North Indian"
            ],
            "avgRating": 4.5,
            "parentId": "21640",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 4.4,
                "serviceability": "SERVICEABLE",
                "slaString": "39 mins",
                "lastMileTravelString": "4.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-25 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-5ed4a331-e5ac-4294-a246-77f0d1d95a3a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/al-daaz-layout-hsr-bangalore-59593",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "769775",
            "name": "Nahdi Mandi Restaurant",
            "cloudinaryImageId": "8e82f6e42f5e5bde0649f1f8f48209d8",
            "locality": "Bengalur",
            "areaName": "BTM",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "Biryani",
                "Arabian",
                "North Indian"
            ],
            "avgRating": 4.4,
            "parentId": "459711",
            "avgRatingString": "4.4",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 2,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "2.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-25 23:45:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "15% OFF",
                "subHeader": "UPTO ₹45"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-5ed4a331-e5ac-4294-a246-77f0d1d95a3a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/nahdi-mandi-restaurant-bengalur-btm-bangalore-769775",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "337335",
            "name": "Kannur food kitchen",
            "cloudinaryImageId": "a27weqanhnszqiuzsoik",
            "locality": "1st  Stage",
            "areaName": "BTM Layout",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Kerala",
                "Biryani",
                "Beverages"
            ],
            "avgRating": 4,
            "parentId": "114756",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 2.9,
                "serviceability": "SERVICEABLE",
                "slaString": "31 mins",
                "lastMileTravelString": "2.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-26 04:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-5ed4a331-e5ac-4294-a246-77f0d1d95a3a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kannur-food-kitchen-1st-stage-btm-layout-bangalore-337335",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "528523",
            "name": "New Ambur Biryani Point",
            "cloudinaryImageId": "2b6b93195cd8e50f9e393692cf91ed7d",
            "locality": "Mahalingeshwara layout",
            "areaName": "Adugodi",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Biryani",
                "Chinese",
                "North Indian"
            ],
            "avgRating": 4.2,
            "parentId": "318345",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-25 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹45"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-5ed4a331-e5ac-4294-a246-77f0d1d95a3a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/new-ambur-biryani-point-mahalingeshwara-layout-adugodi-bangalore-528523",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "275",
            "name": "Mani's Dum Biryani",
            "cloudinaryImageId": "xlr4ngepa5gxkugrsdbs",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Andhra",
                "Biryani",
                "North Indian"
            ],
            "avgRating": 4.5,
            "parentId": "623",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "22 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-26 00:45:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-5ed4a331-e5ac-4294-a246-77f0d1d95a3a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/manis-dum-biryani-koramangala-bangalore-275",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]



const RestaurantCard = (props) => {
    const { restData } = props;

    const { name, cuisines, avgRatingString, sla, costForTwo, cloudinaryImageId } = restData?.info

    return (
        <div className='res-card'>
            <div className='res-img'>
                <img className='img' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
            </div>
            <div className='card-details'>
                <div className="main-feat">
                    <h6>{name}</h6>
                    <p>{cuisines.join(', ')}</p>
                </div>
                <div className='sub-feat'>
                    <div className='rating'>
                        <img src="https://api.iconify.design/ic:outline-star-outline.svg?color=%23ffffff"></img>
                        <p>{avgRatingString}</p>
                    </div>
                    <p>{sla.slaString}</p>
                    <p>{costForTwo}</p>
                </div>
                <h5>free delivery</h5>
            </div>
        </div>
    )
}


const Body = () => {
    return (
        <div>
            <div id="body-container">
                <input id="searchinput" type="search" name="search" placeholder='Search the items!!!'></input>
                <button id="searchbtn">Search</button>
            </div>
            <div className="restaur-container">

                {
                    restaurantsList.map((rest) => {
                        return <RestaurantCard key={rest.info.id} restData={rest} />
                    })
                }
            </div>
        </div >
    )
}



const Applayout = () => {
    return (<div className='main-container-of-all'>
        <Header />
        <Body />
    </div>
    )
}


root.render(<Applayout />);