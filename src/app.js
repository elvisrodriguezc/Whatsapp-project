const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config");

//! Routers
const usersRouter = require("./users/users.routes").router
const conversationRouter = require("./conversations/conversation.routes").router
const authRoutes = require('./auth/auth.routes').router;
const participantsRouter = require("./participants/participants.routes").router

// Init express app
const app = express();

// Enable CORS
app.use(cors());

// Enable incoming JSON data
app.use(express.json());

// Enable incoming Form-Data
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
else app.use(morgan("combined"));

// Endpoints
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/conversations", conversationRouter);
app.use('/api/v1/auth', authRoutes);
app.use("/api/v1/participants", participantsRouter);
app.listen(config.port, () => {
    console.log(`Server has started on port ${config.port}`)
})

module.exports = { app };

/*
,
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at'
    }

*/