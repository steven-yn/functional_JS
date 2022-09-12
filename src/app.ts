import net from "net";
import { ArrayFn, MapFn, SetFn } from "./iterable_iterator/iterable_iterator";

const server = net.createServer((socket) => {
  console.log("connected.");
  socket.on("data", (data) => {
    // console.log(data);
  });

  socket.on("close", () => {
    console.log("client disconnted.");
  });

  ArrayFn();
  SetFn();
  MapFn();

  const content = `
  `;

  const resBody = `<html lang="ko"> <head><meta charset="UTF-8"></head> <body>${content}</body> </html>`;

  socket.write(
    [
      "HTTP/1.1 200 OK",
      `Content-Type: text/html;charset=UTF-8
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
