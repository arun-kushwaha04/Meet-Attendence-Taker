
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