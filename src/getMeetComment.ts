import { MEET_CONTENTS, CHAT_TEXT_INPUT_AREA ,OBSERVE_CONFIG } from './const';

let prevThread: any;
const observer = new MutationObserver((records) => {
    try {
        const thread = document.getElementsByClassName(MEET_CONTENTS.thread)[0];

        const isNonComments = prevThread != undefined && thread.isEqualNode(prevThread);
        if (isNonComments) return

        const isGYckHClass = thread.getElementsByClassName('gYckH').length < 1
        if (isGYckHClass) return

        prevThread = thread.cloneNode(true);

        const messages = thread.getElementsByClassName(MEET_CONTENTS.messages);
        const message = (messages[messages.length - 1] as HTMLElement)?.innerText;
    }
    catch (e) {
        return
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const elem = document.body
    observer.observe(elem, OBSERVE_CONFIG)

})