export type Gender = {
  value: string
}

export type FirstName = {
  value: string
  gender: string
}

export type LastName = {
  value: string
}

export type Name = {
  gender: Gender[]
  firstName: FirstName[]
  lastName: LastName[]
}
