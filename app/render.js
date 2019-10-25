import fs from 'fs';

var render = (res) => fs.readFile('./view/index.html', 'utf8', (error, data) => {
    if(error) {
        res.send(error);
    } else {
        res.send(data);
    }
});

export default render;