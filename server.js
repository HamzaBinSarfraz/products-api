import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('server is live on port ' + port);
})

// default route
app.get("**", (req, res) => {
    res.status(200).send({
        message: 'YO! Hello from another side ...'
    })
})