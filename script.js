document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = "http://catfact.ninja/fact";
    const btn = document.querySelector(".submitBtn");
    const factElement = document.querySelector(".cat-fact p");

    btn.addEventListener("click", async () => {
        try {
            // Optionally add more query params
            const params = new URLSearchParams({ max_length: 140 });
            const urlWithParams = `${baseUrl}?${params.toString()}`;

            let response = await fetch(urlWithParams);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let data = await response.json();
            if (data.fact) {
                factElement.innerText = data.fact;
            } else {
                throw new Error("No fact available in response data");
            }
        } catch (error) {
            console.error("Error fetching cat fact:", error);
            factElement.innerText = "Failed to load cat fact. Try again!";
        }
    });
});
