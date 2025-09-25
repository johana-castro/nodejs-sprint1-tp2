// import fs from 'fs';

// //Leer un archivo fr manera asincronica
// fs.readFile('./data/example.txt', 'utf8', (err, data)=> {
//     if (err) throw err;
//     console.log('Contenido del archivo: ', data);


// //Escribir en un nuevo archivo
// fs.writeFile('./data/newfile.txt', 'contenido nuevo', (err)=>{
//     if (err) throw err;
//     console.log('Archivo creado y escrito');


// //Renombrar un archivo
// fs.rename('/data/newfile.txt', './data/renamefile.txt', (err)=>{
//     if (err) throw err;
//     console.log('Archivo renombrado');
// });
// });
// });


import fs from 'fs';

// Leer un archivo de manera asincrónica
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenido del archivo:', data);

    // Escribir en un nuevo archivo
    fs.writeFile('./data/newfile.txt', 'contenido nuevo', (err) => {
        if (err) throw err;
        console.log('Archivo creado y escrito');

        // Renombrar archivo después de crearlo
        fs.rename('./data/newfile.txt', './data/renamefile.txt', (err) => {
            if (err) throw err;
            console.log('Archivo renombrado');
        });
    });
});