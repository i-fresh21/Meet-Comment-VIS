import { MEET_CONTENTS, CHAT_TEXT_INPUT_AREA, OBSERVE_CONFIG } from './const';

let prevThread: any;
const observer = new MutationObserver((records): string | undefined => {
    try {
        const thread = document.getElementsByClassName(MEET_CONTENTS.thread)[0];

        if (prevThread != undefined && thread.isEqualNode(prevThread)) return
        if (thread.getElementsByClassName(MEET_CONTENTS.exclusion_messages).length < 1) return

        prevThread = thread.cloneNode(true);

        const messages = thread.getElementsByClassName(MEET_CONTENTS.messages);
        const message = (messages[messages.length - 1] as HTMLElement)?.innerText;
        return message;
    }
    catch (e) {
        return
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const elem = document.body
    observer.observe(elem, OBSERVE_CONFIG)


})