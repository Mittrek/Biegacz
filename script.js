const bmiForm = document.getElementById("bmiForm");
const bmiResult = document.getElementById("bmiResult");

bmiForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    const bmi = weight / ((height / 100) * (height / 100)); // BMI calculation
    const bmiCategory = getBmiCategory(bmi);

    // Display BMI result
    bmiResult.innerHTML = `<p>Twoje BMI wynosi: ${bmi.toFixed(2)}</p><p>${bmiCategory}</p>`;

    // Display corresponding image
    let imagePath;
    switch(bmiCategory) {
        case "Wygłodzenie":
        case "Wychudzenie":
            case "Niedowaga":
            imagePath = "images/chudy.jpg";
            break;
        
        case "Wartość prawidłowa":
            imagePath = "images/normal.jpg";
            break;
        case "Nadwaga":
            imagePath = "images/nadwaga.jpg";
            break;
        default:
            imagePath = "images/nadwaga.jpg";
    }
    bmiResult.innerHTML += `<img src="${imagePath}" alt="${bmiCategory}">`;
});

function getBmiCategory(bmi) {
    if (bmi < 16) return "Wygłodzenie";
    else if (bmi < 17) return "Wychudzenie";
    else if (bmi < 18.5) return "Niedowaga";
    else if (bmi < 25) return "Wartość prawidłowa";
    else if (bmi < 30) return "Nadwaga";
    else if (bmi < 35) return "I stopień otyłości";
    else if (bmi < 40) return "II stopień otyłości";
    else return "Otyłość skrajna";
}