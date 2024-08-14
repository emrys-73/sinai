 
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { redirect } from '@sveltejs/kit'

export const load = async ({ locals, params }) => {

    const getSong = async () => {
        const song = await locals.pb.collection('songs').getOne(params.songId, {
            expand: 'relField1,relField2.subRelField',
        });
        
        return song
    }


    return {
        song: await getSong(),
    }
    
}

export const actions = {
    deleteSong: async ({ locals, params }) => {
        await locals.pb.collection('songs').delete(params.songId);
        throw redirect(303, '/');
    },
}