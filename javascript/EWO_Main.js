"use strict";

EWO_Hay_Day_Helper_Data = 
{
	"Bread":
	{
		"Wheat": 3
	},
	"Corn Bread":
	{
		"Corn": 2,
		"Egg": 2
	},
};

function EWO_Main()
{
	EWO_Data =
	{

	};

	var EWO_HTML = "";

	EWO_HTML+= "This is a test.";
	EWO_HTML+= "<br>";
	EWO_HTML+= EWO_Hay_Day_Helper_Data;

	document.body.innerHTML = EWO_HTML;
}
