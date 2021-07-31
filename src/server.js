const Hapi = require("@hapi/hapi");
const routes = require("./routes");

// alamat web frontEnd = http://notesapp-v1.dicodingacademy.com/

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
        /** properti routes.cors.origin untuk menerapkan CORS pada seluruh route yang ada di server
         * CORS = suatu mekanisme yang memperbolehkan asal / origin suatu web server yang berbeda
         *    tetapi bisa berinteraksi satu sama lain
         * contoh penerapan CORS => http://www.google.com dengan port 88
         *    kemudian http://localhost:5000 dengan port 5000
         */
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`server berlajan pada ${server.info.uri}`);
};

init();
