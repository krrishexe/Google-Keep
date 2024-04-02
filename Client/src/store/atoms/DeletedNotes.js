import {atom} from 'recoil';

export const deletedNotes = atom({
    key: 'deletedNotes',
    default: [],
})