let jobInterviews = [];
let jobRejected = [];
let currentStatus = "all";

let total = document.getElementById("total");
let availableJobs = document.getElementById("remainingJobs");
let filteredAvailableJobsInterview = document.getElementById(
  "filteredRemainingJobs",
);
let filteredAvailableJobsReject = document.getElementById(
  "filteredRemainingJobsReject",
);
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const ofAll = document.getElementById("ofAll");
const ofInterview = document.getElementById("ofInterview");
const ofReject = document.getElementById("ofReject");
const filterAllBtn = document.getElementById("filterAll");
const filterInterviewBtn = document.getElementById("filterInterview");
const filterRejectedBtn = document.getElementById("filterRejected");
// const deleteBtn = document.querySelector(".dltBtn");

const main = document.querySelector("main");
const allJobCards = document.getElementById("allJobCards");
const filteredJobsSection = document.getElementById("hiddenFilterSection");
const filteredJobs = document.getElementById("filteredJobs");

function calculateCount() {
  total.innerText = allJobCards.children.length;
  availableJobs.innerText = allJobCards.children.length;
  interviewCount.innerText = jobInterviews.length;
  filteredAvailableJobsInterview.innerText = jobInterviews.length;
  rejectedCount.innerText = jobRejected.length;
  filteredAvailableJobsReject.innerText = jobRejected.length;
}

calculateCount();

allJobCards.addEventListener("click", function (event) {
  if (event.target.classList.contains("dltBtn")) {
    const card = event.target.closest(".card");
    card.remove();
    calculateCount();
  }
});

function toggleFilterBtn(id) {
  filterAllBtn.classList.remove("btn-primary");
  filterInterviewBtn.classList.remove("btn-primary");
  filterRejectedBtn.classList.remove("btn-primary");

  filterAllBtn.classList.add("text-gray-500");
  filterInterviewBtn.classList.add("text-gray-500");
  filterRejectedBtn.classList.add("text-gray-500");

  const selectedBtn = document.getElementById(id);
  currentStatus = id;

  selectedBtn.classList.remove("text-gray-500");
  selectedBtn.classList.add("btn-primary");

  if (id == "filterInterview") {
    allJobCards.classList.add("hidden");
    filteredJobsSection.classList.remove("hidden");
    ofAll.classList.add("hidden");
    ofReject.classList.add("hidden");
    ofInterview.classList.remove("hidden");
    renderFilteredCards(jobInterviews);
    handleNoJobCard();
  } else if (id == "filterAll") {
    filteredJobsSection.classList.add("hidden");
    allJobCards.classList.remove("hidden");
    ofInterview.classList.add("hidden");
    ofAll.classList.remove("hidden");
  } else if (id == "filterRejected") {
    allJobCards.classList.add("hidden");
    filteredJobsSection.classList.remove("hidden");
    ofAll.classList.add("hidden");
    ofInterview.classList.add("hidden");
    ofReject.classList.remove("hidden");
    renderFilteredCards(jobRejected);
    handleNoJobCard();
  }
}

main.addEventListener("click", function (event) {
  if (event.target.classList.contains("interviewBtn")) {
    const card = event.target.closest(".card");
    const companyName = card.querySelector(".companyName").innerText;
    const jobTitle = card.querySelector(".jobTitle").innerText;
    const jobLocation = card.querySelector(".jobLocation").innerText;
    const jobType = card.querySelector(".jobType").innerText;
    const salaryRanges = card.querySelector(".salaryRanges").innerText;
    const jobStatus = card.querySelector(".jobStatus").innerText;
    const jobDescriptionText = card.querySelector(
      ".jobDescriptionText",
    ).innerText;

    card.querySelector(".jobStatus").innerText = "INTERVIEW";

    const cardData = {
      companyName,
      jobTitle,
      jobLocation,
      jobType,
      salaryRanges,
      jobStatus: "INTERVIEW",
      jobDescriptionText,
    };

    const jobCardExist = jobInterviews.find(
      (item) => item.companyName == cardData.companyName,
    );

    if (!jobCardExist) {
      jobInterviews.push(cardData);
    }

    jobRejected = jobRejected.filter(
      (item) => item.companyName != cardData.companyName,
    );

    if (currentStatus == "filterRejected") {
      renderFilteredCards(jobRejected);
      handleNoJobCard()
    }

    calculateCount();
  } else if (event.target.classList.contains("rejectedBtn")) {
    const card = event.target.closest(".card");
    const companyName = card.querySelector(".companyName").innerText;
    const jobTitle = card.querySelector(".jobTitle").innerText;
    const jobLocation = card.querySelector(".jobLocation").innerText;
    const jobType = card.querySelector(".jobType").innerText;
    const salaryRanges = card.querySelector(".salaryRanges").innerText;
    const jobStatus = card.querySelector(".jobStatus").innerText;
    const jobDescriptionText = card.querySelector(
      ".jobDescriptionText",
    ).innerText;

    card.querySelector(".jobStatus").innerText = "REJECTED";

    const cardData = {
      companyName,
      jobTitle,
      jobLocation,
      jobType,
      salaryRanges,
      jobStatus: "REJECTED",
      jobDescriptionText,
    };

    const jobCardExist = jobRejected.find(
      (item) => item.companyName == cardData.companyName,
    );

    if (!jobCardExist) {
      jobRejected.push(cardData);
    }

    jobInterviews = jobInterviews.filter(
      (item) => item.companyName != cardData.companyName,
    );

    if (currentStatus == "filterInterview") {
      renderFilteredCards(jobInterviews);
      handleNoJobCard()
    }

    calculateCount();
  }
});

function renderFilteredCards(cardArray) {
  filteredJobs.innerHTML = "";
  for (let card of cardArray) {
    let div = document.createElement("div");
    div.className = "card p-6 border border-gray-100 shadow";
    div.innerHTML = `
        
          <div class="flex flex-col md:flex-row justify-between gap-2">
            <div>
              <h2 class="text-lg font-semibold companyName">${card.companyName}</h2>
              <p class="text-gray-500 jobTitle">${card.jobTitle}</p>
              <ul
                class="text-sm text-gray-500 flex flex-col md:flex-row md:gap-8 my-5"
              >
                <li class="list-disc md:list-none jobLocation">${card.jobLocation}</li>
                <li class="list-disc jobType">${card.jobType}</li>
                <li class="list-disc salaryRanges">${card.salaryRanges}</li>
              </ul>
              <div class="">
                <button class="btn btn-primary btn-soft jobStatus">${card.jobStatus}</button>
              </div>
              <p class="text-sm mt-2 mb-5 jobDescriptionText">
                ${card.jobDescriptionText}
              </p>
              <div class="space-x-2">
                <button class="btn btn-success btn-outline interviewBtn">INTERVIEW</button>
                <button class="btn btn-error btn-outline rejectedBtn">REJECTED</button>
              </div>
            </div>
            <div>
              <button class="btn btn-circle dltBtn">
                <img class="dltBtn" src="./assets/Trash.svg" alt="" />
              </button>
            </div>
          </div>

        `;
    filteredJobs.append(div);
  }
}

function handleNoJobCard() {
  const noJobCard = document.getElementById("noJobCard");
  const emptyInterview =
    currentStatus === "filterInterview" && jobInterviews.length === 0;
  const emptyReject =
    currentStatus === "filterRejected" && jobRejected.length === 0;

  if (emptyInterview || emptyReject) {
    noJobCard.classList.remove("hidden");
  } else {
    noJobCard.classList.add("hidden");
  }
}
