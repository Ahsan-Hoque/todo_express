import express from 'express';
import body_parser from 'body-parser';
import routes from './routes/routes';

const app = express();
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

routes(app);

const PORT = 5000;

app.listen(PORT, () =>{
	console.log(`Server is running on port ${PORT}`);
});
