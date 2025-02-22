import { Schema, Document, model } from 'mongoose'

interface trackDocumentInterface extends Document {
    id: string;
    name: string;
    startCoords: string;
    endCoords: string;
    long: number;
    unevenness: number;
    activities: "Correr" | "Bicicleta";
    finalized: { _id: Schema.Types.ObjectId }[];
    calification: number;
    
}

const trackSchema = new Schema<trackDocumentInterface>({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    startCoords: {
        type: String,
        required: true,
    },
    endCoords: {
        type: String,
        required: true,
    },
    long: {
        type: Number,
        required: true,
    },
    unevenness: {
        type: Number,
        required: true,
    },
    activities: {
        type: String,
        required: true,
    },
    finalized: [{
        type: Schema.Types.ObjectId,
        ref: "users"
    }],
    calification: {
        type: Number,
        required: true,
    }
  });

  export const trackModel = model<trackDocumentInterface>('tracks', trackSchema);