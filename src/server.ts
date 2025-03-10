import config from "./app/config";
import app from "./app";
import mongoose from "mongoose";
import {Server} from 'http'

let server : Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
      console.log(`App-1 listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

process.on('unhandledRejection', ()=>{
  console.log('Unhandled Rejection Occured. Server shutting down..')
  if(server){
    server.close(()=>{
      process.exit(1)
    })
  }
  process.exit(1);
})


process.on('uncaughtException',()=>{
  console.log('Uncaught exception occured. Server shutting down..')
  process.exit(1)
})
