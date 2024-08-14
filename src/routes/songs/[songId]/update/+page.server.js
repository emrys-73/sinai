/* eslint-disable @typescript-eslint/no-unused-vars */
 
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { redirect } from '@sveltejs/kit'

export const load = async ({ locals, params }) => {

    const getSong = async () => {
        const song = await locals.pb.collection('songs').getOne(params.songId);
        
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
            "chords_url": data.chords,
            "chords": undefined,
            "lyrics": data.lyrics,
            "language": undefined,
            "key": data.key,
            "tempo": data.tempo,
            "created_by": "kt4eez6x6sen6d4",
        };
        
        const updatedSongRecord = await locals.pb.collection('songs').update(data.songId, updatedSongData);

        throw redirect(303, `/songs/${params.songId}`);
        
    },
}