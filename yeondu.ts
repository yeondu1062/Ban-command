import { command } from "bdsx/command";

const bancmd = ['list','me','msg','tell','w'];
for(let i = 0; i < bancmd.length; i++) {
    command.find(bancmd[i]).signature.permissionLevel = 4;
};