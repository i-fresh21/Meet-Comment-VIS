import { CLASS_OBJ, INPUT_AREA ,OBSERVE_CONFIG } from './const';

let prevThread: any;
const observer = new MutationObserver((records) => {
    try {

        const thread = document.getElementsByClassName(CLASS_OBJ.thread)[0];

        if (prevThread != undefined && thread.isEqualNode(prevThread)) return
        if (thread.getElementsByClassName('gYckH').length == 1) return

        prevThread = thread.cloneNode(true)

        const messages = thread.getElementsByClassName(CLASS_OBJ.messages);
        const message = (messages[messages.length - 1] as HTMLElement).innerText;
        // 動確用
        console.log("message:" + message);
    }
    catch (e) {
        return
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const elem = document.body
    observer.observe(elem, OBSERVE_CONFIG)

})