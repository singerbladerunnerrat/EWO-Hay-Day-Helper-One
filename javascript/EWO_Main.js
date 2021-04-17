"use strict";

var EWO_Hay_Day_Helper_Data =
{
	"Bread":
	{
		"Production Building": "Bakery",
		"Wheat": 3,
	},
	"Corn Bread":
	{
		"Production Building": "Bakery",
		"Corn": 2,
		"Egg": 2,
	},
	"Cookie":
	{
		"Production Building": "Bakery",
	},
	"Raspberry Muffin":
	{
		"Production Building": "Bakery",
	},
	"Blackberry Muffin":
	{
		"Production Building": "Bakery",
	},
	"Pizza":
	{
		"Production Building": "Bakery",
	},
	"Spicy Pizza":
	{
		"Production Building": "Bakery",
	},
	"Potato Bread":
	{
		"Production Building": "Bakery",
	},
	"Frutti di Mare Pizza":
	{
		"Production Building": "Bakery",
	},
	"Chicken Feed x3":
	{
		"Production Building": "Feed Mill",
	},
	"Cream":
	{
		"Production Building": "Dairy",
	},
	"Brown Sugar":
	{
		"Production Building": "Sugar Mill",
	},
	"Popcorn":
	{
		"Production Building": "Popcorn Pot",
	},
	"Pancake":
	{
		"Production Building": "BBQ Grill",
	},
	"Carrot Pie":
	{
		"Production Building": "Pie Oven",
	},
	"Sweater":
	{
		"Production Building": "Loom",
	},
	"Cotton Shirt":
	{
		"Production Building": "Sewing Machine",
	},
	"Carrot Cake":
	{
		"Production Building": "Cake Oven",
	},
	"Silver Bar":
	{
		"Production Building": "Smelter",
	},
	"Carrot Juice":
	{
		"Production Building": "Juice Press",
	},
	"Vanilla Ice Cream":
	{
		"Production Building": "Ice Cream Maker",
	},
	"Apple Jam":
	{
		"Production Building": "Jam Maker",
	},
	"Bracelet":
	{
		"Production Building": "Jeweler",
	},
	"Honey":
	{
		"Production Building": "Honey Extractor",
	},
	"Espresso":
	{
		"Production Building": "Coffee Kiosk",
	},
	"Lobster Soup":
	{
		"Production Building": "Soup Kitchen",
	},
	"Strawberry Candle":
	{
		"Production Building": "Candle Maker",
	},
	"Rustic Bouquet":
	{
		"Production Building": "Flower Shop",
	},
	"Caramel Apple":
	{
		"Production Building": "Candy Machine",
	},
	"Soy Sauce":
	{
		"Production Building": "Sauce Maker",
	},
	"Sushi Roll":
	{
		"Production Building": "Sushi Bar",
	},
	"Feta Salad":
	{
		"Production Building": "Salad Bar",
		"Lettuce": 3,
		"Tomato": 1,
		"Goat Cheese": 2,
		"Olives": 2,
	},
};

function EWO_Main()
{
	var EWO_HTML = "";

	for (var EWO_For_Counter_One = 0; EWO_For_Counter_One < EWO_Hay_Day_Helper_Data.length; EWO_For_Counter_One++)
	{
		EWO_HTML+= typeof EWO_Hay_Day_Helper_Data[EWO_For_Counter_One];
		EWO_HTML+= EWO_Hay_Day_Helper_Data[EWO_For_Counter_One];
		EWO_HTML+= "<br>";
	}

	document.body.innerHTML = EWO_HTML;
}
