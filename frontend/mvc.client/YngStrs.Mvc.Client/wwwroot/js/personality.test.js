function RegisterUserAnswer(chosenOptionId) {

    const optionModel = {
        chosenOptionId: chosenOptionId
    };

    const request = {
        method: "POST",
        url: _registerUserAnswerUrl,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(optionModel)
    };

    $.ajax(request)
        .catch(displayErrorMessage);
}

function displayErrorMessage() {
    alert("Could not register user answer.");
}