// Sample data for demonstration purposes
const researchArchive = [
    { title: "Flood Preparedness in Barangay Tugbungan", description: "An assessment report focused on flood disaster mitigation and response strategies." },
    { title: "Analysis of Philippine Sea Biodiversity", description: "Research on the impact of climate change on marine biodiversity in Philippine waters." },
    { title: "Digital Archive Development for ADZU", description: "A study on creating an accessible research archive for ADZU students and faculty." },
    { title: "Impact of Social Media on Youth Mental Health", description: "Examining the effects of social media on mental health among adolescents." }
];

// Event listener for the search button
document.getElementById("searchButton").addEventListener("click", function() {
    const searchInput = document.getElementById("searchQuery").value.toLowerCase();
    const resultsContainer = document.getElementById("results");

    // Clear previous results
    resultsContainer.innerHTML = "";

    // Filter results
    const filteredResults = researchArchive.filter(item => {
        return searchInput === "" || item.title.toLowerCase().includes(searchInput);
    });

    // Display results
    if (filteredResults.length > 0) {
        filteredResults.forEach(item => {
            const resultItem = document.createElement("div");
            resultItem.className = "result-item";
            resultItem.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found. Try a different keyword.</p>";
    }
});

// Event listener for the upload button
document.getElementById("uploadButton").addEventListener("click", function() {
    uploadFile();
});

// Upload function
function uploadFile() {
    let file = document.getElementById("fileUpload").files[0];
    if (file) {
        alert("Uploading: " + file.name);
        // Implement file upload logic here, connected to the backend
    } else {
        alert("Please select a file to upload.");
    }
}

// Notification after 30 minutes
setTimeout(() => {
    alert("Give feedback to the website!");
}, 1800000); // 1800000 ms = 30 minutes