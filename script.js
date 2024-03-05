const names = [
  "Betty YoMana",
  "Fred Bitterton",
  "Pauly Scores",
  "Sally Sells",
  "Sue Vaneer",
  "Tommy Gunn",
];
const jobs = [
  "Baker",
  "Butcher",
  "Candlestick Maker",
  "Dancer",
  "Engineer",
  "Farmer",
];
const prices = [10, 20, 30, 40, 50, 60];
const freelancers = [
  { name: "Crappy Crapperton", job: "Carpenter", price: 100 },
  { name: "Dapper Dapperton", job: "Dancer", price: 200 },
  { name: "Eager Eagerton", job: "Engineer", price: 300 },
];

//set max interval
const maxFreelancers = 10;

// make an interval
const addFreelancerIntervalID = setInterval(randomFreelancer, 3000);

// render initial
render();

// render function
function render() {
  const persons = document.querySelector("#row");
  const personElements = freelancers.map((freelancer) => {
    const element = document.createElement("tr");
    element.innerHTML = `<td>${freelancer.name}</td> <td>${freelancer.job}</td> <td>${freelancer.price}</td>`;

    return element;
  });
  persons.replaceChildren(...personElements);
  //display average price in #avg
  const avg = document.querySelector("#avg");
  const average =
    freelancers.reduce((acc, freelancer) => acc + freelancer.price, 0) /
    freelancers.length;
  avg.innerHTML = `<p>The average starting price is: ${average}</p>`;
  //   console.log(average);
}

//random freelancer
function randomFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomJob = jobs[Math.floor(Math.random() * jobs.length)];
  const randomPrice = prices[Math.floor(Math.random() * prices.length)];
  freelancers.push({ name: randomName, job: randomJob, price: randomPrice });
  render();
  // stop adding after you hit this number of persons in the array
  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalID);
  }
  //after each new randomly added freelancer, display average price in #avg
}

// now shove in the average, thanks to me
// const avg = document.querySelector("#avg");
// const avgElements = freelancers.map((freelancer) => {
//   const element = document.createElement("p");
//   element.innerHTML = `<p>${freelancer.price}</p>`;
//   return element;
// });
// avg.replaceChildren(...avgElements());
