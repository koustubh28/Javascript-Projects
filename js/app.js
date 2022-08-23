//Declaring variable as end date
const endDate = "24 August 2022 07:00 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();

  // diff value in seconds
  const diff = (end - now) / 1000;

  // should not be negative
  if (diff < 0) return;

  //place on proper boxes //

  //For Days
  inputs[0].value = Math.floor(diff / 3600 / 24);
  //For Hours
  inputs[1].value = Math.floor((diff / 3600) % 24);
  //For Minutes
  inputs[2].value = Math.floor((diff / 60) % 60);
  //For Seconds
  inputs[3].value = Math.floor(diff % 60);
};

//calling function
clock();

//update time 1 seconds each.
setInterval(() => {
  clock();
}, 1000);
