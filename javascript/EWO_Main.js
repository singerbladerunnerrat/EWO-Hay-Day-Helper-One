"use strict";

function EWO_Main()
{
	var EWO_HTML_One = "";

	EWO_HTML_One+= "Grocery Store<br>";
	EWO_HTML_One+= "Cinema<br>";
	EWO_HTML_One+= "Diner<br>";
	EWO_HTML_One+= "Bed and Breakfast<br>";
	EWO_HTML_One+= "Spa<br>";
	EWO_HTML_One+= "Gift Shop<br>";

	EWO_HTML_One+= "<hr>";

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

	EWO_Counter_One = 0;

	EWO_HTML_One+= "<table>";
	EWO_HTML_One+= "<tbody>";

	for (const EWO_Property_One in EWO_Object_Two)
	{
		if (EWO_Counter_One === 6)
		{
			EWO_HTML_One+= "<tr>";
		}

		EWO_HTML_One+= "<td><span style='margin-left:2em'>";
		EWO_HTML_One+= EWO_Property_One;
		EWO_HTML_One+= "</span></td>";

		EWO_HTML_One+= "<td style='text-align:right'><span style='margin-left:2em'>";
		EWO_HTML_One+= EWO_Object_Two[EWO_Property_One];
		EWO_HTML_One+= "</span></td>";

		EWO_Counter_One++;

		if (EWO_Counter_One === 3)
		{
			EWO_HTML_One+= "</tr>";

			EWO_Counter_One = 0;
		}
	}

		EWO_HTML_One+= "</tbody>";
	EWO_HTML_One+= "</table>";

	EWO_HTML_One+= "<hr>";

	EWO_HTML_One+= "<table>";
		EWO_HTML_One+= "<tbody>";
			EWO_HTML_One+= "<tr>";
				EWO_HTML_One+= "<td><span style='margin-left:2em'>Wheat</span></td>";
				EWO_HTML_One+= "<td style='text-align:right'><span style='margin-left:2em'>";
					EWO_HTML_One+= EWO_Object_Two["Wheat"];
				EWO_HTML_One+= "</span></td>";
				EWO_HTML_One+= "<td><span style='margin-left:2em'>Indigo</span></td>";
				EWO_HTML_One+= "<td style='text-align:right'><span style='margin-left:2em'>";
					EWO_HTML_One+= EWO_Object_Two["Indigo"];
				EWO_HTML_One+= "</span></td>";
				EWO_HTML_One+= "<td><span style='margin-left:2em'>Strawberries</span></td>";
				EWO_HTML_One+= "<td style='text-align:right'><span style='margin-left:2em'>";
					EWO_HTML_One+= EWO_Object_Two["Strawberries"];
				EWO_HTML_One+= "</span></td>";
			EWO_HTML_One+= "</tr>";
			EWO_HTML_One+= "<tr>";
				EWO_HTML_One+= "<td><span style='margin-left:2em'>Corn</span></td>";
				EWO_HTML_One+= "<td style='text-align:right'><span style='margin-left:2em'>";
					EWO_HTML_One+= EWO_Object_Two["Corn"];
				EWO_HTML_One+= "</span></td>";
				EWO_HTML_One+= "<td><span style='margin-left:2em'>Pumpkin</span></td>";
				EWO_HTML_One+= "<td style='text-align:right'><span style='margin-left:2em'>";
					EWO_HTML_One+= EWO_Object_Two["Pumpkin"];
				EWO_HTML_One+= "</span></td>";
				EWO_HTML_One+= "<td><span style='margin-left:2em'>Potato</span></td>";
				EWO_HTML_One+= "<td style='text-align:right'><span style='margin-left:2em'>";
					EWO_HTML_One+= EWO_Object_Two["Potato"];
				EWO_HTML_One+= "</span></td>";
			EWO_HTML_One+= "</tr>";
			EWO_HTML_One+= "<tr>";
				EWO_HTML_One+= "<td><span style='margin-left:2em'>Soybean</span></td>";
				EWO_HTML_One+= "<td style='text-align:right'><span style='margin-left:2em'>";
					EWO_HTML_One+= EWO_Object_Two["Soybean"];
				EWO_HTML_One+= "</span></td>";
				EWO_HTML_One+= "<td><span style='margin-left:2em'>Cotton</span></td>";
				EWO_HTML_One+= "<td style='text-align:right'><span style='margin-left:2em'>";
					EWO_HTML_One+= EWO_Object_Two["Cotton"];
				EWO_HTML_One+= "</span></td>";
				EWO_HTML_One+= "<td><span style='margin-left:2em'>Sesame</span></td>";
				EWO_HTML_One+= "<td style='text-align:right'><span style='margin-left:2em'>";
					EWO_HTML_One+= EWO_Object_Two["Sesame"];
				EWO_HTML_One+= "</span></td>";
			EWO_HTML_One+= "</tr>";
			EWO_HTML_One+= "<tr>";
				EWO_HTML_One+= "<td><span style='margin-left:2em'>Sugarcane</span></td>";
				EWO_HTML_One+= "<td style='text-align:right'><span style='margin-left:2em'>";
					EWO_HTML_One+= EWO_Object_Two["Sugarcane"];
				EWO_HTML_One+= "</span></td>";
				EWO_HTML_One+= "<td><span style='margin-left:2em'>Chili Pepper</span></td>";
				EWO_HTML_One+= "<td style='text-align:right'><span style='margin-left:2em'>";
					EWO_HTML_One+= EWO_Object_Two["Chili Pepper"];
				EWO_HTML_One+= "</span></td>";
				EWO_HTML_One+= "<td><span style='margin-left:2em'>Pineapple</span></td>";
				EWO_HTML_One+= "<td style='text-align:right'><span style='margin-left:2em'>";
					EWO_HTML_One+= EWO_Object_Two["Pineapple"];
				EWO_HTML_One+= "</span></td>";
			EWO_HTML_One+= "</tr>";
			EWO_HTML_One+= "<tr>";
				EWO_HTML_One+= "<td><span style='margin-left:2em'>Carrot</span></td>";
				EWO_HTML_One+= "<td style='text-align:right'>";
					EWO_HTML_One+= EWO_Object_Two["Carrot"];
				EWO_HTML_One+= "</span></td>";
				EWO_HTML_One+= "<td><span style='margin-left:2em'>Tomato</span></td>";
				EWO_HTML_One+= "<td style='text-align:right'>";
					EWO_HTML_One+= EWO_Object_Two["Tomato"];
				EWO_HTML_One+= "</span></td>";
				EWO_HTML_One+= "<td><span style='margin-left:2em'>Lily</span></td>";
				EWO_HTML_One+= "<td style='text-align:right'>";
					EWO_HTML_One+= EWO_Object_Two["Lily"];
				EWO_HTML_One+= "</span></td>";
			EWO_HTML_One+= "</tr>";
			EWO_HTML_One+= "<tr>";
				EWO_HTML_One+= "<td>&nbsp;</td>";
			EWO_HTML_One+= "</tr>";
			EWO_HTML_One+= "<tr>";
				EWO_HTML_One+= "<td><span style='margin-left:2em'>Rice</span></td>";
				EWO_HTML_One+= "<td style='text-align:right'>";
					EWO_HTML_One+= EWO_Object_Two["Rice"];
				EWO_HTML_One+= "</span></td>";
			EWO_HTML_One+= "</tr>";
			EWO_HTML_One+= "<tr>";
				EWO_HTML_One+= "<td><span style='margin-left:2em'>Lettuce</span></td>";
				EWO_HTML_One+= "<td style='text-align:right'>";
					EWO_HTML_One+= EWO_Object_Two["Lettuce"];
				EWO_HTML_One+= "</span></td>";
			EWO_HTML_One+= "</tr>";
			EWO_HTML_One+= "<tr>";
				EWO_HTML_One+= "<td><span style='margin-left:2em'>Garlic</span></td>";
				EWO_HTML_One+= "<td style='text-align:right'>";
					EWO_HTML_One+= EWO_Object_Two["Garlic"];
				EWO_HTML_One+= "</span></td>";
			EWO_HTML_One+= "</tr>";
		EWO_HTML_One+= "</tbody>";
	EWO_HTML_One+= "</table>";

	EWO_HTML_One+= "<hr>";

	document.body.innerHTML = EWO_HTML_One;
}
