import { firestore, storage } from "../firebase";

const todosCollection = firestore.collection("todos");

export function subscribeOnTodos(callback) {
  todosCollection.orderBy("createdAt").onSnapshot(querySnapshot => {
    callback(querySnapshot.docs);
  });
}

export function addTodo(todo) {
  todosCollection.add({
    ...todo,
    isDeleted: false,
    isDone: false,
    createdAt: Date.now()
  });
}

export function markTodoAsDone(todo) {
  todosCollection.doc(todo.id).update({
    isDone: !todo.data().isDone
  });
}

export function deleteTodo(todo) {
  todosCollection.doc(todo.id).update({
    isDeleted: true
  });
}

export function uploadAttachments(files, callback) {
  Promise.all(files.map(file => uploadAttachment(file, file.name))).then(
    results => {
      Promise.all(results.map(result => result.ref.getDownloadURL())).then(
        urls => callback(urls)
      );
    }
  );
}

export function uploadAttachment(file, filename) {
  let ref = storage.ref().child(filename);
  return ref.put(file);
}
