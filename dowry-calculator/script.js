function calculatePrice() {
    let basePrice = 100;
  
    let edu = parseFloat(document.getElementById("education").value);
    let net = parseFloat(document.getElementById("netWorth").value);
    let caste = parseFloat(document.getElementById("caste").value);
  
    let skills = document.querySelectorAll(".skills:checked");
    let skillBonus = 0;
    skills.forEach(skill => {
      skillBonus += parseFloat(skill.value);
    });
  
    let age = document.querySelector('input[name="age"]:checked');
    let ageCoef = age ? parseFloat(age.value) : 1;
  
    let repCoef = 1;
    document.querySelectorAll(".rep:checked").forEach(rep => {
      repCoef *= parseFloat(rep.value);
    });
  
    let repFlat = 0;
    document.querySelectorAll(".repFlat:checked").forEach(rep => {
      repFlat += parseFloat(rep.value);
    });
  
    let finalPrice = (basePrice * edu * net * ageCoef * repCoef) + caste + skillBonus + repFlat;
  
    document.getElementById("result").textContent = `Final Price: $${finalPrice.toFixed(2)}`;
    document.getElementById("result").style.color = finalPrice < 100 ? "red" : "green";
  }
  