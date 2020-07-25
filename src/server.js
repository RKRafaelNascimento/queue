import 'dotenv/config'
import express from 'express'
import UserController from '../src/controllers/UserController'
import BullBoard from 'bull-board'
import Queue from '../src/lib/Queue'

const app = express()

BullBoard.setQueues(Queue.queues.map(queue => queue.bull))

app.use(express.json())
app.use('/admin/queues', BullBoard.UI)
app.post('/users', UserController.store)

const port = 3333

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})