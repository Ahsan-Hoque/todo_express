import db from "../db/db";

const appRouter = (app)=>{
	app.get('/api/v1/todos', (req, res) => {
		res.status(200).send({
			success: 'true',
			message: 'todos retrieved successfully!',
			todos: db
		});
	});

	app.post('/api/v1/todos', (req, res) =>{
		if(!req.body.title){
			return res.status(400).send({
				success: 'false',
				message: 'title is required'
			});
		}else if(!req.body.description){
			return res.status(400).send({
				success: 'false',
				message: 'description is required'
			});
		}
		const todo = {
			id: db.length + 1,
			title: req.body.title,
			description: req.body.description

		};
		db.push(todo);
		return res.status(201).send({
			success: 'true',
			message: 'todo addedd successfully!',
			todo
		})
	});

	app.get('/api/v1/todos/:id', (req, res) => {
		const id = parseInt(req.params.id, 10);
		db.map((todo)=>{
			if (todo.id === id){
				return res.status(200).send({
					success: 'true',
					message: 'todo retrieved successfully'
				})
			}
		});
		return res.status(404).send({
			success: 'false',
			message: 'todo not found'
		});
	})
};

export default appRouter;
