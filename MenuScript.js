function Response() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function openForm() {
  document.getElementById("Confirmation_Form").style.display = "block";
}
function closeForm() {
  document.getElementById("Confirmation_Form").style.display = "none";
}

		// Function To collect data and data to the curt.

function AddToCart()
	{

		// Section for checkboxs
		var AddCheeseBurger =document.getElementById("ckbAddCheeseBurger");
		var AddCrispyChickenHoneyBurger = document.getElementById("ckbAddCrispyChickenHoneyBurger");
		var AddBeefEggsBurger = document.getElementById("ckbAddBeefEggsBurger");
		var AddbatteredFish = document.getElementById("ckbAddbatteredFish");
		var AddchickenNuggets = document.getElementById("ckbAddchickenNuggets");
		var AddgrilledCheeseSandwich = document.getElementById("ckbAddgrilledCheeseSandwich");
		var AddhotSpicyWings = document.getElementById("ckbAddhotSpicyWings");
		var AddBeefCurry = document.getElementById("ckbAddBeefCurry");
		var AddMeatballSub = document.getElementById("ckbAddMeatballSub");
		var AddFriedTuna = document.getElementById("ckbAddFriedTuna");
		var AddTexasToast = document.getElementById("ckbAddTexasToast");
		var AddCheeseVetkoek = document.getElementById("ckbAddCheeseVetkoek");
		var AddJuicySteak = document.getElementById("ckbAddJuicySteak");
		var AddChickenStew = document.getElementById("ckbAddChickenStew");
		var AddWors = document.getElementById("ckbAddWors");
		var AddFriedChips = document.getElementById("ckbAddFriedChips");
		var AddPizza = document.getElementById("ckbAddPizza");
		var AddSalad = document.getElementById("ckbAddSalad");
		var AddMixedavocado = document.getElementById("ckbAddMixedavocado");
		var AddFruitJuice = document.getElementById("ckbAddFruitJuice");
		var AddOrangeJuice = document.getElementById("ckbAddOrangeJuice");
		var AddLemonWater = document.getElementById("ckbAddLemonWater");
		var AddStillWater = document.getElementById("ckbAddStillWater");

		//Section for Textboxs
		var QuantityCheeseBurger = parseInt(document.getElementById("txtQuantityCheeseBurger").value);
		var QuantityCrispyChickenBurger = parseInt(document.getElementById("txtQuantityCrispyChickenBurger").value);
		var QuantityBeefEggsBurger = parseInt(document.getElementById("txtQuantityBeefEggsBurger").value);
		var QuantitybatteredFish = parseInt(document.getElementById("txtQuantitybatteredFish").value);
		var QuantitychickenNuggets = parseInt(document.getElementById("txtQuantitychickenNuggets").value);
		var QuantitygrilledCheeseSandwich = parseInt(document.getElementById("txtQuantitygrilledCheeseSandwich").value);
		var QuantityhotSpicyWings = parseInt(document.getElementById("txtQuantityhotSpicyWings").value);
		var QuantitybeefCurry = parseInt(document.getElementById("txtQuantityBeefCurry").value);
		var QuantityMeatballSub = parseInt(document.getElementById("txtQuantityMeatballSub").value);
		var QuantityFriedTuna = parseInt(document.getElementById("txtQuantityFriedTuna").value);
		var QuantityTexasToast = parseInt(document.getElementById("txtQuantityTexasToast").value);
		var QuantityCheeseVetkoek = parseInt(document.getElementById("txtQuantityCheeseVetkoek").value);
		var QuantityJuicySteak = parseInt(document.getElementById("txtQuantityJuicySteak").value);
		var QuantityChickenStew = parseInt(document.getElementById("txtQuantityChickenStew").value);
		var QuantityWors = parseInt(document.getElementById("txtQuantityWors").value);
		var QuantityFriedChips = parseInt(document.getElementById("txtQuantityFriedChips").value);
		var QuantityPizza = parseInt(document.getElementById("txtQuantityPizza").value);
		var QuantitySalad = parseInt(document.getElementById("txtQuantitySalad").value);
		var QuantityMixedavocado = parseInt(document.getElementById("txtQuantityMixedavocado").value);
		var QuantityFruitJuice = parseInt(document.getElementById("txtQuantityFruitJuice").value);
		var QuantityOrangeJuice = parseInt(document.getElementById("txtQuantityOrangeJuice").value);
		var QuantityLemonWater = parseInt(document.getElementById("txtQuantityLemonWater").value);
		var QuantityStillWater = parseInt(document.getElementById("txtQuantityStillWater").value);


		if(AddCheeseBurger.checked==true && QuantityCheeseBurger >= 1)
		{

     var passFoodName = document.getElementById("FoodName").innerHTML = " Beef-Cheese Burger ";
		 var passTotalPrice=document.getElementById("TotalPrice").innerHTML =" "+"R"+(QuantityCheeseBurger*(50)).toFixed(2);
		 var passQuantity=document.getElementById("NumItem").innerHTML =QuantityCheeseBurger;
		 var passFoodPirce = document.getElementById("foodprice").innerHTML = " R50,00 ";

		 localStorage.setItem("FoodName",passFoodName);
		 localStorage.setItem("TotalPrice",passTotalPrice);
		 localStorage.setItem("NumItem",passQuantity);
		 localStorage.setItem("foodprice",passFoodPirce);

		}
		else if (AddCheeseBurger.checked==false && QuantityCheeseBurger < 1)
		{

		 var passFoodName = document.getElementById("FoodName").innerHTML = " ";
		 var passTotalPrice =document.getElementById("TotalPrice").innerHTML +" ";
		 var passQuantity=document.getElementById("NumItem").innerHTML ="";
		 var passFoodPirce=document.getElementById("foodprice").innerHTML = " ";

		 localStorage.setItem("FoodName",passFoodName);
		 localStorage.setItem("TotalPrice",passTotalPrice);
		 localStorage.setItem("NumItem",passQuantity);
		 localStorage.setItem("foodprice",passFoodPirce);
		}

		if(AddCrispyChickenHoneyBurger.checked==true && QuantityCrispyChickenBurger >= 1)
		{

         passFoodName1=document.getElementById("FoodName1").innerHTML = "Chicken Honey Burger";
		 passTotalPrice1=document.getElementById("TotalPrice1").innerHTML =" "+"R"+(QuantityCrispyChickenBurger*(40)).toFixed(2);
		 passQuantity1=document.getElementById("NumItem1").innerHTML =QuantityCrispyChickenBurger;
		 passFoodPirce1=document.getElementById("foodprice1").innerHTML = " R40,00 ";

		 localStorage.setItem("FoodName1",passFoodName1);
		 localStorage.setItem("TotalPrice1",passTotalPrice1);
		 localStorage.setItem("NumItem1",passQuantity1);
		 localStorage.setItem("foodprice1",passFoodPirce1);

		}
		else if(AddCrispyChickenHoneyBurger.checked==false && QuantityCrispyChickenBurger < 1)
		{

         passFoodName1=document.getElementById("FoodName1").innerHTML = " ";
		 passTotalPrice1=document.getElementById("TotalPrice1").innerHTML =" ";
		 passQuantity1=document.getElementById("NumItem1").innerHTML ="";
		 passFoodPirce1= document.getElementById("foodprice1").innerHTML = " ";

		 localStorage.setItem("FoodName1",passFoodName1);
		 localStorage.setItem("TotalPrice1",passTotalPrice1);
		 localStorage.setItem("NumItem1",passQuantity1);
		 localStorage.setItem("foodprice1",passFoodPirce1);

		}

		if(AddBeefEggsBurger.checked==true&& QuantityBeefEggsBurger >= 1)
		{
         passFoodName2=document.getElementById("FoodName2").innerHTML = "Beef Egg Burger";
		 passTotalPrice2=document.getElementById("TotalPrice2").innerHTML =" "+"R"+(QuantityBeefEggsBurger*(40)).toFixed(2);
		 passQuantity2=document.getElementById("NumItem2").innerHTML =QuantityBeefEggsBurger;
		 passFoodPirce2=document.getElementById("foodprice2").innerHTML = " R40,00 ";

		 localStorage.setItem("FoodName2",passFoodName2);
		 localStorage.setItem("TotalPrice2",passTotalPrice2);
		 localStorage.setItem("NumItem2",passQuantity2);
		 localStorage.setItem("foodprice2",passFoodPirce2);
		}
		else if(AddBeefEggsBurger.checked==false && QuantityBeefEggsBurger < 1)
		{
     passFoodName2=document.getElementById("FoodName2").innerHTML = "";
		 passTotalPrice2=document.getElementById("TotalPrice2").innerHTML ="";
		 passQuantity2=document.getElementById("NumItem2").innerHTML ="";
		 passFoodPirce2=document.getElementById("foodprice2").innerHTML = "";

		 localStorage.setItem("FoodName2",passFoodName2);
		 localStorage.setItem("TotalPrice2",passTotalPrice2);
		 localStorage.setItem("NumItem2",passQuantity2);
		 localStorage.setItem("foodprice2",passFoodPirce2);
		}

		if(AddbatteredFish.checked==true && QuantitybatteredFish >= 1)
		{
     passFoodName3= document.getElementById("FoodName3").innerHTML = "Battered Fish";
     passTotalPrice3=document.getElementById("TotalPrice3").innerHTML =" "+"R"+(QuantitybatteredFish*(60)).toFixed(2);
		 passQuantity3=document.getElementById("NumItem3").innerHTML =QuantitybatteredFish;
		 passFoodPirce3=document.getElementById("foodprice3").innerHTML = " R60,00 ";

		 localStorage.setItem("FoodName3",passFoodName3);
		 localStorage.setItem("TotalPrice3",passTotalPrice3);
		 localStorage.setItem("NumItem3",passQuantity3);
		 localStorage.setItem("foodprice3",passFoodPirce3);
		}

		else if(AddbatteredFish.checked==false && QuantitybatteredFish < 1)
		{
         passFoodName3= document.getElementById("FoodName3").innerHTML = "";
         passTotalPrice3=document.getElementById("TotalPrice3").innerHTML =" ";
		 passQuantity3=document.getElementById("NumItem3").innerHTML ="";
		 passFoodPirce3=document.getElementById("foodprice3").innerHTML = "";

		 localStorage.setItem("FoodName3",passFoodName3);
		 localStorage.setItem("TotalPrice3",passTotalPrice3);
		 localStorage.setItem("NumItem3",passQuantity3);
		 localStorage.setItem("foodprice3",passFoodPirce3);
		}

		if(AddchickenNuggets.checked==true && QuantitychickenNuggets >= 1)
		{
         passFoodName4=document.getElementById("FoodName4").innerHTML = "Chicken Nuggets";
		 passTotalPrice4=document.getElementById("TotalPrice4").innerHTML =" "+"R"+(QuantitychickenNuggets*(40)).toFixed(2);
		 passQuantity4=document.getElementById("NumItem4").innerHTML =QuantitychickenNuggets;
		 passFoodPirce4=document.getElementById("foodprice4").innerHTML = " R40,00 ";

		 localStorage.setItem("FoodName4",passFoodName4);
		 localStorage.setItem("TotalPrice4",passTotalPrice4);
		 localStorage.setItem("NumItem4",passQuantity4);
		 localStorage.setItem("foodprice4",passFoodPirce4);
		}
		else if(AddchickenNuggets.checked==false && QuantitychickenNuggets < 1)
		{
         passFoodName4= document.getElementById("FoodName4").innerHTML = "";
         passTotalPrice4=document.getElementById("TotalPrice4").innerHTML =" ";
		 passQuantity4=document.getElementById("NumItem4").innerHTML ="";
		 passFoodPirce4=document.getElementById("foodprice4").innerHTML = "";

		 localStorage.setItem("FoodName4",passFoodName4);
		 localStorage.setItem("TotalPrice4",passTotalPrice4);
		 localStorage.setItem("NumItem4",passQuantity4);
		 localStorage.setItem("foodprice4",passFoodPirce4);
		}


		if(AddgrilledCheeseSandwich.checked==true && QuantitygrilledCheeseSandwich >= 1)
		{
         passFoodName5=document.getElementById("FoodName5").innerHTML = "Grilled cheese sandwich";
		 passTotalPrice5= document.getElementById("TotalPrice5").innerHTML =" "+"R"+(QuantitygrilledCheeseSandwich*(35)).toFixed(2);
		 passQuantity5= document.getElementById("NumItem5").innerHTML =QuantitygrilledCheeseSandwich;
		 passFoodPirce5 =document.getElementById("foodprice5").innerHTML = " R35,00 ";

		 localStorage.setItem("FoodName5",passFoodName5);
		 localStorage.setItem("TotalPrice5",passTotalPrice5);
		 localStorage.setItem("NumItem5",passQuantity5);
		 localStorage.setItem("foodprice5",passFoodPirce5);
		}
		else if(AddgrilledCheeseSandwich.checked==false && QuantitygrilledCheeseSandwich < 1)
		{
         passFoodName5= document.getElementById("FoodName5").innerHTML = "";
         passTotalPrice5=document.getElementById("TotalPrice5").innerHTML =" ";
		 passQuantity5=document.getElementById("NumItem5").innerHTML ="";
		 passFoodPirce5=document.getElementById("foodprice5").innerHTML = "";

		 localStorage.setItem("FoodName5",passFoodName5);
		 localStorage.setItem("TotalPrice5",passTotalPrice5);
		 localStorage.setItem("NumItem5",passQuantity5);
		 localStorage.setItem("foodprice5",passFoodPirce5);
		}


		if(AddhotSpicyWings.checked==true && QuantityhotSpicyWings >= 1)
		{
         passFoodName6=document.getElementById("FoodName6").innerHTML = "Hot Spicy Wings";
		 passTotalPrice6=document.getElementById("TotalPrice6").innerHTML =" "+"R"+(QuantityhotSpicyWings*(50)).toFixed(2);
		 passQuantity6=document.getElementById("NumItem6").innerHTML =QuantityhotSpicyWings;
		 passFoodPirce6=document.getElementById("foodprice6").innerHTML = " R50,00 ";

		 localStorage.setItem("FoodName6",passFoodName6);
		 localStorage.setItem("TotalPrice6",passTotalPrice6);
		 localStorage.setItem("NumItem6",passQuantity6);
		 localStorage.setItem("foodprice6",passFoodPirce6);
		}
		else if(AddhotSpicyWings.checked==false && QuantityhotSpicyWings < 1)
		{
         passFoodName6= document.getElementById("FoodName6").innerHTML = "";
         passTotalPrice6=document.getElementById("TotalPrice6").innerHTML =" ";
		 passQuantity6=document.getElementById("NumItem6").innerHTML ="";
		 passFoodPirce6=document.getElementById("foodprice6").innerHTML = "";

		 localStorage.setItem("FoodName6",passFoodName6);
		 localStorage.setItem("TotalPrice6",passTotalPrice6);
		 localStorage.setItem("NumItem6",passQuantity6);
		 localStorage.setItem("foodprice6",passFoodPirce6);
		}


		if(AddBeefCurry.checked==true && QuantitybeefCurry >= 1)
		{
         passFoodName7=document.getElementById("FoodName7").innerHTML = "Beef Curry";
		 passTotalPrice7=document.getElementById("TotalPrice7").innerHTML =" "+"R"+(QuantitybeefCurry*(30)).toFixed(2);
		 passQuantity7=document.getElementById("NumItem7").innerHTML =QuantitybeefCurry;
		 passFoodPirce7=document.getElementById("foodprice7").innerHTML = " R30,00 ";

		 localStorage.setItem("FoodName7",passFoodName7);
		 localStorage.setItem("TotalPrice7",passTotalPrice7);
		 localStorage.setItem("NumItem7",passQuantity7);
		 localStorage.setItem("foodprice7",passFoodPirce7);
		}
		else if(AddBeefCurry.checked==false && QuantitybeefCurry < 1)
		{
         passFoodName7= document.getElementById("FoodName7").innerHTML = "";
         passTotalPrice7=document.getElementById("TotalPrice7").innerHTML =" ";
		 passQuantity7=document.getElementById("NumItem7").innerHTML ="";
		 passFoodPirce7=document.getElementById("foodprice7").innerHTML = "";

		 localStorage.setItem("FoodName7",passFoodName7);
		 localStorage.setItem("TotalPrice7",passTotalPrice7);
		 localStorage.setItem("NumItem7",passQuantity7);
		 localStorage.setItem("foodprice7",passFoodPirce7);
		}


		if(AddMeatballSub.checked==true && QuantityMeatballSub >= 1)
		{
         passFoodName8= document.getElementById("FoodName8").innerHTML = "Meatball Sub";
		 passTotalPrice8=document.getElementById("TotalPrice8").innerHTML =" "+"R"+(QuantityMeatballSub*(40)).toFixed(2);
		 passQuantity8=document.getElementById("NumItem8").innerHTML =QuantityMeatballSub;
		 passFoodPirce8=document.getElementById("foodprice8").innerHTML = " R40,00 ";

		 localStorage.setItem("FoodName8",passFoodName8);
		 localStorage.setItem("TotalPrice8",passTotalPrice8);
		 localStorage.setItem("NumItem8",passQuantity8);
		 localStorage.setItem("foodprice8",passFoodPirce8);
		}
		else if(AddMeatballSub.checked==false && QuantityMeatballSub < 1)
		{
         passFoodName8= document.getElementById("FoodName8").innerHTML = "";
         passTotalPrice8=document.getElementById("TotalPrice8").innerHTML =" ";
		 passQuantity8=document.getElementById("NumItem8").innerHTML ="";
		 passFoodPirce8=document.getElementById("foodprice8").innerHTML = "";

		 localStorage.setItem("FoodName8",passFoodName8);
		 localStorage.setItem("TotalPrice8",passTotalPrice8);
		 localStorage.setItem("NumItem8",passQuantity8);
		 localStorage.setItem("foodprice8",passFoodPirce8);
		}


		if(AddFriedTuna.checked==true && QuantityFriedTuna >= 1)
		{
         passFoodName9=document.getElementById("FoodName9").innerHTML = "Fried Tuna";
		 passTotalPrice9=document.getElementById("TotalPrice9").innerHTML =" "+"R"+(QuantityFriedTuna*(45)).toFixed(2);
		 passQuantity9=document.getElementById("NumItem9").innerHTML =QuantityFriedTuna;
		 passFoodPirce9=document.getElementById("foodprice9").innerHTML = " R45,00 ";

         localStorage.setItem("FoodName9",passFoodName9);
		 localStorage.setItem("TotalPrice9",passTotalPrice9);
		 localStorage.setItem("NumItem9",passQuantity9);
		 localStorage.setItem("foodprice9",passFoodPirce9);
		}
		else if(AddFriedTuna.checked==false && QuantityFriedTuna < 1)
		{
         passFoodName9= document.getElementById("FoodName9").innerHTML = "";
         passTotalPrice9=document.getElementById("TotalPrice9").innerHTML =" ";
		 passQuantity9=document.getElementById("NumItem9").innerHTML ="";
		 passFoodPirce9=document.getElementById("foodprice9").innerHTML = "";

		 localStorage.setItem("FoodName9",passFoodName9);
		 localStorage.setItem("TotalPrice9",passTotalPrice9);
		 localStorage.setItem("NumItem9",passQuantity9);
		 localStorage.setItem("foodprice9",passFoodPirce9);
		}


		if(AddTexasToast.checked==true && QuantityTexasToast >= 1)
		{
         passFoodName10=document.getElementById("FoodName10").innerHTML = "Texas Toast";
		 passTotalPrice10=document.getElementById("TotalPrice10").innerHTML =" "+"R"+(QuantityTexasToast*(10)).toFixed(2);
		 passQuantity10=document.getElementById("NumItem10").innerHTML =QuantityTexasToast;
		 passFoodPirce10=document.getElementById("foodprice10").innerHTML = " R10,00 ";

		 localStorage.setItem("FoodName10",passFoodName10);
		 localStorage.setItem("TotalPrice10",passTotalPrice10);
		 localStorage.setItem("NumItem10",passQuantity10);
		 localStorage.setItem("foodprice10",passFoodPirce10);
		}
		else if(AddTexasToast.checked==false && QuantityTexasToast < 1)
		{
         passFoodName10= document.getElementById("FoodName10").innerHTML = "";
         passTotalPrice10=document.getElementById("TotalPrice10").innerHTML =" ";
		 passQuantity10=document.getElementById("NumItem10").innerHTML ="";
		 passFoodPirce10=document.getElementById("foodprice10").innerHTML = "";

		 localStorage.setItem("FoodName10",passFoodName10);
		 localStorage.setItem("TotalPrice10",passTotalPrice10);
		 localStorage.setItem("NumItem10",passQuantity10);
		 localStorage.setItem("foodprice10",passFoodPirce10);
		}


		if(AddCheeseVetkoek.checked==true && QuantityCheeseVetkoek >= 1)
		{
          passFoodName11=document.getElementById("FoodName11").innerHTML = "Cheese Vetkoek";
		 passTotalPrice11=document.getElementById("TotalPrice11").innerHTML =" "+"R"+(QuantityCheeseVetkoek*(10)).toFixed(2);
		 passQuantity11=document.getElementById("NumItem11").innerHTML =QuantityCheeseVetkoek;
		 passFoodPirce11=document.getElementById("foodprice11").innerHTML = " R10,00 ";


		 localStorage.setItem("FoodName11",passFoodName11);
		 localStorage.setItem("TotalPrice11",passTotalPrice11);
		 localStorage.setItem("NumItem11",passQuantity11);
		 localStorage.setItem("foodprice11",passFoodPirce11);
		}
		else if(AddCheeseVetkoek.checked==false && QuantityCheeseVetkoek < 1)
		{
         passFoodName11= document.getElementById("FoodName11").innerHTML = "";
         passTotalPrice11=document.getElementById("TotalPrice11").innerHTML =" ";
		 passQuantity11=document.getElementById("NumItem11").innerHTML ="";
		 passFoodPirce11=document.getElementById("foodprice11").innerHTML = "";

		 localStorage.setItem("FoodName11",passFoodName11);
		 localStorage.setItem("TotalPrice11",passTotalPrice11);
		 localStorage.setItem("NumItem11",passQuantity11);
		 localStorage.setItem("foodprice11",passFoodPirce11);
		}


		if(AddJuicySteak.checked==true && QuantityJuicySteak >= 1)
		{
         passFoodName12=document.getElementById("FoodName12").innerHTML = "Juicy Steak";
		 passTotalPrice12=document.getElementById("TotalPrice12").innerHTML =" "+"R"+(QuantityJuicySteak*(60)).toFixed(2);
		 passQuantity12=document.getElementById("NumItem12").innerHTML =QuantityJuicySteak;
		 passFoodPirce12=document.getElementById("foodprice12").innerHTML = " R60,00 ";

         localStorage.setItem("FoodName12",passFoodName12);
		 localStorage.setItem("TotalPrice12",passTotalPrice12);
		 localStorage.setItem("NumItem12",passQuantity12);
		 localStorage.setItem("foodprice12",passFoodPirce12);
		}
		else if(AddJuicySteak.checked==false && QuantityJuicySteak < 1)
		{
         passFoodName12= document.getElementById("FoodName12").innerHTML = "";
         passTotalPrice12=document.getElementById("TotalPrice12").innerHTML =" ";
		 passQuantity12=document.getElementById("NumItem12").innerHTML ="";
		 passFoodPirce12=document.getElementById("foodprice12").innerHTML = "";

		 localStorage.setItem("FoodName12",passFoodName12);
		 localStorage.setItem("TotalPrice12",passTotalPrice12);
		 localStorage.setItem("NumItem12",passQuantity12);
		 localStorage.setItem("foodprice12",passFoodPirce12);
		}

		if(AddChickenStew.checked==true && QuantityChickenStew >= 1)
		{
         passFoodName13=document.getElementById("FoodName13").innerHTML = "Chicken Stew";
		 passTotalPrice13=document.getElementById("TotalPrice13").innerHTML =" "+"R"+(QuantityChickenStew*(35)).toFixed(2);
		 passQuantity13=document.getElementById("NumItem13").innerHTML =QuantityChickenStew;
		 passFoodPirce13=document.getElementById("foodprice13").innerHTML = " R35,00 ";

		 localStorage.setItem("FoodName13",passFoodName13);
		 localStorage.setItem("TotalPrice13",passTotalPrice13);
		 localStorage.setItem("NumItem13",passQuantity13);
		 localStorage.setItem("foodprice13",passFoodPirce13);
		}
		else if(AddChickenStew.checked==false && QuantityChickenStew < 1)
		{
         passFoodName13= document.getElementById("FoodName13").innerHTML = "";
         passTotalPrice13=document.getElementById("TotalPrice13").innerHTML =" ";
		 passQuantity13=document.getElementById("NumItem13").innerHTML ="";
		 passFoodPirce13=document.getElementById("foodprice13").innerHTML = "";

		 localStorage.setItem("FoodName13",passFoodName13);
		 localStorage.setItem("TotalPrice13",passTotalPrice13);
		 localStorage.setItem("NumItem13",passQuantity13);
		 localStorage.setItem("foodprice13",passFoodPirce13);
		}

		if(AddWors.checked==true && QuantityWors >= 1)
		{
         passFoodName14=document.getElementById("FoodName14").innerHTML = "Boerewors";
		 passTotalPrice14=document.getElementById("TotalPrice14").innerHTML =" "+"R"+(QuantityWors*(15)).toFixed(2);
		 passQuantity14=document.getElementById("NumItem14").innerHTML =QuantityWors;
		 passFoodPirce14=document.getElementById("foodprice14").innerHTML = " R15,00 ";

		 localStorage.setItem("FoodName14",passFoodName14);
		 localStorage.setItem("TotalPrice14",passTotalPrice14);
		 localStorage.setItem("NumItem14",passQuantity14);
		 localStorage.setItem("foodprice14",passFoodPirce14);
		}
		else if(AddWors.checked==false && QuantityWors < 1)
		{
         passFoodName14= document.getElementById("FoodName14").innerHTML = "";
         passTotalPrice14=document.getElementById("TotalPrice14").innerHTML =" ";
		 passQuantity14=document.getElementById("NumItem14").innerHTML ="";
		 passFoodPirce14=document.getElementById("foodprice14").innerHTML = "";

		 localStorage.setItem("FoodName14",passFoodName14);
		 localStorage.setItem("TotalPrice14",passTotalPrice14);
		 localStorage.setItem("NumItem14",passQuantity14);
		 localStorage.setItem("foodprice14",passFoodPirce14);
		}

		if(AddFriedChips.checked==true && QuantityFriedChips >= 1)
		{
         passFoodName15=document.getElementById("FoodName15").innerHTML = "Fried Chips";
		 passTotalPrice15=document.getElementById("TotalPrice15").innerHTML =" "+"R"+(QuantityFriedChips*(15)).toFixed(2);
		 passQuantity15=document.getElementById("NumItem15").innerHTML =QuantityFriedChips;
		 passFoodPirce15=document.getElementById("foodprice15").innerHTML = " R15,00 ";

		 localStorage.setItem("FoodName15",passFoodName15);
		 localStorage.setItem("TotalPrice15",passTotalPrice15);
		 localStorage.setItem("NumItem15",passQuantity15);
		 localStorage.setItem("foodprice15",passFoodPirce15);
		}
		else if(AddFriedChips.checked==false && QuantityFriedChips < 1)
		{
         passFoodName15= document.getElementById("FoodName15").innerHTML = "";
         passTotalPrice15=document.getElementById("TotalPrice15").innerHTML =" ";
		 passQuantity15=document.getElementById("NumItem15").innerHTML ="";
		 passFoodPirce15=document.getElementById("foodprice15").innerHTML = "";

		 localStorage.setItem("FoodName15",passFoodName15);
		 localStorage.setItem("TotalPrice15",passTotalPrice15);
		 localStorage.setItem("NumItem15",passQuantity15);
		 localStorage.setItem("foodprice15",passFoodPirce15);
		}

		if(AddPizza.checked==true && QuantityPizza >= 1)
		{
         passFoodName16=document.getElementById("FoodName16").innerHTML = "BBQ Medium Pizza";
		 passTotalPrice16=document.getElementById("TotalPrice16").innerHTML =" "+"R"+(QuantityPizza*(70)).toFixed(2);
		 passQuantity16=document.getElementById("NumItem16").innerHTML =QuantityPizza;
		 passFoodPirce16=document.getElementById("foodprice16").innerHTML = " R70,00 ";

		 localStorage.setItem("FoodName16",passFoodName16);
		 localStorage.setItem("TotalPrice16",passTotalPrice16);
		 localStorage.setItem("NumItem16",passQuantity16);
		 localStorage.setItem("foodprice16",passFoodPirce16);
		}
		else if(AddPizza.checked==false && QuantityPizza < 1)
		{
         passFoodName16= document.getElementById("FoodName16").innerHTML = "";
         passTotalPrice16=document.getElementById("TotalPrice16").innerHTML =" ";
		 passQuantity16=document.getElementById("NumItem16").innerHTML ="";
		 passFoodPirce16=document.getElementById("foodprice16").innerHTML = "";

		 localStorage.setItem("FoodName16",passFoodName16);
		 localStorage.setItem("TotalPrice16",passTotalPrice16);
		 localStorage.setItem("NumItem16",passQuantity16);
		 localStorage.setItem("foodprice16",passFoodPirce16);
		}

		if(AddSalad.checked==true && QuantitySalad >= 1)
		{
         passFoodName17=document.getElementById("FoodName17").innerHTML = "MIxed Vegetable Salad";
		 passTotalPrice17=document.getElementById("TotalPrice17").innerHTML =" "+"R"+(QuantitySalad*(30)).toFixed(2);
		 passQuantity17=document.getElementById("NumItem17").innerHTML =QuantitySalad;
		 passFoodPirce17=document.getElementById("foodprice17").innerHTML = " R30,00 ";

		 localStorage.setItem("FoodName17",passFoodName17);
		 localStorage.setItem("TotalPrice17",passTotalPrice17);
		 localStorage.setItem("NumItem17",passQuantity17);
		 localStorage.setItem("foodprice17",passFoodPirce17);
		}
		else if(AddSalad.checked==false && QuantitySalad < 1)
		{
         passFoodName17= document.getElementById("FoodName17").innerHTML = "";
         passTotalPrice17=document.getElementById("TotalPrice17").innerHTML =" ";
		 passQuantity17=document.getElementById("NumItem17").innerHTML ="";
		 passFoodPirce17=document.getElementById("foodprice17").innerHTML = "";

		 localStorage.setItem("FoodName17",passFoodName17);
		 localStorage.setItem("TotalPrice17",passTotalPrice17);
		 localStorage.setItem("NumItem17",passQuantity17);
		 localStorage.setItem("foodprice17",passFoodPirce17);
		}

		if(AddMixedavocado.checked==true && QuantityMixedavocado >= 1)
		{
         passFoodName18=document.getElementById("FoodName18").innerHTML = "MIxed Avocado";
		 passTotalPrice18=document.getElementById("TotalPrice18").innerHTML =" "+"R"+(QuantityMixedavocado*(10)).toFixed(2);
		 passQuantity18=document.getElementById("NumItem18").innerHTML =QuantityMixedavocado;
		 passFoodPirce18=document.getElementById("foodprice18").innerHTML = " R10,00 ";

		 localStorage.setItem("FoodName18",passFoodName18);
		 localStorage.setItem("TotalPrice18",passTotalPrice18);
		 localStorage.setItem("NumItem18",passQuantity18);
		 localStorage.setItem("foodprice18",passFoodPirce18);
		}
		else if(AddMixedavocado.checked==false && QuantityMixedavocado < 1)
		{
         passFoodName18= document.getElementById("FoodName18").innerHTML = "";
         passTotalPrice18=document.getElementById("TotalPrice18").innerHTML =" ";
		 passQuantity18=document.getElementById("NumItem18").innerHTML ="";
		 passFoodPirce18=document.getElementById("foodprice18").innerHTML = "";

		 localStorage.setItem("FoodName18",passFoodName18);
		 localStorage.setItem("TotalPrice18",passTotalPrice18);
		 localStorage.setItem("NumItem18",passQuantity18);
		 localStorage.setItem("foodprice18",passFoodPirce18);
		}

		if(AddFruitJuice.checked==true && QuantityFruitJuice >= 1)
		{
         passFoodName19=document.getElementById("FoodName19").innerHTML = "Mixed Fruit Juice";
		 passTotalPrice19=document.getElementById("TotalPrice19").innerHTML =" "+"R"+(QuantityFruitJuice*(12)).toFixed(2);
		 passQuantity19=document.getElementById("NumItem19").innerHTML =QuantityFruitJuice;
		 passFoodPirce19=document.getElementById("foodprice19").innerHTML = " R12,00 ";


		}
		else if(AddFruitJuice.checked==false && QuantityFruitJuice < 1)
		{
         passFoodName19= document.getElementById("FoodName19").innerHTML = "";
         passTotalPrice19=document.getElementById("TotalPrice19").innerHTML =" ";
		 passQuantity19=document.getElementById("NumItem19").innerHTML ="";
		 passFoodPirce19=document.getElementById("foodprice19").innerHTML = "";

		 localStorage.setItem("FoodName19",passFoodName19);
		 localStorage.setItem("TotalPrice19",passTotalPrice19);
		 localStorage.setItem("NumItem19",passQuantity19);
		 localStorage.setItem("foodprice19",passFoodPirce19);
		}

		if(AddOrangeJuice.checked==true && QuantityOrangeJuice >= 1)
		{
         passFoodName20=document.getElementById("FoodName20").innerHTML = "Orange Juice";
		 passTotalPrice20=document.getElementById("TotalPrice20").innerHTML =" "+"R"+(QuantityOrangeJuice*(11)).toFixed(2);
		 passQuantity20=document.getElementById("NumItem20").innerHTML =QuantityOrangeJuice;
		 passFoodPirce20=document.getElementById("foodprice20").innerHTML = " R11,00 ";

         localStorage.setItem("FoodName20",passFoodName20);
		 localStorage.setItem("TotalPrice20",passTotalPrice20);
		 localStorage.setItem("NumItem20",passQuantity20);
		 localStorage.setItem("foodprice20",passFoodPirce20);
		}
		else if(AddOrangeJuice.checked==false && QuantityOrangeJuice < 1)
		{
         passFoodName20= document.getElementById("FoodName20").innerHTML = "";
         passTotalPrice20=document.getElementById("TotalPrice20").innerHTML =" ";
		 passQuantity20=document.getElementById("NumItem20").innerHTML ="";
		 passFoodPirce20=document.getElementById("foodprice20").innerHTML = "";

		 localStorage.setItem("FoodName20",passFoodName20);
		 localStorage.setItem("TotalPrice20",passTotalPrice20);
		 localStorage.setItem("NumItem20",passQuantity20);
		 localStorage.setItem("foodprice20",passFoodPirce20);
		}

		if(AddLemonWater.checked==true && QuantityLemonWater >= 1)
		{
         passFoodName21=document.getElementById("FoodName21").innerHTML = "Lemon Water";
		 passTotalPrice21=document.getElementById("TotalPrice21").innerHTML =" "+"R"+(QuantityLemonWater*(8)).toFixed(2);
		 passQuantity21=document.getElementById("NumItem21").innerHTML =QuantityLemonWater;
		 passFoodPirce21=document.getElementById("foodprice21").innerHTML = " R8,00 ";

         localStorage.setItem("FoodName21",passFoodName21);
		 localStorage.setItem("TotalPrice21",passTotalPrice21);
		 localStorage.setItem("NumItem21",passQuantity21);
		 localStorage.setItem("foodprice21",passFoodPirce21);
		}
		else if(AddLemonWater.checked==false && QuantityLemonWater < 1)
		{
         passFoodName21= document.getElementById("FoodName21").innerHTML = "";
         passTotalPrice21=document.getElementById("TotalPrice21").innerHTML =" ";
		 passQuantity21=document.getElementById("NumItem21").innerHTML ="";
		 passFoodPirce21=document.getElementById("foodprice11").innerHTML = "";

		 localStorage.setItem("FoodName21",passFoodName21);
		 localStorage.setItem("TotalPrice21",passTotalPrice21);
		 localStorage.setItem("NumItem21",passQuantity21);
		 localStorage.setItem("foodprice21",passFoodPirce21);
		}

		if(AddStillWater.checked==true && QuantityStillWater >= 1)
		{
         passFoodName22=document.getElementById("FoodName22").innerHTML = "Still Water";
		 passTotalPrice22=document.getElementById("TotalPrice22").innerHTML =" "+"R"+(QuantityStillWater*(5)).toFixed(2);
		 passQuantity22=document.getElementById("NumItem22").innerHTML =QuantityStillWater;
		 passFoodPirce22=document.getElementById("foodprice22").innerHTML = " R5,00 ";

		 localStorage.setItem("FoodName22",passFoodName22);
		 localStorage.setItem("TotalPrice22",passTotalPrice22);
		 localStorage.setItem("NumItem22",passQuantity22);
		 localStorage.setItem("foodprice22",passFoodPirce22);
		}
		else if(AddStillWater.checked==false && QuantityStillWater < 1)
		{
         passFoodName22= document.getElementById("FoodName22").innerHTML = "";
         passTotalPrice22=document.getElementById("TotalPrice22").innerHTML =" ";
		 passQuantity22=document.getElementById("NumItem22").innerHTML ="";
		 passFoodPirce22=document.getElementById("foodprice22").innerHTML = "";

		 localStorage.setItem("FoodName22",passFoodName22);
		 localStorage.setItem("TotalPrice22",passTotalPrice22);
		 localStorage.setItem("NumItem22",passQuantity22);
		 localStorage.setItem("foodprice22",passFoodPirce22);
		}

		// TOTALS CALCULATIONS
			var TotalCartCost=(QuantityCheeseBurger*(50)+QuantityCrispyChickenBurger*(40)+QuantityBeefEggsBurger*(40)+QuantitybatteredFish*(60)+QuantitychickenNuggets*(40)+QuantitygrilledCheeseSandwich*(35)+QuantityhotSpicyWings*(50)+QuantitybeefCurry*(30)+QuantityMeatballSub*(40)+QuantityFriedTuna*(45)+QuantityTexasToast*(10)+QuantityCheeseVetkoek*(10)+QuantityJuicySteak*(60)+QuantityChickenStew*(35)+QuantityWors*(15)+QuantityFriedChips*(15)+QuantityPizza*(70)+QuantitySalad*(30)+QuantityMixedavocado*(10)+QuantityFruitJuice*(12)+QuantityOrangeJuice*(11)+QuantityLemonWater*(8)+QuantityStillWater*(5));
		 TotalCost=document.getElementById("TotalCartCost").innerHTML="R"+TotalCartCost.toFixed(2);;
		 localStorage.setItem("TotalCartCost",TotalCost);

		 var TotalCartQuantity=(QuantityCheeseBurger+QuantityCrispyChickenBurger+QuantityBeefEggsBurger+QuantitybatteredFish+QuantitychickenNuggets+QuantitygrilledCheeseSandwich+QuantityhotSpicyWings+QuantitybeefCurry+QuantityMeatballSub+QuantityFriedTuna+QuantityTexasToast+QuantityCheeseVetkoek+QuantityJuicySteak+QuantityChickenStew+QuantityWors+QuantityFriedChips+QuantityPizza+QuantitySalad+QuantityMixedavocado+QuantityFruitJuice+QuantityOrangeJuice+QuantityLemonWater+QuantityStillWater);
		 TotalQuantity=document.getElementById("TotalCartQuantity").innerHTML=TotalCartQuantity;
		 localStorage.setItem("TotalCartQuantity",TotalQuantity);
		 var today = new Date();

		var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

		DATE=document.getElementById("DATE").innerHTML=date;
		TIME=document.getElementById("TIME").innerHTML=time;

		localStorage.setItem("DATE",DATE);
		localStorage.setItem("TIME",TIME);

		var orderid="#"+today.getFullYear()+today.getSeconds()+(today.getMonth()+1)+''+today.getHours()+''+TotalCartQuantity;

		OrderID = document.getElementById("OrderID").innerHTML=orderid;
		localStorage.setItem("OrderID",OrderID);
		 return (TotalCartQuantity);
	}



	function add()
	{
	 var AddCheeseBurger =document.getElementById("ckbAddCheeseBurger");
	 if(AddCheeseBurger.checked==true)
	 {
	 var p = AddToCart();
	 }
	 else{
	 var p =AddToCart();

	 }

	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add1()
	{
	 var AddCrispyChickenHoneyBurger =document.getElementById("ckbAddCrispyChickenHoneyBurger");
	 if (AddCrispyChickenHoneyBurger.checked==true)
	 {
	 var p = AddToCart();
	 }
	 else
	 {
	 var p = 0;
	 }
	  document.getElementById("AddQuaCart").innerHTML=p;
	}

function add2()
	{
	 var AddBeefEggsBurger = document.getElementById("ckbAddBeefEggsBurger");
	 if (AddBeefEggsBurger.checked==true)
	 {
	 var p = AddToCart();
	 }
	 else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}



function add3()
	{
	 var AddbatteredFish = document.getElementById("ckbAddbatteredFish");
	 if (AddbatteredFish.checked==true)
	 {
	 var p = AddToCart();
	 }
	 else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add4()
	{
	 var AddchickenNuggets =document.getElementById("ckbAddchickenNuggets");
	 if (AddchickenNuggets.checked==true)
	 {
	 var p = AddToCart()
	 }
	 else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add5()
	{
	 var AddgrilledCheeseSandwich =document.getElementById("ckbAddgrilledCheeseSandwich");
	 if (AddgrilledCheeseSandwich.checked==true)
	 {
	 var p = AddToCart()
	 }
	  else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add6()
	{
	 var AddhotSpicyWings =document.getElementById("ckbAddhotSpicyWings");
	 if (AddhotSpicyWings.checked==true)
	 {
	 var p = AddToCart()
	 }
	 else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add7()
	{
	 var AddBeefCurry =document.getElementById("ckbAddBeefCurry");
	 if (AddBeefCurry.checked==true)
	 {
	 var p = AddToCart()
	 }
	 else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add8()
	{
	 var AddMeatballSub =document.getElementById("ckbAddMeatballSub");
	 if (AddMeatballSub.checked==true)
	 {
	 var p = AddToCart()
	 }
	 else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add9()
	{
	 var AddFriedTuna =document.getElementById("ckbAddFriedTuna");
	 if (AddFriedTuna.checked==true)
	 {
	 var p = AddToCart()
	 }
	 else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add10()
	{
	 var AddTexasToast =document.getElementById("ckbAddTexasToast");
	 if (AddTexasToast.checked==true)
	 {
	 var p = AddToCart()
	 }
	 else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add11()
	{
	 var AddCheeseVetkoek =document.getElementById("ckbAddCheeseVetkoek");
	 if (AddCheeseVetkoek.checked==true)
	 {
	 var p = AddToCart()
	 }
	 else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add12()
	{
	 var AddJuicySteak =document.getElementById("ckbAddJuicySteak");
	 if (AddJuicySteak.checked==true)
	 {
	 var p = AddToCart()
	 }
	 else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add13()
	{
	 var AddChickenStew =document.getElementById("ckbAddChickenStew");
	 if (AddChickenStew.checked==true)
	 {
	 var p = AddToCart()
	 }
	 else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add14()
	{
	 var AddWors =document.getElementById("ckbAddWors");
	 if (AddWors.checked==true)
	 {
	 var p = AddToCart()
	 }
	 else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add15()
	{
	 var AddFriedChips =document.getElementById("ckbAddFriedChips");
	 if (AddFriedChips.checked==true)
	 {
	 var p = AddToCart()
	 }
	 else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}


	function add16()
	{
	 var AddPizza =document.getElementById("ckbAddPizza");
	 if (AddPizza.checked==true)
	 {
	 var p = AddToCart()
	 }
	 else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add17()
	{
	 var AddSalad =document.getElementById("ckbAddSalad");
	 if (AddSalad.checked==true)
	 {
	 var p = AddToCart()
	 }
	 else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add18()
	{
	 var AddMixedavocado =document.getElementById("ckbAddMixedavocado");
	 if (AddMixedavocado.checked==true)
	 {
	 var p = AddToCart()
	 }
	 else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add19()
	{
	 var AddFruitJuice =document.getElementById("ckbAddFruitJuice");
	 if (AddFruitJuice.checked==true)
	 {
	 var p = AddToCart()
	 }
	 else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add20()
	{
	 var AddOrangeJuice =document.getElementById("ckbAddOrangeJuice");
	 if (AddOrangeJuice.checked==true)
	 {
	 var p = AddToCart()
	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add21()
	{
	 var AddLemonWater=document.getElementById("ckbAddLemonWater");
	 if (AddLemonWater.checked==true)
	 {
	 var p = AddToCart()
	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}

	function add22()
	{
	 var AddStillWater =document.getElementById("ckbAddStillWater");
	 if (AddStillWater.checked==true)
	 {
	 var p = AddToCart()
	 }
	 else{
	 var p = AddToCart();

	 }
	document.getElementById("AddQuaCart").innerHTML=p;
	}
