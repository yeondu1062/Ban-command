const bancmd = ['list','me','msg','tell','w'];   //밴 명령어

import { command } from "bdsx/command";

for(let i = 0; i < bancmd.length; i++) {
    command.find(bancmd[i]).signature.permissionLevel = 4;
};
