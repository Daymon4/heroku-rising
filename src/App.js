import express from 'express';
import path from 'path';

class App {
    constructor() {
        this._app = express();
        this._app.use(express.json());
        this._app.use('/', express.static(path.resolve(__dirname, '..public/')));
        this._app.get('/lines', this._onGetLines);
    }

    getApp = () => this._app;

    _onGetLines = (request, response) => {
        const lines = [
            { color: '#909', thickness: 3, start: {x: 10, y: 10 }, end: { x: 100, y: 100 }}
        ];

        response.json(lines);
        response.end();
    }

}

export default App;