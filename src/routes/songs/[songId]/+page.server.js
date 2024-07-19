/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { redirect } from '@sveltejs/kit'

export const load = async ({ locals, params }) => {

    const getSong = async () => {
        const song = await locals.pb.collection('8_elim_worship_songs').getOne(params.songId, {
            expand: 'relField1,relField2.subRelField',
        });
        
        return song
    }


    return {
        song: await getSong(),
    }
    
}
