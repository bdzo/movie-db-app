
export class StorageService {
  name
  localStorage

  constructor(name) {
    this.name = name
    this.localStorage = localStorage
  }

  // POST /favorites - 201
  create(item) {
    // load current state
    const items = JSON.parse(this.localStorage.getItem(this.name)) || []
    // add item state copy
    items.push(item)
    // update current state
    this.localStorage.setItem(this.name, JSON.stringify(items))
    // return added item
    return item
  }

  // GET /favorites - 200
  index() {
    // load current state, parse and return
    return JSON.parse(this.localStorage.getItem(this.name)) || []
  }

  // GET /favorites/:id - 200
  read(id) {
    // load current state
    const items = JSON.parse(this.localStorage.getItem(this.name)) || []
    // find item by ID
    for (const item of items) {
      if (item.id === id) {
        return item
      }
    }
    // throw if not returned within loop
    throw new Error('Item not found.')
  }

  // POST /favorites/:id - 200
  update(id, updateData) {
    // load current state
    const items = JSON.parse(this.localStorage.getItem(this.name)) || []
    // updated state
    const updatedState = []
    // not found flag
    let isFound = false
    // find item by ID
    for (const item of items) {
      if (item.id === id) {
        isFound = true
        updatedState.push({ ...item, ...updateData, id })
      } else {
        updatedState.push(item)
      }
    }
    // throw if not found
    if (isFound === false) {
      throw new Error('Item not found.')
    }
    // update current state
    this.localStorage.setItem(this.name, JSON.stringify(updatedState))

    return updateData
  }

  // DELETE /favorites/:id - 204
  delete(id) {
    // load current state
    const items = JSON.parse(this.localStorage.getItem(this.name)) || []
    // updated state
    const updatedState = []
    // not found flag
    let isFound = false
    // find item by ID
    for (const item of items) {
      if (item.id === id) {
        isFound = true
      } else {
        updatedState.push(item)
      }
    }
    // throw if not found
    if (isFound === false) {
      throw new Error('Item not found.')
    }
    // update current state
    this.localStorage.setItem(this.name, JSON.stringify(updatedState))
    return null
  }
}