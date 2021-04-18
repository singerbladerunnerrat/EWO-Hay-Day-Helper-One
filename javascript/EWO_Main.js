"use strict";

function EWO_Main()
{
	var EWO_HTML_One = "";

	EWO_HTML_One+= "Grocery Store";
	EWO_HTML_One+= "<br>";
	EWO_HTML_One+= "Cinema";
	EWO_HTML_One+= "<br>";
	EWO_HTML_One+= "Diner";
	EWO_HTML_One+= "<br>";
	EWO_HTML_One+= "Bed and Breakfast";
	EWO_HTML_One+= "<br>";
	EWO_HTML_One+= "Spa";
	EWO_HTML_One+= "<br>";
	EWO_HTML_One+= "Gift Shop";
	EWO_HTML_One+= "<br>";
	EWO_HTML_One+= "<br>";

	var EWO_Object_One = {};

	for (const EWO_Property_One in EWO_Hay_Day_Helper_Data)
	{

		for (const EWO_Property_Two in EWO_Hay_Day_Helper_Data[EWO_Property_One])
		{
			if ((typeof EWO_Hay_Day_Helper_Data[EWO_Property_One][EWO_Property_Two]) === "number")
			{
				if (EWO_Object_One[EWO_Property_Two] === undefined)
				{
					EWO_Object_One[EWO_Property_Two] = 0;
				}

				EWO_Object_One[EWO_Property_Two]+= EWO_Hay_Day_Helper_Data[EWO_Property_One][EWO_Property_Two];
			}
		}
	}

	var EWO_Array_One = [];
	var EWO_Counter_One = 0;

	for (const EWO_Property_One in EWO_Object_One)
	{
		EWO_Array_One[EWO_Counter_One] = EWO_Property_One;

		EWO_Counter_One++;
	}

	EWO_Array_One.sort();

	var EWO_Object_Two = {};

	for (var EWO_For_Counter_One = 0; EWO_For_Counter_One < EWO_Array_One.length; EWO_For_Counter_One++)
	{
		EWO_Object_Two[EWO_Array_One[EWO_For_Counter_One]] = EWO_Object_One[EWO_Array_One[EWO_For_Counter_One]];
	}

	for (const EWO_Property_One in EWO_Object_Two)
	{
		EWO_HTML_One+= EWO_Property_One;
		EWO_HTML_One+= " ";
		EWO_HTML_One+= EWO_Object_Two[EWO_Property_One];
		EWO_HTML_One+= "<br>";
	}

	document.body.innerHTML = EWO_HTML_One;
}
