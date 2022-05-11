import { AppDataSource } from "./dataSource";

AppDataSource.initialize()
    .then(() => {
    })
    .catch((error) => console.log(error))
