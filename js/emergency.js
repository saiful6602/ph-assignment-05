let numberHearts = 0;
  const heartNumber = document.getElementById("heart-number");
  const hearts = document.querySelectorAll(".heart-count");

  for (let heart of hearts) {
    heart.addEventListener("click", function() {
      numberHearts++;
      heartNumber.textContent = numberHearts;
    });
  }

 

  let coins = 100;
  const coinNumber = document.getElementById("coin-number");
  const calls = document.querySelectorAll(".call-count");
  const allHistory = document.getElementById("all-history")
  const clear = document.getElementById("clear-all-button")
   const history = [];

  for (let call of calls) {
    call.addEventListener("click", function() {
        const service = call.closest(".card");
        const serviceName = service.querySelector(".service-name").textContent;

        const serviceNumber = service.querySelector(".service-number").textContent;

      if (coins < 20) {
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
        return;
      }
      coins -= 20;
      coinNumber.textContent = coins;

      const everyCall ={
        serviceName: serviceName,
        serviceNumber: serviceNumber,
        time: new Date().toLocaleString()
      };
      history.push(everyCall);

    showHistory();

    alert(`কল দেওয়া হচ্ছে ${serviceName} এর জন্য ${serviceNumber} এ এবং এজন্য আপনার ২০ টি কয়েন কাটা হবে।`);
    });

}


function showHistory(){
    allHistory.innerHTML = "";
    for(let item of history){
        const div = document.createElement("div");
        div.className = "history";
    div.innerHTML =
        `<div>
            <h1 class="hind-madurai-font history-type">${item.serviceName}</h1>
            <p class="roboto-font card-text date-and-number">${item.serviceNumber}</p>
        </div>

            <h1 class="roboto-font card-text date-and-number">${item.time}</h1>
        </div>
        `;
        allHistory.appendChild(div);
    }
}

function allClear(){
    allHistory.innerHTML = "";
    history.length = 0;
}
clear.addEventListener("click", allClear);


let numberCopies = 0;
  const copyNumber = document.getElementById("copy-number");
  const copies = document.querySelectorAll(".copy-count");
  const copiedNumbers = document.querySelectorAll("copied-numbers");


  for (let copy of copies) {

    copy.addEventListener("click", function() {
      const service = copy.closest(".card");
      const serviceNumber = service.querySelector(".service-number").textContent;

      numberCopies++;
      copyNumber.textContent = numberCopies;

       navigator.clipboard.writeText(serviceNumber);

      alert(`Hotline Number ${serviceNumber} is copied`);
    });
  }
