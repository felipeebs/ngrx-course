import { Action } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class AddIngredent implements Action {
  readonly type = ADD_INGREDIENT;
  constructor(public payload: Ingredient) {}
}

export class AddIngredents implements Action {
  readonly type = ADD_INGREDIENTS;
  constructor(public payload: Ingredient[]) {}
}

export class UpdateIngredent implements Action {
  readonly type = UPDATE_INGREDIENT;
  constructor(public payload: Ingredient) {}
}

export class DeleteIngredent implements Action {
  readonly type = DELETE_INGREDIENT;
}

export class StartEdit implements Action {
  readonly type = START_EDIT;
  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;
}

export type ShoppingListActions = AddIngredent | AddIngredents | UpdateIngredent | DeleteIngredent | StartEdit | StopEdit;
