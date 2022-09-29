import net from "net";
import { MFR_test1 } from "./expert/map_filter_reduce";
import { go_pipe } from "./go/go_pipe";
import { ArrayFn, MapFn, SetFn } from "./iterable_iterator/iterable_iterator";
import { reduceDefault, reduce_1, reduce_2, reduce_3 } from "./reduce/reduce";
import { reduce_4 } from "./reduce/reduce_2";

const server = net.createServer((socket) => {
  console.log("connected.");
  socket.on("data", (data) => {
    // console.log(data);
  });

  socket.on("close", () => {
    console.log("client disconnted.");
  });

  go_pipe();

  const content = `
  `;

  const resBody = `<html lang="ko"> <head><meta charset="UTF-8"></head> <body>${content}</body> </html>`;
  socket.write(
    [
      "HTTP/1.1 200 OK",
      `Content-Type: text/html; charset=utf-8
      Content-Length: ${resBody.length}`,
      "\n",
      `${resBody}`,
    ].join("\n")
  );
});

server.on("error", (err) => {
  console.log("err" + err);
});

server.listen(5000, () => {
  console.log("listening on 5000..");
});
