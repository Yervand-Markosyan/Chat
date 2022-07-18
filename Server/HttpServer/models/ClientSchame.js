import mongoose from "mongoose";

const ClientSchame = mongoose.Schema({
    event: {
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
})
export default mongoose.model("aboutClients", ClientSchame );