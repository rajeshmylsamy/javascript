//immutable
import { Map } from "immutable";

let book = Map({ title: "Motivation", author: "Harry Porter" });

book.get("title"); //Motivation
book.set("isPublished", true);

//immmer
import { produce } from "immer";
let updatedBook = produce(book, (draftBook) => {
	draftBook.isPublished = true;
});
