/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { redirect } from '@sveltejs/kit';

export const actions = {

    addSong: async ({ locals, request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);

        const newSong = {
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
        
        const newSongRecord = await locals.pb.collection('8_elim_worship_songs').create(newSong);

        throw redirect(303, `/`);
        // console.log(newSongRecord);
    }
}