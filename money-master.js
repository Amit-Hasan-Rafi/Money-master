document.getElementById("expanssBtn").addEventListener('click',function(){

    const foodInputField = document.getElementById("foodInputField")
    const foodField = parseInt(foodInputField.value );

    const rentInputField = document.getElementById("rentInputField")
    const rentField = parseInt(rentInputField.value) ;

    const dressInputField = document.getElementById("dressInputField")
    const dressField = parseInt(dressInputField.value) ;

    const totalcost =foodField + rentField + dressField;
    
    const totalExpenssDisplay = document.getElementById('totalExpanssDisplay');
    totalExpenssDisplay.innerText = totalcost;
  
    const banlanceDisplay = document.getElementById("banlanceDisplay");
    const incomeField = document.getElementById('incomeInputField');

    const previousBalance = incomeField.value;
    const newBalance = previousBalance - totalcost;
    banlanceDisplay.innerText = newBalance;
})