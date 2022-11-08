import express from 'express'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'

const app = express();

//Forma dinamica de obtener la ruta absoluta del fichero src
const __dirname = dirname(fileURLToPath(import.meta.url))


app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views') )


app.get ('/', (req, res) => res.render('index'));
app.listen(3004);
console.log('Server is litening on port: ', 3004);