/* eslint-disable @typescript-eslint/no-unused-vars */
 
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { redirect } from '@sveltejs/kit'

export const load = async ({ locals, params }) => {

    const getSong = async () => {
        const song = await locals.pb.collection('8_elim_worship_songs').getOne(params.songId);
        
        return song
    }


    return {
        song: await getSong(),
    }
    
}

export const actions = {

    updateSong: async ({ locals, params, request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        
        const updatedSongData = {
            "title": data.title,
            "author": data.author,
            "description": data.description,
            "video": data.video,
            "spotify": undefined,
            "apple_music": undefined,
            "youtube_music": undefined,
            "chords": data.chords,
            "lyrics": data.lyrics,
            "language": undefined,
            "last_play": undefined,
            "new": undefined,
            "original_key": data.original_key,
            "actual_key": data.actual_key,
            "tempo": data.tempo,
        };
        
        const updatedSongRecord = await locals.pb.collection('8_elim_worship_songs').update(data.songId, updatedSongData);

        throw redirect(303, `/songs/${params.songId}`);
        
    },
}