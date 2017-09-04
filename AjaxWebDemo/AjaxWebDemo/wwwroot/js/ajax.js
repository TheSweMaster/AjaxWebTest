//Ajax Demo Code

//$("#buttonId").on("click", function () {
//    alert("Clicked the button!");
//});

//$("#inputTextId").on("input", function () {
//    alert("You typed something!");
//});

//Triggers every time you click the button
$("#buttonId").click(function () {

    $.ajax({
        url: '/ajax/getsomedata',
        method: 'GET'
    })
        .done(function (result) {
            alert(result);
        })

        .fail(function (xhr, status, error) {
            if (xhr.status === 400) {
                alert(xhr.responseText);
            } else {
                alert("Unknown error!");
            }
        });

});

//Triggers every time you input something in the textbox
$("#inputTextId").on("input", function () {

    var inputValue = $("#inputTextId").val();

    $.ajax({
        url: '/ajax/GetSomeDataOnInput',
        method: 'GET',
        data: {
            input: inputValue
        }
    })
        .done(function (result) {
            $("#outputLineId").text(result);
        })

        .fail(function (xhr, status, error) {
            if (xhr.status === 400) {
                alert(xhr.responseText);
            } else {
                alert("Unknown error!");
            }
        });

});
