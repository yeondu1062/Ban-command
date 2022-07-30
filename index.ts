import { events } from "bdsx/event";

events.serverOpen.on(() => {
    import ('./yeondu');
    console.log('밴 커맨드 플러그인 로드성공');
});
