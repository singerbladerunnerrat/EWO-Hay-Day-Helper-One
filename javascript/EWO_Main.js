"use strict";

EWO_Hay_Day_Helper_Data =
{
	Bread:
	{
		"Production Building": Bakery,
		Wheat: 3,
	},
	"Corn Bread":
	{
		"Production Building": Bakery,
		Corn: 2,
		Egg: 2,
	},
	Cookie:
	{
		"Production Building": Bakery,
	},
	"Raspberry Muffin":
	{
		"Production Building": Bakery,
	},
	"Blackberry Muffin":
	{
		"Production Building": Bakery,
	},
	Pizza:
	{
		"Production Building": Bakery,
	},
	"Spicy Pizza":
	{
		"Production Building": Bakery,
	},
	"Potato Bread":
	{
		"Production Building": Bakery,
	},
	"Frutti di Mare Pizza":
	{
		"Production Building": Bakery,
	},
};

function EWO_Main()
{
	EWO_Data =
	{

	};

	var EWO_HTML = "";

	EWO_HTML+= "3:55 PM";
	EWO_HTML+= "<br>";
	EWO_HTML+= "<br>";
	EWO_HTML+= EWO_Hay_Day_Helper_Data;

	document.body.innerHTML = EWO_HTML;
}
