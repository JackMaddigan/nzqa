function generateResourceLink() {
  var x = "https://www.nzqa.govt.nz/nqfdocs/ncea-resource/";
  var y = "/";
  var z = "-";
  var eORa = "";

  var answerOrExam = document.getElementById("answerOrExam").value;
  var year = document.getElementById("year").value;
  var theNumber = document.getElementById("theNumber").value;

  if (answerOrExam === "exam") {
    answerOrExam = "exams";
    eORa = "exm";
  } else if (answerOrExam === "answer") {
    answerOrExam = "schedules";
    eORa = "ass";
  } else if (answerOrExam === "formula") {
    answerOrExam = "exams";
    eORa = "res";
  }

  var result =
    x + answerOrExam + y + year + y + theNumber + z + eORa + z + year + ".pdf";
  window.open(result, "_blank");
}

function autoComplete() {
  var linkp1 = "https://www2.nzqa.govt.nz/search/?current=n_";
  var linkp2 =
    "_n&q=9&size=n_15_n&filters%5B0%5D%5Bfield%5D=resource_types&filters%5B0%5D%5Bvalues%5D%5B0%5D=STD&filters%5B0%5D%5Btype%5D=all";
}

const achievementStandards = {
  91170:
    "Demonstrate understanding of waves Sciences / Science / Physics Level 2Status: Available - Registered",
  91171:
    "Demonstrate understanding of mechanics Sciences / Science / Physics Level 2Status: Available - Registered",
  91187:
    "Carry out a practical Earth and Space Science investigation Sciences / Science / Earth and Space Science Level 2Status: Available - Registered",
  91159:
    "Demonstrate understanding of gene expression Sciences / Science / Biology Level 2Status: Available - Registered",
  91172:
    "Demonstrate understanding of atomic and nuclear physics Sciences / Science / Physics Level 2Status: Available - Registered",
  91160:
    "Investigate biological material at the microscopic level Sciences / Science / Biology Level 2Status: Available - Registered",
  91173:
    "Demonstrate understanding of electricity and electromagnetism Sciences / Science / Physics Level 2Status: Available - Registered",
  91167:
    "Demonstrate understanding of oxidation reduction Sciences / Science / Chemistry Level 2Status: Available - Registered",
  91190:
    "Investigate how organisms survive in an extreme environment Sciences / Science / Earth and Space Science Level 2Status: Available - Registered",
  91154:
    "Analyse the biological validity of information presented to the public Sciences / Science / Biology Level 2Status: Available - Registered",
  91189:
    "Investigate geological processes in a New Zealand locality Sciences / Science / Earth and Space Science Level 2Status: Available - Registered",
  91156:
    "Demonstrate understanding of life processes at the cellular level Sciences / Science / Biology Level 2Status: Available - Registered",
  91289:
    "Carry out an extended practical agricultural or horticultural investigation Sciences / Science / Agricultural and Horticultural Science Level 2Status: Available - Registered",
  91188:
    "Examine an Earth and Space Science issue and the validity of the information communicated to the public Sciences / Science / Earth and Space Science Level 2Status: Available - Registered",
  91191:
    "Demonstrate understanding of the causes of extreme Earth events in New Zealand Sciences / Science / Earth and Space Science Level 2Status: Available - Registered",
  91165:
    "Demonstrate understanding of the properties of selected organic compounds Sciences / Science / Chemistry Level 2Status: Available - Registered",
  91155:
    "Demonstrate understanding of adaptation of plants or animals to their way of life Sciences / Science / Biology Level 2Status: Available - Registered",
  91164:
    "Demonstrate understanding of bonding structure properties and energy changes Sciences / Science / Chemistry Level 2Status: Available - Registered",
  90814:
    "Demonstrate understanding of aspects of sustainability in different contexts Sciences / Science / Environmental Sustainability Level 2Status: Available - Registered",
  90811:
    "Explain how human activity in a biophysical environment has consequences for a sustainable future Sciences / Science / Environmental Sustainability Level 2Status: Available - Registered",
  91296:
    "Produce a landscape plan Sciences / Science / Agricultural and Horticultural Science Level 2Status: Available - Registered",
  90810:
    "Undertake a personal action with reflection that contributes to a sustainable future Sciences / Science / Environmental Sustainability Level 2Status: Available - Registered",
  91166:
    "Demonstrate understanding of chemical reactivity Sciences / Science / Chemistry Level 2Status: Available - Registered",
  91169:
    "Demonstrate understanding of physics relevant to a selected context Sciences / Science / Physics Level 2Status: Available - Registered",
  91153:
    "Carry out a practical investigation in a biology context with supervision Sciences / Science / Biology Level 2Status: Available - Registered",
  91192:
    "Demonstrate understanding of stars and planetary systems Sciences / Science / Earth and Space Science Level 2Status: Available - Registered",
  91157:
    "Demonstrate understanding of genetic variation and change Sciences / Science / Biology Level 2Status: Available - Registered",
  90813:
    "Demonstrate understanding of how different personal values have implications for a sustainable future Sciences / Science / Environmental Sustainability Level 2Status: Available - Registered",
  91158:
    "Investigate a pattern in an ecological community with supervision Sciences / Science / Biology Level 2Status: Available - Registered",
  91293:
    "Demonstrate understanding of livestock reproductive techniques in commercial production in New Zealand Sciences / Science / Agricultural and Horticultural Science Level 2Status: Available - Registered",
};

var searchBox = document.getElementById("theNumber");
const resultsContainer = document.getElementById("results");
console.log(searchBox);
searchBox.addEventListener("input", handleInput);

function handleInput() {
  const searchTerm = searchBox.value.toLowerCase();
  const matchingStandards = Object.entries(achievementStandards).filter(
    ([number, description]) => description.toLowerCase().includes(searchTerm)
  );

  displayResults(matchingStandards);
}

function displayResults(results) {
  resultsContainer.innerHTML = "";

  if (results.length > 0) {
    results.forEach(([number, description]) => {
      const resultItem = document.createElement("div");
      resultItem.classList.add("result-item");
      resultItem.textContent = `${number}: ${description}`;
      resultItem.addEventListener("click", () => {
        searchBox.value = number; // Set the search box value to the selected number
        resultsContainer.style.display = "none"; // Hide the results container
      });
      resultsContainer.appendChild(resultItem);
    });

    resultsContainer.style.display = "block";
  } else {
    resultsContainer.style.display = "none";
  }
}
