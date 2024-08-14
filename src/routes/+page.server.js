/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {

    const getSongs = async () => {
        const songs = await locals.pb.collection('songs').getFullList({
            sort: '-created',
        });

        locals.songs = songs
        return locals.songs
    }


    return {
        songs: await getSongs(),
    }
    
}
