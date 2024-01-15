import express from "express"
import { volumeTabung, LPtabung, volumeKubus, LPkubus, LPbalok, volumeBalok } from "../controller/bangunRuang"
const app = express()

app.use(express.json())

app.post(`/tabung/volume`, volumeTabung)
app.post(`/tabung/LP`, LPtabung)
app.post(`/kubus/volume`, volumeKubus)
app.post(`/kubus/LP`, LPkubus)
app.post(`/balok/volume`, volumeBalok)
app.post(`/balok/LP`, LPbalok)




export default app