import { Request, Response } from "express";

const volumeTabung = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)

        const volume = phi * r * r * t
        return response.status(200).json({
            status: true,
            r,
            t,
            volume
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })
    }
}

const LPtabung = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)

        const LP = 2 * phi * r * (r + t) 
        return response.status(200).json({
            status: true,
            r,
            t,
            LP
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })
    }
}

const volumeKubus = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const s: number = Number(request.body.s)

        const volume = s * s * s
        return response.status(200).json({
            status: true,
            s,
            volume
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })
    }
}

const LPkubus = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const s: number = Number(request.body.s)

        const LP = 6 * (s * s)
        return response.status(200).json({
            status: true,
            s,
            LP
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })
    }
}

const volumeBalok = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const p: number = Number(request.body.p)
        const l: number = Number(request.body.l)
        const t: number = Number(request.body.t)


        const volume = p * l * t
        return response.status(200).json({
            status: true,
            p,
            l,
            t,
            volume
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })
    }
}

const LPbalok = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const p: number = Number(request.body.p)
        const l: number = Number(request.body.l)
        const t: number = Number(request.body.t)

        const LP = (2 * p * l) + (2 * l * t) + (2 * p * t)
        return response.status(200).json({
            status: true,
            p,
            l,
            t,
            LP
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })
    }
}


export{ volumeTabung, LPtabung,
        volumeKubus, LPkubus,
        volumeBalok, LPbalok }