
$(document).ready(function () {
    //将电话加入剪切板
    $("#phoneLink").click(async function (event) {
        event.preventDefault();
        await navigator.clipboard.writeText("+1 (201) 123-1234");
        alert("Our phone number \"+1 (201) 123-1234\" has been added to your clipboard!");
        return false;
    });

    //将邮箱加入剪切板
    $("#emailLink").click(async function (event) {
        event.preventDefault();
        await navigator.clipboard.writeText("admin@gmail.com");
        alert("Our email address \"admin@gmail.com\" has been added to your clipboard!");
        return false;
    });

    $("#instagramLink").click(async function (event) {
        await navigator.clipboard.writeText("https://www.google.com/");
        alert("Our website \"https://www.google.com/\" has been added to your clipboard!");
        window.open("https://www.instagram.com/");
        return false;
    });

});
