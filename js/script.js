// First event handler
document
    .getElementById("donate-button-1")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const textValue = findTagById('text-value-1');
        const textValueNumber = parseFloat(textValue.innerText);
        const mainBalance = document.getElementById("mainBalance");
        const mainBalanceNumber = parseFloat(mainBalance.innerText);
        const inputValue = getInputById('input-1');

        // input Validation
        if (inputValue < 0 || isNaN(inputValue)) {
            alert("Invalid Donate Amount");
            return;
        }

        document.getElementById('my_modal_2').showModal();

        const upDateBalance = textValueNumber + inputValue;
        const upDateMainBalance = mainBalanceNumber - inputValue;
        mainBalance.innerText = upDateMainBalance;
        textValue.innerText = upDateBalance;

        // create new div for history
        const div = document.createElement("div");
        div.classList.add("p-10", "border", "w-[70%]", "mx-auto", "my-5");
        const newdate = new Date();
        div.innerHTML = `
        <h4 class='font-bold text-xl'> ${inputValue} Taka is Donated for Donate for Flood at Noakhali,Bangladesh</h4><br>
        Date: ${newdate}
        `;
        const newDiv = document.getElementById("history");
        newDiv.appendChild(div);
    });

// Second event handler
document
    .getElementById("donate-button-2")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const textValue = document.getElementById("text-value-2");
        const textValueNumber = parseFloat(textValue.innerText);
        const mainBalance = document.getElementById("mainBalance");
        const mainBalanceNumber = parseFloat(mainBalance.innerText);
        const inputValue = getInputById('input-2');

        // input Validation
        if (inputValue < 0 || isNaN(inputValue)) {
            alert("Invalid Donate Amount");
            return;
        }

        document.getElementById('my_modal_2').showModal();

        const upDateBalance = textValueNumber + inputValue;
        const upDateMainBalance = mainBalanceNumber - inputValue;
        mainBalance.innerText = upDateMainBalance;
        textValue.innerText = upDateBalance;

        // create new div for history
        const div = document.createElement("div");
        div.classList.add("p-10", "border", "w-[70%]", "mx-auto", "my-5");
        const newdate = new Date();
        div.innerHTML = `
        <h4 class='font-bold text-xl'> ${inputValue} Taka is Donated for Donate for Flood Relief in Feni,Bangladesh</h4><br>
        Date: ${newdate}
        `;
        const newDiv = document.getElementById("history");
        newDiv.appendChild(div);
    });

// Third event handler
document
    .getElementById("donate-button-3")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const textValue = document.getElementById("text-value-3");
        const textValueNumber = parseFloat(textValue.innerText);
        const mainBalance = document.getElementById("mainBalance");
        const mainBalanceNumber = parseFloat(mainBalance.innerText);
        const inputValue = getInputById('input-3');

        // input Validation
        if (inputValue < 0 || isNaN(inputValue)) {
            alert("Invalid Donate Amount");
            return;
        }

        document.getElementById('my_modal_3').showModal();

        const upDateBalance = textValueNumber + inputValue;
        const upDateMainBalance = mainBalanceNumber - inputValue;
        mainBalance.innerText = upDateMainBalance;
        console.log(upDateBalance);
        textValue.innerText = upDateBalance;

        // create new div for history
        const div = document.createElement("div");
        div.classList.add("p-10", "border", "w-[70%]", "mx-auto", "my-5");
        const newdate = new Date();
        div.innerHTML = `
        <h4 class='font-bold text-xl'> ${inputValue} Taka is Donated for Injured in the Quota Movement</h4><br>
        Date: ${newdate}
        `;
        const newDiv = document.getElementById("history");
        newDiv.appendChild(div);
    });

// Link up with Blog Page
document.getElementById("blog-page").addEventListener("click", function () {
    window.location.href = "../blog.html";
});
// Link up for home page

// Donation and History Tab
const donationPart = document.getElementById("donation-part");
const donationTab = document.getElementById("change-btn-1");
const historyTab = document.getElementById("change-btn-2");
const historyDiv = document.getElementById('history')

document.getElementById("change-btn-1").addEventListener("click", function () {
    donationTab.classList.add("bg-[#B4F461]");
    donationTab.classList.remove("bg-gray-100");
    donationPart.classList.remove("hidden");
    historyTab.classList.remove("bg-[#B4F461]");
    historyTab.classList.add("bg-gray-100");
    historyDiv.classList.add('hidden')
});

document.getElementById("change-btn-2").addEventListener("click", function () {
    donationTab.classList.remove("bg-[#B4F461]",);
    donationTab.classList.add("bg-gray-100",);
    donationPart.classList.add("hidden");
    historyTab.classList.add("bg-[#B4F461]");
    historyTab.classList.remove("bg-gray-100");
    const showDiv = document.getElementById("history");
    showDiv.classList.remove("hidden");
});


