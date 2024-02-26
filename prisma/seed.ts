import { PrismaClient } from '@prisma/client';
import fs from "fs"

// Reading the JSON file



const productData=[{
    "title":"Sabji Masala",
    "description":"With the quality blend of herbs and spices in PlanetsEra's Sabji Masala, your vegetables will taste and have more depth. Because it is composed entirely of natural ingredients, it is free of additives and preservatives. The Sabzi Masala from PlanestEra will give your vegetables a delicious flavour. A delicate mixture of spices enhances the taste of vegetable meals. In PlanetsEra Mix Masala Powder, we provide you with the best Sabji Masala for your dishes. Adding it to veggie recipes gives them a delicious aroma and colour.",
   "productImageUrl":"allProductsImg/SabjiMasala.webp",
   "Flipkart":true,
   "Amazon":false,
   "productUrl":"sabji-masala",
   "category":["BestSelling","KitchenSpices"],
   "type":"blended",
   
    "variant":[{
        "weight":"50",
        "price":30,
        "imgurl":["allProductsImg/SabjiMasala.webp","allProductsImg/SabjiMasala-Back-50.webp","allProductsImg/SabjiMasala-BackContent-50.webp"]

    },
    {
        "weight":"100",
        "price":55,
        "imgurl":["allProductsImg/SabjiMasala.webp","allProductsImg/SabjiMasala-Back-100.webp","allProductsImg/SabjiMasala-BackContent-100.webp"]

    },
    {
        "weight":"500",
        "price":275,
        "imgurl":["allProductsImg/SabjiMasala-500.webp","allProductsImg/SabjiMasala-Back-500.webp","allProductsImg/SabjiMasala-BackContent-500.webp"]

    }

    ],
    "metaData":[
   {
       "usage":"You only need your favourite vegetables and PlanetsEra Sabji Masala for a quick vegetable curry. It's true; no extra spice is necessary to make food irresistible. The Planetsera Sabji Masala is a must-have for anyone who needs more cooking time but still wants to make delicious vegetable meals.",
       "ingredients":"Coriander, Cumin, Red Chili, Turmeric, Black Pepper, Cardamom Amomum, Dry Ginger, Bay Leaf, Salt, Clove, Nutmeg, Asafoetida, Dry Mango, Curry Leaves, Black Mustard, Green Cardamom, Black Salt       ",
       "healthBenefits":"Sabzi masala powder has many health benefits. Add this aromatic spice blend to vegetable recipes for flavour and nutrition. Sabzi masala helps digestion, metabolism, and delivers vitamins and minerals with its blend of healthy spices. Naturally healthy ingredients make it a tasty and nutritious addition to your cooking. Sabji masala is tasty and healthy.       ",
       "productBg":"allProductsImg/SabjiMasalaBg.webp",
       "colored": "#7F9F5E",
       "colored2": "#ADD4B0",
       "inactiveBtn": "rgb(127 159 94 / 38%)",
       "inactiveBtn2": "rgb(173 212 176 /38%)",
       "bgColor": "rgb(177 211 176)",
       "flipkart50":
      "https://www.flipkart.com/planetsera-sabji-masala/p/itma9772eaa0b140?pid=SCMGQ9JXXW8ZHXPG",
    "flipkart100":
      "https://www.flipkart.com/planetsera-sabji-masala/p/itma9772eaa0b140?pid=SCMGQCXBCQZWJG5M",
    "flipkart500":
      "https://www.flipkart.com/planetsera-sabji-masala/p/itma9772eaa0b140?pid=SCMGQEXY83ZPYPZN",
       
       faqs: [
        {
          question: "1. What is Sabzi Masala Powder?",
          answer:
            "Sabzi Masala Powder is a blend of spices that gives vegetarian recipes more flavour. It blends cumin, coriander, turmeric, and other spices in just the right amounts to give vegetable-based dishes more flavour and depth. This fragrant powder makes curries, stir-fries, and other vegetable recipes taste even better and give them more flavour.",
        },
        {
          question:
            "2. What spices are typically included in Sabzi Masala Powder?",
          answer:
            "Sabzi Masala Powder is a mix of spices that gives Indian food an extra boost of flavour. It usually has a mix of spices with a strong smell, such as cumin, coriander, mustard, red chilli, fenugreek, and others. This blend gives vegetable recipes a rich, savory taste and a bright colour. It is a must-have seasoning for vegetarian cooking.",
        },
        {
          question: "3. How is Sabzi Masala used in cooking?",
          answer:
            "Sabzi masala powder is a mix of spices that is used in many Indian dishes. It makes veggie dishes, curries, and stir-fries taste better. You can sprinkle or mix this spice blend into your sabzis (vegetables) while they are cooking to give them a burst of rich, savoury flavour. Sabzi masala powder makes your meatless dishes taste and smell better overall.",
        },
        {
          question: "4. Is Sabzi Masala the same as Garam Masala?",
          answer:
            "Garam Masala is not the same as Sabzi Masala powder. Sabzi Masala is a specific blend of spices made for vegetable-based meals. Garam Masala, on the other hand, is a versatile blend of spices that can be used in both vegetarian and non-vegetarian dishes. Each one has its own flavour and uses in the kitchen.",
        },
        {
          question: "5. Are there any health benefits to using Sabzi Masala?",
          answer:
            "Sabzi Masala Powder makes vegetable recipes taste better. Even though it is mostly used to add flavour, the spices in it may have some health benefits. Some of the spices in Sabzi Masala, like ginger and coriander, can help with growth and digestion. But the overall health benefits rely on how much and what kind of food is used.",
        },
      ],
   }
   
]
},
{
    "title":"Chat Masala",
    "description":"Chat Masala makes the right texture and also improves the taste of any drinks or fruits that are eaten with it. It has more than 18 different kinds of spices that are all different sizes. We know a lot about spices, so we were able to make this one-of-a-kind chat masala powder that will wake up your taste buds and make you want more. When it comes to masala spices, chat masala is one of the best ones that everyone uses and likes.",
    "productImageUrl":"allProductsImg/ChatMasala.webp",
    "category":["MouthWatering","WeekandTadka"],
    "Flipkart":true,
    "Amazon":true,
    "productUrl":"chat-masala",
    "type":"blended",
    


    "variant":[{
        "weight":"50",
        "price":38,
        "imgurl":["allProductsImg/ChatMasala.webp","allProductsImg/ChatMasala-Back-50.webp","allProductsImg/ChatMasala-BacKContent-50.webp"]

    },
    {
        "weight":"100",
        "price":70,
        "imgurl":["allProductsImg/ChatMasala.webp","allProductsImg/ChatMasala-Back-100.webp","allProductsImg/ChatMasala-BacKContent-100.webp"]

    },
    {
        "weight":"500",
        "price":330,
        "imgurl":["allProductsImg/ChatMasala-500.webp","allProductsImg/ChatMasala-Back-500.webp","allProductsImg/ChatMasala-BacKContent-500.webp"]

    }

    ],
    "metaData":[
   {
       "usage":"You can sprinkle it on Salties, Samosas, Sandwiches, Tikkies, Pizzas, Pakoras, Soft drinks, Dahi Wadas, Papris, Burgers, Wafers, Paneer-Tikkas, etc.       ",
       "ingredients":"Black Salt, Salt, Coriander, Dry Mango, Cumin, Rock Salt, Fennel Seed, Pomegranate Seed, Tamarind, Mint, Carom Seed, Black Pepper, Dry Ginger, Red Chili, Nutmeg, Clove, Asafoetida, Citric Acid       ",
       "healthBenefits":"Chat masala powder isn't just a flavorful spice blend; it also offers health benefits. Packed with a mix of spices like cumin, coriander, and asafoetida, it aids digestion and can alleviate indigestion and bloating. The best chaat masala can also provide a dash of antioxidants, helping to boost your overall well-being. Enjoy its tangy goodness while reaping these health perks.       ",
       "productBg":"allProductsImg/ChatMasalaBg.webp",
       "colored": "rgb(206 206 93)",
       "colored2": "#CDE1A2",
       "inactiveBtn": "rgb(209 209 69 / 38%)",
       "inactiveBtn2": "rgb(205 225 162 / 38%)",
       "bgColor": "rgb(238 238 216)",
       "amazon100": "https://www.amazon.in/dp/B0C3W3SH12?ref=myi_title_dp",

       "flipkart50":
         "https://www.flipkart.com/planetsera-chat-masala/p/itmfe8b6cf21eb08?pid=SCMGQMY9HA4NG7P2",
       "flipkart100":
         "https://www.flipkart.com/planetsera-chat-masala/p/itmfe8b6cf21eb08?pid=SCMGQMY9QN6TVHPF",
       faqs: [
        {
          question: "1. What is Chat Masala Powder?",
          answer:
            "Chat Masala Powder is a mix of spices that gives Indian food a lot of colour and flavour. This spicy seasoning is made from cumin, coriander, and black salt, which give it a tangy and salty flavour. It gives street foods, salads, and snacks a nice burst of flavour, which makes it a staple in Indian cooking.",
        },
        {
          question: "2. What are the main ingredients in Chat Masala Powder?",
          answer:
            "Chat Masala Powder is a mix of spices that is often used in Indian street food. It gives the food a spicy, flavorful kick. Its main ingredients are hot red chilli powder, aromatic cumin, tangy dried mango powder (amchur), black salt, and a mix of other spices. This flexible seasoning gives snacks, salads, and chaat dishes a burst of savory and tangy flavour.",
        },
        {
          question: "3. How is Chat Masala Powder used?",
          answer:
            "Chat masala powder is a mix of spices that can be used to make many different meals taste better. It adds a tangy and spicy kick to snacks like samosas and fruit soups. It's also an essential part of popular Indian street foods like chaat and pani puri, giving them a burst of flavour. Explore the tasty world of chaat masala powder as you try new things in the kitchen.",
        },
        {
          question: "4. Is Chat Masala Powder spicy?",
          answer:
            "Chat Masala Powder is a mix of spices that is spicy and sour. It is used to make foods taste better. Even though it has a nice kick of spice, it's not too hot. Instead, it has a nice mix of mild heat and bright flavours that make it a great spice for a wide range of snacks, salads, and street foods.",
        },
        {
          question: "5. What are the health benefits of Chat Masala Powder? ",
          answer:
            "Chat masala powder is a delicious mix of spices that not only makes food taste better but is also good for your health. Its mix of cumin, coriander, and black salt helps with digestion, and the tangy taste of amchoor (dried mango) gives you more vitamin C. Chaat masala powder can give your dishes more flavour and a bit of health.",
        },
      ],
   }
]
},
{
    "title":"Amchur Powder",
    "description":"Amchur Powder, which is produced from dried, unripe green mangoes, gives food a tangy, sour flavour. It smells deliciously like honey and tastes tangy. It is utilised in a wide range of north Indian curries, chutneys, and pickles. Spices like amchur powder add tanginess and a mild sour taste to food. Amchur masala powder also helps make meat more tender. It's one of the most important ingredients in Punjabi food. PlanetsEra's amchur powder uses the best mangoes and the newest dehydrating technique to preserve the king of fruits' flavour, smell, and zest.",
    "productImageUrl":"allProductsImg/DryMangoPowder.webp",
    "category":["MouthWatering"],
    "Flipkart":true,
    "Amazon":false,
    "productUrl":"amchur-powder",
    "type":"grounded",

    "variant":[{
        "weight":"50",
        "price":35,
        "imgurl":["allProductsImg/DryMangoPowder.webp","allProductsImg/DryMangoPowder-Back-50.webp","allProductsImg/DryMangoPowder-BackContent-50.webp"]
        },
        {
            "weight":"100",
            "price":0,
            "imgurl":["ab","cd","de"]
        },
        {
            "weight":"500",
            "price":0,
            "imgurl":["ab","cd","de"]
        }
    ],
    "metaData":[
   {
       "usage":"A variety of dishes, salads, beverages and desserts can benefit from PlanetsEra amchur powder Powder's tangy flavour and aroma.       ",
       "ingredients":"Dry Mango       ",
       "healthBenefits":"Amchur powder, also known as dry mango powder or amchur masala, offers more than just a tangy flavor to your dishes. Packed with vitamins, antioxidants, and digestive properties, amchur powder aids in digestion, boosts immunity, and enhances skin health. Its high vitamin C content supports overall well-being and adds a zesty twist to your culinary creations. Embrace the goodness of amchur powder for a flavorful and health-conscious culinary experience.       ",
       "productBg":"allProductsImg/AmchurPowderBg.webp",
       "colored": "rgb(212 158 74)",
       "colored2": "#DCBF92",
       "inactiveBtn": "rgb(212 158 74 / 38%)",
       "inactiveBtn2": "rgb(253 235 208)",
       "bgColor": "rgb(236 220 197)",
       "flipkart50":
       "https://www.flipkart.com/planetsera-dry-mango-powder/p/itm0ad77cccb292f?pid=SCMGQDYQEMFGUFEQ",
       faqs: [
        {
          question: "1. How is Amchur Powder made?",
          answer:
            "Amchur powder, which is also called (dry mango powder), is made from green mangoes that have been dried and ground. In this process, young mangoes are picked, left out in the sun to dry, and then finely ground into a powder. This makes a spice that tastes like citrus and is often used in Indian cooking to give foods a sour, fruity taste.",
        },
        {
          question: "2. What are the culinary uses of Amchur Powder?",
          answer:
            "Amchur powder is made from dried green mangoes and has a sour taste. It is a versatile Indian food ingredient that gives meals a sour and fruity taste. Dry mango powder is often added to stews, marinades, chutneys, and snacks to make them taste better. It is a famous seasoning, especially in vegetarian and vegan dishes, because of its unique citrusy taste.",
        },
        {
          question: "3. Does Amchur Powder have nutritional benefits?",
          answer:
            "Amchur Powder is good for you in many different ways. It has a lot of vitamins and antioxidants, like vitamins A and C, which help the immune system and keep the skin healthy. Because it is naturally acidic, amchur also helps with digestion. Add this tangy spice to your meals to make them taste better and maybe to help your health.",
        },
        {
          question: "4. Are there variations of Amchur Powder?",
          answer:
            "Yes, dry mango powder can be made in different ways. Depending on the type of mango and how it is processed, these changes can include differences in taste, texture, and colour. Some Amchur powders have a tangier flavour, while others have a sweeter taste. This gives you a lot of options when cooking.",
        },
        {
          question: "5. What are some recipes using Amchur Powder?",
          answer:
            "Yes, dry mango powder can be made in different ways. Depending on the type of mango and how it is processed, these changes can include differences in taste, texture, and colour. Some Amchur powders have a tangier flavour, while others have a sweeter taste. This gives you a lot of options when cooking.",
        },
      ],
   }
]
},
{
    "title":"Garam Masala",
    "description":"This age-old, worldwide flavour enhancer is made with a carefully selected mixture of 12 different spices. We prepare the masala with the best garam masala ingredients: Coriander, Cumin, black pepper, Cinnamon Stick, Clove, Cardamom Amomum, Star Anise, Bay Leaf, Dry Ginger, Nutmeg, Mace, Green Cardamom. Because it is based on chilli, it lends foods an unusual, crimson-coloured gravy.Over the entire country of India, garam masala is used extensively. The masala spices ignite the taste buds. There's something about certain meals that makes you want to resist them. There's nothing like PlanetsEra Garam Masala, with its incredible aftertaste, to bring Indian cuisine to life.",
    "productImageUrl":"allProductsImg/GaramMasala.webp",
    "category":["WeekandTadka"],
    "Flipkart":true,
    "Amazon":true,
    "productUrl":"garam-masala",
    "type":"blended",

    "variant":[{
        "weight":"50",
        "price":50,
        "imgurl":["allProductsImg/GaramMasala.webp","allProductsImg/GaramMasala-Back-50.webp","allProductsImg/GaramMasala-BackContent-50.webp"]
        },
        {
            "weight":"100",
            "price":95,
            "imgurl":["allProductsImg/GaramMasala.webp","allProductsImg/GaramMasala-Back-100.webp","allProductsImg/GaramMasala-BackContent-100.webp"]
        },
        {
                "weight":"500",
                "price":370,
                "imgurl":["allProductsImg/GaramMasala-500.webp","allProductsImg/GaramMasala-Back-500.webp","allProductsImg/GaramMasala-BackContent-500.webp"]
        }
    ],
    "metaData":[
   {
       "usage":"It is primarily used for preparing vegetarian dishes that require gravy. In Gujarat and Marwar, it is typically used in lentils (dal) and in snacks such as samosas, usal, patra, and farsan.       ",
       "ingredients":"Coriander, Cumin, Black-Pepper, Cinnamon Stick, Clove, Cardamom Amomum, Star Anise, Bay Leaf, Dry Ginger, Nutmeg, Mace, Green Cardamom       ",
       "healthBenefits":"Whole garam masala has health benefits in addition to its flavour. It aids digestion, boosts the calorie burn, and aides in weight management due to its aromatic spices. Antioxidant-rich, it promotes general health and may reduce inflammation. Incorporate Planetsera's high-quality garam masala compound into your culinary endeavours for a tasty way to improve your health.",
       "productBg":"allProductsImg/GaramMasalaBg.webp",
       "colored": "#996d51",
       "colored2": "#E5C6BB",
       "inactiveBtn": "rgb(209 194 172 / 38%)",
       "inactiveBtn2": "rgb(229 198 187 / 38%)",
       "bgColor": "rgb(188 163 155)",
       "amazon50": "https://www.amazon.in/dp/B0C3W3PC2G?ref=myi_title_dp",

       "flipkart50":
         "https://www.flipkart.com/planetsera-garam-masala/p/itm9af1cb20a0cd3?pid=SCMGQ9W67E5MYTH8",
       "flipkart100":
         "https://www.flipkart.com/planetsera-premium-quality-garam-masala/p/itm678c2e5f0d1a2?pid=SCMGQ387HKH64BVD",
       "flipkart500":
         "https://www.flipkart.com/planetsera-garam-masala/p/itm9af1cb20a0cd3?pid=SCMGQJHCP3X6ZWAF",
       faqs: [
        {
          question: "1. What is Garam Masala?",
          answer:
            "Garam Masala is a well-known mix of spices that comes from India. It has cinnamon, cloves, cardamom, and cumin, which are all fragrant spices. This versatile spice gives recipes warmth, depth, and just a touch of heat. Garam Masala is used to make soups, stews, and grilled meats taste better. It gives Indian food a unique and delicious flavour.",
        },
        {
          question: "2. How is Garam Masala Used in Cooking?",
          answer:
            "Garam masala powder is a mix of spices that can be used in a lot of different ways. It adds colour and depth to food. It is added to recipes like curries, stews, and rice meals to make them taste better. With just a pinch of garam masala, you can change the way your food tastes. It is a well-balanced blend of spices like cinnamon, cloves, and cardamom that gives food a rich, fragrant flavour.",
        },
        {
          question: "3. Are There Variations of Garam Masala?",
          answer:
            "Yes, garam Masala powder can be different. Garam masala is a mix of spices that is used in Indian food. Its ingredients can change depending on where you live and what you like. Cardamom, cinnamon, cloves, and cumin are all common ingredients in garam masala, but the exact mix and proportions vary, giving different types of garam masala different tastes and levels of heat.",
        },
        {
          question: "4. Is Garam Masala Spicy?",
          answer:
            "Garam masala powder is not spicy on its own, but it gives food flavour and depth. Cinnamon, cloves, and cardamom, among other spices, are mixed together to make a sweet blend that has a rich flavour without a lot of heat. But the amount of heat can vary depending on the blend and how well you can handle it, so if you like milder flavours, it's best to use it sparingly.",
        },
        {
          question: "5. Does Garam Masala Have Health Benefits?",
          answer:
            "Garam masala powder is a famous spice mix in Indian food that might be good for your health. It has a mix of spices like cinnamon, cardamom, and cloves, which may help digestion, speed up the metabolism, and protect the body from free radicals. But because it is so strong, it should be used in moderation. Add garam spice to your food to take advantage of its flavour and possible health benefits.",
        },
      ],
   }
]
},
{
    "title":"Turmeric Powder    ",
    "description":"Indian food gets its colour and taste from turmeric powder, so it's great for a spicy feast. The effect is amazing and has been shaped beautifully beyond its natural form. Nearly 4,000 years ago, India's Vedic society used haldi powder as a spice that also had religious meaning.Turmeric's uses are also well known to all. To give your sabji the proper colour, use PlenetsEra haldi powder, created with the highest-quality turmeric powder.",
    "productImageUrl":"allProductsImg/TurmericPowder.webp",
    "category":["KitchenSpices"],
    "Flipkart":true,
    "Amazon":false,
    "productUrl":"turmeric-powder",
    "type":"grounded",

    "variant":[{
        "weight":"50",
        "price":20,
        "imgurl":["allProductsImg/TurmericPowder.webp","allProductsImg/TurmericPowder-Back-50.webp","allProductsImg/TurmericPowder-BackContent-50.webp"]
        },
        {
            "weight":"100",
            "price":33,
            "imgurl":["allProductsImg/TurmericPowder.webp","allProductsImg/TurmericPowder-Back-100.webp","allProductsImg/TurmericPowder-BackContent-100.webp"]
        },
        {
                "weight":"500",
                "price":165,
                "imgurl":["allProductsImg/TurmericPowder-500.webp","allProductsImg/TurmericPowder-Back-500.webp","allProductsImg/TurmericPowder-BackContent-500.webp"]
        }
    ],
    "metaData":[
   {
       "usage":"Hindus use turmeric to season fish before they cook it in India. In Indian cooking, turmeric is used both to add colour and taste. Turmeric has been used for a long time to heal cuts, treat eye infections, and treat the common cold.       ",
       "ingredients":"Turmeric",
       "healthBenefits":"Organic turmeric powder, which is also called haldi powder, is a powerful superfood that has many health benefits. It has anti-inflammatory and antioxidant qualities because it is full of curcumin. When you consume haldi powder regularly, it helps your body digest food, boosts your immune system, and keeps your face healthy. Take advantage of the natural benefits of organic turmeric powder to improve your health overall.       ",
       "productBg":"allProductsImg/TurmericPowderBg.webp",
       "colored": "rgb(214 184 65)",
       "colored2": "#E2C199",
       "inactiveBtn": "rgb(214 184 65 / 38%)",
       "inactiveBtn2": "rgb(226 193 153 / 38%)",
       "bgColor": "rgb(228 223 203)",
       "flipkart50":
       "https://www.flipkart.com/planetsera-turmeric-powder/p/itm0c52e9d424d91?pid=SCMGQCZ8F3X6E6EY",
     "flipkart100":
       "https://www.flipkart.com/planetsera-turmeric-powder/p/itm0c52e9d424d91?pid=SCMGQCZ8XZPM9HDJ",
     "flipkart500":
       "https://www.flipkart.com/planetsera-turmeric-powder/p/itm0c52e9d424d91?pid=SCMGQ39T5DFSWMHF",
       
       faqs: [
        {
          question: "1. What is turmeric powder (haldi powder)?",
          answer:
            "Turmeric powder, which is also called (haldi powder), is a spice made from the dried root of the turmeric plant. It is used a lot in cooking because it gives foods a warm, earthy flavour and a bright colour. Turmeric powder is loved for its health benefits, such as its anti-inflammatory and antioxidants, as well as its uses in cooking.",
        },
        {
          question: "2. What gives turmeric powder its yellow color?",
          answer:
            "The bright yellow colour of turmeric powder comes from a natural pigment called curcumin. Curcumin, that gives turmeric its colour, is found in large amounts in the rhizomes. This substance is not only what gives turmeric its special colour, but it also helps turmeric's health benefits.",
        },
        {
          question: "3. How is turmeric powder used in cooking?",
          answer:
            "Haldi powder, which is also called Turmeric powder, is a spice that can be used in many ways when cooking. It gives many foods a bright yellow colour and an earthy taste. It is a key ingredient in marinades and is often used in stews, soups, and rice. Turmeric is used in many dishes around the world because it has a mild bitter taste and a sweet smell.",
        },
        {
          question: "4. What are the health benefits of turmeric powder?",
          answer:
            "Haldi powder is good for your health in many ways. Its active ingredient, curcumin, is a powerful anti-inflammatory and antioxidant that can help relieve pain, improve heart health, and possibly lower the risk of developing chronic illnesses. Turmeric powder is a good addition to a healthy diet because it helps keep the digestive system healthy and may help the defence system work better.",
        },
        {
          question: "5. How can turmeric powder be used for skincare?",
          answer:
            "Turmeric powder, can be used in many different ways for skin care. It is great for skin care routines because it has natural anti-inflammatory in nature and antioxidant qualities. Mix haldi powder with yoghurt or honey to make a face mask that helps brighten skin, reduce acne, and fight signs of ageing. Using it regularly can make your skin look better and brighter.",
        },
      ],
   }
]
},
{
    "title":"Coriander Powder    ",
    "description":"Coriander powder smells like a freshly cut lawn of a green forest. Indian foods are often made with this kind to give them an authentic curry taste. Coriander powder, also called dhania powder, is said to have hints of lemon and sage and a hint of sweetness in the background. It is a nice spice to put in food. The flavour of PlanetsEra coriander powder has been brought to a level of perfection, and as a result, it can produce the intended effect every time it is used. Dhaniya powder is known to be a fundamental component of Indian cuisine.",
    "productImageUrl":"allProductsImg/CorianderPowder.webp",
    "category":["BestSelling"],
    "Flipkart":true,
    "Amazon":true,
    "productUrl":"coriander-powder",
    "type":"grounded",
    "variant":[{
        "weight":"50",
        "price":22,
        "imgurl":["allProductsImg/CorianderPowder.webp","allProductsImg/CorianderPowder-Back-50.webp","allProductsImg/CorianderPowder-BackContent-50.webp"]
        },
        {
            "weight":"100",
            "price":40,
            "imgurl":["allProductsImg/CorianderPowder.webp","allProductsImg/CorianderPowder-Back-100.webp","allProductsImg/CorianderPowder-BackContent-50.webp"]
        },
        {
                "weight":"500",
                "price":195,
                "imgurl":["allProductsImg/CorianderPowder-500.webp","allProductsImg/CorianderPowder-Back-500.webp","allProductsImg/CoriandrerPowder-BackContent-500.webp"]
        }
    ],
    "metaData":[
   {
       "usage":"Coriander is mainly used in Indian cuisine for its taste. When fried in oil, roasted coriander powder produces a characteristic curry flavour. The seeds of coriander have diuretic properties. Digestive toning and gas relief are its benefits.",
       "ingredients":"Coriander Seed       ",
       "healthBenefits":"The health benefits of coriander powder, also known as dhaniya Powder, are numerous. It helps digestion, lowers damage, and controls blood sugar levels. It supports heart health and the immune system due to its abundance of antioxidants. In addition to aiding in detoxification, coriander powder can mitigate IBS symptoms. Include this flavorful spice in your diet for a delicious method to improve your health.       ",
       "productBg":"allProductsImg/CorianderPowderBg.webp",
       "colored": "rgb(132 184 108)",
       "colored2": "#ABC59F",
       "inactiveBtn": "rgb(171 197 159 / 38%)",
       "inactiveBtn2": "rgb(171 197 159 / 38%)",
       "bgColor": "rgb(210 224 203)",
       "amazon50": "https://www.amazon.in/dp/B0C3W2FW1M?ref=myi_title_dp",

    "flipkart50":
      "https://www.flipkart.com/planetsera-coriander-powder/p/itme906e235fc3d4?pid=SCMGQDY2FQBHVTFS",
    "flipkart100":
      "https://www.flipkart.com/planetsera-coriander-powder/p/itme906e235fc3d4?pid=SCMGQDY2UGPNQZVZ",
    "flipkart500":
      "https://www.flipkart.com/planetsera-coriander-powder/p/itme906e235fc3d4?pid=SCMGQDY2NXGDAV5F",
       faqs: [
        {
          question: "1. What is Coriander Powder (Dhaniya Powder)?",
          answer:
            "Coriander Powder (Dhaniya powder) is a spice made from coriander seeds that have been ground up. It is used in many foods around the world and gives them a warm, citrusy taste. Coriander seed can be used in many different dishes, like curries, soups, and marinades. It makes the food taste better overall. It is a must-have in the kitchen because of its unique smell and light heat.",
        },
        {
          question: "2. Are There Health Benefits to Coriander Powder?",
          answer:
            "Coriander Powder might be good for your health. It has vitamins, which may help with digestion, reduce inflammation, and help keep the heart healthy. With its unique flavour, it is a useful spice that not only makes food taste better but also helps people feel better overall. Adding coriander powder to your diet can be both tasty and good for your health.",
        },
        {
          question:
            "3. Can Coriander Powder Be Used as a Substitute for Fresh Coriander Leaves?",
          answer:
            "You can use coriander powder instead of fresh coriander leaves. It has a similar but more intense flavour, so it can be used in place of fresh leaves when they aren't available. Just remember to change the amount because coriander powder is stronger than fresh coriander leaves. Usually, 1 teaspoon of powder is used for every tablespoon of fresh leaves.",
        },
        {
          question:
            "4. What Are Some Popular Recipes That Use Coriander Powder? ",
          answer:
            "Coriander Powder is a spice that is used in many famous dishes around the world. It makes sauces, stews, marinades, and soups taste delicious and smell great. Coriander powder is a key ingredient that makes Indian curries like chicken tikka masala and Mexican salsas taste and smell even better.",
        },
        {
          question: "5. Are There Different Varieties of Coriander Powder?",
          answer:
            "Yes, there are different kinds of coriander powder, and each has its own taste and smell. Coriander powder and roasted coriander powder are two common versions. The regular kind is made from dried coriander seeds, while the roasted kind has a stronger, smokier flavour because it is toasted. Choose the one that fits your tastes in food the best.",
        },
      ],
   }
]
},
{
    "title":"Cumin Powder    ",
    "description":"Combined with other food spices or ingredients, cumin powder adds a unique flavour to any dish. Provides a taste to all your unusual foods. Ground cumin is made by grinding dried mature fruits of the cumin plant to make jeera powder. PlanetsEra cumin powder does not contain any artificial colouring or potentially dangerous ingredients.    ",
    "productImageUrl":"allProductsImg/CuminPowder.webp",
    "category":["KitchenSpices"],
    "Flipkart":true,
    "Amazon":false,
    "productUrl":"cumin-powder",
    "type":"grounded",

    "variant":[{
        "weight":"50",
        "price":40,
        "imgurl":["allProductsImg/CuminPowder.webp","allProductsImg/CuminPowder-Back-50.webp","allProductsImg/CuminPowder-BackContent-50.webp"]
        },
        {
            "weight":"100",
            "price":0,
            "imgurl":["ab","cd","de"]
        },
        {
            "weight":"500",
            "price":330,
            "imgurl":["allProductsImg/CuminPowder-500.webp","allProductsImg/CuminPowder-Back-500.webp","allProductsImg/CuminPowder-BackContent-500.webp"]
        }
    ],
    "metaData":[
   {
       "usage":"The tawa (girdle) is used to roast the seeds very briefly (for only a minute) then grind them into powder to release their full flavour. Digestion is one of the benefits of cumin.       ",
       "ingredients":"Cumin Seed       ",
       "healthBenefits":"Cumin powder, also known as jeera powder, has numerous positive health effects. Cumin powder, which is abundant in antioxidants and essential nutrients, aids digestion, promotes weight loss, and may help control blood sugar. Additionally, it is anti-inflammatory and promotes respiratory health. Include this adaptable spice in your diet to benefit from its flavorful and health-enhancing qualities.       ",
       "productBg":"allProductsImg/CuminPowderBg.webp",
       "colored": "#8E5B24",
       "colored2": "#8E5B24",
       "inactiveBtn": "rgb(142 91 36 / 38%)",
       "inactiveBtn2": "rgb(142 91 36 / 38%)",
       "bgColor": "rgb(206 182 154)",
       "flipkart50":
       "https://www.flipkart.com/planetsera-cumin-powder/p/itmac8a4eb79d181?pid=SCMGQEF6WFRVNGCB",
 
     "flipkart500":
       "https://www.flipkart.com/planetsera-cumin-powder/p/itmac8a4eb79d181?pid=SCMGQEF68DGSE4DW",
       faqs: [
        {
          question: "1. What is Cumin Powder, and how is it made?",
          answer:
            "Cumin powder is a spice made from cumin seeds that have been ground up. It gives food a warm, rich flavour and is a mainstay in many cuisines around the world. Cumin seeds are roasted, ground, and sifted to make jeera powder, a fine, fragrant spice. It is often used in Indian, Middle Eastern, and Mexican cooking because it has a strong flavour.",
        },
        {
          question: "2. What dishes can I use Cumin Powder in?",
          answer:
            "Cumin powder is a flexible spice that adds flavour to many different kinds of food. It is a popular ingredient in Indian, Mexican, and Middle Eastern food. You can add jeera powder to curries, stews, rice recipes, marinades, and even homemade spice mixes for an earthy, warm flavour and a touch of aromatic depth.",
        },
        {
          question:
            "3. Are there any health benefits associated with Cumin Powder? ",
          answer:
            "There may be several health benefits to cumin powder. It is known to help with digestion, reduce inflammation, and make it easier to control blood sugar. It may also make you healthier and help you lose weight. Adding jeera powder to your diet can be a tasty way to take advantage of these possible health benefits.",
        },
        {
          question: "4. Can I substitute ground cumin for Cumin Powder?",
          answer:
            "Yes, ground cumin can be used instead of cumin powder. Whole cumin seeds are ground up to make ground cumin, which is also called jeera powder. It tastes the same as jeera Powder—earthy and warm. To keep the same taste and smell when using ground cumin in recipes that call for cumin powder, just use the same amount.",
        },
        {
          question: "5. What is the shelf life of Cumin Powder?",
          answer:
            "Cumin powder can usually be kept for one to two years if it is kept in a cool, dry place and in a container that keeps air out. To keep its taste and strength, you should keep it away from moisture and direct sunlight. If you keep jeera powder in the right way, its unique earthy and nutty flavour will last for a long time.",
        },
      ],
   }
]
},
{
    "title":"Black Pepper Powder    ",
    "description":"Most often used as a dry spice, black pepper, also known as kali mirch powder, refers to the spice's dark colouring and hot flavour. It appears to be small and rounded black chillies. Black pepper powder is used to make the recipe hotter, just like chilli. Restaurants and hotels also leave it on the table by itself with salt. It's one of the most popular Indian spices. With its exceptional heat, PlanetsEra Black Pepper Powder adds a kick to soups and other meals. As a remedy, it eases inflammation and colds.    ",
    "productImageUrl":"allProductsImg/BlackPepperPowder.webp",
    "category":["BestSelling"],
    "Flipkart":true,
    "Amazon":true,
    "productUrl":"black-pepper-powder",
    "type":"grounded",

    "variant":[{
        "weight":"50",
        "price":75,
        "imgurl":["allProductsImg/BlackPepperPowder.webp","allProductsImg/BlackPepperPowder-Back-50.webp","allProductsImg/BlackPepperPowder-BackContent-50.webp"]
        },
        {
            "weight":"100",
            "price":0,
            "imgurl":["ab","cd","de"]
        },
        {
            "weight":"500",
            "price":495,
            "imgurl":["allProductsImg/BlackPepperPowder-500.webp","allProductsImg/BlackPepperPowder-Back-500.webp","allProductsImg/BlackPepperPowder-BackContent-500.webp"]
        }
    ],
    "metaData":[
   {
       "usage":"Pepper is extensively used in the winter food of North India. It's used as a spice in non-vegetarian dishes in the South. It's an essential spice in the Indian four-spice classic Garam Masala. When peppercorns and basil leaves are boiled together, chest congestion and asthma are relieved.       ",
       "ingredients":"Black Pepper       ",
       "healthBenefits":"Black pepper powder, also known as kali mirch powder or kali mirch, is more than just a seasoning. This humble spice boasts numerous health benefits. Rich in antioxidants and anti-inflammatory properties, black pepper powder aids digestion, promotes weight loss, and enhances nutrient absorption. Its natural warmth helps relieve congestion and supports respiratory health. Incorporate black pepper powder into your diet for a flavorful way to boost your overall well-being.       ",
       "productBg":"allProductsImg/BlackPepperBg.webp",
       "colored": "#594E4E",
       "colored2": "#594E4E",
       "inactiveBtn": "rgb(197 197 197)",
       "inactiveBtn2": "rgb(197 197 197)",
       "bgColor": "rgb(161 161 161)",
       "amazon50": "https://www.amazon.in/dp/B0C3W6MPSW?ref=myi_title_dp",

       "amazon500": "https://www.amazon.in/dp/B0C3W2ZNDR?ref=myi_title_dp",
       "flipkart50":
         "https://www.flipkart.com/planetsera-black-pepper-powder/p/itm55970223613f4?pid=SCMGQDZA7DF4SGXS",
   
       "flipkart500":
         "https://www.flipkart.com/planetsera-black-pepper-powder/p/itm55970223613f4?pid=SCMGQDZAPJXCPMN4",
       faqs: [
        {
          question: "1. What is black pepper powder, and how is it made?",
          answer:
            "A famous spice black pepper powder (Kali Mirch Powder), is made from dried and ground black peppercorns. It gives food a strong, slightly spicy taste. Sun-dried whole black peppercorns are ground into a fine powder to make it. Black pepper powder is a spice that is used in many different kinds of food around the world. It is prized for its unique flavour and smell.",
        },
        {
          question: "2. What are the key characteristics of black pepper powder?",
          answer:
            "Kali Mirch Powder, which is also called black pepper powder, is prized for its strong smell and strong, earthy flavour. It's a spice that can be used in many different ways and adds a deep, rich heat to many recipes. This finely ground powder is known for its dark colour and peppery taste, which makes it a popular choice for seasoning and improving the taste of both savoury and sweet recipes.",
        },
        {
          question:
            "3. Are there any health benefits associated with consuming black pepper powder?",
          answer:
            "Black pepper powder, also called Kali Mirch Powder, may be good for your health in a number of ways. It has piperine, which can help digestion, improve the absorption of nutrients, and possibly have soothing and antioxidant qualities. Also, black pepper may help people lose weight and make their lungs healthy. But it's best to use it in balance because too much of it can be bad for you",
        },
        {
          question:
            "4. Can I use black pepper powder as a seasoning for non-savory dishes?",
          answer:
            "Black pepper powder, may be good for your health in a number of ways. It has piperine, which can help digestion, improve the absorption of nutrients, and possibly have soothing and antioxidant qualities. Also, black pepper may help people lose weight and make their lungs healthy. But it's best to use it in balance because too much of it can be bad for you.",
        },
        {
          question:
            "5. Are there any precautions to consider when using black pepper powder?",
          answer:
            "Black pepper powder, may be good for your health in a number of ways. It has piperine, which can help digestion, improve the absorption of nutrients, and possibly have soothing and antioxidant qualities. Also, black pepper may help people lose weight and make their lungs healthy. But it's best to use it in balance because too much of it can be bad for you.",
        },
      ],
   }
]
},
{
    "title":"Meat Masala    ",
    "description":"Meat masala is a mix of pepper, coriander, and chilli, giving meat and other non-vegetarian foods a dark brown colour and a spicy flavour. It is especially good when used in meat-containing dishes. This mixture is flavoured with a lot of food spices. It's because Indians love to season their meat well. When combined with the meat, they bring out the underlying flavour of the dish.    ",
    "productImageUrl":"allProductsImg/MeatMasala.webp",
    "category":["NonvegTadka","WeekandTadka"],
    "Flipkart":true,
    "Amazon":false,
    "productUrl":"meat-masala",
    "type":"blended",

    "variant":[{
        "weight":"50",
        "price":45,
        "imgurl":["allProductsImg/MeatMasala.webp","allProductsImg/MeatMasala-Back-50.webp","allProductsImg/MeatMasala-BackContent-50.webp"]
        },
        {
            "weight":"100",
            "price":80,
            "imgurl":["allProductsImg/MeatMasala.webp","allProductsImg/MeatMasala-Back-100.webp","allProductsImg/MeatMasala-BackContent-100.webp"]
        },
        {
                "weight":"500",
                "price":400,
                "imgurl":["allProductsImg/MeatMasala-500.webp","allProductsImg/MeatMasala-Back-500.webp","allProductsImg/MeatMasala-BackContent-500.webp"]
        }
    ],
    "metaData":[
   {
       "usage":"You can use PlanetsEra meat masala whenever a dark gravy is required for meat dish preparation.       ",
       "ingredients":"Coriander, Cumin, Cinnamon, Mace, Clove, Green Cardamom, Nutmeg, Rai, Fennel, Seed, Kashmiri Red Chili, Turmeric, Garlic, Ginger, Black salt, Asafoetida, Bay Leaf, Black Pepper, Red Chili, Mustard, Fenugreek Leaves, Cardamom Amomum       ",
       "healthBenefits":"Identify the best meat masala to enhance your dishes. Not only do our best-selling meat seasonings, commonly known as (meat ka masala bring a burst of flavour, but they also provide health benefits. This blend of aromatic spices not only enhances the taste of your food, but it can also facilitate digestion and provide essential nutrients. Enhance your meat dishes with our finest meat masala and savour every delicious morsel.       ",
       "productBg":"allProductsImg/MeatMasalaBg.webp",
       "colored": "#D48259",
       "colored2": "#D48259",
       "inactiveBtn": "rgb(212 130 89 / 38%)",
       "inactiveBtn2": "rgb(212 130 89 / 38%)",
       "bgColor": "rgb(231 194 177)",

    "flipkart50":
    "https://www.flipkart.com/planetsera-meat-masala/p/itmaddb650cbfb76?pid=SCMGQCUTZFEDNUZJ",
  "flipkart100":
    "https://www.flipkart.com/planetsera-meat-masala/p/itmaddb650cbfb76?pid=SCMGQ9H23UGGZSPS",
  "flipkart500":
    "https://www.flipkart.com/planetsera-meat-masala/p/itmaddb650cbfb76?pid=SCMGQKPS3YAQGKZH",
       faqs: [
        {
          question: "1. What is Meat Masala Powder",
          answer:
            "Meat Masala Powder, also called non-veg masala, is a blend of spices made especially for recipes with meat. It is a mix of many fragrant spices and herbs that bring out the flavour of meats like chicken, lamb, beef, and more. This seasoning gives non-vegetarian food more depth and richness, so it's a must-have in kitchens where meat meals are cooked to have a unique taste and smell.",
        },
        {
          question: "2. How is Meat Masala Powder different from regular spices?",
          answer:
            "Meat Masala Powder is not like other spices because it is made especially for recipes with meat. It's a unique mix of spices made to make meat-based dishes taste better. It has coriander, cumin, and other ingredients that give it the savoury, spicy taste of non-veg masala. This makes it different from other spice mixes.",
        },
        {
          question: "3. Can I use Meat Masala Powder for all types of meat?",
          answer:
            "Yes, Meat Masala Powder can be used with all kinds of meat, like chicken, lamb, beef, pork, and fish. It has been carefully developed to improve the taste of many meat-based recipes, making it a great seasoning for a wide range of meat-based dishes.",
        },
        {
          question: "4. What are the key ingredients in Meat Masala Powder? ",
          answer:
            "Often called (non-veg masala), meat masala powder is usually a mix of spices like coriander, cumin, cloves, cinnamon, and more. All of these components are carefully put together to make a tasty seasoning that is meant to make meat meals taste better.",
        },
        {
          question: "5. How do I use Meat Masala Powder?",
          answer:
            "To use Non-Veg Masala Powder well, sprinkle or mix it into your meat recipes while they are cooking, or use it to marinate meat before you grill or roast it. This spice mix takes the taste and smoothness of your non-vegetarian dishes to a higher level. Non-Veg Masala Powder makes it easy to season meat so it tastes great.",
        },
      ],
   }
]
},
{
    "title":"Red Chilli Powder    ",
    "description":"Red chilli powder has a strong flavour and just the right amount of heat. A genuine Lal Mirch powder has a sharp taste that gives any blended food a distinctive flavour. Using carefully hand-selected, naturally sun-dried, scientifically processed chillies, chilli powder preserves the flavour and colour of whole chillies while maintaining their natural heat.Your food will have a brilliant red colour thanks to PlanetsEra Chilli Powder. Due to its widespread use in all Indian cuisines, red chilli powder is one of the most popular Indian masalas.",
    "productImageUrl":"allProductsImg/RedChilliPowder.webp",
    "category":["BestSelling","MouthWatering"],
    "Flipkart":true,
    "Amazon":true,
    "productUrl":"red-chilli-powder",
    "type":"grounded",

    "variant":[{
        "weight":"50",
        "price":30,
        "imgurl":["allProductsImg/RedChilliPowder.webp","allProductsImg/RedChilliPowder-Back-50.webp","allProductsImg/RedChilliPowder-BackContent-50.webp"]
        },
        {
            "weight":"100",
            "price":58,
            "imgurl":["allProductsImg/RedChilliPowder.webp","allProductsImg/RedChilliPowder-Back-100.webp","allProductsImg/RedChilliPowder-BackContent-100.webp"]
        },
        {
            "weight":"500",
            "price":290,
            "imgurl":["allProductsImg/RedChilliPowder-500.webp","allProductsImg/RedChilliPowder-Back-500.webp","allProductsImg/RedChilliPowder-BackContent-500.webp"]
        }
    ],
    "metaData":[
   {
       "usage":"Red chillies are commonly used in Indian dishes. A firm curry is achieved by crushing red chillies and coconuts. Providing vitamin C and aiding digestion, chillies are an excellent source of heat.",
       "ingredients":"Red Chilli",
       "healthBenefits":"Red chilli powder, which is also called chilli powder or lal mirch powder, has more to give than just a spicy taste. It helps you lose weight because it has capsaicin, speeds up your metabolism, and lowers inflammation. This spice has a lot of vitamins and antioxidants, which are good for the heart and make the defence system stronger. Its spicy kick can even ease pain and make you feel better. Red chilli powder is good for your health and a tasty addition to your diet.",
       "productBg":"allProductsImg/RedChilliBg.webp",
       "colored": "rgb(194 127 127)",
       "colored2": "#C59F9F",
       "inactiveBtn": "#F1E4E4",
       "inactiveBtn2": "#F1E4E4",
       "bgColor": "rgb(227 211 211)",
       "amazon50": "https://www.amazon.in/dp/B0C8HH725H?ref=myi_title_dp",
    "flipkart50":
      "https://www.flipkart.com/planetsera-red-chilli-powder/p/itm301769743d0e6?pid=SCMGQ9KNZZZFGDHV",
    "flipkart100":
      "https://www.flipkart.com/planetsera-red-chilli-powder/p/itm301769743d0e6?pid=SCMGQ9KNZZZFGDHV",
    "flipkart500":
      "https://www.flipkart.com/planetsera-red-chilli-powder/p/itm301769743d0e6?pid=SCMGQNF5PEHPS94Z",
       faqs: [
        {
          question:
            "1. What is Red Chilli Powder (Lal Mirch Powder), and how is it made?",
          answer:
            "Red Chilli Powder is a popular spice made from dried red chilli peppers. To make it, these peppers are ground up into a fine powder. Lal Mirch Powder is a staple in Indian cooking because it gives many foods a bright red colour and a spicy kick. It's prized for how hot and tasty it is.",
        },
        {
          question:
            "2. How do I store Red Chilli Powder to maintain its freshness?",
          answer:
            "To keep your red chilli powder (lal mirch powder) fresh, put it in a container that doesn't let air in and keep it away from heat and wetness. After each use, close the lid tightly to keep the flavour and colour. If you store your red chilli powder well, it will stay fresh and powerful for a long time.",
        },
        {
          question:
            "3. Can I adjust the spiciness of my dishes with Red Chilli Powder?",
          answer:
            "Yes, you can adjust the spiciness of your dishes by controlling the amount of Red Chilli Powder you use. Start with a small amount and gradually increase it to achieve the desired level of heat. Keep in mind that different brands and varieties of Red Chilli Powder may have varying levels of spiciness, so it's a good idea to taste-test as you go",
        },
        {
          question:
            "4. Are there any health benefits associated with Red Chilli Powder?",
          answer:
            "Red Chilli Powder (lal mirch powder) may be good for your health. It has capsaicin in it, which may help your metabolism and control your hunger. It might also be able to stop irritation from happening. But it's important to keep from overdoing it, since too much can make your stomach hurt. Use red chilli powder in your cooking carefully at all times.",
        },
        {
          question: "5. What are some popular dishes that use Red Chilli Powder?",
          answer:
            "Red Chilli Powder is a key ingredient in many Indian dishes, including curries, masalas, and spice blends. Some popular dishes that prominently feature Lal mirch Powder include Chicken Tikka Masala, Rogan Josh, and Tandoori Chicken. It's also used in marinades, sauces, and even snacks like spicy roasted nuts.",
        },
      ],
   }
   
]
},
{
    "title":"Chicken Masala",
    "description":"",
    "productImageUrl":"allProductsImg/ChickenMasala.webp",
    "category":["WeekandTadka","MouthWatering","ComingSoon"],
    "Flipkart":false,
    "Amazon":false,
    "productUrl":"chicken-masala",
    "type":"blended",

    "variant":[{
        "weight":"50",
        "price":0,
        "imgurl":["ab","cd","de"]
        },
        {
            "weight":"100",
            "price":0,
            "imgurl":["ab","cd","de"]
        },
        {
            "weight":"500",
            "price":0,
            "imgurl":["ab","cd","de"]
        }
    ],
    "metaData":[
   {
       "usage":"",
       "ingredients":"",
       "healthBenefits":""
   }
   
]
},
{
    "title":"Kitchen King Masala",
    "description":"",
    "productImageUrl":"allProductsImg/KitchenKing.webp",
    "category":["KitchenSpices","ComingSoon"],
 "Flipkart":false,
    "Amazon":false,
    "productUrl":"kitchen-king-masala",
    "type":"blended",

    "variant":[{
        "weight":"50",
        "price":0,
        "imgurl":["ab","cd","de"]
        },
        {
            "weight":"100",
            "price":0,
            "imgurl":["ab","cd","de"]
        },
        {
            "weight":"500",
            "price":0,
            "imgurl":["ab","cd","de"]
        }
    ],
    "metaData":[
   {
       "usage":"",
       "ingredients":"",
       "healthBenefits":""
   }
   
]
},
{
    "title":"Paneer Masala",
    "description":"",
    "productImageUrl":"allProductsImg/PaneerMasala.webp",
    "category":["ComingSoon"],
    "Flipkart":false,
    "Amazon":false,
    "productUrl":"paneer-masala",
    "type":"blended",

    "variant":[{
        "weight":"50",
        "price":0,
        "imgurl":["ab","cd","de"]
        },
        {
            "weight":"100",
            "price":0,
            "imgurl":["ab","cd","de"]
        },
        {
                "weight":"500",
                "price":0,
                "imgurl":["ab","cd","de"]
        }
    ],
    "metaData":[
   {
       "usage":"",
       "ingredients":"",
       "healthBenefits":""
   }
   
]
},
{
    "title":"Chhole Masala",
    "description":"",
    "productImageUrl":"allProductsImg/ChholeMasala.webp",
    "category":["ComingSoon"],
    "Flipkart":false,
    "Amazon":false,
    "productUrl":"chhole-masala",
    "type":"blended",

    "variant":[{
        "weight":"50",
        "price":0,
        "imgurl":["ab","cd","de"]
        },
        {
            "weight":"100",
            "price":0,
            "imgurl":["ab","cd","de"]
        },
        {
                "weight":"500",
                "price":0,
                "imgurl":["ab","cd","de"]
        }
    ],
    "metaData":[
   {
       "usage":"",
       "ingredients":"",
       "healthBenefits":""
   }
   
]
},
{
    "title":"Biryani Masala",
    "description":"",
    "productImageUrl":"allProductsImg/BiryaniMasala.webp",
    "category":["ComingSoon"],
    "Flipkart":false,
    "Amazon":false,
    "productUrl":"biryani-masala",
    "type":"blended",

    "variant":[{
        "weight":"50",
        "price":0,
        "imgurl":["ab","cd","de"]
        },
        {
            "weight":"100",
            "price":0,
            "imgurl":["ab","cd","de"]
        },
        {
                "weight":"500",
                "price":0,
                "imgurl":["ab","cd","de"]
        }
    ],
    "metaData":[
   {
       "usage":"",
       "ingredients":"",
       "healthBenefits":""
   }
   
]
},
{
    "title":"Chana Masala",
    "description":"",
    "productImageUrl":"allProductsImg/ChanaMasala.webp",
    "category":["ComingSoon"],
    "Flipkart":false,
    "Amazon":false,
    "productUrl":"chana-masala",
    "type":"blended",

    "variant":[{
        "weight":"50",
        "price":0,
        "imgurl":["ab","cd","de"]
        },
        {
            "weight":"100",
            "price":0,
            "imgurl":["ab","cd","de"]
        },
        {
            "weight":"500",
            "price":0,
            "imgurl":["ab","cd","de"]
        }
    ],
    "metaData":[
   {
       "usage":"",
       "ingredients":"",
       "healthBenefits":""
   }
   
]
},
{
    "title":"Combo Pack",
    "description":"",
    "productImageUrl":"",
    "category":["ComingSoon"],
    "Flipkart":false,
    "Amazon":false,
    "productUrl":"combo-pack",
    "type":"blended",

    "variant":[{
        "weight":"50",
        "price":0,
        "imgurl":["ab","cd","de"]
        },
        {
            "weight":"100",
            "price":0,
            "imgurl":["ab","cd","de"]
        },
        {
                "weight":"500",
                "price":0,
                "imgurl":["ab","cd","de"]
        }
    ],
    "metaData":[
   {
       "usage":"",
       "ingredients":"",
       "healthBenefits":""
   }
   
]
}

]





// Parsing the JSON data
const productCreate =(product)=>{

    const products= prisma.products.create({
        data:{
            title:product.title,
            description:product.description,
            metaData:product.metaData,
            productImageUrl:product.productImageUrl,
            category:product.category,
            Amazon:product.Amazon,
            Flipkart:product.Flipkart,
            productUrl:product.productUrl,
            type:product.type
          

        }
    })
return products
}
const productVariantCreate =(productVariant,profuvtId)=>{

    const products= prisma.productVariant.create({
        data:{
            weight:productVariant.weight,
            price:productVariant.price,
            imageUrl:productVariant.imgurl,
            productId:profuvtId,
            
            


        }
    })
return products
}



const prisma = new PrismaClient();

 async function main() {

    Promise.all(productData.map(async (product) => {
        try {
            // Create the product
            const createdProduct = await productCreate(product);
            // console.log("crea",createdProduct.id)
    
            // For each product, create its variants
            await Promise.all(product.variant.map(async (category) => {
                await productVariantCreate(category, createdProduct.id);
            }));
    
        } catch (error) {
            console.error("Error processing product:", error);
            // You may choose to handle or log the error as needed
        }
    }));


//  console.log("We are done")


   


 }

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
