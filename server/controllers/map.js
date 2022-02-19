import dbFetch from "../config/config.js";

export const getCity = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const result = await dbFetch.query('SELECT * FROM users WHERE id = $1', [id]);
        res.status(201).send(result.rows);
        console.log(result.rows);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getAllDump = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const result = await dbFetch.query('SELECT * FROM users WHERE id = $1', [id]);
        res.status(201).send(result.rows);
        console.log(result.rows);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}