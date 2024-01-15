// ini adalah file utama dimana ada proses menjalankan server backend

// memanggil library express 
import  express, { Request, Response, response }  from "express";
import { truncate } from "fs";
import { request } from "http";
import { number } from "joi";
import { validationCube } from "./middleware/validateCube";
import routeBangunDatar from "./route/bangunDatar";
import routeBangunRuang from "./route/bangunRuang";


// membuat wadah untuk inisiasi express
const app = express()

// mendefinisikan PORT berjalannya server
const PORT = 8000

// allow to read JSON as request
app.use(express.json() )

// proses pertama untuk handle request
app.get(`/serena`, (request: Request, response: Response) => {
    // ini adalah proses handle request dengan
    // url/address: http://localhost:8000/serena
    // method: GET

    // memberi respons
    return response.status(200).json({
        massage: `Hello Serena anaknya Bu Siana`

    })
})

// 
app.get(`/moklet`, (request: Request, respons: Response) => {
    // asumsikan data yg dikirim adalah nama dan umur
    let nama: String | any = request.query.nama?.toString()
    let umur: String | any = request.query.umur?.toString()

    let massage: string = `my name is ${nama} and im ${umur} years old`
    return respons.status(200).json(massage)
})

// read data request from parameter
app.get(`/telkom/:nama/:gender`,(request: Request, respons: Response) => {
    let nama: string = request.params.nama
    let gender: string = request.params.gender
    let massage: string = `my name  is ${nama} and im ${gender}`
    return respons.status(200).json(massage)
})

// read a request from body
app.post(`/moklet`,(request: Request, response: Response) => {
    // asumsikan data yg dikirim adalah panjang dan lebar
    let panjang: number = request.body.panjang
    let lebar: number = request.body.lebar

    let luasPersegiPanjang: number  = panjang * lebar
    let massage = `luas persegi panjang adalah ${luasPersegiPanjang}`
    return response.status(200).json(massage)
})

// read data body
app.get(`/celcius`,(request: Request, response: Response) => {
    
})

// create request for count volume of cube
app.post(`/balok`, validationCube, (request: Request, respons: Response) => {
    // read panjang, lebar, tinggi
    let panjang: number = Number(request.body.panjang)
    let lebar: number = Number(request.body.lebar)
    let tinggi: number = Number(request.body.tinggi)

    let volume: number= panjang * lebar * tinggi

    return respons.status(200).json({
        panjang,lebar,tinggi,volume
    })
})

// meregister route of bangun datar
app.use(routeBangunDatar)

// register route of bangun ruang
app.use(routeBangunRuang)


// run server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// buatlah sebuah request untuk mengonnveksi suhu celcius ke farenheit,kelvin,reamur
// menggunakan request parameter
// exp: http://localhost:8000/celcius/80
// respons data ->
// {
// reamur: ?, farenheit: ?, kelvin: ?  
// }

