/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import Pocketbase from 'pocketbase'
import { serializeNonPOJOs } from '$lib/utils'

export const handle = async ({ event, resolve }) => {
    event.locals.pb = new Pocketbase('https://base.sinai.astralta.com')
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

    try {
        if (event.locals.pb.authStore.isValid) {
            await event.locals.pb.collection('users').authRefresh()
            event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model)
        }
        
    } catch (_) {
        event.locals.pb.authStore.clear()
        event.locals.user = undefined
    }

    const response = await resolve(event)

    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }))

    return response
}