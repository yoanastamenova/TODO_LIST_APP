import { v4 as uuidV4} from "uuid"

type Task = {
  id: string,
  title: string,
  completed: boolean,
  createdAt: Date
}

console.log(uuidV4())

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("#new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-title")
const tasks: Task[] = []

form?.addEventListener("submit", e => {
  e.preventDefault()

  if(input?.value == "" || input?.value == null) return 

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: true,
    createdAt: new Date()
  }
  tasks.push(newTask)

  addListItem(newTask)
  input.value = ""
})

function addListItem(task : Task): boolean {
  const item = document.createElement("li");
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked
  })
  checkbox.checked = task.completed
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
  return true;
}

