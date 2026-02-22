let jobInterviews = [];
let jobRejected = [];
let currentStatus = 'all';

let total = document.getElementById("total");
let availableJobs = document.getElementById("remainingJobs");
let filteredAvailableJobsInterview = document.getElementById("filteredRemainingJobs");
let filteredAvailableJobsReject = document.getElementById("filteredRemainingJobsReject");
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

calculateCount()

allJobCards.addEventListener("click", function (event) {
    if (event.target.classList.contains("dltBtn")) {

        const card = event.target.closest(".card");
        card.remove();
        calculateCount()

    }

})

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
        ofReject.classList.add("hidden")
        ofInterview.classList.remove("hidden");
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
        const jobDescriptionText = card.querySelector(".jobDescriptionText").innerText;

        card.querySelector(".jobStatus").innerText = "INTERVIEW"

        const cardData = {
            companyName,
            jobTitle,
            jobLocation,
            jobType,
            salaryRanges,
            jobStatus: "INTERVIEW",
            jobDescriptionText
        }

        const jobCardExist = jobInterviews.find(item => item.companyName == cardData.companyName);

        if (!jobCardExist) {
            jobInterviews.push(cardData);
        }

        jobRejected = jobRejected.filter(item=> item.companyName !=)

    } else {

    }
})
