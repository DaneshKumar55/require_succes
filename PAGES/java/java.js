var fullName = document.getElementById("fullName");
var FatherName =document.getElementById("F_Name");
var Email = document.getElementById("Email");
var password = document.getElementById("password");
var CnicNumber = document.getElementById("CnicNumber");
var MobileNumber = document.getElementById("MobileNumber");
var SelectCourse = document.getElementById("SelectCourse");
var SelectQualification = document.getElementById("SelectQualification");
var SelectGender = document.getElementById("SelectGender");


function SubmitDatta() {
    if (fullName.value === ""){
        // alert("Full Nmae Required!")
        message1.style.display = "block";
        setTimeout(() =>{
            message1.style.display="none";
        }, 1000);
    }  else if(FatherName.value === ""){
        message2.style.display = "block"
        setTimeout(() => {
            message2.style.display = "none"
        }, 1000);
    } else if( Email.value === ""){
        message3.style.display = "block"
        setTimeout(() =>{
            message3.style.display = "none"
        }, 1000);
    } else if( password.value === ""){
        message4.style.display= "block"
        setTimeout(() =>{
            message4.style.display="none"
        }, 1000);
    } else if(CnicNumber.value === ""){
    message5.style.display = "block";
    setTimeout(() =>{
    message5.style.display = "none";
    }, 1000);
    } else if( MobileNumber.value === ""){
        message6.style.display = "block";
        setTimeout(() =>{
            message6.style.display="none"
        }, 1000)
    } else if (SelectCourse.value === ""){
        message7.style.display = "block";
        setTimeout(() =>{
            message7.style.display="none"
        }, 1000)
    } else if(SelectQualification.value === ""){
        message8.style.display= "block"
        setTimeout(() =>{
            message8.style.display="none"
        }, 1000)
    } else if(SelectGender.value === ""){
        message9.style.display="block";
        setTimeout(() =>{
            message9.style.display="none"
        }, 1000)
    }
    else {
        message1.style.display="none"
        console.log(fullName.value);
        console.log(FatherName.value);
        console.log(Email.value);
        console.log(password.value);
        console.log(CnicNumber.value);
        console.log(MobileNumber.value);
        console.log(SelectCourse.value);
        console.log(SelectQualification.value);
        console.log(SelectGender.value);
        Success.style.display="block";
        setTimeout(() =>{
            Success.style.display="none"
            fullName.value= "";
            FatherName.value = "";
            Email.value = "";
            password.value = "";
            CnicNumber.value = "";
            MobileNumber.value = "";
            SelectCourse.value = "";
            SelectQualification.value = "";
            SelectGender.value = "";
        }, 1000);
    }
}




var paragraph = document.getElementById("paragraph");
function readMore(){
    // console.log(paragraph);
    // console.log(paragraph.id);
    // console.log(paragraph.innerHTML);
    paragraph.innerHTML = " Welcome to iHunar The world around us is changing every minute, globalizing, and the speed of information exchange and its volume are steadily increasing. A person who wants to keep up with the times, understand the new global trends in the development of science and technology, must have curiosity, be active and have analytical thinking and leadership qualities. But in addition, in order to be competitive he needs to have a huge amount of knowledge and skills, including professional ones. The high pace of scientific and technological progress and the wide spread of information technologies leads to the fact that any area of activity is constantly enriched with new discoveries, methods and techniques of work. We offer only programs that will help you climb a few steps higher in your life. All training courses in which we work are in demand and relevant. We use only the latest proven and reliable methods of trainings. We do not have boring lectures. Our trainers use an interactive approach that significantly improves the efficiency of training and know all modern training methods. New knowledge is an empowerment of you and a chance to make your life better, brighter and more diverse"
}