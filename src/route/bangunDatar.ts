import express from "express"
import { kelilingingkaran, luasLingkaran, luaspersegi, kelilingpersegi, luasPJ, kelilingPJ, luasSegitiga } from "../controller/bangunDatar"
const app = express()

// allow read a body
app.use(express.json())
// fungsi use() digunakan untuk menerapkan sebuah fungsi
// pada object express. fungsi tsb akan otomatis dijalankan

app.post(`/lingkaran/luas`, luasLingkaran)
app.post(`/lingkaran/keliling`, kelilingingkaran)
app.post(`/persegi/luas`, luaspersegi)
app.post(`/persegi/keliling`, kelilingpersegi)
app.post(`/PJ/luas`, luasPJ)
app.post(`/PJ/keliling`, kelilingPJ)
app.post(`/segitiga/luas`, luasSegitiga)

export default app