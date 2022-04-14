export type Gender = 'f' | 'm'

export type DefaultFormat = 'firstName lastName'
export type Format = DefaultFormat | 'lastName firstName' | 'lastName, firstName'

export type FirstName = {
  value: string
  gender: Gender
}

export type LastName = {
  value: string
}
