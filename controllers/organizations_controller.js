
class organizations_controllers {

    // /api/organizations

    async all(req, res) {
        try {
					const data = []
					return response.status(200).json({
						data: data
					})

				}	catch (err)	{
					res.status(500).json({
						error: err
					})
				}
    }

  

}
