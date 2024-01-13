/*
*/

function OpenAndFillEmailClient(){
    const subjectValue = document.getElementById("subjectInput").value;
    const nameValue = document.getElementById("nameInput").value;
    const companyValue = document.getElementById("companyInput").value;
    const messageValue = document.getElementById("messageInput").value;
    const mailIntroduction = "Hi, my name is " + nameValue + " from " + companyValue + ".";
    window.open("mailto:m.zaslavsky.ca@gmail.com?cc="+"&subject="+subjectValue+"&body="+mailIntroduction+" " + messageValue);
}