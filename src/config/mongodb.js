/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */


const MONGODB_URI = 'mongodb+srv://liamdev:Lam140920@cluster0.kvfee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const DATABASE_NAME = 'liamdev'

import { MongoClient, ServerApiVersion } from 'mongodb'

let trelloDatanaseInstance = null
const mongoClientInstance = new MongoClient(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

export const CONNECT_DB = async () => {
    try {
        if (!trelloDatanaseInstance) {
            await mongoClientInstance.connect()
            trelloDatanaseInstance = mongoClientInstance.db(DATABASE_NAME)
        }
        return trelloDatanaseInstance
    } catch (error) {
        console.log('MongoDB connection error: ', error)
    }
}

export const GET_DB = () => {
    if (!trelloDatanaseInstance) {
        throw new Error('Database not connected. Please call CONNECT_DB first.')
    }
    return trelloDatanaseInstance

}