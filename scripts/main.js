const logo = document.querySelector(".logo");
const officerProfile = document.querySelector(".officer-profile");
const signOutBtn = document.querySelector(".signout-btn");
const loaderWrapper = document.querySelector(".loader-wrapper");
const menuIcon = document.querySelector(".menu-icon");
const menuIconClose = document.querySelector(".menu-icon-close");
const sidebar = document.querySelector(".sidebar");

const criminalForm = document.getElementById("criminalForm");
const criminalList = document.querySelector(".criminalList");
const filterByNameInput = document.getElementById("filterByName");

let criminalIdCounter = 1; // for unique IDs


officerProfile.addEventListener("click", () => {
  showLoader("profile.html");
});

logo.addEventListener("click", () => {
  showLoader("index.html");
});

signOutBtn.addEventListener("click", () => {
  window.location.href = "login.html";
});

function showLoader(redirect) {
  loaderWrapper.classList.remove("hidden");
  setTimeout(() => {
    loaderWrapper.classList.add("hidden");
    window.location.href = redirect;
  }, 2000);
}

filterByNameInput.addEventListener("input", () => {
  const searchTerm = filterByNameInput.value.toLowerCase();
  const allCriminals = document.querySelectorAll(".criminal-record");

  allCriminals.forEach(criminal => {
    const name = criminal.getAttribute("data-name");
    if (name.includes(searchTerm)) {
      criminal.style.display = "table-row"; // this ensures proper layout
    } else {
      criminal.style.display = "none";
    }
  });
});

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("move-left");
});
menuIconClose.addEventListener("click", () => {
  sidebar.classList.toggle("move-left");
});

// Open & Close Modal
const modal = document.getElementById("criminalModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close");

openBtn.onclick = () => {
  console.log(123);
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Handle Form Submission
criminalForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get values
  const fullName = document.getElementById("fullName").value;
  const gender = document.getElementById("gender").value;
  const crimeType = document.getElementById("crimeType").value;
  const arrestDate = document.getElementById("arrestDate").value;
  const status = document.getElementById("status").value;

  const id = criminalIdCounter++;
  modal.classList.add("show")

  // Create criminal entry
  const criminalDiv = document.createElement("tr");
  criminalDiv.classList.add("criminal-record");
  criminalDiv.setAttribute("data-name", fullName.toLowerCase());
  criminalDiv.innerHTML = `
  <td>CR001</td>
  <td><img src="images/criminal1.jpg" alt=""></td>
  <td>${fullName}</td>
  <td>${crimeType}</td>
  <td><span class="status jailed">Jailed</span></td>
  <td>${arrestDate}</td>
  <td>
    <button>View</button>
  </td>

  `;



  // Append to list
  criminalList.appendChild(criminalDiv);

  // Reset form
  criminalForm.reset();

  // Close modal
  modal.style.display = "none";

  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

//   // Chart 1: Cases by Status
//   const ctxStatus = document.getElementById('statusChart').getContext('2d');
//   const statusChart = new Chart(ctxStatus, {
//     type: 'doughnut',
//     data: {
//       labels: ['Open', 'Closed', 'Pending', 'Under Investigation'],
//       datasets: [{
//         label: 'Cases by Status',
//         data: [12, 8, 5, 3],
//         backgroundColor: ['#3498db', '#2ecc71', '#f1c40f', '#e67e22'],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: 'bottom'
//         }
//       }
//     }
//   });

//   // Chart 2: Top Crimes This Month
//   const ctxCrime = document.getElementById('crimeChart').getContext('2d');
//   const crimeChart = new Chart(ctxCrime, {
//     type: 'bar',
//     data: {
//       labels: ['Theft', 'Assault', 'Burglary', 'Fraud', 'Vandalism'],
//       datasets: [{
//         label: 'Cases',
//         data: [10, 7, 6, 4, 2],
//         backgroundColor: '#9b59b6',
//         borderRadius: 6
//       }]
//     },
//     options: {
//       responsive: true,
//       scales: {
//         y: {
//           beginAtZero: true,
//           ticks: {
//             stepSize: 1
//           }
//         }
//       },
//       plugins: {
//         legend: {
//           display: false
//         }
//       }
//     }
//   });
