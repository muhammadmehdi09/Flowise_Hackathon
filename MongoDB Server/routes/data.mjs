import express from 'express'
import Data from "../models/Datas.mjs"

const router = express.Router()

router.get("/", (req, res) => {
    console.log("Working")
    res.send({ "res": "Hi" })
})

router.post("/", async (req, res) => {
    try {
        const { name, email, phone_number, city_of_departure, destination_city } = req.body

        const flightDetails = {
            name: name,
            email: email,
            phone_number: phone_number,
            city_of_departure: city_of_departure,
            destination_city: destination_city
        }

        await Data.create(flightDetails)
        console.log(flightDetails)

        res.send({
            res: `Ok, ${name} your flight has been booked`
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: "Something went wrong"
        })
    }
})

export default router