export enum RepositoriesTypes {
  LOAD_REQUEST ='@repositories/LOAD_REQUEST',
  LOAD_SUCCESS ='@repositories/LOAD_REQUEST',
  LOAD_FAILURE ='@repositories/LOAD_REQUEST',
}

export interface Repository {
  id: number
  name: string
}

export interface RepositoriesState {
  readonly data: Repository[]
  readonly loading: boolean
  readonly error: boolean
}