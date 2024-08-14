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
            "chords_url": data.chords,
            "chords": undefined,
            "lyrics": data.lyrics,
            "language": undefined,
            "key": data.key,
            "tempo": data.tempo,
            "created_by": "kt4eez6x6sen6d4",
        };
        
        const newSongRecord = await locals.pb.collection('songs').create(newSong);

        throw redirect(303, `/`);
    }
}