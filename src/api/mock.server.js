import { createServer, Model, RestSerializer } from 'miragejs';
import faker from "faker";
import { videoList } from "../data";

faker.seed(123);

// export function TestingMock() {
//     console.log("Inside Mock Server")
// }

export default function mockServer() {
    createServer({
        serializers: {
            application: RestSerializer
        },
        models: {
            videoList: Model,
            savedList: Model,
            wishlist: Model
        },

        routes() {
            this.namespace = "api";
            this.timing = 2000;
            this.resource("videoList");
            this.resource("savedList");

        },

        seeds(server) {
            videoList.forEach((video) => {
                server.create("videoList", {
                    ...video
                });
            });

            [videoList[1]].forEach((video) => {
                server.create("savedList", {
                    ...video,
                });
            });


        }
    });
}