// ==========================================
// MARINE LORA - REGISTRATION & OTP
// ==========================================

let generatedOTP = "";

// ------------------------------------------
// SEND OTP
// ------------------------------------------

function sendOTP() {

    const phone =
        document.getElementById("phoneNumber").value.trim();

    // Check phone number
    if (!/^[0-9]{10}$/.test(phone)) {

        alert("Please enter a valid 10-digit phone number.");

        return;
    }

    // Generate 6-digit OTP
    generatedOTP =
        Math.floor(
            100000 + Math.random() * 900000
        ).toString();

    // Show OTP section
    document.getElementById(
        "otpSection"
    ).style.display = "block";

    /*
       DEMO OTP

       This displays the OTP on screen.
       It does NOT send an actual SMS.
    */

    alert(
        "MarineLoRa Demo OTP: " + generatedOTP
    );

    console.log(
        "Generated OTP:",
        generatedOTP
    );
}


// ------------------------------------------
// VERIFY OTP
// ------------------------------------------

function verifyOTP() {

    const enteredOTP =
        document.getElementById("otp").value.trim();

    // Check OTP
    if (enteredOTP === "") {

        alert("Please enter the OTP.");

        return;
    }


    if (enteredOTP === generatedOTP) {

        // Save verification
        localStorage.setItem(
            "phoneVerified",
            "true"
        );


        // Save phone number
        const phone =
            document.getElementById(
                "phoneNumber"
            ).value.trim();

        localStorage.setItem(
            "phoneNumber",
            phone
        );


        alert(
            " Phone number verified successfully!"
        );


        // Go to tracking page
        window.location.href =
            "tracking.html";

    }

    else {

        alert(
            " Invalid OTP. Please try again."
        );

    }
}


// ------------------------------------------
// BOAT REGISTRATION
// ------------------------------------------

function registerBoat() {

    const boatName =
        document.getElementById(
            "boatName"
        ).value.trim();

    const boatNumber =
        document.getElementById(
            "boatNumber"
        ).value.trim();

    const loraId =
        document.getElementById(
            "loraId"
        ).value.trim();


    // Check boat details

    if (
        boatName === "" ||
        boatNumber === "" ||
        loraId === ""
    ) {

        alert(
            "Please fill all boat details."
        );

        return;
    }


    // Save boat details

    localStorage.setItem(
        "boatName",
        boatName
    );

    localStorage.setItem(
        "boatNumber",
        boatNumber
    );

    localStorage.setItem(
        "loraId",
        loraId
    );


    // Continue to OTP

    alert(
        "Boat details saved. Please verify your phone number."
    );

}
