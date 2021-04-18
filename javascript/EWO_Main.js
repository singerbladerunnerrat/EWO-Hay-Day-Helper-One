"use strict";

function EWO_Main()
{
	var EWO_HTML = "";
	var EWO_Object = {};

	EWO_HTML+= "Grocery Store";
	EWO_HTML+= "<br>";
	EWO_HTML+= "Cinema";
	EWO_HTML+= "<br>";
	EWO_HTML+= "Diner";
	EWO_HTML+= "<br>";
	EWO_HTML+= "Bed and Breakfast";
	EWO_HTML+= "<br>";
	EWO_HTML+= "Spa";
	EWO_HTML+= "<br>";
	EWO_HTML+= "Gift Shop";
	EWO_HTML+= "<br>";
	EWO_HTML+= "<br>";

	for (const EWO_Property_One in EWO_Hay_Day_Helper_Data)
	{

		for (const EWO_Property_Two in EWO_Hay_Day_Helper_Data[EWO_Property_One])
		{
			if ((typeof EWO_Hay_Day_Helper_Data[EWO_Property_One][EWO_Property_Two]) === "number")
			{
				EWO_Object[EWO_Property_Two]+= EWO_Hay_Day_Helper_Data[EWO_Property_One][EWO_Property_Two];
			}
		}
	}

	for (const EWO_Property_One in EWO_Object)
	{
		EWO_HTML+= EWO_Property_One;
		EWO_HTML+= " ";
		EWO_HTML+= EWO_Object[EWO_Property_One];
		EWO_HTML+= "<br>";
	}

	document.body.innerHTML = EWO_HTML;
}
