'use strict';
let GetURL = document.getElementById('GetURL');
GetURL.onclick = function(element) {
    getCurrentTabUrl();
};
document.getElementById('getText').onclick = function(element) {
    chrome.tabs.executeScript({
        code: "window.getSelection().toString();"
    }, function(selection) {
        document.getElementById("selectedtext").innerHTML = selection[0];
    });
};

function modifyDOM() {
    //You can play with your DOM here or check URL against your regex  
    console.log('Tab script:');
    console.log(document.body);
    document.body.style.background = "blue"
    return true;
}
document.getElementById('colorChange').onclick = function(element) {
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code  
    }, function(selection) {
        alert(selection);
    });
};

document.getElementById('takeAttendance').onclick = () => {
    chrome.tabs.executeScript({
        code: '(' + takeAttendance + ')();'
    }, (result) => {
        let participantString
        result.forEach(participant => {
            if (participant) participantString += `${participant}, `
        })

        document.getElementById('participant').innerHTML = result
    })
}

function getCurrentTabUrl() {
    var queryInfo = {
        active: true,
        currentWindow: true
    };
    chrome.tabs.query(queryInfo, (tabs) => {
        var tab = tabs[0];
        var url = tab.url;
        document.getElementById('url').innerHTML = url;
    });
}

const takeAttendance = () => {
    // const parentClass = ".qdulke"
    // let parentDiv = document.querySelector(parentClass)
    // parentDiv.classList.remove('qdulke')
    // const subClass = ".WUFI9b"
    // let subDiv = document.querySelector(subClass)
    // subDiv.classList.remove('qdulke')
    const buttonClass = ".VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.JsuyRc.boDUxc"
    let button = document.querySelectorAll(buttonClass)
    if (button) button[1].click()
    const participantClass = "ZjFb7c"
    let participant = []
    let data = document.getElementsByClassName(participantClass)
    if (data) {
        for (key in data) {
            participant.push(data[key].innerHTML)
        }
    }
    return participant
}